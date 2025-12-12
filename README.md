# 🍕 Food Delivery App - Complete MERN Stack

A production-ready food delivery application built with MongoDB, Express.js, React, and Node.js. Features include user authentication, restaurant browsing, cart management, order tracking, and GPS integration.

## ✨ Features

### 🔐 Authentication & User Management
- JWT-based authentication
- User registration and login
- Profile management
- Multiple delivery addresses
- Address management with GPS coordinates

### 🏪 Restaurant & Food Management
- Restaurant browsing with location-based sorting
- Food menu with categories and filtering
- Restaurant ratings and delivery information
- Image support for restaurants and food items

### 🛒 Shopping Cart & Orders
- Add/remove items from cart
- Quantity management
- Restaurant-specific cart validation
- Order placement and tracking
- Real-time order status updates
- Order history

### 📍 Location Features
- GPS location detection
- Location-based restaurant sorting
- Delivery address management
- Google Maps integration (basic)

### 💳 Payment System
- Multiple payment methods (Card, UPI, Cash)
- Dummy payment processing
- Order total calculation with delivery fees

## 🚀 Quick Start

### Windows Users
```bash
# Run the installation script
install.bat

# Edit backend/.env with your configuration
# Start MongoDB service

# Seed the database with sample data
cd backend
npm run seed

# Start both servers
cd ..
start.bat
```

### Manual Installation

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run seed  # Add sample data
npm start     # Start backend server
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev   # Start frontend development server
```

## 📁 Project Structure
```
food-delivery-app/
├── backend/
│   ├── controllers/          # Route controllers
│   ├── middleware/          # Authentication middleware
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── .env.example        # Environment variables template
│   ├── server.js           # Express server setup
│   ├── seed.js             # Database seeding script
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context providers
│   │   ├── services/       # API service functions
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # React entry point
│   ├── public/
│   ├── index.html
│   ├── vite.config.js      # Vite configuration
│   └── package.json
├── install.bat             # Windows installation script
├── start.bat              # Windows startup script
├── SETUP.md               # Detailed setup instructions
└── README.md
```

## 🔧 Configuration

### Backend Environment Variables (.env)
```env
MONGO_URI=mongodb://localhost:27017/fooddelivery
JWT_SECRET=your_super_secret_jwt_key_here
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
PORT=5000
NODE_ENV=development
```

### Frontend Configuration
- Vite proxy configured for API calls
- Responsive design for mobile and desktop
- Hot reload enabled for development

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/address` - Add delivery address

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant details
- `POST /api/restaurants` - Create restaurant (auth required)

### Foods
- `GET /api/foods/restaurant/:id` - Get restaurant menu
- `GET /api/foods` - Get all food items
- `POST /api/foods` - Create food item (auth required)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove/:id` - Remove cart item

### Orders
- `POST /api/orders/create` - Place order
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/status` - Update order status

## 🎯 Usage

1. **Register/Login**: Create an account or sign in
2. **Browse Restaurants**: View available restaurants in your area
3. **Select Restaurant**: Browse menu and add items to cart
4. **Manage Cart**: Adjust quantities and review order
5. **Checkout**: Enter delivery address and payment method
6. **Track Order**: Monitor order status in real-time
7. **Order History**: View past orders in profile

## 🛠 Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **CSS3** - Styling with Flexbox/Grid

## 📱 Features Implemented

✅ **Authentication System**
- JWT-based login/register
- Protected routes
- User profile management

✅ **Restaurant Management**
- Restaurant listing with images
- Location-based sorting
- Rating and delivery info

✅ **Food Menu System**
- Category-based filtering
- Food item details
- Vegetarian/Vegan indicators

✅ **Shopping Cart**
- Add/remove items
- Quantity management
- Restaurant validation

✅ **Order System**
- Order placement
- Status tracking
- Order history

✅ **Location Integration**
- GPS location detection
- Address management
- Location-based features

✅ **Responsive Design**
- Mobile-first approach
- Cross-device compatibility
- Modern UI/UX

## 🚀 Production Deployment

For production deployment, see [SETUP.md](SETUP.md) for detailed instructions including:
- Environment configuration
- Database setup
- Server deployment
- SSL configuration
- Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check [SETUP.md](SETUP.md) for detailed setup instructions
2. Review the troubleshooting section
3. Create an issue on GitHub

---

**Built with ❤️ using the MERN Stack**