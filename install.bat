@echo off
echo Installing Food Delivery App Dependencies...
echo.

echo 1. Installing Backend Dependencies...
cd backend
npm install
if %errorlevel% neq 0 (
    echo Error installing backend dependencies!
    pause
    exit /b 1
)

echo 2. Setting up environment file...
if not exist .env (
    copy .env.example .env
    echo Environment file created. Please edit .env with your configuration.
)

echo 3. Installing Frontend Dependencies...
cd ..\frontend
npm install
if %errorlevel% neq 0 (
    echo Error installing frontend dependencies!
    pause
    exit /b 1
)

cd ..

echo.
echo Installation completed successfully!
echo.
echo Next steps:
echo 1. Edit backend/.env with your MongoDB URI and JWT secret
echo 2. Start MongoDB service
echo 3. Run 'npm run seed' in backend folder to add sample data
echo 4. Run start.bat to start both servers
echo.
pause