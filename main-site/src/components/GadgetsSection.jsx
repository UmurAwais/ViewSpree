import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PostCard from './PostCard';

const gadgetArticles = [
  {
    id: 'gdt1',
    title: "Sony bravia 9 Review: The Mini LED King Has Arrived",
    excerpt: "Sony's new flagship Mini LED TV challenges OLED supremacy with stunning brightness and precision backlight control.",
    category: "TVs",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read",
    date: "Feb 24, 2026"
  },
  {
    id: 'gdt2',
    title: "Google Pixel 9 Pro Fold: The Folding Phone, Perfected",
    excerpt: "Thinner, lighter, and with a more usable external display. The best foldable Google has ever made.",
    category: "Phones",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800",
    readTime: "18 Min Read",
    date: "Feb 23, 2026"
  },
  {
    id: 'gdt3',
    title: "Apple Watch Ultra 3 vs Garmin Epix Pro: Ultimate Outdoor Showdown",
    excerpt: "Multiband GPS, extreme battery life, and solar charging. Which watch should you trust on your next expedition?",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read",
    date: "Feb 22, 2026"
  },
  {
    id: 'gdt4',
    title: "Sonos Era 300 Review: Spatial Audio Actually Matters",
    excerpt: "With dedicated driver arrays for Dolby Atmos, the Era 300 is the most ambitious speaker in Sonos' history.",
    category: "Speakers",
    image: "https://images.unsplash.com/photo-1545454675-a63e2316e6f4?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read",
    date: "Feb 21, 2026"
  },
  {
    id: 'gdt5',
    title: "Dell XPS 14/16: The Bold New Era of Windows Laptops",
    excerpt: "The controversial touch bar and haptic trackpad meet the power of Core Ultra processors in Dell's latest redesign.",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read",
    date: "Feb 20, 2026"
  },
  {
    id: 'gdt6',
    title: "Bose QuietComfort Ultra: Still The Gold Standard of ANC",
    excerpt: "Bose continues to lead the pack in silence, but can the new 'Immersive Audio' modes compete with Apple and Sony?",
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read",
    date: "Feb 19, 2026"
  },
  {
    id: 'gdt7',
    title: "MacBook Air M3: Why It's The Only Laptop Most People Need",
    excerpt: "The perfect balance of portability, performance, and silence. We test the base 8GB vs 16GB configurations.",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    readTime: "13 Min Read",
    date: "Feb 18, 2026"
  },
  {
    id: 'gdt8',
    title: "LG G4 OLED TV: Unlocking Mind-Blowing HDR Brightness",
    excerpt: "The new Micro Lens Array (MLA) technology pushes OLED brightness to levels we thought were impossible.",
    category: "TVs",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read",
    date: "Feb 17, 2026"
  }
];

const GadgetsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Gadgets</h2>
          </div>
          <button 
            onClick={() => navigate('/category/gadgets')}
            className="hidden md:flex py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer items-center gap-2 group"
          >
            Explore Gadgets
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Gadgets Intelligence Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {gadgetArticles.map((article) => (
            <PostCard key={article.id} post={article} />
          ))}
        </div>

        {/* Mobile Action Button */}
        <div className="mt-10 flex md:hidden w-full">
          <button 
            onClick={() => navigate('/category/gadgets')}
            className="w-full py-4 border border-white/10 rounded-xl text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            Explore Gadgets Intelligence
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GadgetsSection;
