import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const reviewArticles = [
  {
    title: "iPhone 17 Pro Max Camera Analysis: Computational Mastery",
    category: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    readTime: "16 Min Read"
  },
  {
    title: "Samsung Galaxy S26 Ultra: The Ultimate AI Companion Tested",
    category: "Phones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read"
  },
  {
    title: "iPad Pro M4: Is it Finally a Laptop Replacement?",
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read"
  },
  {
    title: "Samsung Galaxy Tab S10 Ultra: Defining the Android Canvas",
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read"
  },
  {
    title: "Sony WH-1000XM6: The New King of Active Noise Cancellation",
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read"
  },
  {
    title: "Apple AirPods Max 2 Review: Premium Audio Redefined",
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    readTime: "8 Min Read"
  },
  {
    title: "NZXT Player: Three - The Ultimate Pre-built Gaming Machine",
    category: "PC",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read"
  },
  {
    title: "MacBook Pro M4 Max: Performance Boundaries Shattered",
    category: "PC",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">ViewSpree Reviews</h2>
          </div>
          <button className="py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center gap-2">
            Explore Reviews
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Reviews Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewArticles.map((article, index) => (
            <div key={index} className="group cursor-pointer bg-[#202020] hover:bg-[#2a2a2c] transition-colors duration-300 rounded-[28px] p-4 border border-white/5 flex flex-col h-full">
              {/* Thumbnail Container */}
              <div className="relative aspect-16/10 rounded-[20px] overflow-hidden bg-[#121212] mb-5 w-full shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-100"
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
                  <Star className="w-4 h-4 shrink-0" />
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

export default ReviewsSection;
