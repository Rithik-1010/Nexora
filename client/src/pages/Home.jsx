import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] to-white z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--color-accent-ice)] to-[var(--color-accent-blue)] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Future of <br />
              <span className="bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-ice)] text-transparent bg-clip-text">Premium Retail</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-lg">
              Discover a curated collection of next-generation products designed to elevate your lifestyle. Immersive shopping redefined.
            </p>
            <div className="flex gap-4">
              <button className="bg-[var(--color-text-main)] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Shop Collection
              </button>
              <button className="glass-panel px-8 py-4 rounded-full font-medium text-[var(--color-text-main)] hover:bg-white transition-all shadow-sm">
                View Trends
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-full aspect-square max-w-md">
               {/* Placeholder for hero image, using a luxury abstract look */}
               <div className="absolute inset-0 glass-panel rounded-3xl flex items-center justify-center p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600" alt="Premium Product" className="object-cover rounded-2xl w-full h-full shadow-lg" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Placeholder */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
         <h2 className="text-3xl font-bold mb-12 text-center">Featured Categories</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-panel rounded-3xl p-8 h-64 flex items-end relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img src={`https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400&h=300&sig=${item}`} alt="Category" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <h3 className="relative z-20 text-white text-2xl font-semibold transform group-hover:-translate-y-2 transition-transform">Category {item}</h3>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Home;
