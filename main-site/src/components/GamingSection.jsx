import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PostCard from './PostCard';

const gamingArticles = [
  {
    id: 'g1',
    title: "GTA VI Technical Analysis: Pushing RAGE Engine to the Limits",
    excerpt: "Exploring the next generation of procedural animation and real-time physics in Rockstar's upcoming masterpiece.",
    category: "Rockstar Games",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read",
    date: "Feb 24, 2026"
  },
  {
    id: 'g2',
    title: "The Future of PlayStation VR2: Exclusive Tech Deep Dive",
    excerpt: "How foveated rendering and haptic feedback are redefining immersion in the virtual reality space.",
    category: "PlayStation",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read",
    date: "Feb 23, 2026"
  },
  {
    id: 'g3',
    title: "Nintendo Switch 2 Architecture: What We Know So Far",
    excerpt: "Analyzing the potential NVIDIA Blackwell-based SoC and the leap to DLSS 3.5 in portable gaming.",
    category: "Nintendo",
    image: "https://images.unsplash.com/photo-1595303526913-c7037797ebe7?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read",
    date: "Feb 22, 2026"
  },
  {
    id: 'g4',
    title: "Xbox Game Pass: The Technical Backbone of Cloud Gaming",
    excerpt: "Inside the server blades powering millions of concurrent gaming sessions across the globe.",
    category: "Xbox",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=800",
    readTime: "13 Min Read",
    date: "Feb 21, 2026"
  },
  {
    id: 'g5',
    title: "Red Dead Redemption 3: Speculative Physics and Lighting",
    excerpt: "What the next RAGE engine iteration could mean for dynamic weather and global illumination.",
    category: "Rockstar Games",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800",
    readTime: "8 Min Read",
    date: "Feb 20, 2026"
  },
  {
    id: 'g6',
    title: "Uncharted: Legacy of Thieves - PS5 Performance Comparison",
    excerpt: "A deep dive into the 120Hz mode and the ultra-fast I/O optimizations on Sony's flagship console.",
    category: "PlayStation",
    image: "https://images.unsplash.com/photo-1622233114058-02f47ba4d7d6?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read",
    date: "Feb 19, 2026"
  },
  {
    id: 'g7',
    title: "The Legend of Zelda: Technical evolution of Open Worlds",
    excerpt: "How Nintendo masters the 'ChemEngine' to create deep, systemic interactions in vast landscapes.",
    category: "Nintendo",
    image: "https://images.unsplash.com/photo-1516053303028-ae09f92e2043?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read",
    date: "Feb 18, 2026"
  },
  {
    id: 'g8',
    title: "Halo Infinite: Mastering the Slipspace Engine Optimization",
    excerpt: "The challenges of delivering 4K 120FPS in one of the most complex open-world shooters ever made.",
    category: "Xbox",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read",
    date: "Feb 17, 2026"
  }
];

const GamingSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Gaming Intelligence</h2>
          </div>
          <button 
            onClick={() => navigate('/category/gaming')}
            className="py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center gap-2"
          >
            Explores Games
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Gaming Intelligence Grid - Using shared PostCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gamingArticles.map((article) => (
            <PostCard key={article.id} post={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingSection;
