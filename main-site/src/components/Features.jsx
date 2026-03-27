import React from 'react';
import Button from './Button';

const Features = () => {
  // Using the high-quality local PNG branding asset
  const viewspreeBlogs = "/assets/viewspree_blogs.png";

  const scrollToCategories = () => {
    const element = document.getElementById('categories-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Left Content Area */}
          <div className="flex-1 text-left order-2 lg:order-1">
            <span className="text-white text-sm font-bold uppercase tracking-wider mb-6 block font-display">
              ViewSpree Intelligence
            </span>
            
            <h2 className="text-[42px] md:text-[52px] lg:text-[64px] font-bold text-white mb-8 leading-[1.1] tracking-tight font-display">
              Technical Indexing for the Next Frontier.
            </h2>
            
            <p className="text-white/60 text-[17px] md:text-[18px] leading-relaxed font-normal mb-10 max-w-2xl text-pretty">
              ViewSpree is more than a news feed—it's a technical ecosystem designed to index the future of 
              human innovation. From engine architecture and AI neural networks to next-gen hardware 
              benchmarks, we provide the intelligence required to navigate the rapidly evolving digital landscape. 
              Our engine is built for precision, ensuring that you stay ahead of the curve with every update.
            </p>
            
            <Button
              onClick={scrollToCategories} 
              className="bg-[#2eb9f0] hover:bg-[#2597c5] text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(46,185,240,0.2)]"
            >
              Explore Intelligence Index
            </Button>
          </div>

          {/* Right Media Area */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 relative min-h-[300px] lg:min-h-[500px] bg-[#0c0c0e]">
              <img 
                src={viewspreeBlogs} 
                alt="ViewSpree Intelligence Networks" 
                className="absolute inset-0 w-full h-full object-cover" 
                onError={(e) => {
                  console.error("ViewSpree Branding Image failed to load at:", viewspreeBlogs);
                  // Optional: fallback to unsplash if local fails
                  // e.target.src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
