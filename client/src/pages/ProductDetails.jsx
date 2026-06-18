import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../store/useProductStore';
import { motion } from 'framer-motion';
import { Star, Minus, Plus, ShoppingCart, Heart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { product, fetchProductById, isLoading } = useProductStore();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  // Fallback to dummy data if backend is empty
  const item = product || {
    _id: id,
    title: 'Aero X1 Pro Earbuds',
    price: 299,
    description: 'Experience next-level audio with the Aero X1 Pro. Featuring active noise cancellation, spatial audio, and an ultra-comfortable ergonomic fit designed for all-day wear.',
    brand: 'NEXORA',
    category: 'Audio',
    rating: 4.9,
    numReviews: 128,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    ],
    stock: 15,
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="glass-panel rounded-[2rem] overflow-hidden aspect-square relative flex items-center justify-center p-8 bg-gradient-to-br from-white to-[var(--color-surface)]">
            <img 
              src={item.images[0]} 
              alt={item.title} 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-2 text-sm font-medium tracking-wider text-[var(--color-accent-blue)] uppercase">
            {item.brand}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{item.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-[var(--color-surface-alt)]">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-sm">{item.rating}</span>
            </div>
            <span className="text-[var(--color-text-muted)] text-sm underline cursor-pointer hover:text-[var(--color-text-main)]">
              {item.numReviews} Reviews
            </span>
          </div>

          <p className="text-3xl font-bold mb-8">${item.price.toFixed(2)}</p>
          
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-10 text-lg">
            {item.description}
          </p>

          <hr className="border-[var(--color-surface-alt)] mb-10" />

          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center bg-white border border-[var(--color-surface-alt)] rounded-2xl p-2 w-fit shadow-sm">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[var(--color-surface)] transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-medium text-lg">{quantity}</span>
              <button 
                onClick={() => setQuantity(Math.min(item.stock, quantity + 1))}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[var(--color-surface)] transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            
            <button className="flex-grow bg-[var(--color-text-main)] text-white px-8 py-4 rounded-2xl font-medium hover:bg-opacity-90 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            
            <button className="w-14 h-14 bg-white border border-[var(--color-surface-alt)] rounded-2xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all shadow-sm">
              <Heart size={24} />
            </button>
          </div>
          
          <div className="text-sm text-[var(--color-text-muted)] flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${item.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            {item.stock > 0 ? `In Stock (${item.stock} available)` : 'Out of Stock'}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
