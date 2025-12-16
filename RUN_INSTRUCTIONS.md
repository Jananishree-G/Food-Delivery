# How to Run Food Delivery App

## Quick Start (2 minutes)

### 1. Open 2 Terminal Windows

**Terminal 1 - Backend:**
```bash
cd food-delivery-app/backend
npm install
npm start
```

**Terminal 2 - Frontend:**
```bash
cd food-delivery-app/frontend  
npm install
npm run dev
```

### 2. Access the App
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5001

---

## Step-by-Step Instructions

### Backend Setup
```bash
# Navigate to backend folder
cd food-delivery-app/backend

# Install dependencies
npm install

# Start backend server
npm start
```
**✅ Backend runs on: http://localhost:5001**

### Frontend Setup
```bash
# Navigate to frontend folder (new terminal)
cd food-delivery-app/frontend

# Install dependencies
npm install

# Start frontend development server
npm run dev
```
**✅ Frontend runs on: http://localhost:5173**

---

## Test the App

### Login Credentials:
- **Email**: test@example.com
- **Password**: password123

### Features to Test:
1. **Browse restaurants** on homepage
2. **Add items to cart** from any page
3. **View cart** and modify quantities
4. **Check offers** page
5. **Complete checkout** process

---

## Troubleshooting

### If Backend Fails:
```bash
# Check if MongoDB is running
# The app works with localStorage fallback if DB fails
```

### If Frontend Fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port Issues:
- Backend: Change PORT in `.env` file
- Frontend: Change port in `vite.config.js`

---

## One-Click Startup (Windows)

Create `start.bat` file:
```batch
@echo off
echo Starting Food Delivery App...

start cmd /k "cd backend && npm start"
timeout /t 3
start cmd /k "cd frontend && npm run dev"

echo App starting...
echo Frontend: http://localhost:5173
echo Backend: http://localhost:5001
pause
```

**Double-click `start.bat` to run both servers!**

---

## Production Build

### Frontend Production:
```bash
cd frontend
npm run build
npm run preview
```

### Backend Production:
```bash
cd backend
npm run start:prod
```

**The app is fully functional with localStorage fallback - no database required for testing!**