import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PostCard from './PostCard';

const reviewArticles = [
  {
    id: 'r1',
    title: "iPhone 17 Pro Max Camera Analysis: Computational Mastery",
    excerpt: "Testing the new 48MP zoom lens and the AI-driven night mode performance in our standard laboratory setup.",
    category: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    readTime: "16 Min Read",
    date: "Feb 24, 2026"
  },
  {
    id: 'r2',
    title: "Samsung Galaxy S26 Ultra: The Ultimate AI Companion Tested",
    excerpt: "How the integrated NPU handles real-time translation and object removal in the native camera app.",
    category: "Phones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
    readTime: "12 Min Read",
    date: "Feb 23, 2026"
  },
  {
    id: 'r3',
    title: "iPad Pro M4: Is it Finally a Laptop Replacement?",
    excerpt: "With the new Stage Manager updates and the M4 chip, we ask if the iPad can finally handle a full pro workflow.",
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800",
    readTime: "10 Min Read",
    date: "Feb 22, 2026"
  },
  {
    id: 'r4',
    title: "Samsung Galaxy Tab S10 Ultra: Defining the Android Canvas",
    excerpt: "The best screen on any tablet, but can the software keep up with the massive 14.6-inch hardware?",
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?auto=format&fit=crop&q=80&w=800",
    readTime: "14 Min Read",
    date: "Feb 21, 2026"
  },
  {
    id: 'r5',
    title: "Sony WH-1000XM6: The New King of Active Noise Cancellation",
    excerpt: "Deeper silence and more natural transparency modes. We compare it against the Bose QC Ultra.",
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
    readTime: "9 Min Read",
    date: "Feb 20, 2026"
  },
  {
    id: 'r6',
    title: "Apple AirPods Max 2 Review: Premium Audio Redefined",
    excerpt: "USB-C, better battery life, and new colors. Is it enough to justify the premium price tag in 2026?",
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    readTime: "8 Min Read",
    date: "Feb 19, 2026"
  },
  {
    id: 'r7',
    title: "NZXT Player: Three - The Ultimate Pre-built Gaming Machine",
    excerpt: "Checking the thermal performance and cable management of the most powerful pre-built in NZXT's lineup.",
    category: "PC",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
    readTime: "11 Min Read",
    date: "Feb 18, 2026"
  },
  {
    id: 'r8',
    title: "MacBook Pro M4 Max: Performance Boundaries Shattered",
    excerpt: "We put the new silicon through its paces with 8K video editing and massive neural network training.",
    category: "PC",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    readTime: "15 Min Read",
    date: "Feb 17, 2026"
  }
];

const ReviewsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Unified Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">ViewSpree Reviews</h2>
          </div>
          <button 
            onClick={() => navigate('/category/reviews')}
            className="hidden md:flex py-2 px-8 border border-white/10 rounded-lg text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer items-center gap-2 group"
          >
            Explore Reviews
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
               <ArrowUpRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Reviews Intelligence Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {reviewArticles.map((article) => (
            <PostCard key={article.id} post={article} />
          ))}
        </div>

        {/* Mobile Action Button */}
        <div className="mt-10 flex md:hidden w-full">
          <button 
            onClick={() => navigate('/category/reviews')}
            className="w-full py-4 border border-white/10 rounded-xl text-white/40 text-[10px] font-black uppercase tracking-[3px] hover:bg-white/5 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            Explore ViewSpree Reviews
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
