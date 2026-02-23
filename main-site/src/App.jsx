import React from 'react'
import { Send } from 'lucide-react'
import Header from './components/Header'
import AnnouncementBar from './components/AnnouncementBar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import LatestNews from './components/LatestNews'
import GamingSection from './components/GamingSection'
import Features from './components/Features'
import Footer from './components/Footer'
import Button from './components/Button'

const App = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      {/* Promotion Layer */}
      <AnnouncementBar />

      {/* Navigation Layer */}
      <Header />
      
      {/* Content Layer */}
      <main>
        <Hero />
        <Categories />
        <LatestNews />
        <GamingSection />
        <Features />
        
        {/* Newsletter Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="bg-linear-to-r from-green-900/20 to-purple-900/20 rounded-[40px] p-16 border border-white/5 flex flex-col items-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 blur-[120px] -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] -ml-48 -mb-48" />
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter font-display uppercase italic">
                Stay Ahead of the <span className="text-accent underline decoration-white/10 underline-offset-8">Game</span>
              </h2>
              <p className="text-white/50 text-xl max-w-2xl mb-10 leading-relaxed font-normal">
                Join 50,000+ gamers receiving the most critical tech updates, reviews, and guides directly in their inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-green-500/50 focus:bg-white/10 transition-all font-normal"
                />
                <Button variant="primary" className="px-8 py-4 rounded-2xl text-xs flex items-center justify-center gap-2">
                  Join The Spree <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="mt-8 text-[10px] text-white/20 uppercase tracking-[3px] font-bold font-display">
                No Spam • Weekly Update • Pro Quality
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Layer */}
      <Footer />
    </div>
  )
}

export default App