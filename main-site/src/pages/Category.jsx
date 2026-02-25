import React from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import PostCard from '../components/PostCard';
import LazyImage from '../components/LazyImage';

const categoryData = {
  gaming: {
    title: "Gaming Intelligence",
    description: "Deep dives into game architecture, engine breakthroughs, and the future of interactive storytelling.",
    heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000"
  },
  ai: {
    title: "AI Intelligence",
    description: "Tracking the frontier of neural networks, generative media, and the machines of tomorrow.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
  },
  tech: {
    title: "Tech Industry",
    description: "Inside the boardrooms and labs of the giants shaping our digital reality.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
  },
  reviews: {
    title: "Critical Reviews",
    description: "Unbiased, deeply technical evaluations of the latest hardware and software ecosystems.",
    heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=2000"
  },
  gadgets: {
    title: "Next-Gen Gadgets",
    description: "Hands-on with the portable tech and home architecture that redefines daily life.",
    heroImage: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=2000"
  }
};

const placeholderPosts = [
  {
    id: 1,
    title: "The Future of Ray Tracing in Real-Time Environments",
    excerpt: "Exploring how the newest hardware acceleration is changing the way we perceive digital light...",
    category: "News",
    date: "Feb 24, 2026",
    image: "https://images.unsplash.com/photo-1614741487278-78a55d27a442?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Neural Radiance Fields: A New Era of 3D Reconstruction",
    excerpt: "Why NeRFs are becoming the standard for high-fidelity asset creation in blockbuster VFX...",
    category: "Spotlight",
    date: "Feb 22, 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    readTime: "12 min"
  },
  {
    id: 3,
    title: "Sustainable Data Centers: Powering the Cloud with Fusion",
    excerpt: "How the next decade of server architecture will rely on clean energy breakthroughs...",
    category: "Business",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    readTime: "10 min"
  },
  {
    id: 4,
    title: "The Rise of On-Device AI: Privacy vs Performance",
    excerpt: "Can mobile processors keep up with the demands of locally hosted Large Language Models?",
    category: "Hardware",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    readTime: "15 min"
  },
  {
    id: 5,
    title: "Console Wars 2026: Why Ecosystems Matter More Than Specs",
    excerpt: "Analyzing the shift from hardware dominance to service-based subscription growth.",
    category: "Gaming",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    readTime: "9 min"
  },
  {
    id: 6,
    title: "Micro-LED Displays: The End of OLED Dominance?",
    excerpt: "Why manufacturers are betting big on inorganic pixels for the next generation of screens.",
    category: "Tech",
    date: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800",
    readTime: "11 min"
  }
];

const CategoryPage = () => {
  const { slug } = useParams();
  const info = categoryData[slug] || categoryData.gaming;

  return (
    <div className="bg-brand-bg min-h-screen text-white">
      {/* --- Category Hero --- */}
      <div className="relative w-full h-[50vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <LazyImage 
            src={info.heroImage} 
            alt={info.title}
            className="w-full h-full object-cover grayscale-20 opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/40 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-accent text-white px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[2px]">
                Explore
              </span>
              <div className="h-px w-12 bg-white/20" />
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[2px]">
                {slug}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              {info.title}
            </h1>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
              {info.description}
            </p>
          </div>
        </div>
      </div>

      {/* --- Content Grid Section --- */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-8">
              {['Latest', 'Most Read', 'Trending'].map((filter, i) => (
                <button 
                  key={filter}
                  className={`text-[12px] font-black uppercase tracking-[3px] transition-colors ${
                    i === 0 ? 'text-accent' : 'text-white/30 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[12px] font-bold hover:bg-white/10 transition-all">
                <Filter className="w-4 h-4" />
                Refine
              </button>
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[12px] font-bold hover:bg-white/10 transition-all">
                All Tags
                <ChevronDown className="w-4 h-4 text-white/40" />
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {placeholderPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center">
            <button className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-[4px] text-[12px] rounded-full hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl overflow-hidden shadow-white/10">
              <span className="relative z-10 italic">Load More Articles</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default CategoryPage;
