import React, { useState } from 'react';
import { Filter, ChevronDown, Check } from 'lucide-react';

const CategoryFilters = ({ 
  activeFilter = 'Latest', 
  onFilterChange,
  activeTags = [],
  onTagsChange,
  availableTags = ['Hardware', 'Software', 'AI', 'Gaming', 'Cloud', 'Design']
}) => {
  const [isRefineOpen, setIsRefineOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const mainFilters = ['Latest', 'Most Read', 'Trending'];

  const toggleTag = (tag) => {
    const newTags = activeTags.includes(tag)
      ? activeTags.filter(t => t !== tag)
      : [...activeTags, tag];
    onTagsChange?.(newTags);
  };

  return (
    <div className="relative flex flex-col gap-6 mb-10 border-b border-white/5 pb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
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
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setIsRefineOpen(!isRefineOpen);
              setIsTagsOpen(false);
            }}
            className={`group flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer border ${
              isRefineOpen 
                ? 'bg-accent border-accent text-white' 
                : 'bg-white/2 border-white/5 text-white/60 hover:border-white/20'
            }`}
          >
            <Filter className={`w-3.5 h-3.5 ${isRefineOpen ? 'text-white' : 'text-white/40'}`} />
            <span className="text-[10px] font-black uppercase tracking-widest">Refine</span>
          </button>

          <button 
            onClick={() => {
              setIsTagsOpen(!isTagsOpen);
              setIsRefineOpen(false);
            }}
            className={`group flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer border ${
              activeTags.length > 0 || isTagsOpen
                ? 'bg-white/10 border-white/20 text-white' 
                : 'bg-white/2 border-white/5 text-white/60 hover:border-white/20'
            }`}
          >
            <span className="text-[10px] font-black uppercase tracking-widest">
              {activeTags.length > 0 ? `Tags (${activeTags.length})` : 'All Tags'}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isTagsOpen ? 'rotate-180' : ''} ${activeTags.length > 0 ? 'text-accent' : 'text-white/20'}`} />
          </button>
        </div>
      </div>

      {/* Tags Dropdown Panel */}
      {isTagsOpen && (
        <div className="absolute top-full right-0 mt-4 w-72 bg-[#121212] border border-white/10 rounded-2xl p-5 z-50 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Select Tags</span>
            {activeTags.length > 0 && (
              <button 
                onClick={() => onTagsChange?.([])}
                className="text-[10px] font-bold text-accent hover:underline"
              >
                Clear All
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                  activeTags.includes(tag)
                    ? 'bg-accent text-white'
                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Refine / Search Mini Panel */}
      {isRefineOpen && (
        <div className="absolute top-full right-0 mt-4 w-64 bg-[#121212] border border-white/10 rounded-2xl p-5 z-50 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-4">Content Type</span>
          <div className="space-y-3">
            {['All Articles', 'Videos Only', 'Exclusive Only'].map((opt) => (
              <button 
                key={opt}
                className="w-full flex items-center justify-between group cursor-pointer"
              >
                <span className="text-[12px] font-bold text-white/60 group-hover:text-white transition-colors">{opt}</span>
                <div className="w-4 h-4 rounded-full border border-white/10 flex items-center justify-center">
                  {opt === 'All Articles' && <div className="w-2 h-2 rounded-full bg-accent" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilters;
