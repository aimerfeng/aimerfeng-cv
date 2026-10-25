#!/usr/bin/env bash
# 用本机 Chrome 把 resume.html 导出为 PDF。
#   npm run pdf           → public/AimerFeng-resume.pdf（公开版，不含手机号）
#   npm run pdf:private   → private/李浩然-AI全栈工程师-简历.pdf（投递版，含手机号，不入库）
# 投递版的手机号从 .resume-private.env 读取（RESUME_PHONE=...），该文件已被 .gitignore 忽略。
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT="${PORT:-4179}"
MODE="${1:-public}"

if [[ "$MODE" == "private" ]]; then
  if [[ -f .resume-private.env ]]; then
    # shellcheck disable=SC1091
    source .resume-private.env
  fi
  : "${RESUME_PHONE:?请在 .resume-private.env 中设置 RESUME_PHONE}"
  export VITE_RESUME_PHONE="$RESUME_PHONE"
  mkdir -p private
  OUT="private/李浩然-AI全栈工程师-简历.pdf"
else
  unset VITE_RESUME_PHONE
  OUT="public/AimerFeng-resume.pdf"
fi

npx vite build >/dev/null
npx vite preview --port "$PORT" --strictPort >/dev/null 2>&1 &
PREVIEW_PID=$!
trap 'kill "$PREVIEW_PID" 2>/dev/null' EXIT
sleep 2

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --print-to-pdf="$OUT" \
  "http://localhost:$PORT/aimerfeng-cv/resume.html" 2>/dev/null

# 投递版构建产物里带手机号，导出后重新构建一次干净的 dist
if [[ "$MODE" == "private" ]]; then
  unset VITE_RESUME_PHONE
  npx vite build >/dev/null
fi

echo "已导出 $OUT"
