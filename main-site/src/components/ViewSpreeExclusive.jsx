import React from 'react';
import Button from './Button';

const newsData = [
  {
    date: 'JANUARY 20, 2026',
    title: 'Unreal Fest Chicago 2026',
    description: 'Tickets for Unreal Fest Chicago are now available! Get yours through February 16 to...',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: 'DECEMBER 8, 2025',
    title: "Behind the scenes of Quentin Tarantino's The Lost Chapter: Yuki's Revenge",
    description: "Get a behind-the-scenes look at The Lost Chapter: Yuki's Revenge, a lost scene from Kil...",
    category: 'Spotlight',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: 'NOVEMBER 19, 2025',
    title: 'Unity and Epic Games Together Advance the Open, Interoperable Future for Vide...',
    description: 'Unity and Epic Games today announced they are working together to bring Unity games int...',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: 'NOVEMBER 12, 2025',
    title: 'Unreal Engine 5.7 is now available',
    description: 'The latest release empowers you to build and render expansive, lifelike worlds filled with ric...',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1614741487278-78a55d27a442?auto=format&fit=crop&q=80&w=800'
  }
];

const LatestNews = () => {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">ViewSpree Exclusive</h2>
          </div>
          <button className="py-2 px-6 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer">
              View All Intelligence
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {newsData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1a1a1e] rounded-3xl p-4 flex items-center gap-6 hover:bg-[#232328] transition-colors cursor-pointer group border border-white/5"
            >
              {/* Thumbnail */}
              <div className="w-60 h-40 shrink-0 rounded-2xl overflow-hidden bg-black relative">
                <img 
                  src={item.image} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col pr-4">
                <span className="text-[11px] text-white/40 font-bold tracking-wider uppercase mb-3 font-display">
                  {item.date}
                </span>
                <h3 className="text-[19px] font-bold text-white mb-3 leading-tight group-hover:text-accent transition-colors font-display line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-white/60 font-normal leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-4 py-1.5 bg-[#2a2a2e] rounded-full text-[12px] font-bold text-white/80 transition-colors hover:bg-[#35353a]">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
