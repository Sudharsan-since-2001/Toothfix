import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F0F4F4]/90 backdrop-blur-sm transition-all duration-300">
      <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/Toothfix Logo.png"
            alt="ToothFix Logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-extrabold text-[#2A3C42] tracking-tight whitespace-nowrap hidden lg:block uppercase">
            ToothFix <span className="font-medium text-gray-500">Dental Clinic</span>
          </span>
        </Link>

        {/* Right Aligned Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[13px] font-bold text-dark/80 tracking-widest uppercase">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <Link to="/blog" className="hover:text-primary transition-colors">BLOG</Link>
            <Link to="/why-choose-us" className="hover:text-primary transition-colors">WHY CHOOSE US</Link>
            <Link to="/services" className="hover:text-primary transition-colors">SERVICES</Link>
            <Link to="/book" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-xs font-black transition-all shadow-md shadow-primary/20">
              BOOK AN APPOINTMENT
            </Link>
          </div>

          <Link to="/contact" className="bg-[#2A3C42] hover:bg-[#2A3C42]/90 text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg">
            Contact Us
          </Link>
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
          <Link to="/" onClick={() => setIsOpen(false)} className="text-dark font-bold py-2">HOME</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-dark font-bold py-2">BLOG</Link>
          <Link to="/why-choose-us" onClick={() => setIsOpen(false)} className="text-dark font-bold py-2">WHY CHOOSE US</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-dark font-bold py-2">SERVICES</Link>
          <Link to="/book" onClick={() => setIsOpen(false)} className="bg-primary text-white text-center py-3 rounded-lg font-bold">BOOK NOW</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-dark text-white text-center py-3 rounded-lg font-bold">
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;