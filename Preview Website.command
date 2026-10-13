#!/bin/bash
# Double-click to preview the DKSM website locally.
# The site is a React app, so it needs a small local web server —
# opening index.html directly in a browser shows a blank page.
# Keep this window open while browsing; close it (or press Ctrl+C) to stop.

cd "$(dirname "$0")" || exit 1

if [ ! -f "dist/index.html" ]; then
  echo "No build found in dist/."
  echo "Run 'npm run build:pages' first, or view the live preview:"
  echo "  https://mysense-my.github.io/dksm-group/"
  read -r -p "Press Enter to close."
  exit 1
fi

python3 - "$PWD/dist" <<'PY'
import os
import socket
import sys
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = sys.argv[1]
BASE = "/dksm-group"  # dist/ is built for GitHub Pages, which serves it under this path


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, *args):
        pass  # keep the window quiet

    def do_GET(self):
        path = self.path.split("?")[0].split("#")[0]
        if not path.startswith(BASE):
            self.send_response(302)
            self.send_header("Location", BASE + "/")
            self.end_headers()
            return
        rel = path[len(BASE):] or "/"
        # Unknown page routes (e.g. /about) get the app shell; the app routes them.
        if not os.path.exists(os.path.join(ROOT, rel.lstrip("/"))) and "." not in os.path.basename(rel):
            rel = "/index.html"
        self.path = rel
        return super().do_GET()


port = 8730
while True:
    try:
        server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
        break
    except OSError:
        port += 1

url = f"http://localhost:{port}{BASE}/"
print("DKSM website preview is running at:")
print("  " + url)
print()
print("Keep this window open while browsing. Close it or press Ctrl+C to stop.")
webbrowser.open(url)
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
PY
