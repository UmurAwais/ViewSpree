import React, { useState } from 'react';
import { ArrowRight, Newspaper, X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent py-1.5 md:py-1 relative z-60 overflow-hidden border-b border-white/10 shadow-lg group">
      {/* Decorative Shine Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      
      <div className="container-custom flex items-center justify-center gap-3 md:gap-6 relative z-10 px-8 md:px-6">
        
        {/* Centered Blog Alert */}
        <div className="flex items-center gap-2 md:gap-4 overflow-hidden shrink min-w-0">
          <div className="flex shrink-0 items-center gap-2 px-1.5 md:px-2 py-0.5 bg-white/10 rounded-sm border border-white/20">
            <Newspaper className="w-3 h-3 text-white" />
            <span className="text-white text-[7px] md:text-[8px] font-black uppercase tracking-[1px] md:tracking-[2px] font-display whitespace-nowrap">New Post</span>
          </div>
          
          <p className="text-white font-black text-[10px] md:text-[12px] tracking-tight uppercase truncate">
            The Future of Ray Tracing: <span className="font-medium opacity-90 capitalize tracking-normal hidden sm:inline">Technical analysis of ViewSpree Engine v5.4.</span>
          </p>
        </div>

        {/* Minimalist Action Link */}
        <button className="flex shrink-0 items-center gap-1 md:gap-2 group/btn cursor-pointer py-1 px-2 md:px-4 hover:bg-white/10 rounded-sm transition-all whitespace-nowrap">
          <span className="text-white font-black text-[9px] md:text-[10px] uppercase tracking-[1.5px] md:tracking-[2px]">Read Now</span>
          <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-white transition-transform group-hover:translate-x-1" />
        </button>

      </div>

      {/* Dismiss Button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer z-20"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
