import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';
import { fetchPostsByCategory } from '../lib/wordpress';
import { ListSkeleton } from './Skeleton';

const LatestNews = ({ onPostClick }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const posts = await fetchPostsByCategory('viewspree-exclusive', 6);
      setNews(posts);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
       <div className="py-12 md:py-20 flex flex-col gap-10 md:gap-12 container-custom bg-brand-bg">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-6 md:w-2 md:h-8 bg-white/5 rounded-full" />
            <div className="w-40 md:w-48 h-8 md:h-10 bg-white/5 rounded-md animate-pulse" />
          </div>
          <ListSkeleton count={3} />
       </div>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-brand-bg relative overflow-hidden">
      <div className="container-custom">
        {/* Responsive Header */}
        <div className="flex items-center justify-between mb-10 md:mb-12 px-1 md:px-0">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-1.5 h-6 md:w-2 md:h-8 bg-accent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            <h2 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">ViewSpree Exclusive</h2>
          </div>
          <button className="hidden md:flex py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer items-center gap-2 group">
             Full Feed
             <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                <ArrowUpRight className="w-3 h-3" />
             </div>
          </button>
        </div>

        {/* Exclusive Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(`/post/${item.id}`, { state: { post: item } })}
              className="group cursor-pointer bg-[#121212] hover:bg-[#181818] transition-all duration-300 rounded-3xl p-2 border border-white/5 flex flex-col sm:flex-row gap-6 items-center"
            >
              {/* Left: Image */}
              <div className="w-full sm:w-[45%] aspect-16/10 rounded-2xl overflow-hidden shrink-0 border border-white/5">
                <LazyImage 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700" 
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col gap-2 p-2 sm:p-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                  {item.date}
                </p>
                
                <h3 className="text-white font-bold text-lg md:text-[20px] leading-snug group-hover:text-accent transition-colors line-clamp-2 font-display">
                  {item.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2 font-sans">
                  {item.excerpt}
                </p>

                <div className="mt-3">
                  <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest  transition-colors">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
