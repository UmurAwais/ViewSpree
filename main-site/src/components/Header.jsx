import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from './Button';
import Search from './Search';
import Navigation from './Navigation';

const Header = ({ onSubscribe }) => {
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

          <Navigation />
        </div>

        {/* Right Section: Search & Actions */}
        <div className="flex items-center gap-6">
          <Search />

          <div className="flex items-center gap-6">
            <Button variant="ghost" className="font-display px-1!">
              Login
            </Button>

            <Button variant="primary" onClick={onSubscribe}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
