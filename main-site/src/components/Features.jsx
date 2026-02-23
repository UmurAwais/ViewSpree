import React from 'react';
import Button from './Button';

const Features = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Area */}
          <div className="flex-1 text-left order-2 lg:order-1">
            <span className="text-white text-sm font-bold uppercase tracking-wider mb-6 block font-display">
              ViewSpree features
            </span>
            
            <h2 className="text-[42px] md:text-[52px] lg:text-[64px] font-bold text-white mb-8 leading-[1.1] tracking-tight font-display">
              Power that can keep up with imaginations.
            </h2>
            
            <p className="text-white/60 text-[17px] md:text-[18px] leading-relaxed font-normal mb-10 max-w-2xl">
              Define rule-breaking physics, create lifelike characters, or animate the movement 
              of a single blade of grass—and render it all at the speed you can dream it. 
              We originally designed ViewSpree Engine to give us the creative freedom 
              we always wanted as developers. Today, our goal is to push the boundaries 
              of innovation with every release so that only you, not your tools, 
              get to decide the limits of what's possible.
            </p>
            
            <Button 
              className="bg-[#2eb9f0] hover:bg-[#2597c5] text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-all"
            >
              See all features
            </Button>
          </div>

          {/* Right Media Area */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/5 relative min-h-75 lg:min-h-125">
              <img 
                src="https://images.unsplash.com/photo-1635241161466-541f065683ba?auto=format&fit=crop&q=80&w=1200" 
                alt="Advanced visual engine rendering" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
