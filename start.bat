@echo off
echo 🚀 Starting Food Delivery App...
echo.

echo 📦 Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm install && npm start"

echo ⏳ Waiting for backend to initialize...
timeout /t 5

echo 🎨 Starting Frontend Server...
start "Frontend Server" cmd /k "cd frontend && npm install && npm run dev"

echo.
echo ✅ App is starting up!
echo 🌐 Frontend: http://localhost:5173
echo 🔧 Backend: http://localhost:5001
echo.
echo 📧 Test Login: test@example.com / password123
echo.
pause