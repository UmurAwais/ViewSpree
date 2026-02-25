import React from 'react';
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
      name: 'AI', 
      hasDropdown: true,
      subcategories: ['Machine Learning', 'Generative AI', 'Robotics', 'Tech Startups']
    },
    { 
      name: 'Reviews', 
      hasDropdown: true,
      subcategories: ['Hardware', 'Software', 'Games', 'Smart Home', 'Audio']
    },
    { 
      name: 'Gadgets', 
      hasDropdown: true,
      subcategories: ['Smartphones', 'Wearables', 'Laptops', 'Tablets', 'Accessories']
    },
    { 
      name: 'Tech', 
      hasDropdown: true,
      subcategories: ['Cybersecurity', 'Cloud Computing', 'Space Tech', 'Web3', 'Enterprise']
    },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-6 h-full text-white/90">
      {navLinks.map((link) => (
        <div key={link.name} className="relative group/nav h-16 flex items-center">
          <a
            href={`#${link.name.toLowerCase()}`}
            className="text-[15px] font-normal hover:text-white tracking-wider flex items-center gap-1 transition-colors cursor-pointer font-display"
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown className="w-4 h-4 opacity-40 group-hover/nav:opacity-100 transition-all duration-300 group-hover/nav:rotate-180" />
            )}
          </a>

          {/* Dropdown Menu */}
          {link.hasDropdown && <NavDropdown subcategories={link.subcategories} />}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
