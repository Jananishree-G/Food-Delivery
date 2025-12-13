@echo off
echo Starting Food Delivery App...
echo.

echo Starting Backend Server...
start "Backend" cmd /k "cd backend && npm start"

timeout /t 3 /nobreak > nul

echo Starting Frontend Server...
start "Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo   Food Delivery App is Starting!
echo ========================================
echo.
echo Backend: http://localhost:5001
echo Frontend: http://localhost:5173
echo.
echo Demo Login:
echo Email: test@example.com
echo Password: password123
echo.
echo Note: MongoDB connection may fail but app works with local storage
echo ========================================

pause