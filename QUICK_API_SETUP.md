# Quick API Setup Guide

## Priority 1: Essential APIs (Start Here)

### 1. Google Maps API
```bash
# Go to: https://console.cloud.google.com/
# Enable: Maps JavaScript API, Geocoding API, Places API
# Create API Key and add to .env:
GOOGLE_MAPS_API_KEY=your_key_here
```

### 2. Stripe Payment
```bash
# Go to: https://dashboard.stripe.com/
# Get test keys from Developers > API keys
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## Priority 2: Notifications

### 3. Firebase Push Notifications
```bash
# Go to: https://console.firebase.google.com/
# Create project > Add web app > Get config
FIREBASE_SERVER_KEY=your_server_key
FIREBASE_PROJECT_ID=your_project_id
```

### 4. Twilio SMS
```bash
# Go to: https://console.twilio.com/
# Get Account SID, Auth Token, Phone Number
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+1234567890
```

## Priority 3: Enhanced Features

### 5. Cloudinary Images
```bash
# Go to: https://cloudinary.com/console
# Get cloud name, API key, API secret
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=your_secret
```

## Test Keys (Development Only)
```env
# Use these for testing (replace with real keys for production)
GOOGLE_MAPS_API_KEY=AIzaSyBvOkBwgyKGVfBFrREBE3AgUTiTiTeGe_g
STRIPE_PUBLISHABLE_KEY=pk_test_51234567890
FIREBASE_SERVER_KEY=AAAAxxxxxxx:APA91bH
```

## Cost Estimate (Monthly)
- Google Maps: Free ($200 credit)
- Stripe: 2.9% per transaction
- Firebase: Free tier
- Twilio: ~$10-30 (depending on SMS volume)
- Cloudinary: Free (25GB)

**Total: ~$10-50/month for small to medium usage**