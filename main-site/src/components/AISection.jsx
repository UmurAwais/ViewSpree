import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PostCard from './PostCard';
import { fetchPostsByCategory } from '../lib/wordpress';
import { GridSkeleton } from './Skeleton';

const AISection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const posts = await fetchPostsByCategory('ai', 8);
      setArticles(posts);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <div className="w-1.5 h-6 md:w-2 md:h-8 bg-white/5 rounded-full" />
            <div className="w-28 md:w-40 h-8 md:h-10 bg-white/5 rounded-md animate-pulse" />
          </div>
          <GridSkeleton count={4} />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Responsive Header */}
        <div className="flex items-center justify-between mb-10 md:mb-12 px-1 md:px-0">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-1.5 h-6 md:w-2 md:h-8 bg-accent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            <h2 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">AI Intelligence</h2>
          </div>
          <button 
            onClick={() => navigate('/category/ai')}
            className="hidden md:flex py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer items-center gap-2 group"
          >
            Explore AI
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {articles.map((article) => (
            <PostCard key={article.id} post={article} />
          ))}
        </div>

        {/* Mobile Action Button */}
        <div className="mt-8 md:hidden w-full px-1">
          <button 
            onClick={() => navigate('/category/ai')}
            className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-white/80 text-[10px] font-black uppercase tracking-[3px] active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            Explore AI Intelligence
            <ArrowUpRight className="w-4 h-4 text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AISection;
