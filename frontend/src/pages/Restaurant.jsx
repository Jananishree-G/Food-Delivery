import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { restaurantAPI, foodAPI } from '../services/api';
import FoodCard from '../components/FoodCard';
import './Restaurant.css';

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const loadRestaurantData = useCallback(async () => {
    try {
      setLoading(true);
      const [restaurantRes, foodsRes] = await Promise.all([
        restaurantAPI.getById(id),
        foodAPI.getByRestaurant(id)
      ]);
      
      setRestaurant(restaurantRes.data);
      setFoods(foodsRes.data);
    } catch (error) {
      console.error('Failed to load restaurant data:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadRestaurantData();
  }, [loadRestaurantData]);

  const categories = useMemo(() => 
    ['all', ...new Set(foods.map(food => food.category))], 
    [foods]
  );
  
  const filteredFoods = useMemo(() => 
    selectedCategory === 'all' 
      ? foods 
      : foods.filter(food => food.category === selectedCategory),
    [foods, selectedCategory]
  );

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  if (loading) {
    return <div className="loading">Loading restaurant...</div>;
  }

  if (!restaurant) {
    return <div className="error">Restaurant not found</div>;
  }

  return (
    <div className="restaurant-page">
      <div className="restaurant-header">
        <div className="restaurant-image">
          <img src={restaurant.image} alt={restaurant.name} />
        </div>
        
        <div className="restaurant-details">
          <h1>{restaurant.name}</h1>
          <p className="cuisine">{restaurant.cuisine}</p>
          <p className="description">{restaurant.description}</p>
          
          <div className="restaurant-meta">
            <span className="rating">⭐ {restaurant.rating.toFixed(1)}</span>
            <span className="delivery-time">🕒 {restaurant.deliveryTime}</span>
            <span className="delivery-fee">
              {restaurant.deliveryFee === 0 ? 'Free Delivery' : `$${restaurant.deliveryFee} delivery`}
            </span>
          </div>
          
          {restaurant.minimumOrder > 0 && (
            <p className="minimum-order">Minimum order: ${restaurant.minimumOrder}</p>
          )}
        </div>
      </div>

      <div className="menu-section">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="foods-grid">
          {filteredFoods.length === 0 ? (
            <div className="no-foods">
              <p>No items found in this category.</p>
            </div>
          ) : (
            filteredFoods.map(food => (
              <FoodCard key={food._id} food={food} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;