#!/usr/bin/env bash
# Tests de validation pour l'infra et l'application MISEIA.
# Usage : ./scripts/smoke-test.sh [--infra] [--app] [--cicd]
#         Sans argument : tous les tests.

set -euo pipefail

HOST="iatest.evolversfr.com"
EC2_IP="15.237.255.236"
EC2_USER="ubuntu"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/ec2-laurent-free-key}"
FILTER="${1:-}"

PASS=0
FAIL=0

green()  { printf "\033[32m✓\033[0m %s\n" "$*"; }
red()    { printf "\033[31m✗\033[0m %s\n" "$*"; }
header() { printf "\n\033[1m%s\033[0m\n" "$*"; }

ok()   { PASS=$((PASS+1)); green "$1"; }
fail() { FAIL=$((FAIL+1)); red   "$1"; }

check() {
  local label="$1"; shift
  if eval "$@" &>/dev/null; then ok "$label"; else fail "$label"; fi
}

ssh_cmd() { ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$EC2_USER@$EC2_IP" "$@"; }

# ── Infra ────────────────────────────────────────────────────────────────────

run_infra() {
  header "Infrastructure"

  check "SSH accessible" \
    "ssh_cmd 'echo ok'"

  check "DNS → $EC2_IP" \
    "dig @8.8.8.8 $HOST +short | grep -q $EC2_IP"

  check "Port 80 ouvert" \
    "nc -zw3 $EC2_IP 80"

  check "Port 443 ouvert" \
    "nc -zw3 $EC2_IP 443"

  check "Nginx actif" \
    "ssh_cmd 'systemctl is-active nginx'"

  check "Config Nginx valide" \
    "ssh_cmd 'sudo nginx -t'"

  check "Service nextaws actif" \
    "ssh_cmd 'systemctl is-active nextaws'"

  check "Next.js écoute sur :3000" \
    "ssh_cmd 'curl -so /dev/null -w \"%{http_code}\" http://localhost:3000 | grep -q 200'"

  check "Certificat TLS non expiré" \
    "echo | openssl s_client -connect $HOST:443 2>/dev/null \
      | openssl x509 -noout -checkend 0"

  check "Renouvellement Certbot (dry-run)" \
    "ssh_cmd 'sudo certbot renew --dry-run'"
}

# ── Application ──────────────────────────────────────────────────────────────

run_app() {
  header "Application"

  local http_code
  http_code=$(curl -so /dev/null -w "%{http_code}" "https://$HOST")

  check "HTTPS → 200" \
    "[ '$http_code' = '200' ]"

  check "Redirection HTTP → HTTPS (301)" \
    "curl -sI http://$HOST | grep -q '301'"

  check "Header HSTS présent" \
    "curl -sI https://$HOST | grep -qi 'strict-transport-security'"

  check "Titre <title> MISEIA" \
    "curl -s https://$HOST | grep -q 'MISEIA'"

  check "Métadonnée og:title présente" \
    "curl -s https://$HOST | grep -q 'og:title'"

  check "Section Hero" \
    "curl -s https://$HOST | grep -q 'Hero\|hero'"

  check "Section About" \
    "curl -s https://$HOST | grep -q 'About\|about\|propos'"

  check "Section Program" \
    "curl -s https://$HOST | grep -q 'Program\|programme\|Modules'"

  check "Section Benefits / Atouts" \
    "curl -s https://$HOST | grep -q 'Benefits\|Atouts\|atout'"

  check "Section Testimonials" \
    "curl -s https://$HOST | grep -q 'Testimonials\|témoignage\|Temoignage'"

  check "Section FAQ" \
    "curl -s https://$HOST | grep -qi 'faq\|question'"

  check "Section CallToAction" \
    "curl -s https://$HOST | grep -q 'CallToAction\|Candidater\|candidature\|contact'"

  check "Footer présent" \
    "curl -s https://$HOST | grep -qi 'footer\|Footer'"

  local css_url
  css_url=$(curl -s "https://$HOST" \
    | grep -o '"/_next/static/css/[^"]*"' \
    | head -1 | tr -d '"')
  if [ -n "$css_url" ]; then
    check "Feuille de style CSS chargée (200)" \
      "curl -so /dev/null -w '%{http_code}' https://$HOST$css_url | grep -q 200"
  else
    fail "Feuille de style CSS introuvable dans le HTML"
  fi
}

# ── CI/CD ────────────────────────────────────────────────────────────────────

run_cicd() {
  header "CI/CD"

  if ! command -v gh &>/dev/null; then
    red "gh CLI non installé — tests CI/CD ignorés"
    return
  fi

  check "Dernier workflow terminé avec succès" \
    "gh run list --repo ljacques99/nextaws --limit 1 --json conclusion \
      -q '.[0].conclusion' | grep -q 'success'"

  check "Job 'build' passé sur le dernier run" \
    "gh run view --repo ljacques99/nextaws \
      \$(gh run list --repo ljacques99/nextaws --limit 1 --json databaseId -q '.[0].databaseId') \
      --json jobs -q '.jobs[] | select(.name==\"build\") | .conclusion' \
      | grep -q 'success'"

  check "Job 'deploy' passé sur le dernier run" \
    "gh run view --repo ljacques99/nextaws \
      \$(gh run list --repo ljacques99/nextaws --limit 1 --json databaseId -q '.[0].databaseId') \
      --json jobs -q '.jobs[] | select(.name==\"deploy\") | .conclusion' \
      | grep -q 'success'"
}

# ── Exécution ────────────────────────────────────────────────────────────────

case "$FILTER" in
  --infra) run_infra ;;
  --app)   run_app   ;;
  --cicd)  run_cicd  ;;
  "")      run_infra; run_app; run_cicd ;;
  *)
    echo "Usage: $0 [--infra|--app|--cicd]"
    exit 1
    ;;
esac

printf "\n─────────────────────────────\n"
printf "  \033[32m%d passé(s)\033[0m  \033[31m%d échoué(s)\033[0m\n" "$PASS" "$FAIL"
printf "─────────────────────────────\n"

[ "$FAIL" -eq 0 ]
