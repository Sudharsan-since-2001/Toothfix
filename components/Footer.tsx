import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Toothfix Logo.png"
            alt="ToothFix"
            className="h-10 w-auto"
          />
          <span className="text-lg font-bold tracking-wider text-dark uppercase">ToothFix</span>
        </Link>

        {/* Copyright */}
        <p className="text-gray-400 text-xs md:text-sm text-center">
          © 2026 ToothFix. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;