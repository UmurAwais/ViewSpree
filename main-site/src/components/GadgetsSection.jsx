import React from 'react';
import LazyImage from './LazyImage';
import { ArrowUpRight, Watch } from 'lucide-react';

const gadgetArticles = [
  {
    title: "Sony bravia 9 Review: The Mini LED King Has Arrived",
    category: "TVs",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read"
  },
  {
    title: "Google Pixel 9 Pro Fold: The Folding Phone, Perfected",
    category: "Phones",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800",
    readTime: "18 Min Read"
  },
  {
    title: "Apple Watch Ultra 3 vs Garmin Epix Pro: Ultimate Outdoor Showdown",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read"
  },
  {
    title: "Sonos Era 300 Review: Spatial Audio Actually Matters",
    category: "Speakers",
    image: "https://images.unsplash.com/photo-1545454675-a63e2316e6f4?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read"
  },
  {
    title: "Dell XPS 14/16: The Bold New Era of Windows Laptops",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read"
  },
  {
    title: "Bose QuietComfort Ultra: Still The Gold Standard of ANC",
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read"
  },
  {
    title: "MacBook Air M3: Why It's The Only Laptop Most People Need",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    readTime: "13 Min Read"
  },
  {
    title: "LG G4 OLED TV: Unlocking Mind-Blowing HDR Brightness",
    category: "TVs",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read"
  }
];

const GadgetsSection = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Gadgets</h2>
          </div>
          <button className="py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center gap-2">
            Explore Gadgets
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Gadgets Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gadgetArticles.map((article, index) => (
            <div key={index} className="group cursor-pointer bg-[#202020] hover:bg-[#2a2a2c] transition-colors duration-300 rounded-[28px] p-4 border border-white/5 flex flex-col h-full">
              {/* Thumbnail Container */}
              <div className="relative aspect-16/10 rounded-[20px] overflow-hidden bg-[#121212] mb-5 w-full shrink-0">
                <LazyImage 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Visual Category Badge on Hover */}
                <div className="absolute top-4 left-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-accent text-white px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-[2px] shadow-2xl">
                    {article.category}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 px-1 pb-1">
                <h3 className="text-white font-bold text-[17px] leading-snug group-hover:underline decoration-accent decoration-[3px] underline-offset-2 transition-all line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-white/50 text-[13px] font-medium">
                  <Watch className="w-4 h-4 shrink-0" />
                  <span className="truncate">{article.category} • {article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GadgetsSection;
