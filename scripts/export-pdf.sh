#!/usr/bin/env bash
# 构建站点并用本机 Chrome 把 resume.html 导出为 public/AimerFeng-resume.pdf
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT="${PORT:-4179}"

npx vite build >/dev/null
npx vite preview --port "$PORT" --strictPort >/dev/null 2>&1 &
PREVIEW_PID=$!
trap 'kill "$PREVIEW_PID" 2>/dev/null' EXIT
sleep 2

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --print-to-pdf="public/AimerFeng-resume.pdf" \
  "http://localhost:$PORT/aimerfeng-cv/resume.html" 2>/dev/null

echo "已导出 public/AimerFeng-resume.pdf"
