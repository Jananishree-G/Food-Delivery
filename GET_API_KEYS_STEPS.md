# Step-by-Step: Get FREE API Keys

## 1. Google Maps API (Essential for delivery)

### Steps:
1. Go to: **https://console.cloud.google.com/**
2. Click **"Create Project"**
3. Enter project name: **"Food Delivery App"**
4. Click **"Create"**
5. Click **"Enable APIs and Services"**
6. Search and enable: **"Maps JavaScript API"**
7. Search and enable: **"Geocoding API"**
8. Go to **"Credentials"** → **"Create Credentials"** → **"API Key"**
9. Copy your API key

### What you'll get:
```
GOOGLE_MAPS_API_KEY=AIzaSyBvOkBwgyKGVfBFrREBE3AgUTiTiTeGe_g
```

---

## 2. Firebase (Push notifications)

### Steps:
1. Go to: **https://console.firebase.google.com/**
2. Click **"Create a project"**
3. Enter project name: **"fooddelivery-app"**
4. Disable Google Analytics → **"Create project"**
5. Click **"Add app"** → Web icon **"</>"**
6. Enter app nickname: **"Food Delivery"**
7. Click **"Register app"**
8. Copy the config values

### What you'll get:
```
FIREBASE_API_KEY=AIzaSyDemoKey123456789
FIREBASE_PROJECT_ID=fooddelivery-app-12345
FIREBASE_AUTH_DOMAIN=fooddelivery-app-12345.firebaseapp.com
```

---

## 3. Stripe (Payment testing)

### Steps:
1. Go to: **https://dashboard.stripe.com/register**
2. Sign up with your email
3. Skip business details (click **"Skip for now"**)
4. Go to **"Developers"** → **"API keys"**
5. Make sure you're in **"Test mode"** (toggle on top)
6. Copy **"Publishable key"** and **"Secret key"**

### What you'll get:
```
STRIPE_PUBLISHABLE_KEY=pk_test_51234567890abcdef
STRIPE_SECRET_KEY=sk_test_51234567890abcdef
```

---

## 4. EmailJS (Email notifications)

### Steps:
1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up"** → Create account
3. Go to **"Email Services"** → **"Add New Service"**
4. Choose **"Gmail"** → Connect your Gmail account
5. Go to **"Email Templates"** → **"Create New Template"**
6. Create a basic template with variables: `{{order_id}}`, `{{total_amount}}`
7. Go to **"Integration"** → Copy Service ID, Template ID, Public Key

### What you'll get:
```
EMAILJS_SERVICE_ID=service_abc123
EMAILJS_TEMPLATE_ID=template_xyz789
EMAILJS_PUBLIC_KEY=user_def456ghi789
```

---

## 5. Cloudinary (Image storage)

### Steps:
1. Go to: **https://cloudinary.com/users/register/free**
2. Sign up with email
3. Verify your email
4. Go to **"Dashboard"**
5. Copy: **Cloud name**, **API Key**, **API Secret**

### What you'll get:
```
CLOUDINARY_CLOUD_NAME=demo-cloud-123
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwxyz123456
```

---

## 6. OpenWeatherMap (Weather data)

### Steps:
1. Go to: **https://openweathermap.org/api**
2. Click **"Sign Up"**
3. Create account and verify email
4. Go to **"API keys"** tab
5. Copy the default API key

### What you'll get:
```
WEATHER_API_KEY=b6907d289e10d714a6e88b30761fae22
```

---

## Summary: What APIs to Get

### Priority 1 (Essential - 10 minutes):
1. **Google Maps** - For delivery locations
2. **Stripe** - For payment testing
3. **Firebase** - For notifications

### Priority 2 (Nice to have - 5 minutes):
4. **EmailJS** - For order confirmations
5. **Cloudinary** - For image uploads
6. **Weather** - For weather-based suggestions

---

## After Getting Keys:

### Send me these keys:
```
GOOGLE_MAPS_API_KEY=your_key_here
FIREBASE_API_KEY=your_key_here
FIREBASE_PROJECT_ID=your_project_id
STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
EMAILJS_SERVICE_ID=service_your_id
EMAILJS_TEMPLATE_ID=template_your_id
EMAILJS_PUBLIC_KEY=your_public_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret
WEATHER_API_KEY=your_weather_key
```

### I will then:
✅ **Implement all APIs with Axios**
✅ **Add proper error handling**
✅ **Create usage examples**
✅ **Set up environment variables**
✅ **Test all integrations**

**Total time to get all keys: ~15 minutes**
**Total cost: $0 (all free tiers)**