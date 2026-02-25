import React from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import PostCard from '../components/PostCard';
import LazyImage from '../components/LazyImage';
import Button from '../components/Button';
import CategoryFilters from '../components/CategoryFilters';
import Categories from '../components/Categories';

const categoryData = {
  gaming: {
    title: "Gaming Intelligence",
    description: "Deep dives into game architecture, engine breakthroughs, and the future of interactive storytelling.",
    heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000",
    subcategories: [
      { name: 'Rockstar Games', image: 'https://images.unsplash.com/photo-1580234811497-9bd7fd2f357b?auto=format&fit=crop&q=80&w=800' },
      { name: 'PlayStation', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800' },
      { name: 'Nintendo', image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=800' },
      { name: 'XBOX', image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800' },
      { name: 'EA Sports', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  ai: {
    title: "AI Intelligence",
    description: "Tracking the frontier of neural networks, generative media, and the machines of tomorrow.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    subcategories: [
      { name: 'LLMs', image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c6757?auto=format&fit=crop&q=80&w=800' },
      { name: 'Robotics', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
      { name: 'Vision', image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800' },
      { name: 'Ethics', image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800' },
      { name: 'Automation', image: 'https://images.unsplash.com/photo-1518433278981-2244247571cf?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  tech: {
    title: "Tech Industry",
    description: "Inside the boardrooms and labs of the giants shaping our digital reality.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    subcategories: [
      { name: 'Software', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
      { name: 'Cloud', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800' },
      { name: 'Cybersec', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
      { name: 'Web3', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800' },
      { name: 'Enterprise', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  reviews: {
    title: "Critical Reviews",
    description: "Unbiased, deeply technical evaluations of the latest hardware and software ecosystems.",
    heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=2000",
    subcategories: [
      { name: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800' },
      { name: 'Phones', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800' },
      { name: 'Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' },
      { name: 'Cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800' },
      { name: 'SmartHome', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  gadgets: {
    title: "Next-Gen Gadgets",
    description: "Hands-on with the portable tech and home architecture that redefines daily life.",
    heroImage: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=2000",
    subcategories: [
      { name: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
      { name: 'VR/AR', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800' },
      { name: 'Drones', image: 'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=800' },
      { name: 'Tablets', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800' },
      { name: 'Accessories', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' }
    ]
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
      {/* --- Category Hero: Simplified & Premium --- */}
      <div className="relative w-full py-16 lg:py-20 overflow-hidden bg-brand-bg border-b border-white/5">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start gap-8">
              <div className="flex items-center gap-3">
                <span className="bg-accent text-white px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[2px]">
                  Explore
                </span>
                <div className="h-4 w-px bg-white/10" />
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[2px]">
                  {slug}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                {info.title}
              </h1>
              
              <p className="text-xl text-white/50 leading-relaxed max-w-xl font-medium">
                {info.description}
              </p>

              <div className="flex items-center gap-6 pt-4">
                <Button 
                  variant="secondary" 
                  className="px-10 py-4 rounded-xl text-sm font-black uppercase tracking-widest bg-accent! text-white hover:bg-accent/80! transition-all duration-300"
                >
                  Join The Space
                </Button>
                <Button 
                  variant="ghost"
                  className="px-6 py-4 text-sm font-black uppercase tracking-widest transition-colors text-white/40"
                >
                  View Data
                </Button>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative aspect-16/10 rounded-4xl overflow-hidden border border-white/5 group">
                <LazyImage 
                  src={info.heroImage} 
                  alt={info.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                
                {/* Subtle Image Tag */}
                {/* <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">
                    {slug} // 2026.4
                  </span>
                </div> */}
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* --- Subcategories Section --- */}
      {info.subcategories && (
        <Categories 
          title={`Discover ${slug.charAt(0).toUpperCase() + slug.slice(1)}`}
          subtitle="Navigate by Specialty"
          items={info.subcategories}
        />
      )}

      {/* --- Content Grid Section --- */}
      <section className="pt-8 pb-20">
        <div className="container-custom">
          {/* Componentized Filter Bar */}
          <CategoryFilters />

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {placeholderPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center">
            <Button 
              variant="secondary"
              className="group relative px-12 py-5 font-black uppercase tracking-[4px] text-[12px] rounded-full hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl overflow-hidden shadow-white/10"
            >
              <span className="relative z-10 italic">Load More Articles</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default CategoryPage;
