import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PostCard from './PostCard';

const aiArticles = [
  {
    id: 'ai1',
    title: "OpenAI's Project Q*: The Path to Artificial General Intelligence",
    excerpt: "New architectural breakthroughs in reasoning and logic could finally pave the way for true general intelligence.",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read",
    date: "Feb 24, 2026"
  },
  {
    id: 'ai2',
    title: "NVIDIA H100 Tensor Core Architecture: The Hardware Dominance",
    excerpt: "How a single chip design became the most valuable commodity in the world and the engine of the AI boom.",
    category: "AI Hardware",
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read",
    date: "Feb 23, 2026"
  },
  {
    id: 'ai3',
    title: "Optimizing Deep Learning Models for Edge Computing",
    excerpt: "Techniques for running massive neural networks on devices with limited power and memory.",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read",
    date: "Feb 22, 2026"
  },
  {
    id: 'ai4',
    title: "Transformer Networks: Beyond Natural Language Processing",
    excerpt: "Why the attention mechanism is proving equally powerful for computer vision and protein folding.",
    category: "Neural Networks",
    image: "https://images.unsplash.com/photo-1625314887424-9f190599bd56?auto=format&fit=crop&q=80&w=800",
    readTime: "13 Min Read",
    date: "Feb 21, 2026"
  },
  {
    id: 'ai5',
    title: "Midjourney v6: Photorealism and the Generative Media Revolution",
    excerpt: "A deep dive into the latest diffusion model updates and the controversial path toward perfect photorealism.",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1678280665971-ce4baacc39e9?auto=format&fit=crop&q=80&w=800",
    readTime: "8 Min Read",
    date: "Feb 20, 2026"
  },
  {
    id: 'ai6',
    title: "Groq LPU vs GPU: Re-engineering the Machine Learning Pipeline",
    excerpt: "Can specialized linear processors outperform the GPU standard for inference speed?",
    category: "AI Hardware",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read",
    date: "Feb 19, 2026"
  },
  {
    id: 'ai7',
    title: "Reinforcement Learning in Robotics: Sim-to-Real Transfer",
    excerpt: "The latest advances in training robots in physically accurate simulations before real-world deployment.",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1591453006319-5d3c8c68aa2a?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read",
    date: "Feb 18, 2026"
  },
  {
    id: 'ai8',
    title: "The Architecture of Mixture of Experts (MoE) Models",
    excerpt: "How sparse models like Mixtral achieve state-of-the-art results with a fraction of the compute.",
    category: "Neural Networks",
    image: "https://images.unsplash.com/photo-1664551227092-2cc351c2acbb?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read",
    date: "Feb 17, 2026"
  }
];

const AISection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">AI Intelligence</h2>
          </div>
          <button 
            onClick={() => navigate('/category/ai')}
            className="py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center gap-2"
          >
            Explore AI
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* AI Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiArticles.map((article) => (
            <PostCard key={article.id} post={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
