@echo off
echo Starting Food Delivery App...
echo.

echo 1. Starting Backend Server...
cd backend
start "Backend Server" cmd /k "npm start"
cd ..

echo 2. Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo 3. Starting Frontend Development Server...
cd frontend
start "Frontend Server" cmd /k "npm run dev"
cd ..

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause > nul