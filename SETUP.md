# Food Delivery App - Setup Instructions

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd food-delivery-app
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Environment Configuration
```bash
# Copy the example environment file
copy .env.example .env

# Edit .env file with your configuration:
# MONGO_URI=mongodb://localhost:27017/fooddelivery
# JWT_SECRET=your_super_secret_jwt_key_here
# GOOGLE_MAPS_API_KEY=your_google_maps_api_key
# PORT=5000
# NODE_ENV=development
```

#### Start MongoDB
Make sure MongoDB is running on your system:
- **Local MongoDB**: Start the MongoDB service
- **MongoDB Atlas**: Use the connection string in MONGO_URI

#### Start Backend Server
```bash
npm start
# or for development with auto-restart:
npm run dev
```

The backend server will start on http://localhost:5000

### 3. Frontend Setup

#### Install Dependencies
```bash
cd ../frontend
npm install
```

#### Start Frontend Development Server
```bash
npm run dev
```

The frontend will start on http://localhost:3000

## 4. Database Seeding (Optional)

You can add sample data through the API endpoints or create a seed script.

### Sample Restaurant Data
```bash
# POST to http://localhost:5000/api/restaurants
{
  "name": "Pizza Palace",
  "description": "Best pizza in town",
  "cuisine": "Italian",
  "deliveryTime": "30-45 min",
  "deliveryFee": 2.99,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
}
```

### Sample Food Data
```bash
# POST to http://localhost:5000/api/foods
{
  "name": "Margherita Pizza",
  "description": "Classic pizza with tomato sauce and mozzarella",
  "price": 12.99,
  "category": "main",
  "restaurant": "RESTAURANT_ID_HERE",
  "isVegetarian": true
}
```

## 5. Testing the Application

1. **Register a new user** at http://localhost:3000/signup
2. **Login** with your credentials
3. **Browse restaurants** on the home page
4. **Add items to cart** from restaurant menus
5. **Place an order** through checkout
6. **Track your order** on the order tracking page

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile
- POST `/api/auth/address` - Add user address

### Restaurants
- GET `/api/restaurants` - Get all restaurants
- GET `/api/restaurants/:id` - Get restaurant by ID
- POST `/api/restaurants` - Create restaurant (auth required)
- PUT `/api/restaurants/:id` - Update restaurant (auth required)
- DELETE `/api/restaurants/:id` - Delete restaurant (auth required)

### Foods
- GET `/api/foods` - Get all foods
- GET `/api/foods/restaurant/:restaurantId` - Get foods by restaurant
- GET `/api/foods/:id` - Get food by ID
- POST `/api/foods` - Create food item (auth required)
- PUT `/api/foods/:id` - Update food item (auth required)
- DELETE `/api/foods/:id` - Delete food item (auth required)

### Cart
- GET `/api/cart` - Get user cart (auth required)
- POST `/api/cart/add` - Add item to cart (auth required)
- PUT `/api/cart/update` - Update cart item (auth required)
- DELETE `/api/cart/remove/:foodId` - Remove item from cart (auth required)
- DELETE `/api/cart/clear` - Clear cart (auth required)

### Orders
- POST `/api/orders/create` - Create order (auth required)
- GET `/api/orders/my-orders` - Get user orders (auth required)
- GET `/api/orders/:id` - Get order by ID (auth required)
- PUT `/api/orders/:id/status` - Update order status (auth required)
- PUT `/api/orders/:id/cancel` - Cancel order (auth required)

### Location
- GET `/api/location/search` - Search locations
- GET `/api/location/reverse` - Reverse geocoding

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check MONGO_URI in .env file
   - For MongoDB Atlas, ensure IP whitelist is configured

2. **CORS Errors**
   - Backend includes CORS middleware
   - Frontend proxy is configured in vite.config.js

3. **JWT Token Issues**
   - Ensure JWT_SECRET is set in .env
   - Check token expiration (set to 7 days)

4. **Port Conflicts**
   - Backend: Change PORT in .env file
   - Frontend: Change port in vite.config.js

### Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload during development
2. **API Testing**: Use Postman or similar tools to test API endpoints
3. **Database GUI**: Use MongoDB Compass to view database contents
4. **Logging**: Check console logs for debugging information

## Production Deployment

### Backend Deployment
1. Set NODE_ENV=production in .env
2. Use PM2 or similar process manager
3. Configure reverse proxy (nginx)
4. Set up SSL certificates

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Serve static files with nginx or similar
3. Update API base URL for production

## Features Implemented

✅ User authentication (JWT)
✅ Restaurant browsing with location-based sorting
✅ Food menu with categories and filtering
✅ Shopping cart functionality
✅ Order placement and tracking
✅ User profile and address management
✅ Responsive design
✅ Real-time order status updates
✅ Payment method selection (dummy implementation)
✅ GPS location integration (basic implementation)

## Next Steps for Production

1. **Payment Integration**: Integrate with Stripe, PayPal, or similar
2. **Real GPS Integration**: Implement Google Maps JavaScript API
3. **Push Notifications**: Add real-time order updates
4. **Admin Panel**: Create restaurant and admin management interface
5. **Image Upload**: Implement file upload for restaurant and food images
6. **Search & Filters**: Add advanced search and filtering options
7. **Reviews & Ratings**: Add user review system
8. **Delivery Tracking**: Real-time delivery person tracking