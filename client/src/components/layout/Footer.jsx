import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[var(--color-surface-alt)] py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-[var(--color-accent-chrome)] to-[var(--color-accent-blue)] text-transparent bg-clip-text mb-4">
            NEXORA
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            A premium futuristic online marketplace redefining the modern shopping experience.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li><a href="#" className="hover:text-[var(--color-accent-blue)] transition-colors">All Products</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent-blue)] transition-colors">Trending</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent-blue)] transition-colors">New Arrivals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li><a href="#" className="hover:text-[var(--color-accent-blue)] transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent-blue)] transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent-blue)] transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li><a href="#" className="hover:text-[var(--color-accent-blue)] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[var(--color-accent-blue)] transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-[var(--color-surface-alt)] text-center text-sm text-[var(--color-text-muted)]">
        &copy; {new Date().getFullYear()} NEXORA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
