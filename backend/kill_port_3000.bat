@echo off
setlocal
echo Finding process on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do (
    echo Killing PID %%a used by port 3000...
    taskkill /f /pid %%a
)
echo Port 3000 should now be free.
endlocal
