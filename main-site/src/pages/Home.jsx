import React from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../components/Categories';
import BreakingNews from '../components/BreakingNews';
import TrendingNewsSlider from '../components/TrendingNewsSlider';
import LatestNews from '../components/ViewSpreeExclusive';
import GamingSection from '../components/GamingSection';
import AISection from '../components/AISection';
import ReviewsSection from '../components/ReviewsSection';
import GadgetsSection from '../components/GadgetsSection';
import TechSection from '../components/TechSection';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

const Home = () => {
  const navigate = useNavigate();

  const handlePostClick = (post) => {
    navigate(`/post/${post.id}`, { state: { post } });
  };

  return (
    <>
      <SEO 
        title="Your Window into Tomorrow"
        description="ViewSpree is a high-fidelity intelligence hub for technical news, featuring deep dives into AI breakthroughs, gaming architecture, engine breakthroughs, and hardware engineering."
        keywords="ViewSpree, Tech Intelligence, AI Analysis, Future Tech News, Hardware Benchmarks, Gaming Engine Analysis"
      />
      <TrendingNewsSlider onPostClick={handlePostClick} />
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
