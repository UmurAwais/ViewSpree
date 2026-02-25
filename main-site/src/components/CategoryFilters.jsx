import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import Button from './Button';

const CategoryFilters = ({ activeFilter = 'Latest', onFilterChange }) => {
  const mainFilters = ['Latest', 'Most Read', 'Trending'];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-8 border-b border-white/5 pb-6">
      {/* Category Tabs */}
      <div className="flex items-center gap-10">
        {mainFilters.map((filter) => (
          <button 
            key={filter}
            onClick={() => onFilterChange?.(filter)}
            className={`text-[11px] font-black uppercase tracking-[3px] transition-all hover:text-white relative pb-2 ${
              activeFilter === filter 
                ? 'text-accent border-b-2 border-accent' 
                : 'text-white/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Action Buttons (Refine & Tags) */}
      <div className="flex items-center gap-4">
        <button className="group flex items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-white/2 border border-white/5 hover:border-accent/30 hover:bg-accent/2 transition-all duration-300 cursor-pointer">
          <Filter className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white">Refine</span>
        </button>

        <button className="group flex items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-white/2 border border-white/5 hover:border-accent/30 hover:bg-accent/2 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white">All Tags</span>
            <ChevronDown className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CategoryFilters;
