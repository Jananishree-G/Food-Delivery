import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Clock, Star } from 'lucide-react';

const SmartRecommendations = ({ userOrders = [], onItemSelect, selectedMood }) => {
  const [recommendations, setRecommendations] = useState([]);

  // Mock recommendation data based on user behavior and mood
  const generateRecommendations = (mood) => {
    const allRecommendations = {
      happy: [
        {
          id: 1,
          name: 'Margherita Pizza',
          restaurant: 'Pizza Palace',
          image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop',
          price: 299,
          rating: 4.5,
          reason: 'Perfect for happy moments',
          discount: 20,
          deliveryTime: '25-30 min'
        },
        {
          id: 2,
          name: 'Vanilla Cupcake',
          restaurant: 'Sweet Treats',
          image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300&h=200&fit=crop',
          price: 99,
          rating: 4.3,
          reason: 'Sweet celebration treat',
          discount: 15,
          deliveryTime: '15-20 min'
        }
      ],
      hungry: [
        {
          id: 3,
          name: 'Chicken Biryani',
          restaurant: 'Spice Garden',
          image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop',
          price: 349,
          rating: 4.7,
          reason: 'Big portion for big appetite',
          discount: 15,
          deliveryTime: '35-40 min'
        },
        {
          id: 4,
          name: 'Loaded Fries',
          restaurant: 'Burger Hub',
          image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop',
          price: 179,
          rating: 4.1,
          reason: 'Hearty and filling',
          discount: 25,
          deliveryTime: '20-25 min'
        }
      ],
      sweet: [
        {
          id: 5,
          name: 'Chocolate Brownie',
          restaurant: 'Sweet Treats',
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop',
          price: 149,
          rating: 4.8,
          reason: 'Perfect for sweet cravings',
          discount: 25,
          deliveryTime: '20-25 min'
        },
        {
          id: 6,
          name: 'Strawberry Cheesecake',
          restaurant: 'Sweet Treats',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop',
          price: 199,
          rating: 4.7,
          reason: 'Creamy sweet delight',
          discount: 20,
          deliveryTime: '25-30 min'
        }
      ],
      spicy: [
        {
          id: 7,
          name: 'Spicy Chicken Curry',
          restaurant: 'Spice Garden',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
          price: 299,
          rating: 4.6,
          reason: 'Fiery and flavorful',
          discount: 15,
          deliveryTime: '30-35 min'
        },
        {
          id: 8,
          name: 'Spicy Chicken Burger',
          restaurant: 'Burger Hub',
          image: 'https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=300&h=200&fit=crop',
          price: 279,
          rating: 4.5,
          reason: 'Hot and spicy kick',
          discount: 30,
          deliveryTime: '18-25 min'
        }
      ],
      healthy: [
        {
          id: 9,
          name: 'Mediterranean Bowl',
          restaurant: 'Green Bowl',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop',
          price: 249,
          rating: 4.5,
          reason: 'Fresh and nutritious',
          discount: 10,
          deliveryTime: '15-20 min'
        },
        {
          id: 10,
          name: 'Green Smoothie',
          restaurant: 'Green Bowl',
          image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=200&fit=crop',
          price: 149,
          rating: 4.2,
          reason: 'Healthy choice',
          discount: 15,
          deliveryTime: '10-15 min'
        }
      ],
      comfort: [
        {
          id: 11,
          name: 'Mac and Cheese',
          restaurant: 'Comfort Kitchen',
          image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop',
          price: 199,
          rating: 4.4,
          reason: 'Cozy comfort food',
          discount: 20,
          deliveryTime: '20-25 min'
        },
        {
          id: 12,
          name: 'Chicken Soup',
          restaurant: 'Comfort Kitchen',
          image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop',
          price: 149,
          rating: 4.3,
          reason: 'Warm and comforting',
          discount: 15,
          deliveryTime: '15-20 min'
        }
      ]
    };
    
    // Return recommendations based on selected mood, or default mix
    if (mood && allRecommendations[mood]) {
      setRecommendations(allRecommendations[mood]);
    } else {
      // Default mix of popular items
      setRecommendations([
        allRecommendations.happy[0],
        allRecommendations.hungry[0],
        allRecommendations.sweet[0],
        allRecommendations.spicy[0]
      ]);
    }
  };

  useEffect(() => {
    generateRecommendations(selectedMood);
  }, [userOrders, selectedMood]);

  const getReasonIcon = (reason) => {
    if (reason.includes('orders')) return <Clock className="w-4 h-4" />;
    if (reason.includes('Popular')) return <TrendingUp className="w-4 h-4" />;
    return <Sparkles className="w-4 h-4" />;
  };

  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Smart Picks for You</h2>
          <p className="text-white/70">Personalized recommendations based on your taste</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
            onClick={() => onItemSelect && onItemSelect(item)}
          >
            <div className="relative overflow-hidden rounded-2xl glass backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Discount Badge */}
              {item.discount && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {item.discount}% OFF
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-4 bg-white/10 backdrop-blur-md">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">{item.name}</h3>
                    <p className="text-white/60 text-xs">{item.restaurant}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-medium">{item.rating}</span>
                  </div>
                </div>
                
                {/* Reason */}
                <div className="flex items-center gap-2 mb-3 text-white/70">
                  {getReasonIcon(item.reason)}
                  <span className="text-xs">{item.reason}</span>
                </div>
                
                {/* Price & Delivery */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {item.discount ? (
                      <>
                        <span className="text-white font-bold text-sm">₹{Math.round(item.price * (1 - item.discount / 100))}</span>
                        <span className="text-white/50 text-xs line-through">₹{item.price}</span>
                      </>
                    ) : (
                      <span className="text-white font-bold text-sm">₹{item.price}</span>
                    )}
                  </div>
                  <span className="text-white/60 text-xs">{item.deliveryTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SmartRecommendations;