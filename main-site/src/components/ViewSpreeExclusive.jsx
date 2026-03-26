import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PostCard from './PostCard';
import { fetchPosts } from '../lib/wordpress';
import { ListSkeleton } from './Skeleton';

const LatestNews = ({ onPostClick }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const posts = await fetchPosts({ per_page: 6 });
      setNews(posts);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
       <div className="py-20 flex flex-col gap-12 container-custom bg-brand-bg">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-white/5 rounded-full" />
            <div className="w-48 h-8 bg-white/5 rounded-md animate-pulse" />
          </div>
          <ListSkeleton count={3} />
       </div>
    );
  }

  return (
    <section className="py-20 bg-brand-bg md:border-b md:border-white/5 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">ViewSpree Exclusive</h2>
          </div>
          <button className="hidden md:flex py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer items-center gap-2 group">
             Full Feed
             <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                <ArrowUpRight className="w-3 h-3" />
             </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <PostCard post={item} isHorizontal={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
