import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import NavDropdown from './NavDropdown';

const Navigation = () => {
  const navLinks = [
    { 
      name: 'Gaming', 
      hasDropdown: true,
      subcategories: ['Rockstar Games', 'PlayStation', 'Nintendo', 'XBOX']
    },
    { 
      name: 'Tech', 
      hasDropdown: true,
      subcategories: ['Amazon', 'Apple', 'Meta', 'Google', 'Microsoft', 'Samsung', 'Business']
    },
    { 
      name: 'AI', 
      hasDropdown: true,
      subcategories: ['OpenAI', 'Google Gemini', 'Robotics', 'Tech Startups']
    },
    { 
      name: 'Reviews', 
      hasDropdown: true,
      subcategories: ['Games Reviews', 'PC/Laptop Reviews', 'Phone Reviews', 'Tablet Reviews', 'HeadPhone Reviews']
    },
    { 
      name: 'Gadgets', 
      hasDropdown: true,
      subcategories: ['Laptops', 'Phones', 'TVs', 'Headphones', 'Speakers', 'Wearables']
    },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-6 h-full text-white/90">
      {navLinks.map((link) => (
        <div key={link.name} className="relative group/nav h-16 flex items-center">
          <Link
            to={`/category/${link.name.toLowerCase()}`}
            className="text-[15px] font-normal hover:text-white tracking-wider flex items-center gap-1 transition-colors cursor-pointer font-display"
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown className="w-4 h-4 opacity-40 group-hover/nav:opacity-100 transition-all duration-300 group-hover/nav:rotate-180" />
            )}
          </Link>

          {/* Dropdown Menu */}
          {link.hasDropdown && <NavDropdown subcategories={link.subcategories} />}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
