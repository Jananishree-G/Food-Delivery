# Free APIs with Axios Implementation

## Usage Examples

### 1. Google Maps API
```javascript
import { mapsAPI } from './services/apiService';

// Get coordinates for address
const coords = await mapsAPI.geocode('123 Main St, Mumbai');

// Calculate delivery distance
const distance = await mapsAPI.getDistance('Mumbai', 'Pune');
```

### 2. Weather API
```javascript
import { weatherAPI } from './services/apiService';

// Get current weather
const weather = await weatherAPI.getCurrentWeather('Mumbai');
console.log(`Temperature: ${weather.main.temp}°C`);
```

### 3. Image APIs
```javascript
import { imageAPI } from './services/apiService';

// Get food image
const pizzaImage = imageAPI.getFoodImage('pizza');

// Get restaurant image
const restaurantImage = imageAPI.getRestaurantImage('Pizza Palace');

// Get placeholder
const placeholder = imageAPI.getPlaceholder('Food Item');
```

### 4. Email Notifications
```javascript
import { emailAPI } from './services/apiService';

// Send order confirmation
await emailAPI.sendOrderConfirmation({
  email: 'customer@example.com',
  orderId: 'ORD123',
  total: 599,
  items: ['Pizza', 'Coke']
});
```

### 5. Push Notifications
```javascript
import { firebaseAPI } from './services/apiService';

// Send push notification
await firebaseAPI.sendNotification(
  userToken,
  'Order Confirmed!',
  'Your order will be delivered in 30 minutes'
);
```

### 6. Image Upload
```javascript
import { cloudinaryAPI } from './services/apiService';

// Upload restaurant image
const result = await cloudinaryAPI.uploadImage(imageFile);
console.log('Image URL:', result.secure_url);
```

### 7. Payment Processing
```javascript
import { stripeAPI } from './services/apiService';

// Create payment intent
const paymentIntent = await stripeAPI.createPaymentIntent(599);
```

### 8. Your Backend APIs
```javascript
import { restaurantAPI, cartAPI, orderAPI } from './services/apiService';

// Get restaurants
const restaurants = await restaurantAPI.getAll();

// Add to cart
await cartAPI.add({ menuItemId: 'item123', quantity: 2 });

// Place order
const order = await orderAPI.create({
  items: cartItems,
  deliveryAddress: address,
  paymentMethod: 'card'
});
```

## Setup Instructions

### 1. Install Axios (if not already installed)
```bash
npm install axios
```

### 2. Copy API Keys to .env
```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_key
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_EMAILJS_SERVICE_ID=your_id
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
```

### 3. Import and Use
```javascript
// In your React components
import { weatherAPI, imageAPI, mapsAPI } from '../services/apiService';

const MyComponent = () => {
  useEffect(() => {
    // Use any API
    weatherAPI.getCurrentWeather().then(setWeather);
  }, []);
};
```

## Error Handling
All APIs include error handling and fallbacks:
- **Network errors**: Graceful fallbacks
- **API limits**: Console warnings
- **Invalid responses**: Default values

## Free Limits
- **Google Maps**: $200 credit/month
- **Weather**: 1000 calls/day
- **EmailJS**: 200 emails/month
- **Firebase**: 20K writes/day
- **Cloudinary**: 25GB storage
- **Images**: Unlimited
- **Stripe**: Unlimited testing

**Total Cost: $0/month for development!**