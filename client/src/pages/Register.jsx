import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { motion } from 'framer-motion';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');
  
  const navigate = useNavigate();
  const { register, user, isLoading, error } = useAuthStore();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    if (password !== confirmPassword) {
      return setLocalError('Passwords do not match');
    }
    await register(name, email, password);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-8 md:p-12 rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-accent-chrome)] to-[var(--color-accent-blue)]"></div>
        <h2 className="text-3xl font-bold mb-2 text-center text-[var(--color-text-main)]">Create Account</h2>
        <p className="text-center text-[var(--color-text-muted)] mb-8">Join NEXORA today</p>
        
        {(error || localError) && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-sm text-center">
            {localError || error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-[var(--color-text-muted)]">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[var(--color-text-muted)]">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[var(--color-text-muted)]">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all"
              placeholder="Create a password"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[var(--color-text-muted)]">Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[var(--color-text-main)] text-white py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-[var(--color-text-muted)]">
          Already have an account?{' '}
          <Link to="/login" className="text-[var(--color-accent-blue)] font-medium hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
