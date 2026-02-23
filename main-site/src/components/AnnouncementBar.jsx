import React, { useState } from 'react';
import { ArrowRight, Newspaper, X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent py-1 relative z-60 overflow-hidden border-b border-white/10 shadow-lg group">
      {/* Decorative Shine Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      
      <div className="container-custom flex items-center justify-center gap-6 relative z-10">
        
        {/* Centered Blog Alert */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-2 py-0.5 bg-white/10 rounded-sm border border-white/20">
            <Newspaper className="w-3 h-3 text-white" />
            <span className="text-white text-[8px] font-black uppercase tracking-[2px] font-display">New Post</span>
          </div>
          
          <p className="text-white font-black text-[11px] md:text-[12px] tracking-tight uppercase">
            The Future of Ray Tracing: <span className="font-medium opacity-90 capitalize tracking-normal">Technical analysis of ViewSpree Engine v5.4.</span>
          </p>
        </div>

        {/* Minimalist Action Link */}
        <button className="flex items-center gap-2 group/btn cursor-pointer py-1 px-4 hover:bg-white/10 rounded-sm transition-all">
          <span className="text-white font-black text-[10px] uppercase tracking-[2px]">Read Now</span>
          <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
        </button>

      </div>

      {/* Dismiss Button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer z-20"
        aria-label="Close announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
