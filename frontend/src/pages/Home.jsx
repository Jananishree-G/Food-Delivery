import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Search, MapPin, Sparkles } from 'lucide-react';
import MoodSelector from '../components/MoodSelector';
import SmartRecommendations from '../components/SmartRecommendations';
import RestaurantCard from '../components/RestaurantCard';
import { categories, foodItems, getFoodsByCategory } from '../data/modernFoodData';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('meals');
  const [categoryFoods, setCategoryFoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetchRestaurants();
    loadCategoryFoods();
  }, []);

  useEffect(() => {
    loadCategoryFoods();
  }, [selectedCategory]);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('/api/restaurants');
      setRestaurants(response.data.data);
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCategoryFoods = () => {
    const foods = getFoodsByCategory(selectedCategory);
    setCategoryFoods(foods.slice(0, 8)); // Show only 8 items
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-12 h-12 border-4 border-primary-400 border-t-transparent rounded-full"
        />
        <p className="ml-4 text-white text-lg">Loading delicious food...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Craving Something
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"> Delicious?</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Discover amazing food and get it delivered fresh to your door in minutes
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter your delivery address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl glass backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for restaurants or food"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl glass backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                >
                  Search
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Food Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
            🍕
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center text-xl">
            🍔
          </div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-xl">
            🥗
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Mood Selector */}
        <MoodSelector 
          onMoodSelect={setSelectedMood} 
          selectedMood={selectedMood} 
        />

        {/* Smart Recommendations */}
        <SmartRecommendations 
          userOrders={[]} 
          selectedMood={selectedMood}
          onItemSelect={(item) => console.log('Selected item:', item)}
        />

        {/* Categories Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Explore Categories</h2>
            <p className="text-white/70">What are you in the mood for?</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer group ${
                  selectedCategory === category.id ? 'scale-105' : ''
                }`}
              >
                <div className="glass backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:border-white/40 transition-all">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-semibold">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Foods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <div>
              <h2 className="text-3xl font-bold text-white">Trending Now</h2>
              <p className="text-white/70">Most popular dishes this week</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryFoods.slice(0, 8).map((food, index) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-48">
                  <img
                    src={food.image || `https://picsum.photos/300/200?random=${food.id}`}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {food.offer && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {food.offer}
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{food.name}</h3>
                  <p className="text-white/60 text-sm mb-3 line-clamp-2">{food.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-bold text-lg">₹{food.price}</span>
                    <span className="text-white/60 text-sm">{food.preparationTime} min</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Restaurants Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Popular Restaurants</h2>
            <p className="text-white/70">Delivering happiness to your doorstep</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;