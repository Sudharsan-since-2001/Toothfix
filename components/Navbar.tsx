import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'BLOG', path: '/blog' },
    { name: 'WHY CHOOSE US', path: '/why-choose-us' },
    { name: 'SERVICES', path: '/services' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-[#F0F4F4]/90 backdrop-blur-sm py-5'
      }`}>
      <div className="w-full px-4 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 relative z-[110]">
          <div className="bg-white p-1.5 rounded-xl shadow-sm">
            <img
              src="/Toothfix Logo.png"
              alt="ToothFix Logo"
              className="h-8 md:h-10 w-auto"
            />
          </div>
          <span className={`text-lg md:text-xl font-black tracking-tight uppercase ${isOpen ? 'text-dark' : 'text-[#2A3C42]'}`}>
            Tooth<span className="text-primary italic">Fix</span>
            <span className="hidden lg:inline-block ml-2 font-medium text-gray-400 normal-case">Dental Clinic</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8 text-[11px] lg:text-[13px] font-bold text-dark/80 tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-primary transition-all duration-300 relative group ${location.pathname === link.path ? 'text-primary' : ''
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/book" className="hidden lg:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-xs font-black transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5">
              BOOK NOW
            </Link>
            <Link to="/contact" className="bg-[#2A3C42] hover:bg-dark text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-[110] p-2 text-dark transition-transform active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
        <div className="h-full flex flex-col justify-center px-8 gap-8">
          <div className="space-y-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-4xl font-black tracking-tighter uppercase transition-all duration-500 delay-[${100 + i * 50}ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } ${location.pathname === link.path ? 'text-primary italic' : 'text-dark'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={`flex flex-col gap-4 pt-10 border-t border-gray-100 transition-all duration-700 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <Link to="/book" className="flex items-center justify-between bg-primary text-white p-6 rounded-[32px] font-black text-xl shadow-2xl shadow-primary/20">
              BOOK AN APPOINTMENT
              <ArrowRight />
            </Link>
            <Link to="/contact" className="flex items-center justify-between bg-dark text-white p-6 rounded-[32px] font-black text-xl">
              GET IN TOUCH
              <ArrowRight />
            </Link>
          </div>

          <div className="absolute bottom-12 left-8 right-8 text-center text-gray-400 text-sm font-medium">
            © 2026 ToothFix Dental Clinic. <br /> All rights reserved.
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;