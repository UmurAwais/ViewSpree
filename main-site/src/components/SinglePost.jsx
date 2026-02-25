import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { Play, ChevronLeft, ChevronRight, Share2, Facebook, Linkedin, Clock } from 'lucide-react';
import LazyImage from './LazyImage';
import Newsletter from './Newsletter';
import PostSidebar from './PostSidebar';
import XIcon from './XIcon';

const SinglePost = () => {
  const location = useLocation();
  const post = location.state?.post;

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const carouselImages = [
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200"
  ];

  return (
    <div className="bg-brand-bg min-h-screen font-sans selection:bg-accent selection:text-white">
      {/* Article Hero */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage 
            src={post?.image || "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=2000"} 
            alt="Hero Backdrop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-accent text-white px-3 py-1 text-[10px] font-black uppercase tracking-[2px] rounded-sm">
                {post?.category || "Special Report"}
              </span>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[2px] flex items-center gap-2">
                 <Clock size={12} /> {post?.readTime || "15 Min Read"}
              </span>
            </div>

            <h1 className="text-4xl md:text-[45px] lg:text-[60px] font-bold text-white max-w-4xl leading-[1.1] tracking-tight mb-8 font-display">
              {post?.title || "Behind the scenes of Quentin Tarantino's The Lost Chapter: Yuki's Revenge"}
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-tight font-display">{post?.author || "Technical Desk"}</p>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest font-sans">{post?.date || "Feb 26, 2026"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="container-custom py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl text-white font-medium leading-[1.6] mb-12 opacity-90 font-display">
                {post?.description || "In a world of rapidly accelerating technological shifts, understanding the underlying architecture becomes the ultimate strategic advantage. ViewSpree dives deep into the systems that define the next decade."}
              </p>

              <div className="space-y-8 text-white/50 text-lg leading-relaxed mb-16 font-sans">
                <p>
                  As we navigate the threshold of a new era in computing, the boundaries between virtual and physical realms are dissolving. The tools once reserved for elite specialists are now becoming the bedrock of a new creative economy.
                </p>
                
                {/* Embedded Media */}
                <div className="relative aspect-video rounded-3xl overflow-hidden my-16 border border-white/5 group bg-black shadow-2xl">
                  <LazyImage 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Internal Mechanics" 
                    className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="cursor-pointer w-20 h-20 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-accent transition-all duration-500">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </button>
                  </div>
                </div>

                <p>
                  The integration of neural engines directly into the signal path allows for real-time inference that was previously technically impossible. We are witnessing the birth of localized intelligence that doesn't rely on the cloud latency bottleneck.
                </p>

                <blockquote className="border-l-4 border-accent pl-10 my-16">
                  <p className="text-2xl md:text-3xl text-white font-black italic tracking-tighter leading-tight mb-4 uppercase font-display">
                    "Information is abundant. Intelligence is rare. We build for the latter."
                  </p>
                  <cite className="text-xs uppercase tracking-[4px] font-black text-white/30 not-italic font-sans">— ViewSpree Engineering</cite>
                </blockquote>
              </div>

              {/* Slider Component */}
              <div className="mb-20">
                <h4 className="text-[11px] font-black uppercase tracking-[4px] text-white/20 mb-8 font-display">Technical Assets Annex</h4>
                <div className="overflow-hidden rounded-3xl relative border border-white/5" ref={emblaRef}>
                  <div className="flex aspect-16/10">
                    {carouselImages.map((src, index) => (
                      <div className="flex-[0_0_100%] min-w-0" key={index}>
                        <img src={src} alt="" className="w-full h-full object-cover opacity-80" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                    <button onClick={scrollPrev} className="cursor-pointer w-12 h-12 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-accent transition-all">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className="cursor-pointer w-12 h-12 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-accent transition-all">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Share Bar */}
              <div className="border-y border-white/5 py-10 flex flex-col items-center justify-center gap-6">
                <span className="text-[10px] font-black uppercase tracking-[4px] text-white/20 font-display">Share Analysis</span>
                <div className="flex gap-8">
                  <button 
                    onClick={() => {
                      const url = window.location.href;
                      const text = post?.title || "Check out this technical analysis on ViewSpree";
                      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="cursor-pointer text-white/30 hover:text-accent transition-all transform hover:scale-110"
                  >
                    <XIcon size={18} />
                  </button>
                  <button 
                    onClick={() => {
                      const url = window.location.href;
                      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                    }}
                    className="cursor-pointer text-white/30 hover:text-accent transition-all transform hover:scale-110"
                  >
                    <Facebook size={20} />
                  </button>
                  <button 
                    onClick={() => {
                      const url = window.location.href;
                      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                    }}
                    className="cursor-pointer text-white/30 hover:text-accent transition-all transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard');
                    }}
                    className="cursor-pointer text-white/30 hover:text-accent transition-all transform hover:scale-110"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Dedicated Component Sidebar */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/5 lg:pl-12">
            <PostSidebar />
          </div>

        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default SinglePost;
