import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Settings, 
  LogOut,
  Edit3,
  Package,
  CreditCard
} from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    avatar: null,
    joinDate: '2023-01-15'
  });

  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      restaurant: 'Pizza Palace',
      items: ['Margherita Pizza', 'Garlic Bread'],
      total: 599,
      date: '2024-01-15',
      status: 'delivered',
      rating: 4.5
    },
    {
      id: 'ORD002',
      restaurant: 'Burger Hub',
      items: ['Chicken Burger', 'Fries', 'Coke'],
      total: 399,
      date: '2024-01-12',
      status: 'delivered',
      rating: 5.0
    },
    {
      id: 'ORD003',
      restaurant: 'Spice Garden',
      items: ['Chicken Biryani', 'Raita'],
      total: 449,
      date: '2024-01-10',
      status: 'delivered',
      rating: 4.2
    }
  ]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      address: '123 Main Street, Apartment 4B, New York, NY 10001',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      address: '456 Business Ave, Suite 200, New York, NY 10002',
      isDefault: false
    }
  ]);

  const [activeTab, setActiveTab] = useState('orders');

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'text-green-400';
      case 'preparing': return 'text-yellow-400';
      case 'onway': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
  const averageRating = orders.reduce((sum, order) => sum + order.rating, 0) / orders.length;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-white" />
                )}
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                <Edit3 className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
              <p className="text-white/70 mb-1">{user.email}</p>
              <p className="text-white/70 mb-4">{user.phone}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{orders.length}</div>
                  <div className="text-white/60 text-sm">Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">₹{totalSpent}</div>
                  <div className="text-white/60 text-sm">Total Spent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="text-white/60 text-sm">Avg Rating</div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Settings className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30 hover:bg-red-500/30 transition-colors"
              >
                <LogOut className="w-5 h-5 text-red-400" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: 'orders', label: 'Order History', icon: Package },
            { id: 'addresses', label: 'Addresses', icon: MapPin },
            { id: 'favorites', label: 'Favorites', icon: Heart },
            { id: 'payments', label: 'Payments', icon: CreditCard }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'glass backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:border-white/40'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Order History</h2>
              {orders.map((order) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{order.restaurant}</h3>
                        <span className={`text-sm font-medium ${getStatusColor(order.status)} capitalize`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm mb-2">
                        {order.items.join(', ')}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span>Order #{order.id}</span>
                        <span>•</span>
                        <span>{order.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">₹{order.total}</div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white/70 text-sm">{order.rating}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        Reorder
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Saved Addresses</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold shadow-lg"
                >
                  Add New Address
                </motion.button>
              </div>
              
              {addresses.map((address) => (
                <motion.div
                  key={address.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{address.type}</h3>
                        {address.isDefault && (
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-white/70">{address.address}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
                        <Edit3 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Favorites Yet</h3>
              <p className="text-white/60">Start adding your favorite restaurants and dishes!</p>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="text-center py-12">
              <CreditCard className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Payment Methods</h3>
              <p className="text-white/60">Manage your payment methods and billing information</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;