import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProductStore from '../store/useProductStore';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Star } from 'lucide-react';

const Products = () => {
  const { products, fetchProducts, isLoading } = useProductStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const dummyProducts = products.length > 0 ? products : [
    { _id: '1', title: 'Aero X1 Pro', price: 1299, category: 'Electronics', images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30'], rating: 4.8 },
    { _id: '2', title: 'Lumina Desk Lamp', price: 149, category: 'Home', images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c'], rating: 4.5 },
    { _id: '3', title: 'Sonic Wave Headphones', price: 349, category: 'Audio', images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e'], rating: 4.9 },
    { _id: '4', title: 'Nova Smart Watch', price: 299, category: 'Wearables', images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30'], rating: 4.7 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">The Collection</h1>
          <p className="text-[var(--color-text-muted)]">Discover our curated selection of premium products.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-full bg-white border border-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] w-full md:w-64 transition-all shadow-sm"
            />
          </div>
          <button className="bg-white p-3 rounded-full border border-[var(--color-surface-alt)] hover:bg-[var(--color-surface)] transition-colors shadow-sm">
            <SlidersHorizontal size={24} className="text-[var(--color-text-main)]" />
          </button>
        </div>
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="flex justify-center py-20">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dummyProducts.map((product, index) => (
            <motion.div 
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/products/${product._id}`} className="group block">
                <div className="glass-panel rounded-3xl overflow-hidden mb-4 relative aspect-[4/5]">
                  <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-sm">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    {product.rating}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-[var(--color-accent-blue)] transition-colors">{product.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-[var(--color-text-muted)] text-sm">{product.category}</p>
                    <p className="font-bold">${product.price}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
