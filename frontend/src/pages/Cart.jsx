import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SmartCart from '../components/SmartCart';

const Cart = () => {
  const { cart, updateCartItem, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center glass backdrop-blur-md border border-white/20 rounded-3xl p-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Please log in to view your cart</h2>
          <Link 
            to="/login" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            Login
          </Link>
        </motion.div>
      </div>
    );
  }

  const handleQuantityChange = async (menuItemId, newQuantity) => {
    await updateCartItem(menuItemId, newQuantity);
  };

  const handleRemoveItem = async (menuItemId) => {
    await updateCartItem(menuItemId, 0);
  };

  const handleAddCombo = (combo) => {
    console.log('Adding combo:', combo);
    // Implement combo addition logic
  };

  // Transform cart data for SmartCart component
  const cartItems = cart.items ? cart.items.map(item => ({
    id: item.menuItem._id,
    name: item.menuItem.name,
    restaurant: cart.restaurant?.name || 'Restaurant',
    price: item.price,
    quantity: item.quantity,
    image: item.menuItem.image
  })) : [];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Your Cart</h1>
          {cart.restaurant && (
            <p className="text-white/70 text-lg">From {cart.restaurant.name}</p>
          )}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <SmartCart
            cartItems={cartItems}
            onUpdateQuantity={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
            onAddCombo={handleAddCombo}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;