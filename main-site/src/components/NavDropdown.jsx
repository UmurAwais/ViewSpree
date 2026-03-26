import React from 'react';
import { Link } from 'react-router-dom';

const NavDropdown = ({ subcategories }) => {
  if (!subcategories || subcategories.length === 0) return null;

  return (
    <div className="absolute top-full left-0 pt-0.5 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 z-50 pointer-events-none group-hover/nav:pointer-events-auto">
      {/* Main Container matching the screenshot exactly */}
      <div className="w-64 bg-[#1a1a1e] border border-white/5 rounded-[28px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-2 flex flex-col gap-1 backdrop-blur-3xl overflow-hidden">
        
        {subcategories.map((sub, i) => (
          <Link 
            key={i} 
            to={`/category/${sub.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-5 py-3 text-[14px] font-medium text-white/90 hover:text-white hover:bg-[#2c2c31] rounded-xl transition-all duration-200 w-full text-left font-display tracking-tight"
          >
            {sub}
          </Link>
        ))}

        {/* Subtle Bottom Accent Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default NavDropdown;
