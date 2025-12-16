# Step-by-Step API Key Setup Guide

## 1. Google Maps API (Free $200 Credit)

### Steps:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" → Enter project name → Create
3. Click "Enable APIs and Services"
4. Search and enable these APIs:
   - Maps JavaScript API
   - Geocoding API
   - Places API
5. Go to "Credentials" → "Create Credentials" → "API Key"
6. Copy your API key
7. Add to .env: `GOOGLE_MAPS_API_KEY=your_key_here`

### Restrictions (Optional):
- Click on API key → "Restrict Key"
- Add your domain: `localhost:3000`, `127.0.0.1:3000`

---

## 2. Firebase (Free Push Notifications)

### Steps:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name → Continue
4. Disable Google Analytics (optional) → Create project
5. Click "Add app" → Web icon (</>) 
6. Enter app nickname → Register app
7. Copy the config object
8. Add to .env:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
```

---

## 3. Stripe (Free Test Keys)

### Steps:
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/register)
2. Sign up with email
3. Skip business details (for testing)
4. Go to "Developers" → "API keys"
5. Copy "Publishable key" and "Secret key" (test mode)
6. Add to .env:
```env
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

---

## 4. Cloudinary (Free 25GB)

### Steps:
1. Go to [Cloudinary](https://cloudinary.com/users/register/free)
2. Sign up with email
3. Verify email
4. Go to Dashboard
5. Copy: Cloud name, API Key, API Secret
6. Add to .env:
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 5. EmailJS (Free 200 emails/month)

### Steps:
1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" → Create account
3. Go to "Email Services" → "Add New Service"
4. Choose "Gmail" → Connect your Gmail
5. Go to "Email Templates" → "Create New Template"
6. Create a basic template
7. Go to "Integration" → Copy:
   - Service ID
   - Template ID
   - Public Key
8. Add to .env:
```env
EMAILJS_SERVICE_ID=service_...
EMAILJS_TEMPLATE_ID=template_...
EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 6. OpenWeatherMap (Free 1000 calls/day)

### Steps:
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Click "Sign Up"
3. Create account and verify email
4. Go to "API keys" tab
5. Copy the default API key
6. Add to .env:
```env
WEATHER_API_KEY=your_weather_key
```

---

## 7. Supabase (Free Database Alternative)

### Steps:
1. Go to [Supabase](https://supabase.com/)
2. Click "Start your project"
3. Sign up with GitHub/Google
4. Click "New project"
5. Choose organization → Enter project details
6. Wait for setup (2-3 minutes)
7. Go to "Settings" → "API"
8. Copy URL and anon key
9. Add to .env:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
```

---

## Quick Setup Summary

### Instant Use (No Signup):
```env
# Copy these directly to your .env file
PLACEHOLDER_API=https://via.placeholder.com
PICSUM_API=https://picsum.photos
JSONPLACEHOLDER_API=https://jsonplaceholder.typicode.com
```

### 5-Minute Setup Priority:
1. **Stripe** (payments) - 2 minutes
2. **Firebase** (notifications) - 3 minutes  
3. **Cloudinary** (images) - 2 minutes
4. **EmailJS** (emails) - 3 minutes

### Total Time: ~15 minutes for all free APIs

---

## Testing Your Keys

### Test in your .env file:
```env
# Essential free keys
GOOGLE_MAPS_API_KEY=AIzaSy...
STRIPE_PUBLISHABLE_KEY=pk_test_...
FIREBASE_API_KEY=AIzaSy...
CLOUDINARY_CLOUD_NAME=your_cloud
EMAILJS_SERVICE_ID=service_...
WEATHER_API_KEY=b6907d...
```

### Verify setup:
1. Restart your backend server
2. Check console for any API errors
3. Test each feature in your app

**All these APIs are FREE for development and small-scale production use!**