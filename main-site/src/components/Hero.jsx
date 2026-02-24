import React from 'react';
import Button from './Button';
import LazyImage from './LazyImage';
import { ArrowRight, Clock, ShieldCheck, Share2, Plus } from 'lucide-react';

const sideHighlights = [
  {
    category: 'HARDWARE',
    title: 'Next-Gen GPU Benchmarks: What ViewSpree Users Need to Know',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600'
  },
  {
    category: 'VR FRONTIERS',
    title: 'Project Anywhere: Streaming Massive Worlds to Standalone VR',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=600'
  }
];

const Hero = () => {
  return (
    <section className="pt-14 pb-16 bg-brand-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Story - Epic 'Storefront' Style */}
          <div className="lg:col-span-9">
            <div className="group relative rounded-2xl overflow-hidden h-125 lg:h-170 border border-white/5 bg-[#121212] transition-all hover:ring-1 hover:ring-white/20">
              {/* Cinematic Backdrop */}
              <LazyImage 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600" 
                alt="Main Story" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              
              {/* Epic Metadata Line */}
              {/* <div className="absolute top-8 left-8 flex items-center gap-4">
                <div className="bg-white text-black px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> Base Game
                </div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-[3px]">
                  ViewSpree Engine • v5.4.1
                </div>
              </div> */}

              {/* Action Floating Buttons */}
              <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Plus className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-end">
                <div className="max-w-3xl">
                  <h1 className="text-[42px] lg:text-[64px] font-bold text-white mb-6 leading-[1.05] tracking-tight font-display">
                    The Future of Interactive Storytelling starts here.
                  </h1>
                  
                  <p className="text-white/70 text-lg lg:text-xl mb-10 leading-relaxed font-normal">
                    Step into the 1990s with Don't Nod's latest masterpiece. Powered by the next generation of narrative depth and authentic soundscapes.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6">
                    <Button variant="primary">
                      Read More
                    </Button>
                    <div className="flex items-center gap-3 py-3 px-6 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all">
                      <span className="text-white font-bold text-[12px] uppercase tracking-wider">Add to Wishlist</span>
                      <Plus className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Epic 'Discovery' Rail */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* <h3 className="text-white/40 font-black text-[10px] uppercase tracking-[4px] px-2">Recently Released</h3> */}
            
            {sideHighlights.map((story, index) => (
              <div key={index} className="group relative flex flex-col gap-4 px-2 pb-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                <div className="aspect-VIDEO rounded-lg overflow-hidden border border-white/5">
                  <LazyImage 
                    src={story.image} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div>
                  <span className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1 block">
                    {story.category}
                  </span>
                  <h4 className="text-white font-bold text-[15px] leading-tight group-hover:underline decoration-accent decoration-[3px] underline-offset-2 transition-all line-clamp-2">
                    {story.title}
                  </h4>
                </div>
              </div>
            ))}

            <button className="mt-4 w-full py-4 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer">
              Browse All News
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
