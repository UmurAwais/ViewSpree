import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Play, ChevronLeft, ChevronRight, Mail, ChevronDown } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import LazyImage from './LazyImage';
import Newsletter from './Newsletter';

const SinglePost = ({ post, onNavigateHome }) => {
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

  const carouselImages = [
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=1200", 
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200"
  ];

  return (
    <div className="bg-[#111111] min-h-screen font-sans">
      <Header onLogoClick={onNavigateHome} />

      <main>
        {/* --- Hero Section --- */}
        <div className="relative w-full h-[60vh] lg:h-[65vh] flex items-center overflow-hidden">
          {/* Background Image with Black Gradient Overlays */}
          <div className="absolute inset-0">
            <LazyImage 
              src={post?.image || "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=2000"} 
              alt="Hero Backdrop" 
              className="w-full h-full object-cover opacity-100"
            />
            {/* Simple Dark Overlay */}
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 w-full max-w-250 mx-auto px-6 lg:px-12 flex flex-col items-start text-left">
            {/* Top Category Tags */}
            <div className="flex flex-wrap justify-start gap-4 mb-6">
              <span className="bg-white text-black px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                {post?.category || "Spotlight"}
              </span>
              <span className="bg-black/30 border border-white/30 text-white px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-sm">
                ViewSpree Exclusive
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-[45px] lg:text-[50px] font-bold text-white max-w-4xl leading-[1.1] tracking-tight mb-8">
              {post?.title || "Behind the scenes of Quentin Tarantino's The Lost Chapter: Yuki's Revenge"}
            </h1>

            {/* Bottom Taxonomy Tags */}
            <div className="flex flex-wrap justify-start gap-3 max-w-3xl">
              {['Virtual production', 'Scanning', 'Pipeline', 'Unreal Engine', 'Virtual set design', 'Tools', 'Lighting'].map((tag) => (
                <span key={tag} className="bg-[#242424]/80 hover:bg-[#333333]/80 transition-colors backdrop-blur-md border border-white/10 text-white/90 px-4 py-1.5 text-[12px] font-medium rounded-full cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- Content Area --- */}
        <article className="w-full max-w-250 mx-auto px-6 lg:px-12 py-16 text-white text-[16px] leading-[1.8] font-normal font-sans">
          
          <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
             <div className="text-white/40 text-[12px] font-bold uppercase tracking-wider">
               {post?.date || post?.time || "RECENTLY PUBLISHED"}
             </div>
             {post?.author && (
               <>
                 <div className="w-1 h-1 rounded-full bg-white/20" />
                 <div className="text-white/60 text-[12px] font-bold uppercase tracking-wider">
                   BY {post.author}
                 </div>
               </>
             )}
          </div>

          <div className="max-w-250">
            <p className="mb-8 font-medium text-white/90 text-[20px] leading-relaxed">
              {post?.description || "More than twenty years ago, Quentin Tarantino wrote a scene for Kill Bill that never made it to screen—it had stayed a legend, through old script pages and fan lore. Last week, that story came to life as The Lost Chapter: Yuki's Revenge, for the first time made for fans."}
            </p>

            <p className="mb-8">
              Now, we're pulling back the curtain on how the team made it happen using <a href="#" className="text-[#00AEEF] hover:underline hover:text-white transition-colors">Unreal Engine</a> to create a
              virtual set and a massive experience.
            </p>

            <p className="mb-16">
              Directed by Tarantino and starring Uma Thurman, The Lost Chapter: Yuki's Revenge uses Unreal Engine
              virtual production tools to <a href="#" className="text-[#00AEEF] hover:underline hover:text-white transition-colors">bring this vision to life</a>, letting him direct the actors and see their performances
              inside the in-camera VFX.
            </p>
          </div>

          {/* Video Block Component */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 cursor-pointer group bg-[#0a0a0c]">
            {/* Placeholder artistic background representing the Yellow Kill Bill style */}
            <LazyImage 
              src="https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200" 
              alt="Yellow Katana Theme" 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            {/* Tint overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#171717]/95 via-[#171717]/60 to-transparent" />
            
            <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-center w-full md:w-2/3">
              <div className="w-10 h-10 rounded-[10px] border-2 border-white/80 flex items-center justify-center font-bold text-xl text-white/90 mb-5 bg-white/10 backdrop-blur-sm">
                u
              </div>
              <span className="text-white/80 text-[18px] md:text-[22px] font-bold tracking-wide mb-2 block font-display">
                Behind The Scenes
              </span>
              <h3 className="text-white text-4xl md:text-[50px] lg:text-[60px] font-black leading-[1.05] tracking-tighter">
                The making of<br/>The Lost Chapter:<br/>Yuki's Revenge
              </h3>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center text-white group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300 pointer-events-auto">
                <Play className="w-6 h-6 ml-1 fill-current" />
              </div>
            </div>
          </div>

          <div className="max-w-250">
            <p className="mb-8">
              The Third Floor and Epic Games then merged these authentic performances with stylized art fiction, using
              Unreal Engine technology to craft the scene's universe. To develop an Unreal Engine blanket of new
              technology and tools, Production tools, animators <a href="#" className="text-[#00AEEF] hover:underline hover:text-white transition-colors">were able to experience</a> the immediacy of live action in a
              flexible, integrated system.
            </p>

            <p className="mb-16">
              The team open a staged set, live-captured the body motion on a stage. To achieve more nuanced facial
              expressions, combined the action into a single, highly detailed test character with standard motion capture
              reference and smartphone cameras outside NKTx, the team captures real-time, high-fidelity animation on
              set.
            </p>

            <p className="mb-16">
              To enhance authentic physics, the team created a custom blueprint, a prototype hardware attachment for
              Unreal Engine that calculates the virtual framing and camera movements directly into the virtual engine. This
              enabled the team to use real-time camera frames, lenses, and focal lengths in the virtual scene, giving the
              scene the true momentum and organic feedback.
            </p>
          </div>

          {/* Carousel Slider */}
          <div className="relative w-full max-w-site mx-auto mb-16 lg:-ml-6 xl:-ml-12 lg:w-[110%]">
            <div className="overflow-hidden rounded-3xl relative bg-[#0a0a0c]" ref={emblaRef}>
              <div className="flex aspect-16/10 md:aspect-21/9">
                {carouselImages.map((src, index) => (
                  <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
                    <LazyImage 
                      src={src} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows inside image bounds */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none px-2 lg:px-4">
                <button 
                  onClick={scrollPrev}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-transparent flex items-center justify-center text-white/90 hover:bg-black/70 transition-all duration-300 pointer-events-auto"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollNext}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-transparent flex items-center justify-center text-white/90 hover:bg-black/70 transition-all duration-300 pointer-events-auto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {carouselImages.map((_, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={index}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    className={`transition-all duration-300 rounded-xs ${
                      isActive 
                        ? 'w-6 h-1 bg-white' 
                        : 'w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>

          <div className="max-w-250">
            <p className="mb-8">
              The production also incorporated real-time destruction, making it possible for physics, virtual breakage and
              impact effects to play out live, in-engine during capture. This made shot composition more precise, helped
              actors react over interactions real-time, and freed up the team to refine key destruction tools during filming
              rather than in post.
            </p>

            <p className="mb-0">
              The Lost Chapter highlights how Epic's real-time tools make it possible to bring film and interactive
              storytelling closer together, transforming a cinematic moment into a shared experience for millions in
              history.
            </p>
          </div>

        </article>

        {/* --- Download CTA Section --- */}
        <Newsletter />

      </main>

      <Footer />
    </div>
  );
};

export default SinglePost;
