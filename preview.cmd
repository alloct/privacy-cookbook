@echo off
rem Double-click this file to preview the site.
rem A console window stays open while the server runs.
rem Close that window (or press Ctrl+C in it) to stop the server.
setlocal
if exist "%USERPROFILE%\Tools\node\node.exe" set "PATH=%USERPROFILE%\Tools\node;%PATH%"
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js was not found.
  echo Install Node.js 20 or newer from https://nodejs.org
  echo then close this window and double-click preview.cmd again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo First run: installing dependencies. This takes a minute.
  call npm ci
  if errorlevel 1 (
    echo Dependency install failed.
    pause
    exit /b 1
  )
)

echo Starting the preview server at http://localhost:8080/
echo Close this window to stop it.
start "" /min cmd /c "timeout /t 5 /nobreak >nul & start http://localhost:8080/"
call npm run serve
if errorlevel 1 (
  echo The preview server stopped with an error.
  pause
)
