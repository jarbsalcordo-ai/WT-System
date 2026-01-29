@echo off
echo [1/3] Clearing previous server processes...
call kill_port_3000.bat > nul 2>&1

echo [2/3] Checking Database Connection...
node diagnose_db.js
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Database connection failed. Please check your .env file credentials.
    echo Stopping startup.
    pause
    exit /b %errorlevel%
)

echo.
echo [3/3] Database connection OK. Starting Server...
npm start
