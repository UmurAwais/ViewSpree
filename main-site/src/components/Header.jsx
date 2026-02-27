import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Search as SearchIcon } from 'lucide-react';
import logo from '../assets/logo.png';
import Button from './Button';
import Search from './Search';
import Navigation from './Navigation';

const Header = ({ onSubscribe }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isSearchOpen]);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 h-16 md:h-20 blurry-header border-b border-white/5 z-100 flex items-center shadow-2xl">
        <div className="container-custom flex items-center justify-between w-full">
          
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

            {/* Mobile Actions Overlay */}
            <div className="flex lg:hidden items-center gap-2">
               <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
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
      </header>

      {/* Mobile Search Overlay */}
      <div 
        className={`fixed inset-0 z-200 blurry-header transition-all duration-500 ease-out flex flex-col ${
          isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 invisible'
        }`}
      >
         <div className="p-6 pt-20 h-full container-custom flex flex-col">
            <div className="flex items-center justify-between mb-10">
               <div>
                  <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Search Intelligence</h2>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Discover what's next</p>
               </div>
               <button 
                onClick={() => setIsSearchOpen(false)}
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"
               >
                 <X className="w-6 h-6" />
               </button>
            </div>

            <div className="relative">
               <Search className="w-full h-14" />
            </div>

            <div className="mt-20 text-center">
               <p className="text-white/20 text-[10px] font-black uppercase tracking-[5px]">Proprietary Search Engine</p>
            </div>
         </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-100 lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Content */}
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

             {/* Mobile Search */}
             <div className="mb-8 block sm:hidden">
                <Search className="w-full h-12" />
             </div>

             {/* Nav Links */}
             <div className="flex flex-col gap-1 overflow-y-auto grow pb-10">
                {['Gaming', 'Tech', 'AI', 'Reviews', 'Gadgets'].map((link) => (
                  <Link
                    key={link}
                    to={`/category/${link.toLowerCase()}`}
                    className="flex items-center justify-between py-4 border-b border-white/5 text-lg font-bold text-white group"
                  >
                    {link}
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors" />
                  </Link>
                ))}
             </div>

             {/* Footer Actions */}
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

