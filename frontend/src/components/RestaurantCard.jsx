import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Star, Truck } from 'lucide-react';

const getRestaurantImage = (id) => {
  return `https://picsum.photos/400/300?random=${id}`;
};

const RestaurantCard = ({ restaurant }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/restaurant/${restaurant._id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl glass backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={`https://source.unsplash.com/400x300/?restaurant,food&sig=${restaurant._id}`}
              alt={restaurant.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Rating Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-800">{restaurant.rating?.toFixed(1) || '4.5'}</span>
            </div>
            
            {/* Free Delivery Badge */}
            {restaurant.deliveryFee === 0 && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                FREE DELIVERY
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-6 bg-white/10 backdrop-blur-md">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                {restaurant.name}
              </h3>
              <p className="text-white/70 text-sm font-medium">{restaurant.cuisine}</p>
            </div>
            
            <p className="text-white/80 text-sm mb-4 line-clamp-2">
              {restaurant.description || 'Delicious food delivered fresh to your door'}
            </p>
            
            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span>{restaurant.deliveryTime || '30-45 min'}</span>
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <Truck className="w-4 h-4" />
                  <span>{restaurant.deliveryFee === 0 ? 'Free' : `₹${restaurant.deliveryFee || 40}`}</span>
                </div>
              </div>
              
              {restaurant.minimumOrder > 0 && (
                <div className="text-white/60 text-xs">
                  Min. ₹{restaurant.minimumOrder}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RestaurantCard;