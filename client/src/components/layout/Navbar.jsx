import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import { ShoppingCart, User, LogOut, Menu } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="fixed w-full z-50 glass-panel py-4 px-6 md:px-12 flex justify-between items-center top-0">
      <Link to="/" className="text-2xl font-bold text-[var(--color-text-main)] flex items-center gap-2">
        <span className="bg-gradient-to-r from-[var(--color-accent-chrome)] to-[var(--color-accent-blue)] text-transparent bg-clip-text">
          NEXORA
        </span>
      </Link>

      <div className="hidden md:flex gap-8 items-center font-medium">
        <Link to="/products" className="hover:text-[var(--color-accent-blue)] transition-colors">Shop</Link>
        <Link to="/categories" className="hover:text-[var(--color-accent-blue)] transition-colors">Categories</Link>
        <Link to="/about" className="hover:text-[var(--color-accent-blue)] transition-colors">About</Link>
      </div>

      <div className="flex gap-4 items-center">
        <button className="relative p-2 rounded-full hover:bg-[var(--color-surface)] transition-colors">
          <ShoppingCart size={20} />
          <span className="absolute top-0 right-0 bg-[var(--color-accent-blue)] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
        </button>
        
        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/profile" className="p-2 rounded-full hover:bg-[var(--color-surface)] transition-colors">
              <User size={20} />
            </Link>
            <button onClick={logout} className="p-2 rounded-full hover:bg-red-50 text-red-500 transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-[var(--color-text-main)] text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-md">
            Login
          </Link>
        )}

        <button className="md:hidden p-2">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
