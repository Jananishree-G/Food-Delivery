# API Integration Guide

## 1. Google Maps API Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable APIs: Maps JavaScript, Geocoding, Places
4. Create API key
5. Add to .env: `GOOGLE_MAPS_API_KEY=your_key_here`

## 2. Stripe Payment Setup
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get API keys from Developers > API keys
3. Add to .env:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

## 3. Firebase Push Notifications
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create project
3. Add web app
4. Get config and service account key
5. Add to .env: `FIREBASE_SERVER_KEY=your_key`

## 4. Twilio SMS (Optional)
1. Go to [Twilio Console](https://console.twilio.com/)
2. Get Account SID, Auth Token, Phone Number
3. Add to .env:
   ```
   TWILIO_ACCOUNT_SID=your_sid
   TWILIO_AUTH_TOKEN=your_token
   TWILIO_PHONE_NUMBER=your_number
   ```

## Priority Order:
1. **Google Maps** - Essential for delivery
2. **Stripe/Razorpay** - Essential for payments  
3. **Firebase** - For push notifications
4. **Twilio** - For SMS updates (optional)

## Cost Estimate (Monthly):
- Google Maps: Free (up to $200 credit)
- Stripe: 2.9% per transaction
- Firebase: Free tier sufficient
- Twilio: ~$10-50 depending on SMS volume

Start with Google Maps and Stripe for MVP functionality.