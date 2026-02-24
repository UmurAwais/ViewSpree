import React from 'react';
import LazyImage from './LazyImage';
import { ArrowUpRight, Car } from 'lucide-react';

const mobilityArticles = [
  {
    title: "Tesla Cybercab: Inside the Fully Autonomous Robotaxi Architecture",
    category: "Cars",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
    readTime: "16 Min Read"
  },
  {
    title: "Boom Overture: How Supersonic Flight is Finally Returning",
    category: "Planes",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a7541?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read"
  },
  {
    title: "Japan's L0 Series Maglev: The 600km/h Engineering Marvel",
    category: "Trains",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800",
    readTime: "20 Min Read"
  },
  {
    title: "VanMoof S5 Review: The Apple of Electric Commuter Bikes",
    category: "Bikes",
    image: "https://images.unsplash.com/photo-1571188654261-125032a188be?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read"
  },
  {
    title: "Porsche Taycan Turbo GT: Pushing EV Track Performance to the Bleeding Edge",
    category: "Cars",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
    readTime: "18 Min Read"
  },
  {
    title: "The Zero-Emission City: How Electric Fleets are Changing Urban Transit",
    category: "Buses",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read"
  },
  {
    title: "Project Zeroe: Airbus and the Hydrogen-Powered Future of Aviation",
    category: "Planes",
    image: "https://images.unsplash.com/photo-1559091153-62541ac82a39?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read"
  },
  {
    title: "LiveWire One: Harley-Davidson's Electric Gamble Pays Off",
    category: "Bikes",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read"
  }
];

const MobilitySection = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Mobility & Transit</h2>
          </div>
          <button className="py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center gap-2">
            Explore Mobility
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Mobility Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mobilityArticles.map((article, index) => (
            <div key={index} className="group cursor-pointer bg-[#202020] hover:bg-[#2a2a2c] transition-colors duration-300 rounded-[28px] p-4 border border-white/5 flex flex-col h-full">
              {/* Thumbnail Container */}
              <div className="relative aspect-16/10 rounded-[20px] overflow-hidden bg-[#121212] mb-5 w-full shrink-0">
                <LazyImage 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Visual Category Badge on Hover */}
                <div className="absolute top-4 left-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-accent text-white px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-[2px] shadow-2xl">
                    {article.category}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 px-1 pb-1">
                <h3 className="text-white font-bold text-[17px] leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-white/50 text-[13px] font-medium">
                  <Car className="w-4 h-4 shrink-0" />
                  <span className="truncate">{article.category} • {article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobilitySection;
