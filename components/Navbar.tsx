import React, { useState } from 'react';
import { Search, Globe, Menu, X, Plus } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F0F4F4]/90 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img 
          
            alt="ToothFix Dental Clinic" 
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dark/80">
          <a href="#" className="hover:text-primary transition-colors">HOME</a>
          <a href="#" className="hover:text-primary transition-colors">BLOG</a>
          <a href="#" className="hover:text-primary transition-colors">WHY CHOOSE US</a>
          <a href="#" className="hover:text-primary transition-colors">SERVICES</a>
          <a href="#" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all shadow-lg shadow-primary/20">
            BOOK AN APPOINTMENT
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all shadow-lg shadow-primary/20">
            Contact Us
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <Search size={18} className="text-dark/70" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <Globe size={18} className="text-dark/70" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 px-6 py-4 flex flex-col gap-4 shadow-xl">
          <a href="#" className="text-dark font-medium py-2">HOME</a>
          <a href="#" className="text-dark font-medium py-2">ABOUT</a>
          <a href="#" className="text-dark font-medium py-2">SERVICE</a>
          <a href="#" className="text-dark font-medium py-2">BLOG</a>
          <button className="bg-primary text-white w-full py-3 rounded-lg font-bold">
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;