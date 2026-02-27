import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';
import LazyImage from './LazyImage';

const Search = ({ className = "" }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    if (query.length < 2) return [];
    const lowerQuery = query.toLowerCase();
    return posts
      .filter(post => 
        post.title.toLowerCase().includes(lowerQuery) || 
        post.category.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 5);
  }, [query]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsFocused(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/post/${suggestion.id}`, { state: { post: suggestion } });
    setQuery('');
    setIsFocused(false);
  };

  return (
    <div className={`relative flex items-center ${className} z-50`}>
      <form 
        onSubmit={handleSearch}
        className={`flex items-center bg-[#202024] group transition-all duration-200 ease-out border ${
          isFocused 
            ? 'border-white/20 bg-[#2a2a2e]' 
            : 'border-transparent hover:bg-[#2a2a2e]'
        } rounded-lg w-full h-full px-4`}
      >
        <SearchIcon className={`w-4 h-4 transition-colors shrink-0 mr-3 ${isFocused ? 'text-white' : 'text-white/40'}`} />
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search Here"
          className="bg-transparent border-none outline-none text-[13px] text-white w-full placeholder:text-white/40 font-sans font-medium"
        />

        {query && (
          <button 
            type="button"
            onClick={() => setQuery('')}
            className="shrink-0 ml-2 text-white/40 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </form>

      {/* Suggested Results Dropdown - ViewSpree Style */}
      {isFocused && query.length > 0 && (
        <div 
          className="absolute top-full mt-3 left-0 right-0 blurry-dropdown border border-white/10 shadow-2xl shadow-black/50 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-100 before:absolute before:inset-0 before:bg-linear-to-b before:from-white/5 before:to-transparent before:pointer-events-none"
        >
          {suggestions.length > 0 ? (
            <div className="flex flex-col py-2 relative z-10">
              {suggestions.map((suggestion) => (
                <div 
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-5 py-3 hover:bg-white/5 cursor-pointer flex items-center gap-4 group transition-all duration-300 relative"
                >
                   <span className="w-1.5 h-1.5 rounded-full bg-accent absolute left-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_10px_var(--color-accent)]" />
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1e] border border-white/10 shrink-0 overflow-hidden relative">
                    <LazyImage src={suggestion.image} alt="" className="opacity-70 group-hover:opacity-100 transition-opacity object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                    <span className="text-[14px] font-bold text-white/90 group-hover:text-white transition-colors line-clamp-1">{suggestion.title}</span>
                    <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">{suggestion.category}</span>
                  </div>
                </div>
              ))}
              <div 
                onClick={handleSearch}
                className="mx-2 mt-2 px-5 py-3 bg-white/5 border border-white/5 rounded-xl text-left text-[11px] font-black text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                    <SearchIcon className="w-3.5 h-3.5 text-accent" />
                    <span className="uppercase tracking-widest">Search for "{query}"</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
            </div>
          ) : (
            <div className="px-6 py-8 text-[12px] text-white/40 text-center flex flex-col items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <SearchIcon className="w-5 h-5 opacity-20" />
              </div>
              <div>
                <div className="font-bold text-white/60 text-sm">No results found</div>
                <div className="text-[11px] mt-1">Try another search term.</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
