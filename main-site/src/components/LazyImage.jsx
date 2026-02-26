import React, { useState } from 'react';
const favicon = '/favicon.webp';

const LazyImage = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full shrink-0">
      {/* Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#161618]">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-8 h-8 rounded-full border border-white/10" />
            <div className="absolute w-8 h-8 rounded-full border border-transparent border-t-accent animate-spin duration-1000" />
            <img src={favicon} alt="" className="w-4 h-4 object-contain opacity-80" />
          </div>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`${className}`}
        style={{
          opacity: isLoaded ? undefined : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
