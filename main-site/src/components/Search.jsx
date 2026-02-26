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
        } rounded-lg h-10 px-4 w-64 md:w-80`}
      >
        <SearchIcon className={`w-4 h-4 transition-colors shrink-0 mr-3 ${isFocused ? 'text-white' : 'text-white/40'}`} />
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search store"
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

      {/* Suggested Results Dropdown - Epic Style */}
      {isFocused && query.length > 0 && (
        <div 
          className="absolute top-full mt-2 left-0 right-0 bg-[#2a2a2e] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200"
        >
          {suggestions.length > 0 ? (
            <div className="flex flex-col">
              {suggestions.map((suggestion) => (
                <div 
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-3 hover:bg-[#333338] cursor-pointer flex items-center gap-3 group transition-colors"
                >
                  <div className="w-10 h-13 rounded-md bg-[#1a1a1e] border border-white/5 shrink-0 overflow-hidden relative">
                    <LazyImage src={suggestion.image} alt="" className="opacity-80 group-hover:opacity-100 transition-opacity object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-white/90 group-hover:text-white transition-colors line-clamp-1">{suggestion.title}</span>
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">{suggestion.category}</span>
                  </div>
                </div>
              ))}
              <div 
                onClick={handleSearch}
                className="px-4 py-3 bg-[#333338] border-t border-white/5 text-left text-[11px] font-bold text-white hover:bg-[#3a3a40] transition-all cursor-pointer flex items-center justify-between group"
              >
                <span>Search for "{query}"</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
            </div>
          ) : (
            <div className="px-5 py-6 text-[12px] text-white/40 text-center flex flex-col items-center gap-2">
              <div className="font-bold text-white/60">No results found for "{query}"</div>
              <div className="text-[11px]">Check your spelling or try a different term.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
