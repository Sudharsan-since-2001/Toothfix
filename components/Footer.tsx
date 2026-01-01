import React from 'react';
import { Plus, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white p-1 rounded-md">
            <Plus size={16} strokeWidth={3} />
          </div>
          <span className="text-lg font-bold tracking-wider text-dark">ToothFix</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs md:text-sm text-center">
          © 2023 ToothFix. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;