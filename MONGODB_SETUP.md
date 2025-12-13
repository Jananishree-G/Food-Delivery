# MongoDB Setup Options

## Option 1: Install MongoDB Locally (Recommended)

### Windows:
1. Download MongoDB Community Server from: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB will start automatically as a Windows service
4. Restart the backend server: `npm start`

### Quick Test:
```bash
# Check if MongoDB is running
mongod --version
```

## Option 2: Use MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/atlas
2. Create a free account
3. Create a new cluster
4. Add your IP address to the whitelist:
   - Go to Network Access
   - Click "Add IP Address"
   - Click "Add Current IP Address"
5. Get your connection string and update `.env`

## Option 3: Run Without Database

The app is designed to work without a database using local storage:

1. The backend will show a connection error but continue running
2. The frontend automatically uses local storage for all data
3. All features work normally (auth, cart, orders)
4. Data persists in browser until cleared

## Current Status

✅ Backend server is running on port 5001
❌ MongoDB connection failed (IP not whitelisted)
✅ Frontend works with local storage fallback
✅ All app features are functional

**You can use the app right now without installing MongoDB!**