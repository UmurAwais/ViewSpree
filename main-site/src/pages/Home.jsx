import React from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../components/Categories';
import BreakingNews from '../components/BreakingNews';
import LatestNews from '../components/ViewSpreeExclusive';
import GamingSection from '../components/GamingSection';
import AISection from '../components/AISection';
import ReviewsSection from '../components/ReviewsSection';
import GadgetsSection from '../components/GadgetsSection';
import TechSection from '../components/TechSection';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const navigate = useNavigate();

  const handlePostClick = (post) => {
    navigate('/post/1', { state: { post } });
  };

  return (
    <>
      <BreakingNews onPostClick={handlePostClick} />
      <Categories />
      <LatestNews onPostClick={handlePostClick} />
      <GamingSection />
      <TechSection />
      <Features />
      <ReviewsSection />
      <AISection />
      <GadgetsSection />
      
      <Newsletter />
    </>
  );
};

export default Home;
