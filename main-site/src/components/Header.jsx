import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import Button from './Button';
import Search from './Search';

const Header = () => {
  const navLinks = [
    { 
      name: 'Gaming', 
      hasDropdown: true,
      subcategories: ['Console', 'PC Gaming', 'Esports', 'VR & AR', 'Mobile Gaming']
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
    <header className="sticky top-0 left-0 right-0 h-16 blurry-header border-b border-white/5 z-50 flex items-center shadow-2xl">
      <div className="container-custom flex items-center justify-between w-full">
        
        {/* Left Section: Logo & Nav */}
        <div className="flex items-center gap-10">
          <Link 
            to="/" 
            className="flex items-center cursor-pointer group"
          >
            <img src={logo} alt="ViewSpree" className="h-9 object-contain transition-opacity" />
          </Link>

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
                {link.hasDropdown && (
                  <div className="absolute top-[70%] left-0 pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 z-50">
                    <div className="w-52 bg-[#121214]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden py-2 flex flex-col relative before:absolute before:inset-0 before:bg-linear-to-b before:from-white/5 before:to-transparent before:pointer-events-none">
                      {link.subcategories.map((sub, i) => (
                        <a 
                          key={i} 
                          href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-5 py-2.5 text-[14px] text-white/70 hover:text-white hover:bg-white/5 transition-all w-full text-left font-display tracking-wide relative flex items-center group/btn"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent absolute left-2 opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-300 shadow-[0_0_10px_var(--color-accent)]" />
                          <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">{sub}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Section: Search & Actions */}
        <div className="flex items-center gap-6">
          <Search />

          <div className="flex items-center gap-6">
            <Button variant="ghost" className="font-display px-1!">
              Login
            </Button>

            <Button variant="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
