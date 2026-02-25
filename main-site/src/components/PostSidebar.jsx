import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, TrendingUp } from 'lucide-react';
import Search from './Search';
import { categories } from '../data/categories';

// Real Subcategory Data mapping from the site's architecture
const subcategoryData = {
  gaming: ['Rockstar Games', 'PlayStation', 'Nintendo', 'XBOX', 'EA Sports'],
  ai: ['LLMs', 'Robotics', 'Vision', 'Ethics', 'Automation'],
  tech: ['Software', 'Cloud', 'Cybersec', 'Web3', 'Enterprise'],
  reviews: ['Laptops', 'Phones', 'Audio', 'Cameras', 'SmartHome'],
  gadgets: ['Wearables', 'VR/AR', 'Drones', 'Tablets', 'Accessories']
};

const PostSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Discovery Pool: Actual Site Categories & Subcategories
  const discoveryPool = useMemo(() => {
    const allNodes = [];
    
    // 1. Add Main Categories
    categories.forEach(cat => {
      allNodes.push({ name: cat.name, slug: cat.slug, isMain: true });
      
      // 2. Add Their Respective Subcategories
      const subs = subcategoryData[cat.slug] || [];
      subs.forEach(subName => {
        allNodes.push({ name: subName, slug: cat.slug, isMain: false });
      });
    });

    // 3. Shuffle and pick a dynamic mix
    return allNodes
      .sort(() => Math.random() - 0.5)
      .slice(0, 10); // Show 10 random real nodes
  }, [location.pathname]); // Refresh on navigation

  const trendingPosts = [
    {
      id: 't1',
      title: "The Architecture of Tomorrow: 2nm Silicon Breakthroughs",
      category: "Semiconductors",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      time: "5 Min Read"
    },
    {
      id: 't2',
      title: "Neural Radiance Fields: The Future of Real-time Rendering",
      category: "Graphics Tech",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400",
      time: "8 Min Read"
    },
    {
      id: 't3',
      title: "GTA VI Physics: Next-Gen Procedural Animation",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400",
      time: "12 Min Read"
    }
  ];

  return (
    <aside className="sticky top-28 space-y-16 h-fit w-full">
      {/* Search Widget - Using Site Search Component */}
      <div className="w-full">
         <Search className="w-full" />
      </div>

      {/* Trending Briefings */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-2 h-8 bg-accent rounded-full" />
          <h2 className="text-white text-xl font-black font-display uppercase tracking-widest">Trending</h2>
        </div>
        <div className="space-y-4">
          {trendingPosts.map((p) => (
            <div 
              key={p.id} 
              className="bg-[#121212] hover:bg-[#181818] transition-colors duration-300 rounded-[20px] p-2.5 flex items-center gap-4 cursor-pointer group border border-white/5"
              onClick={() => navigate('/post/1', { state: { post: p } })}
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#0a0a0c]">
                <img 
                  src={p.image} 
                  alt="" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0 pr-2">
                <span className="text-accent text-[8px] font-black uppercase tracking-[2px] mb-1 font-display">
                  {p.category}
                </span>
                <h5 className="text-[13px] font-bold text-white leading-[1.3] mb-2 group-hover:text-accent transition-all font-display line-clamp-2">
                  {p.title}
                </h5>
                <div className="flex items-center gap-2 text-[9px] text-white/30 font-black uppercase tracking-widest font-sans">
                   <Clock size={10} className="opacity-50" />
                   <span>{p.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intelligence Feed Newsletter */}
      <div className="bg-[#0f0f12] border border-white/5 rounded-4xl p-8 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 group-hover:text-accent transition-all animate-pulse">
          <TrendingUp size={48} />
        </div>
        <h4 className="text-xl font-black uppercase tracking-tighter text-white mb-4 font-display italic">Intelligence Feed</h4>
        <p className="text-sm text-white/40 font-medium leading-relaxed mb-8 font-sans">
          Join 50K+ professionals decoding the technical future.
        </p>
        <div className="flex flex-col gap-3">
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-[10px] font-black tracking-widest outline-none focus:border-accent font-sans transition-all text-white"
          />
          <button className="cursor-pointer w-full bg-accent hover:bg-accent/90 text-white font-black py-4 rounded-xl text-[10px] tracking-[2px] uppercase transition-all shadow-lg shadow-accent/20 font-sans">
            Subscribe
          </button>
        </div>
      </div>

      {/* Discovery Sections - Randomized Mix */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-8 bg-accent rounded-full" />
          <h2 className="text-white text-xl font-black uppercase tracking-tighter font-display">Discovery</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {discoveryPool.map((node, i) => (
            <button 
              key={`${node.name}-${i}`} 
              onClick={() => navigate(`/category/${node.slug}`)}
              className={`cursor-pointer px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all font-sans whitespace-nowrap
                ${node.isMain ? 'text-white border-white/20' : 'text-white/40 hover:text-white hover:border-accent/40'}
              `}
            >
              {node.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default PostSidebar;
