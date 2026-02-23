import React from 'react';
import { Flame, Clock, ArrowUpRight } from 'lucide-react';

const mainStory = {
  title: "Sony Officially Announces PlayStation 6 Architecture: Built for 8K from the Ground Up",
  description: "In a surprise technical briefing, Mark Cerny reveals the foundational architecture of the next console generation, emphasizing hardware-accelerated ray tracing and custom AI scaling.",
  category: "Breaking: Hardware",
  author: "Sarah Harding",
  time: "2 HOURS AGO",
  image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=1200"
};

const sidebarStories = [
  {
    time: "15 MINS AGO",
    title: "OpenAI board in emergency talks over CEO restructuring",
    category: "AI"
  },
  {
    time: "42 MINS AGO",
    title: "NVIDIA shares surge another 12% following H200 announcement",
    category: "Market"
  },
  {
    time: "2 HOURS AGO",
    title: "Nintendo Switch 2 specs leaked by component manufacturer",
    category: "Gaming"
  },
  {
    time: "4 HOURS AGO",
    title: "Epic Games wins major antitrust concession from Apple",
    category: "Legal"
  },
  {
    time: "5 HOURS AGO",
    title: "Tesla Cybercab launch delayed to 2027 amid regulatory hurdles",
    category: "Mobility"
  },
  {
    time: "5 HOURS AGO",
    title: "Tesla Cybercab launch delayed to 2027 amid regulatory hurdles",
    category: "Mobility"
  }
];

const BreakingNews = () => {
  return (
    <section className="pb-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          {/* <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full animate-pulse shadow-[0_0_15px_var(--color-accent)]" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
              Breaking News
              <Flame className="w-6 h-6 text-accent" />
            </h2>
          </div> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Story (Left - 65%) */}
          <div className="lg:w-2/3 group cursor-pointer flex flex-col relative overflow-hidden h-full">
             {/* Thumbnail Container */}
             <div className="relative aspect-video rounded-[20px] overflow-hidden bg-[#121212] mb-6 w-full">
                <img 
                  src={mainStory.image} 
                  alt={mainStory.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                
                {/* Overlaid Title & Metadata */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent text-white px-3 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[2px] shadow-2xl flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {mainStory.category}
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-[11px] font-black uppercase tracking-widest bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {mainStory.time}
                    </div>
                  </div>
                  <h3 className="text-white font-black text-3xl md:text-4xl leading-[1.1] tracking-tighter group-hover:underline decoration-accent decoration-[3px] underline-offset-4 transition-all w-11/12 xl:w-4/5">
                    {mainStory.title}
                  </h3>
                </div>
              </div>

              {/* Excerpt Container */}
              <div className="flex flex-col gap-3 px-2 pb-2">
                <p className="text-white/60 text-lg leading-relaxed font-normal">
                  {mainStory.description}
                </p>
                <div className="mt-3 flex items-center gap-3 text-white/40 text-[12px] font-bold uppercase tracking-wider">
                  <span>By {mainStory.author}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="group-hover:text-white transition-colors flex items-center gap-1">Read Full Story <ArrowUpRight className="w-3.5 h-3.5" /></span>
                </div>
              </div>
          </div>

          {/* Sidebar / Live Feed (Right - 35%) */}
          <div className="lg:w-1/3 flex flex-col lg:pl-10">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3 className="text-white font-black text-lg uppercase tracking-tight flex items-center gap-3">
                  <div className="relative">
                     <div className="w-2.5 h-2.5 rounded-full bg-accent relative z-10" />
                     <div className="w-2.5 h-2.5 rounded-full bg-accent absolute inset-0 animate-ping" />
                  </div>
                  Live Feed
                </h3>
                <button className="text-white/40 hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-7 flex-1">
                {sidebarStories.map((story, i) => (
                  <div key={i} className="group flex flex-col gap-2 relative pl-6 cursor-pointer">
                    {/* Timeline Line */}
                    <div className="absolute left-0.75 top-2 bottom-7 w-px bg-white/10 group-last:bg-transparent" />
                    {/* Timeline Node */}
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-[#1a1a1e] bg-white/30 group-hover:bg-accent group-hover:shadow-[0_0_10px_var(--color-accent)] transition-all z-10" />
                    
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider font-display">
                      <span className="text-accent">{story.time}</span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-white/40 group-hover:text-white/70 transition-colors">{story.category}</span>
                    </div>
                    <h4 className="text-white/90 text-[15px] font-bold leading-snug group-hover:underline decoration-accent decoration-[3px] underline-offset-2 transition-all">
                      {story.title}
                    </h4>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-4 text-white/40 hover:text-white text-[10px] font-black uppercase tracking-[3px] transition-all text-left">
                Load More Updates →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
