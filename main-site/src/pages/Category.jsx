import React, { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import PostCard from '../components/PostCard';
import LazyImage from '../components/LazyImage';
import Button from '../components/Button';
import CategoryFilters from '../components/CategoryFilters';
import Categories from '../components/Categories';
import LatestNews from '../components/ViewSpreeExclusive';
import { categories as staticCategories } from '../data/categories';
import { fetchPostsByCategory, getCategoryIdBySlug, fetchSubcategories } from '../lib/wordpress';
import { GridSkeleton } from '../components/Skeleton';

const baseCategoryDataMap = {
  gaming: {
    title: "Gaming Intelligence",
    description: "Deep dives into game architecture, engine breakthroughs, and the future of interactive storytelling.",
  },
  ai: {
    title: "AI Intelligence",
    description: "Tracking the frontier of neural networks, generative media, and the machines of tomorrow.",
  },
  tech: {
    title: "Tech Industry",
    description: "Inside the boardrooms and labs of the giants shaping our digital reality.",
  },
  reviews: {
    title: "Critical Reviews",
    description: "Unbiased, deeply technical evaluations of the latest hardware and software ecosystems.",
  },
  gadgets: {
    title: "Next-Gen Gadgets",
    description: "Hands-on with the portable tech and home architecture that redefines daily life.",
  }
};

const CategoryPage = () => {
  const { slug } = useParams();
  const { onSubscribe } = useOutletContext();
  const [posts, setPosts] = useState([]);
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Latest');
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const fetchedPosts = await fetchPostsByCategory(slug, 20);
      setPosts(fetchedPosts);
      
      const parentId = await getCategoryIdBySlug(slug);
      if (parentId) {
        const subCats = await fetchSubcategories(parentId);
        setSubs(subCats.map(sc => ({
          name: sc.name,
          image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800" // Default subcategory image placeholder
        })));
      } else {
        setSubs([]);
      }
      
      setLoading(false);
    }
    loadData();
  }, [slug]);

  const scrollToContent = () => {
    const element = document.getElementById('category-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const info = baseCategoryDataMap[slug] || baseCategoryDataMap.gaming;
  const categoryMeta = staticCategories.find(c => c.slug === slug) || staticCategories[0];
  const heroImage = categoryMeta.image;

  // Filter/Sort logic
  let displayPosts = [...posts];

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
      {/* Category Hero */}
      <div className="relative w-full pt-16 pb-3 lg:pt-20 overflow-hidden bg-brand-bg">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start gap-8">
              <div className="flex items-center gap-3">
                <span className="bg-accent text-black! px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[2px]">
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
                  onClick={onSubscribe}
                  className="px-10 py-4 rounded-xl text-sm font-black! uppercase tracking-widest bg-accent! text-black! hover:bg-accent/80! transition-all duration-300 flex items-center gap-2"
                >
                  Join The Space
                </Button>
                <button 
                  onClick={scrollToContent}
                  className="px-6 py-4 text-sm font-black uppercase tracking-widest transition-colors text-white/40 hover:text-white flex items-center gap-2 cursor-pointer group"
                >
                  View Data
                </button>
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
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* Subcategories Section */}
      <div id="category-content">
        {subs.length > 0 && (
          <Categories 
            title={`Discover ${slug.charAt(0).toUpperCase() + slug.slice(1)}`}
            subtitle="Navigate by Specialty"
            items={subs}
          />
        )}
      </div>
      
      {/* Content Grid Section */}
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

          {/* Loading Indicator */}
          {loading ? (
             <div className="py-20">
                <GridSkeleton count={8} />
             </div>
          ) : (
            <>
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
                  className="group relative px-8 py-5 font-black uppercase tracking-[4px] text-[12px] rounded-2xl! bg-accent! hover:bg-accent/80! text-black! transition-all duration-500 shadow-2xl overflow-hidden shadow-white/10"
                >
                  <span className="relative z-10">Load More Articles</span>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default CategoryPage;
