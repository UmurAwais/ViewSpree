import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <div className="relative flex items-center">
      <div 
        className={`flex items-center bg-[#161618] border transition-all duration-300 ease-out shadow-inner ${
          isFocused 
            ? 'w-72 md:w-112.5 border-white/20' 
            : 'w-64 md:w-72 border-white/10'
        } rounded-full h-11 px-5`}
      >
        <SearchIcon className="w-4.5 h-4.5 text-white/30 mr-3.5 shrink-0" />
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search"
          className="bg-transparent border-none outline-none text-[15px] text-white w-full placeholder:text-white/25 font-display font-medium"
        />

        {query && (
          <button 
            onClick={() => setQuery('')}
            className="shrink-0 ml-2 text-white/20 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown - Minimalist */}
      {isFocused && query.length > 2 && (
        <div className="absolute top-full mt-3 left-0 right-0 bg-[#0c0c0e] border border-white/5 shadow-3xl rounded-3xl z-50 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-2 text-[10px] font-black text-white/20 uppercase tracking-[4px] border-b border-white/5 mb-2">
            Suggested
          </div>
          <div className="px-6 py-3 hover:bg-white/5 cursor-pointer flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 shrink-0 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=600" alt="" className="opacity-40 group-hover:opacity-100 transition-opacity object-cover w-full h-full" />
            </div>
            <span className="text-[14px] text-white/60 group-hover:text-white transition-colors">Ray Tracing Analysis v5.4.1</span>
          </div>
          <div className="px-6 py-3 hover:bg-white/5 cursor-pointer flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 shrink-0 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600" alt="" className="opacity-40 group-hover:opacity-100 transition-opacity object-cover w-full h-full" />
            </div>
            <span className="text-[14px] text-white/60 group-hover:text-white transition-colors">Performance Benchmarks</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
