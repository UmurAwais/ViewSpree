import React from 'react';

const NavDropdown = ({ subcategories }) => {
  if (!subcategories || subcategories.length === 0) return null;

  return (
    <div className="absolute top-[70%] left-0 pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 z-50">
      <div className="w-52 blurry-dropdown border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden py-2 flex flex-col relative before:absolute before:inset-0 before:bg-linear-to-b before:from-white/5 before:to-transparent before:pointer-events-none">
        {subcategories.map((sub, i) => (
          <a 
            key={i} 
            href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-5 py-2.5 text-[14px] text-white/70 hover:text-white hover:bg-white/5 transition-all w-full text-left font-display tracking-wide relative flex items-center group/btn"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent absolute left-2 opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-300 shadow-[0_0_10px_var(--color-accent)]" />
            <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
              {sub}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
