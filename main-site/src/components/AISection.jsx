import React from 'react';
import LazyImage from './LazyImage';
import { ArrowUpRight, Cpu } from 'lucide-react';

const aiArticles = [
  {
    title: "OpenAI's Project Q*: The Path to Artificial General Intelligence",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read"
  },
  {
    title: "NVIDIA H100 Tensor Core Architecture: The Hardware Dominance",
    category: "AI Hardware",
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read"
  },
  {
    title: "Optimizing Deep Learning Models for Edge Computing",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read"
  },
  {
    title: "Transformer Networks: Beyond Natural Language Processing",
    category: "Neural Networks",
    image: "https://images.unsplash.com/photo-1625314887424-9f190599bd56?auto=format&fit=crop&q=80&w=800",
    readTime: "13 Min Read"
  },
  {
    title: "Midjourney v6: Photorealism and the Generative Media Revolution",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1678280665971-ce4baacc39e9?auto=format&fit=crop&q=80&w=800",
    readTime: "8 Min Read"
  },
  {
    title: "Groq LPU vs GPU: Re-engineering the Machine Learning Pipeline",
    category: "AI Hardware",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read"
  },
  {
    title: "Reinforcement Learning in Robotics: Sim-to-Real Transfer",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1591453006319-5d3c8c68aa2a?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read"
  },
  {
    title: "The Architecture of Mixture of Experts (MoE) Models",
    category: "Neural Networks",
    image: "https://images.unsplash.com/photo-1664551227092-2cc351c2acbb?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read"
  }
];

const AISection = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">AI Intelligence</h2>
          </div>
          <button className="py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center gap-2">
            Explore AI
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* AI Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiArticles.map((article, index) => (
            <div key={index} className="group cursor-pointer bg-[#202020] hover:bg-[#2a2a2c] transition-colors duration-300 rounded-[28px] p-4 border border-white/5 flex flex-col h-full">
              {/* Thumbnail Container */}
              <div className="relative aspect-16/10 rounded-[20px] overflow-hidden bg-[#121212] mb-5 w-full shrink-0">
                <LazyImage 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700"
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
                <h3 className="text-white font-bold text-[17px] leading-snug group-hover:underline decoration-accent decoration-[3px] underline-offset-2 transition-all line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-white/50 text-[13px] font-medium">
                  <Cpu className="w-4 h-4 shrink-0" />
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

export default AISection;
