import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SinglePost from './components/SinglePost';

const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      {/* Promotion Layer */}
      <AnnouncementBar />

      {/* Navigation Layer */}
      <Header />
      
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
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<SinglePost />} />
      </Route>
    </Routes>
  );
};

export default App;