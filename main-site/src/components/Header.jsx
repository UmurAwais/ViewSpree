import React from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import Button from './Button';
import Search from './Search';

const Header = () => {
  const navLinks = [
    { name: 'Gaming', hasDropdown: false },
    { name: 'AI', hasDropdown: false },
    { name: 'Reviews', hasDropdown: true },
    { name: 'Gadgets', hasDropdown: false },
    { name: 'Tech', hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 h-16 bg-header-bg border-b border-white/5 z-50 flex items-center shadow-2xl">
      <div className="container-custom flex items-center justify-between w-full">
        
        {/* Left Section: Logo & Nav */}
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center cursor-pointer group">
            <img src={logo} alt="ViewSpree" className="h-9 object-contain transition-opacity" />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className="text-[15px] font-normal text-white tracking-wider flex items-center gap-1 transition-colors cursor-pointer font-display"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
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
