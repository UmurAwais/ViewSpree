import React, { useState, useEffect } from 'react';
import { useParams, useOutletContext, Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import PostCard from '../components/PostCard';
import LazyImage from '../components/LazyImage';
import Button from '../components/Button';
import CategoryFilters from '../components/CategoryFilters';
import Categories from '../components/Categories';
import { categories as staticCategories } from '../data/categories';
import { fetchPostsByCategory, getCategoryIdBySlug, fetchSubcategories } from '../lib/wordpress';
import { GridSkeleton } from '../components/Skeleton';

const baseCategoryDataMap = {
  gaming: {
    title: "Gaming Intelligence",
    description: "Deep dives into game architecture, engine breakthroughs, and the future of interactive storytelling.",
  },
  ai: {
    title: "AI Analysis",
    description: "Tracking the frontier of neural networks, generative media, and the machines of tomorrow.",
  },
  tech: {
    title: "Technical Industry",
    description: "Inside the boardrooms and labs of the giants shaping our digital reality.",
  },
  reviews: {
    title: "Critical Testing",
    description: "Unbiased, deeply technical evaluations of the latest hardware and software ecosystems.",
  },
  gadgets: {
    title: "Product Hardware",
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
      // Fetch Posts
      const fetchedPosts = await fetchPostsByCategory(slug, 20);
      setPosts(fetchedPosts);
      
      // Fetch Subcategories
      const parentId = await getCategoryIdBySlug(slug);
      if (parentId) {
        const subCats = await fetchSubcategories(parentId);
        setSubs(subCats.map(sc => ({
          name: sc.name,
          slug: sc.slug,
          image: `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800` // Better technical placeholder
        })));
      } else {
        setSubs([]);
      }
      
      setLoading(false);
    }
    loadData();
    window.scrollTo(0, 0);
  }, [slug]);

  const scrollToContent = () => {
    const element = document.getElementById('category-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const info = baseCategoryDataMap[slug] || { title: `${slug.toUpperCase()} Intelligence`, description: `Curated data from the ${slug} sector.` };
  const categoryMeta = staticCategories.find(c => c.slug === slug) || staticCategories[0];
  const heroImage = categoryMeta.image;

  // Filter/Sort logic
  let displayPosts = [...posts];

  if (activeTags.length > 0) {
    displayPosts = displayPosts.filter(post => 
      activeTags.some(tag => post.category.toLowerCase() === tag.toLowerCase())
    );
  }

  displayPosts.sort((a, b) => {
    if (activeFilter === 'Trending') return b.id - a.id;
    if (activeFilter === 'Most Read') return (parseInt(b.readTime) || 0) - (parseInt(a.readTime) || 0);
    return 0; // Default (Latest)
  });

  return (
    <div className="bg-brand-bg min-h-screen text-white overflow-x-hidden">
      {/* Category Hero */}
      <section className="relative w-full pt-12 pb-8 md:pt-16 md:pb-16 lg:pt-16 lg:pb-24 border-b border-white/5">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start gap-4 md:gap-8 text-left order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span className="bg-accent text-black px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[2px]">
                  Sector Node
                </span>
                <div className="h-4 w-px bg-white/10" />
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[2px]">
                  {slug}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                {info.title}
              </h1>
              
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl font-medium">
                {info.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 w-full">
                <Button 
                  variant="primary" 
                  onClick={onSubscribe}
                  className="w-full sm:w-auto px-10 py-4"
                >
                  Join The Space
                </Button>
                {subs.length > 0 && (
                  <div className="flex overflow-x-auto gap-4 py-2 no-scrollbar border-l border-white/5 pl-6 hidden md:flex">
                     {subs.slice(0, 3).map(s => (
                       <Link key={s.slug} to={`/category/${s.slug}`} className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-accent transition-colors whitespace-nowrap">
                         // {s.name}
                       </Link>
                     ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Image Container */}
            <div className="flex-1 w-full max-w-2xl order-1 lg:order-2">
              <div className="relative aspect-video lg:aspect-16/9 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 group shadow-2xl">
                <LazyImage 
                  src={heroImage} 
                  alt={info.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sub-Intelligence Nodes (The Subcategories) */}
      {subs.length > 0 && (
        <Categories 
          title="Go Specific"
          subtitle="Specialized Technical Niches"
          items={subs}
        />
      )}
      
      {/* Feed Control & Grid Section */}
      <section id="category-content" className="pt-8 pb-20">
        <div className="container-custom">
          {/* Componentized Filter Bar */}
          <CategoryFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter}
            activeTags={activeTags}
            onTagsChange={setActiveTags}
            availableTags={['Analysis', 'Spotlight', 'Hardware', 'Software', 'Future', 'Tech']}
          />

          {/* Loading Indicator */}
          {loading ? (
             <div className="py-20">
                <GridSkeleton count={8} />
             </div>
          ) : (
            <>
              {/* Responsive Grid */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-20">
                {displayPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* No Results Fallback */}
              {displayPosts.length === 0 && (
                <div className="py-32 text-center border border-dashed border-white/5 rounded-3xl">
                  <p className="text-white/20 font-black uppercase tracking-[5px]">Transmission Interrupted: No Matching Data</p>
                </div>
              )}

              {/* Load More Action */}
              {displayPosts.length > 0 && (
                <div className="flex justify-center">
                  <Button 
                    variant="primary"
                    className="w-full sm:w-auto px-12 py-5"
                  >
                    Fetch More Intelligence
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default CategoryPage;
