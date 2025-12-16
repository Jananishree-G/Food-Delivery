# Free APIs for Food Delivery Project

## Priority 1: Essential (Get These First)

### 1. Google Maps API (5 minutes)
1. Go to [console.cloud.google.com](https://console.cloud.google.com/)
2. Create new project
3. Enable "Maps JavaScript API"
4. Create API key
5. Add to .env: `GOOGLE_MAPS_API_KEY=your_key`

### 2. Firebase (3 minutes)
1. Go to [console.firebase.google.com](https://console.firebase.google.com/)
2. Create project
3. Add web app
4. Copy config keys
5. Add to .env: `FIREBASE_API_KEY=your_key`

### 3. Stripe Test Keys (2 minutes)
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com/)
2. Sign up
3. Go to Developers > API keys
4. Copy test keys
5. Add to .env: `STRIPE_PUBLISHABLE_KEY=pk_test_...`

## Priority 2: Enhanced Features

### 4. EmailJS (3 minutes)
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Create account
3. Add email service (Gmail)
4. Create template
5. Get service ID and keys

### 5. Cloudinary (2 minutes)
1. Go to [cloudinary.com](https://cloudinary.com/)
2. Sign up
3. Get cloud name, API key, secret
4. Add to .env

## Instant Use (No Signup)
```env
# Weather for food suggestions
WEATHER_API_KEY=b6907d289e10d714a6e88b30761fae22

# Free images
PLACEHOLDER_API=https://via.placeholder.com
UNSPLASH_API=https://source.unsplash.com

# Mock data for testing
JSONPLACEHOLDER_API=https://jsonplaceholder.typicode.com
```

## Complete .env File
```env
# Essential APIs
GOOGLE_MAPS_API_KEY=your_google_maps_key
FIREBASE_API_KEY=your_firebase_key
FIREBASE_PROJECT_ID=your_project_id
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret

# Communication
EMAILJS_SERVICE_ID=service_your_id
EMAILJS_TEMPLATE_ID=template_your_id
EMAILJS_PUBLIC_KEY=your_public_key

# Images & Storage
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# Instant Use (No signup)
WEATHER_API_KEY=b6907d289e10d714a6e88b30761fae22
PLACEHOLDER_API=https://via.placeholder.com
```

## Cost Breakdown
- **Google Maps**: FREE ($200 credit/month)
- **Firebase**: FREE (generous limits)
- **Stripe**: FREE (test mode)
- **EmailJS**: FREE (200 emails/month)
- **Cloudinary**: FREE (25GB)
- **Weather**: FREE (1000 calls/day)
- **Images**: FREE (unlimited)

**Total Cost: $0/month for development and small production use!**

## Features You Get
✅ **Maps & Location**: Google Maps
✅ **Push Notifications**: Firebase
✅ **Payment Testing**: Stripe
✅ **Email Notifications**: EmailJS
✅ **Image Storage**: Cloudinary
✅ **Weather Data**: OpenWeatherMap
✅ **Placeholder Images**: Multiple sources

**Setup Time: ~15 minutes for all APIs**