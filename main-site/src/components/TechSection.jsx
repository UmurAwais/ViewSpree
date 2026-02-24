import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import LazyImage from './LazyImage';

const techArticles = [
  {
    title: "Apple Vision Pro 2 Rumors: What's Next in Spatial Computing",
    category: "Apple",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read"
  },
  {
    title: "Google's Gemini Ultra vs GPT-4: The Tech Giant Showdown",
    category: "Google",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read"
  },
  {
    title: "Microsoft Copilot Integration: Changing the Windows Ecosystem",
    category: "Microsoft",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read"
  },
  {
    title: "Amazon AWS Announces Next-Gen Quantum Computing Chips",
    category: "Amazon",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800",
    readTime: "8 Min Read"
  },
  {
    title: "Samsung Expanding Foundry to Challenge TSMC Dominance",
    category: "Samsung",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbfc064b52?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read"
  },
  {
    title: "Meta (Facebook) Doubles Down on the Metaverse Strategy",
    category: "Facebook",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read"
  },
  {
    title: "The State of Venture Capital in 2026 Tech Startups",
    category: "Business",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    readTime: "16 Min Read"
  },
  {
    title: "Apple M4 Chip Benchmarks: Unprecedented Power Efficiency",
    category: "Apple",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read"
  }
];

const TechSection = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Big Tech & Business</h2>
          </div>
          <button className="py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center gap-2">
            Explore Tech
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Tech Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techArticles.map((article, index) => (
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
                  <Globe className="w-4 h-4 shrink-0" />
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

export default TechSection;
