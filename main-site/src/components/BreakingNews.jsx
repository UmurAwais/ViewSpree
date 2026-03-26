import React, { useEffect, useState } from 'react';
import { Flame, Clock, ArrowUpRight } from 'lucide-react';
import LazyImage from './LazyImage';
import { fetchPostsByCategory } from '../lib/wordpress';
import { GridSkeleton } from './Skeleton';

const BreakingNews = ({ onPostClick }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const fetched = await fetchPostsByCategory('breaking-news', 7);
      setPosts(fetched);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
       <section className="py-12 md:py-20 bg-brand-bg md:border-b md:border-white/5 relative overflow-hidden">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-10 md:mb-12 px-1 md:px-0">
              <div className="w-1.5 h-6 md:w-2 md:h-8 bg-white/5 rounded-full" />
              <div className="w-40 md:w-48 h-8 md:h-10 bg-white/5 rounded-md animate-pulse" />
            </div>
            <GridSkeleton count={4} />
          </div>
       </section>
    );
  }

  const mainStory = posts[0] || null;
  const sidebarStories = posts.slice(1);

  if (!mainStory) return null;

  return (
    <section className="py-12 md:py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10 md:mb-12 px-1 md:px-0">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-1.5 h-6 md:w-2 md:h-8 bg-accent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            <h2 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">Breaking Intelligence</h2>
          </div>
          <button className="hidden md:flex py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer items-center gap-2 group">
             Full Feed
             <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                <ArrowUpRight className="w-3 h-3" />
             </div>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Story (Left - 65%) */}
          <div 
            onClick={() => onPostClick && onPostClick(mainStory)}
            className="lg:w-2/3 group cursor-pointer flex flex-col relative overflow-hidden h-full"
          >
             {/* Thumbnail Container */}
             <div className="relative aspect-video rounded-xl md:rounded-[20px] overflow-hidden bg-[#121212] mb-4 md:mb-6 w-full shadow-2xl">
                <LazyImage 
                  src={mainStory.image} 
                  alt={mainStory.title}
                  className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                
                {/* Overlaid Title & Metadata */}
                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="bg-accent text-black px-2 md:px-3 py-1 md:py-1.5 rounded-sm text-[8px] md:text-[10px] font-black uppercase tracking-[2px] shadow-2xl flex items-center gap-2">
                       <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white animate-pulse" />
                       {mainStory.category}
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-[9px] md:text-[11px] font-black uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2 md:px-3 py-1 md:py-1.5 rounded-sm">
                       <Clock className="w-3 md:w-3.5 h-3 md:h-3.5" />
                       {mainStory.date}
                    </div>
                  </div>
                  <h3 className="text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.1] tracking-tighter group-hover:underline decoration-accent decoration-[3px] underline-offset-4 transition-all w-full md:w-11/12 xl:w-4/5 line-clamp-3 md:line-clamp-none">
                    {mainStory.title}
                  </h3>
                </div>
              </div>

              {/* Excerpt Container */}
              <div className="flex flex-col gap-2 md:gap-3 px-1 md:px-2 pb-2">
                <p className="text-white/60 text-base md:text-lg leading-relaxed font-normal line-clamp-2 md:line-clamp-none">
                  {mainStory.excerpt}
                </p>
                <div className="mt-2 md:mt-3 flex items-center gap-3 text-white/40 text-[10px] md:text-[12px] font-bold uppercase tracking-wider">
                  <span>By Technical Desk</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="group-hover:text-white transition-colors flex items-center gap-1">Read Full Story <ArrowUpRight className="w-3 md:w-3.5 h-3 md:h-3.5" /></span>
                </div>
              </div>
          </div>

          {/* Sidebar / Live Feed (Right - 35%) */}
          <div className="lg:w-1/3 flex flex-col lg:pl-10">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3 className="text-white font-black text-lg uppercase tracking-tight flex items-center gap-3">
                  <div className="relative">
                     <div className="w-2.5 h-2.5 rounded-full bg-accent relative z-10" />
                     <div className="w-2.5 h-2.5 rounded-full bg-accent absolute inset-0 animate-ping" />
                  </div>
                  Live Feed
                </h3>
              </div>

              <div className="flex flex-col gap-7 flex-1">
                {sidebarStories.map((story, i) => (
                  <div 
                  key={i} 
                    onClick={() => onPostClick && onPostClick(story)}
                    className="group flex flex-col gap-2 relative pl-6 cursor-pointer"
                  >
                    {/* Timeline Line */}
                    <div className="absolute left-0.75 top-2 bottom-7 w-px bg-white/10 group-last:bg-transparent" />
                    {/* Timeline Node */}
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-[#1a1a1e] bg-white/30 group-hover:bg-accent group-hover:shadow-[0_0_10px_var(--color-accent)] transition-all z-10" />
                    
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider font-display">
                      <span className="text-accent">{story.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-white/40 group-hover:text-white/70 transition-colors">{story.category}</span>
                    </div>
                    <h4 className="text-white/90 text-[15px] font-bold leading-snug group-hover:underline decoration-accent decoration-[3px] underline-offset-2 transition-all line-clamp-2">
                      {story.title}
                    </h4>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-4 text-white/40 hover:text-white text-[10px] font-black uppercase tracking-[3px] transition-all text-left">
                Load More Updates →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
