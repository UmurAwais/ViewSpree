import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Search as SearchIcon } from 'lucide-react';
import logo from '../assets/logo.png';
import Button from './Button';
import Search from './Search';
import Navigation from './Navigation';
import { categories } from '../data/categories';

const Header = ({ onSubscribe }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchActive(false);
  }, [location]);

  // Prevent scroll when side menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const headerStyle = {
    backgroundColor: 'rgba(18, 18, 18, 0.4)',
    backdropFilter: 'blur(32px)',
    WebkitBackdropFilter: 'blur(32px)',
    zIndex: 100,
    transform: 'translateZ(0)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  return (
    <>
      <header 
        style={headerStyle}
        className="sticky top-0 left-0 right-0 h-14 md:h-16 border-b border-white/5 flex items-center shadow-2xl overflow-hidden"
      >
        <div className="container-custom flex items-center justify-between w-full relative">
          
          {/* Mobile Inline Search Layer (Only visible when active on LG <) */}
          <div className={`absolute inset-0 z-50 bg-[#121212]/95 backdrop-blur-xl flex items-center px-4 transition-all duration-300 lg:hidden ${
            isSearchActive ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}>
             <div className="flex-1 mr-4">
                <Search className="w-full h-10" />
             </div>
             <button 
                onClick={() => setIsSearchActive(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all"
             >
               <X className="w-5 h-5" />
             </button>
          </div>

          {/* Regular Header Content */}
          <div className={`flex items-center justify-between w-full transition-all duration-300 ${isSearchActive ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
            
            {/* Left Section: Logo & Nav */}
            <div className="flex items-center gap-6 xl:gap-10">
              <Link 
                to="/" 
                className="flex items-center cursor-pointer group shrink-0"
              >
                <img src={logo} alt="ViewSpree" className="h-7 md:h-9 object-contain transition-opacity" />
              </Link>

              <Navigation />
            </div>

            {/* Right Section: Search & Actions */}
            <div className="flex items-center gap-3 md:gap-6">
              {/* Desktop Search */}
              <div className="hidden sm:block">
                <Search className="h-10 w-64 xl:w-80" />
              </div>

              <div className="hidden lg:flex items-center gap-6">
                <Button variant="ghost" className="font-display px-1!">
                  Login
                </Button>

                <Button variant="primary" onClick={onSubscribe}>
                  Subscribe
                </Button>
              </div>

              {/* Mobile Actions Toggle */}
              <div className="flex lg:hidden items-center gap-1 sm:gap-2">
                 {/* This only shows on the smallest screens where the inline search isn't already visible */}
                 <button 
                  onClick={() => setIsSearchActive(true)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors sm:hidden"
                 >
                   <SearchIcon className="w-5 h-5" />
                 </button>
                 
                 <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
                 >
                   {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                 </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Side Menu) */}
      <div 
        className={`fixed inset-0 z-100 lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div 
          className={`absolute right-0 top-0 bottom-0 w-70 sm:w-87.5 bg-[#0c0c0e] border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col h-full">
             <div className="flex items-center justify-between mb-10">
                <img src={logo} alt="ViewSpree" className="h-6 object-contain" />
                <button onClick={() => setIsMenuOpen(false)} className="text-white/40">
                   <X className="w-5 h-5" />
                </button>
             </div>

             {/* Search in Drawer (Optional, keeping it consistent) */}
             <div className="mb-8 block sm:hidden">
                <Search className="w-full h-12" />
             </div>

             <div className="flex flex-col gap-1 overflow-y-auto grow pb-10">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/category/${cat.slug}`}
                    className="flex items-center justify-between py-4 border-b border-white/5 text-lg font-bold text-white group"
                  >
                    {cat.name}
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors" />
                  </Link>
                ))}
             </div>

             <div className="mt-auto grid grid-cols-2 gap-4">
                <Button variant="ghost" className="w-full">Login</Button>
                <Button variant="primary" className="w-full" onClick={onSubscribe}>Subscribe</Button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
