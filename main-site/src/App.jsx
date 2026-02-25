import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SinglePost from './components/SinglePost';
import Category from './pages/Category';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import SubscribeModal from './components/SubscribeModal';

const Layout = ({ onSubscribe }) => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      {/* Promotion Layer */}
      <AnnouncementBar />

      {/* Navigation Layer */}
      <Header onSubscribe={onSubscribe} />
      
      {/* Content Layer */}
      <main>
        <Outlet />
      </main>

      {/* Footer Layer */}
      <Footer />
    </div>
  );
};

const App = () => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        {isSubscribeOpen && (
          <SubscribeModal 
            isOpen={isSubscribeOpen} 
            onClose={() => setIsSubscribeOpen(false)} 
          />
        )}
      </AnimatePresence>
      
      <Layout onSubscribe={() => setIsSubscribeOpen(true)} />
    </>
  );
};

export default App;