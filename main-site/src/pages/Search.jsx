import React, { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import Categories from '../components/Categories';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();

  const filteredPosts = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowerQuery) || 
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.category.toLowerCase().includes(lowerQuery) ||
      (post.subcategory && post.subcategory.toLowerCase().includes(lowerQuery))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-brand-bg pt-18 pb-32">
      <div className="container-custom">
        {/* Search Header */}
        <div className="mb-14 border-b border-white/5 pb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Search results for <span className="text-accent italic">"{query}"</span>
          </h1>
          <p className="text-white/40 font-medium text-base">
              Showing <span className="text-white">{filteredPosts.length}</span> results found in our Intelligence database.
          </p>
        </div>

        {/* Results Grid - Vertical Grid like Epic Games */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12 mb-8">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center mb-20">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/5">
              <SearchIcon className="w-10 h-10 text-white/20" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">No results found</h2>
            <p className="text-white/40 max-w-sm mx-auto text-lg leading-relaxed">
              We couldn't find anything matching <span className="text-white italic">"{query}"</span>. Try another search or explore categories below.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="mt-10 px-10 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/90 transition-all cursor-pointer"
            >
              Back to Store
            </button>
          </div>
        )}
      </div>

      {/* Explore Categories Component */}
      <Categories title="Explore Categories" subtitle="Discover Intelligence" />
    </div>
  );
};

export default SearchPage;
