# 🍕 Enhanced Food Delivery App - Modern MERN Stack

A production-ready food delivery application with unique features including mood-based food suggestions, smart recommendations, glassmorphism UI, and animated order tracking.

## ✨ New Features

### 🎭 Mood-Based Food Suggestions
- **Happy Vibes**: Bright & cheerful meals
- **Super Hungry**: Big portions & hearty meals  
- **Sweet Cravings**: Desserts & sweet treats
- **Spicy Mood**: Hot & spicy delights
- **Healthy Choice**: Fresh & nutritious options
- **Comfort Food**: Cozy & comforting meals

### 🧠 Smart Recommendation System
- Personalized suggestions based on previous orders
- Popular items in your area
- Trending dishes this week
- AI-powered food matching

### 🎨 Modern UI/UX Features
- **Glassmorphism Design**: Beautiful blur effects and transparency
- **Framer Motion Animations**: Smooth transitions and micro-interactions
- **Tailwind CSS**: Modern, responsive design system
- **Gradient Backgrounds**: Colorful, dynamic visual appeal
- **Floating Elements**: Interactive animated components

### 🛒 Smart Cart System
- **Combo Suggestions**: Intelligent meal combinations
- **Real-time Savings**: Dynamic discount calculations
- **Restaurant Validation**: Prevents mixing orders from different restaurants
- **Quantity Management**: Smooth increment/decrement controls

### 📱 Animated Order Tracking
- **Real-time Progress**: Live order status updates
- **Delivery Partner Info**: Contact details and ratings
- **Interactive Timeline**: Visual progress indicators
- **Estimated Delivery**: Dynamic time calculations

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd food-delivery-app
```

2. **Backend Setup**
```bash
cd backend
npm install
```

3. **Create environment file**
```bash
cp .env.example .env
```

4. **Configure .env file**
```env
MONGO_URI=mongodb://localhost:27017/fooddelivery
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_complex
PORT=5000
NODE_ENV=development
```

5. **Seed the database**
```bash
npm run seed
```

6. **Start backend server**
```bash
npm start
```

7. **Frontend Setup** (new terminal)
```bash
cd frontend
npm install
npm run dev
```

### Windows Users - One-Click Setup
```bash
# Run the installation script
install.bat

# Start both servers
start.bat
```

## 🎯 New Components

### MoodSelector Component
Interactive mood selection with glassmorphism cards and animations.

### SmartRecommendations Component  
AI-powered food suggestions with discount badges and ratings.

### SmartCart Component
Enhanced cart with combo suggestions and savings calculations.

### AnimatedOrderTracking Component
Real-time order progress with delivery partner information.

### RestaurantCard Component (Enhanced)
Modern glassmorphism design with hover effects and animations.

## 🛠 Technology Stack

### Frontend
- **React 18** - Latest React features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful icon library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Elegant notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Enhanced Project Structure

```
food-delivery-app/
├── backend/
│   ├── controllers/          # Route controllers
│   ├── middleware/          # Authentication middleware
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── .env.example        # Environment template
│   ├── server.js           # Express server
│   ├── seed.js             # Enhanced database seeding
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Enhanced React components
│   │   │   ├── MoodSelector.jsx
│   │   │   ├── SmartRecommendations.jsx
│   │   │   ├── SmartCart.jsx
│   │   │   ├── AnimatedOrderTracking.jsx
│   │   │   └── RestaurantCard.jsx (Enhanced)
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx (Enhanced)
│   │   │   ├── Profile.jsx (New)
│   │   │   ├── OrderTracking.jsx (New)
│   │   │   └── Cart.jsx (Enhanced)
│   │   ├── context/        # React Context providers
│   │   ├── services/       # API service functions
│   │   ├── index.css       # Tailwind CSS + Custom styles
│   │   ├── App.jsx         # Enhanced App component
│   │   └── main.jsx        # React entry point
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── postcss.config.js   # PostCSS configuration
│   └── package.json (Enhanced)
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange gradient (f37a0b → e45f06)
- **Secondary**: Blue gradient (0ea5e9 → 0284c7)
- **Mood Colors**: Dynamic gradients for each mood
- **Glass Effects**: Transparent overlays with blur

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Responsive**: Fluid typography scaling

### Animations
- **Hover Effects**: Scale and translate transforms
- **Loading States**: Smooth skeleton animations
- **Page Transitions**: Fade and slide effects
- **Micro-interactions**: Button press feedback

## 🌐 Enhanced API Endpoints

### Mood-Based Filtering
- `GET /api/foods/mood/:moodType` - Get foods by mood
- `GET /api/restaurants/mood/:moodType` - Get restaurants by mood

### Smart Recommendations
- `GET /api/recommendations/user/:userId` - Personalized recommendations
- `GET /api/recommendations/trending` - Trending items
- `GET /api/recommendations/popular` - Popular in area

### Enhanced Cart
- `POST /api/cart/combo` - Add combo suggestions
- `GET /api/cart/suggestions` - Get smart suggestions
- `PUT /api/cart/optimize` - Optimize cart for savings

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large**: 1440px+

### Features
- Mobile-first approach
- Touch-friendly interactions
- Optimized images and assets
- Progressive Web App ready

## 🚀 Performance Optimizations

### Frontend
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching**: Service worker implementation

### Backend
- **Database Indexing**: Optimized MongoDB queries
- **Response Compression**: Gzip compression
- **Rate Limiting**: API request throttling
- **Caching**: Redis integration ready

## 🔧 Development Tools

### Frontend Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Development
```bash
npm start            # Start server
npm run dev          # Start with nodemon
npm run seed         # Seed database
npm test             # Run tests
```

## 🎯 Usage Guide

### 1. Mood-Based Discovery
- Select your current mood from the mood selector
- Browse curated food suggestions
- Filter restaurants by mood categories

### 2. Smart Recommendations
- View personalized suggestions on homepage
- Get recommendations based on order history
- Discover trending items in your area

### 3. Enhanced Shopping
- Add items to smart cart
- Receive combo suggestions automatically
- View real-time savings and discounts

### 4. Order Tracking
- Track orders with animated progress
- Contact delivery partner directly
- Receive real-time status updates

### 5. Profile Management
- View comprehensive order history
- Manage multiple delivery addresses
- Track spending and ratings

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Comprehensive data validation
- **CORS Protection**: Configured cross-origin policies
- **Rate Limiting**: API abuse prevention

## 🌟 Future Enhancements

### Planned Features
- **Voice Ordering**: Speech-to-text integration
- **AR Menu**: Augmented reality food preview
- **Social Features**: Share orders and reviews
- **Loyalty Program**: Points and rewards system
- **Live Chat**: Customer support integration

### Technical Improvements
- **PWA**: Full Progressive Web App
- **Offline Mode**: Cached content access
- **Push Notifications**: Real-time updates
- **Analytics**: User behavior tracking
- **A/B Testing**: Feature experimentation

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Database Connection**
```bash
# Check MongoDB service
mongod --version
# Restart MongoDB service
```

**Port Conflicts**
```bash
# Kill process on port 5000
npx kill-port 5000
# Kill process on port 5173
npx kill-port 5173
```

### Getting Help
- Check existing GitHub issues
- Create new issue with detailed description
- Include error logs and environment details
- Join our Discord community for real-time help

---

**Built with ❤️ using Modern MERN Stack + Tailwind CSS + Framer Motion**

*Experience the future of food delivery with mood-based suggestions and stunning animations!*