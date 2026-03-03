import React, { useCallback } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import LazyImage from './LazyImage';

const featuredNews = [
  {
    id: 1,
    category: "TECH REVOLUTION",
    title: "The Silicon Valley Shift: Why developers are flocking to local AI models",
    description: "New benchmarks show open-source models outperforming proprietary giants.",
    cta: "Read Story",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    time: "30 MINS AGO",
    type: "tech"
  },
  {
    id: 2,
    category: "GLOBAL ECONOMY",
    title: "Green Energy Surge: Global investments hit record high in Q1 2024",
    description: "Renewable energy infrastructure now accounts for 60% of all new power generation.",
    cta: "View Analysis",
    image: "https://images.unsplash.com/photo-1466611653911-95282ee3656d?auto=format&fit=crop&q=80&w=800",
    time: "2 HOURS AGO",
    type: "business"
  },
  {
    id: 3,
    category: "CYBER SECURITY",
    title: "Quantum Encryption: The new frontier for financial data protection",
    description: "Leading banks are beginning to test post-quantum cryptography to secure transactions.",
    cta: "Read Feature",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    time: "4 HOURS AGO",
    type: "security"
  }
];

const TrendingNewsSlider = ({ onPostClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false
  }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <section className="py-6 bg-brand-bg overflow-hidden">
      <div className="container-custom">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {featuredNews.map((news) => (
              <div 
                key={news.id} 
                className="flex-[0_0_100%] lg:flex-[0_0_50%] min-w-0 pl-6"
              >
                <div 
                  onClick={() => onPostClick && onPostClick(news)}
                  className="rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between group cursor-pointer transition-all duration-500 bg-[#121212] border border-white/5 hover:shadow-[0_0_30px_rgba(0,112,0,0.1)] relative overflow-hidden h-full"
                >
                  {/* Subtle Brand Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-[0.03] blur-3xl pointer-events-none" />
                  
                  <div className="flex-1 z-10 pr-4">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="bg-accent text-white px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-[1.5px] flex items-center gap-1.5 whitespace-nowrap">
                          <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                          {news.category}
                       </div>
                       <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/40">
                          <Clock className="w-3.5 h-3.5" />
                          {news.time}
                       </div>
                    </div>
                    
                    <h3 className="text-lg lg:text-xl font-black mb-3 leading-tight text-white group-hover:underline decoration-accent decoration-[3px] underline-offset-2 transition-all line-clamp-2">
                       {news.title}
                    </h3>
                    <p className="text-sm text-white/50 line-clamp-2 leading-relaxed mb-6">
                       {news.description}
                    </p>
                    <div className="inline-flex">
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs bg-accent text-white transition-all duration-300 hover:gap-4 shadow-lg active:scale-95">
                          {news.cta}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center z-10 w-[30%] shrink-0">
                    <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl">
                        <LazyImage 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                  </div>
                  
                  {/* Mobile Image */}
                  <div className="lg:hidden mt-6 w-full aspect-video z-10 overflow-hidden rounded-xl shadow-xl border border-white/5">
                     <LazyImage 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover"
                       />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand progress indicator */}
        <div className="flex items-center gap-2 mt-6 px-2 justify-center lg:justify-start">
          <div className="w-12 h-1 rounded-full bg-linear-to-r from-accent to-accent/20 relative overflow-hidden">
             <div className="absolute inset-0 bg-white/20 animate-progress origin-left"></div>
          </div>
          <span className="text-[9px] font-black uppercase tracking-[2px] text-white/20">Trending News Slider</span>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress {
          animation: progress 6s linear infinite;
        }
      `}} />
    </section>
  );
};

export default TrendingNewsSlider;
