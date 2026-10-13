#!/bin/bash
# Double-click to work on the site: starts the live preview and opens it in
# your browser. Every time you save a file, the browser updates by itself.
# Keep this window open while working; close it (or press Ctrl+C) to stop.

cd "$(dirname "$0")" || exit 1

if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js isn't installed yet."
  echo "Install the LTS version from https://nodejs.org, then double-click this again."
  read -r -p "Press Enter to close."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "First run: installing the site's libraries (about a minute)..."
  if ! npm install; then
    read -r -p "Install failed. Press Enter to close."
    exit 1
  fi
fi

npm run dev -- --open
