import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PostCard from './PostCard';

const techArticles = [
  {
    id: 't1',
    title: "Apple Vision Pro 2 Rumors: What's Next in Spatial Computing",
    excerpt: "New rumors suggest a lighter design and a more powerful R1 chip for Apple's second attempt at the spatial computing crown.",
    category: "Apple",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read",
    date: "Feb 24, 2026"
  },
  {
    id: 't2',
    title: "Google's Gemini Ultra vs GPT-4: The Tech Giant Showdown",
    excerpt: "Comparing the multimodal capabilities and coding performance of the two most powerful LLMs on the market today.",
    category: "Google",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read",
    date: "Feb 23, 2026"
  },
  {
    id: 't3',
    title: "Microsoft Copilot Integration: Changing the Windows Ecosystem",
    excerpt: "How the depth of AI integration in Windows 12 is fundamentally changing the way we interact with files and settings.",
    category: "Microsoft",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read",
    date: "Feb 22, 2026"
  },
  {
    id: 't4',
    title: "Amazon AWS Announces Next-Gen Quantum Computing Chips",
    excerpt: "A look at the new 'Aquila' processor and how it aims to solve complex optimization problems at scale.",
    category: "Amazon",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800",
    readTime: "8 Min Read",
    date: "Feb 21, 2026"
  },
  {
    id: 't5',
    title: "Samsung Expanding Foundry to Challenge TSMC Dominance",
    excerpt: "Inside the huge investment plan for 2nm process nodes as Samsung battles for semiconductor leadership.",
    category: "Samsung",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbfc064b52?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read",
    date: "Feb 20, 2026"
  },
  {
    id: 't6',
    title: "Meta (Facebook) Doubles Down on the Metaverse Strategy",
    excerpt: "Zuckerberg reveals the roadmap for the next generation of Quest headsets and the integration of Llama AI avatars.",
    category: "Facebook",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read",
    date: "Feb 19, 2026"
  },
  {
    id: 't7',
    title: "The State of Venture Capital in 2026 Tech Startups",
    excerpt: "How the funding landscape has shifted from 'growth at any cost' to sustainable, AI-driven profitability models.",
    category: "Business",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    readTime: "16 Min Read",
    date: "Feb 18, 2026"
  },
  {
    id: 't8',
    title: "Apple M4 Chip Benchmarks: Unprecedented Power Efficiency",
    excerpt: "Deep technical analysis of the neural engine and the thermal management of the latest MacBook Pro models.",
    category: "Apple",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read",
    date: "Feb 17, 2026"
  }
];

const TechSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Big Tech & Business</h2>
          </div>
          <button 
            onClick={() => navigate('/category/tech')}
            className="hidden md:flex py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer items-center gap-2 group"
          >
            Explore Tech
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Tech Intelligence Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {techArticles.map((article) => (
            <PostCard key={article.id} post={article} />
          ))}
        </div>

        {/* Mobile Action Button */}
        <div className="mt-10 flex md:hidden w-full">
          <button 
            onClick={() => navigate('/category/tech')}
            className="w-full py-4 border border-white/10 rounded-xl text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            Explore Big Tech Intelligence
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
