@echo off
rem Double-click to work on the site: starts the live preview and opens it in
rem your browser. Every time you save a file, the browser updates by itself.
rem Keep this window open while working; close it to stop.

cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js isn't installed yet.
  echo Install the LTS version from https://nodejs.org, then double-click this again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo First run: installing the site's libraries, about a minute...
  call npm install
  if errorlevel 1 (
    echo Install failed.
    pause
    exit /b 1
  )
)

call npm run dev -- --open
pause
