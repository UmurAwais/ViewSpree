import React from 'react';

const Loader = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center py-20 ${className}`}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Background Trace Ring */}
        <div className="absolute inset-0 rounded-full border border-white/5 shadow-inner" />
        
        {/* High-Speed Accent Arc */}
        <div className="absolute inset-0 rounded-full border-t border-accent animate-spin duration-700" />
        
        {/* Logo Symbol Container */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-[#121212]/30 p-1.5 border border-white/5">
           <img 
            src="/favicon.webp" 
            alt="ViewSpree" 
            className="w-full h-full object-contain opacity-100" 
           />
        </div>
      </div>
    </div>
  );
};

export default Loader;
