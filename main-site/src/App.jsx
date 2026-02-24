import React, { useState } from 'react'
import Header from './components/Header'
import AnnouncementBar from './components/AnnouncementBar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import BreakingNews from './components/BreakingNews'
import LatestNews from './components/ViewSpreeExclusive'
import GamingSection from './components/GamingSection'
import AISection from './components/AISection'
import ReviewsSection from './components/ReviewsSection'
import GadgetsSection from './components/GadgetsSection'
import TechSection from './components/TechSection'
import Features from './components/Features'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import SinglePost from './components/SinglePost'

const App = () => {
  const [view, setView] = useState('home');
  const [currentPost, setCurrentPost] = useState(null);

  if (view === 'post') {
    return <SinglePost post={currentPost} onNavigateHome={() => setView('home')} />
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      {/* Promotion Layer */}
      <AnnouncementBar />

      {/* Navigation Layer */}
      <Header />
      
      {/* Content Layer */}
      <main>
        <BreakingNews onPostClick={(post) => { setCurrentPost(post); setView('post') }} />
        {/* <Hero /> */}
        <Categories />
        <LatestNews onPostClick={(post) => { setCurrentPost(post); setView('post') }} />
        <GamingSection />
        <TechSection />
        <Features />
        <ReviewsSection />
        <AISection />
        <GadgetsSection />
        
        <Newsletter />
      </main>

      {/* Footer Layer */}
      <Footer />
    </div>
  )
}

export default App