import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import PostCard from '../components/PostCard';
import LazyImage from '../components/LazyImage';
import Button from '../components/Button';
import CategoryFilters from '../components/CategoryFilters';
import Categories from '../components/Categories';
import LatestNews from '../components/ViewSpreeExclusive';
import { categories } from '../data/categories';

const categoryData = {
  gaming: {
    title: "Gaming Intelligence",
    description: "Deep dives into game architecture, engine breakthroughs, and the future of interactive storytelling.",
    subcategories: [
      { name: 'Rockstar Games', image: 'https://cms-assets.unrealengine.com/AiKUh5PQCTaOFnmJDZJBfz/resize=width:900/output=format:webp/cmj3816rr1jv307ohfqesx8uf' },
      { name: 'PlayStation', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800' },
      { name: 'Nintendo', image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=800' },
      { name: 'XBOX', image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800' },
      { name: 'EA Sports', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' }
    ],
    exclusive: [
      {
        date: 'FEB 24, 2026',
        title: 'Project Dragon: Inside the Next Gen RPG from Rockstar',
        description: 'Exclusive technical analysis of the new engine features being developed for their next unannounced title.',
        category: 'Rockstar Games',
        image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800'
      },
      {
        date: 'FEB 20, 2026',
        title: 'The Future of VR: Sony Patent Reveals New Sense Controllers',
        description: 'A deep dive into the haptic tech that could change how we interact with virtual worlds.',
        category: 'PlayStation',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  ai: {
    title: "AI Intelligence",
    description: "Tracking the frontier of neural networks, generative media, and the machines of tomorrow.",
    subcategories: [
      { name: 'LLMs', image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c6757?auto=format&fit=crop&q=80&w=800' },
      { name: 'Robotics', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
      { name: 'Vision', image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800' },
      { name: 'Ethics', image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800' },
      { name: 'Automation', image: 'https://images.unsplash.com/photo-1518433278981-2244247571cf?auto=format&fit=crop&q=80&w=800' }
    ],
    exclusive: [
      {
        date: 'FEB 22, 2026',
        title: 'GPT-5 Architecture: What the Leaks Tell Us About Recursive Learning',
        description: 'New research papers suggest OpenAI is shifting toward a modular approach for their next foundation model.',
        category: 'LLMs',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
      },
      {
        date: 'FEB 18, 2026',
        title: 'Beyond Transformers: The Rise of Liquid Neural Networks',
        description: 'How a new type of AI architecture could make real-time edge processing more efficient than ever.',
        category: 'Automation',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  tech: {
    title: "Tech Industry",
    description: "Inside the boardrooms and labs of the giants shaping our digital reality.",
    subcategories: [
      { name: 'Software', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
      { name: 'Cloud', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800' },
      { name: 'Cybersec', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
      { name: 'Web3', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800' },
      { name: 'Enterprise', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
    ],
    exclusive: [
      {
        date: 'FEB 21, 2026',
        title: 'The Silicon Frontier: Inside the Quest for 1nm Chips',
        description: 'TSMC and ASML are partnering on a new lithography technique that could extend Moores Law for another decade.',
        category: 'Hardware',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
      },
      {
        date: 'FEB 17, 2026',
        title: 'Data Sovereignty: The Rise of Sovereign Clouds in Europe',
        description: 'How government regulations are forcing a massive architectural shift in how cloud giants store user data.',
        category: 'Cloud',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  reviews: {
    title: "Critical Reviews",
    description: "Unbiased, deeply technical evaluations of the latest hardware and software ecosystems.",
    subcategories: [
      { name: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800' },
      { name: 'Phones', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800' },
      { name: 'Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' },
      { name: 'Cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800' },
      { name: 'SmartHome', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800' }
    ],
    exclusive: [
      {
        date: 'FEB 23, 2026',
        title: 'Titanium vs Carbon Fiber: The Evolution of Professional Gear',
        description: 'Testing the thermal and structural limits of the newest high-end materials in consumer electronics.',
        category: 'Laptops',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800'
      },
      {
        date: 'FEB 19, 2026',
        title: 'The Perfect Frame: Analyzing Color Science Across Flagship Sensors',
        description: 'Why specs don\'t tell the whole story when it comes to the "soul" of an image.',
        category: 'Cameras',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  gadgets: {
    title: "Next-Gen Gadgets",
    description: "Hands-on with the portable tech and home architecture that redefines daily life.",
    subcategories: [
      { name: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
      { name: 'VR/AR', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800' },
      { name: 'Drones', image: 'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=800' },
      { name: 'Tablets', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800' },
      { name: 'Accessories', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' }
    ],
    exclusive: [
      {
        date: 'FEB 25, 2026',
        title: 'Neural Links: The Next Stage of Human-Tech Interfacing',
        description: 'How non-invasive EEG hardware is finally reaching consumer-ready latency for gaming and productivity.',
        category: 'Wearables',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'
      },
      {
        date: 'FEB 15, 2026',
        title: 'Autonomous Home: Matter 3.0 and the End of Ecosystem Walls',
        description: 'Why your smart home is finally about to just "work" regardless of the brand on the box.',
        category: 'SmartHome',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800'
      }
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
  const [activeFilter, setActiveFilter] = useState('Latest');
  const [activeTags, setActiveTags] = useState([]);
  
  // Resolve Hero Image from central categories data
  const categoryMeta = categories.find(c => c.slug === slug) || categories[0];
  const heroImage = categoryMeta.image;

  // Filter/Sort logic
  let displayPosts = [...placeholderPosts];

  // Apply Tag Filtering
  if (activeTags.length > 0) {
    displayPosts = displayPosts.filter(post => 
      activeTags.some(tag => post.category.toLowerCase() === tag.toLowerCase())
    );
  }

  // Apply Sorting
  displayPosts.sort((a, b) => {
    if (activeFilter === 'Trending') return b.id - a.id;
    if (activeFilter === 'Most Read') return (parseInt(b.readTime) || 0) - (parseInt(a.readTime) || 0);
    return 0; // Default (Latest)
  });

  return (
    <div className="bg-brand-bg min-h-screen text-white">
      {/* --- Category Hero: Simplified & Premium --- */}
      <div className="relative w-full pt-16 pb-3 lg:pt-20 overflow-hidden bg-brand-bg">
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
                  src={heroImage} 
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
      
      {/* --- Category Exclusive Section --- */}
      {info.exclusive && (
        <LatestNews 
          title={`${slug.charAt(0).toUpperCase() + slug.slice(1)} Exclusive`}
          items={info.exclusive}
        />
      )}

      {/* --- Content Grid Section --- */}
      <section className="pt-8 pb-20">
        <div className="container-custom">
          {/* Componentized Filter Bar */}
          <CategoryFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter}
            activeTags={activeTags}
            onTagsChange={setActiveTags}
            availableTags={['News', 'Spotlight', 'Business', 'Hardware', 'Gaming', 'Tech']}
          />

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {displayPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center">
            <Button 
              variant="secondary"
              className="group relative px-8 py-5 font-black uppercase tracking-[4px] text-[12px] rounded-2xl! bg-accent! hover:bg-accent/80! text-white transition-all duration-500 shadow-2xl overflow-hidden shadow-white/10"
            >
              <span className="relative z-10">Load More Articles</span>
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default CategoryPage;
