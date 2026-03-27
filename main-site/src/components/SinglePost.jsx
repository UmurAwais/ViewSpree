import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Share2, Facebook, Linkedin, Clock } from 'lucide-react';
import LazyImage from './LazyImage';
import Newsletter from './Newsletter';
import PostSidebar from './PostSidebar';
import XIcon from './XIcon';
import SEO from './SEO';
import { fetchPostById } from '../lib/wordpress';
import Skeleton from './Skeleton';

const SinglePost = () => {
  const { id } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(location.state?.post || null);
  const [loading, setLoading] = useState(!post || !post.content);

  useEffect(() => {
    async function loadFullPost() {
      if (id) {
        setLoading(true);
        const fullPost = await fetchPostById(id);
        setPost(fullPost);
        setLoading(false);
      }
    }
    loadFullPost();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading && !post) {
    return (
      <div className="bg-brand-bg min-h-screen">
        {/* Hero Skeleton */}
        <div className="h-[60vh] bg-white/5 animate-pulse relative">
          <div className="container-custom h-full flex items-center">
            <div className="max-w-4xl space-y-6">
               <Skeleton className="h-6 w-32" />
               <Skeleton className="h-16 w-full" />
               <Skeleton className="h-16 w-3/4" />
               <div className="flex gap-4 items-center">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                     <Skeleton className="h-4 w-40" />
                     <Skeleton className="h-3 w-24" />
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Content Skeleton */}
        <div className="container-custom py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8 space-y-8">
               <Skeleton className="h-8 w-full" />
               <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[85%]" />
               </div>
               <Skeleton className="h-64 w-full rounded-2xl mt-12" />
               <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[70%]" />
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-bg min-h-screen font-sans selection:bg-accent selection:text-black">
      <SEO 
        title={post?.title}
        description={post?.excerpt || "Deep technical analysis and intelligence report from the ViewSpree desk."}
        image={post?.image}
        keywords={`${post?.category}, technical report, ${post?.title}, tech intelligence, ViewSpree`}
      />

      {/* Article Hero */}
      <div className="relative w-full h-[50vh] lg:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage 
            src={post?.image || "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=2000"} 
            alt={post?.title || "Hero Backdrop"} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-accent text-black px-3 py-1 text-[10px] font-black uppercase tracking-[2px] rounded-sm">
                {post?.category || "Special Report"}
              </span>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[2px] flex items-center gap-2">
                 <Clock size={12} /> {post?.readTime || "5 Min Read"}
              </span>
            </div>

            <h1 className="text-3xl md:text-[35px] lg:text-[55px] font-bold text-white max-w-4xl leading-[1.1] tracking-tight mb-8 font-display">
              {post?.title || "Loading..."}
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-tight font-display">{post?.author || "Technical Desk"}</p>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest font-sans">{post?.date || "Feb 26, 2026"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <div className="max-w-3xl">
              {post?.excerpt && (
                <p className="text-xl md:text-2xl text-white font-medium leading-[1.6] mb-12 opacity-90 font-display">
                  {post.excerpt}
                </p>
              )}

              <div 
                className="wp-content space-y-8 text-white/85 text-lg leading-relaxed mb-16 font-sans"
                dangerouslySetInnerHTML={{ __html: post?.content || "" }}
              />

              {/* Share Bar */}
              <div className="border-y border-white/5 py-10 flex flex-col items-center justify-center gap-6">
                <span className="text-[10px] font-black uppercase tracking-[4px] text-white/20 font-display">Share Analysis</span>
                <div className="flex gap-8">
                  <button 
                    onClick={() => {
                      const url = window.location.href;
                      const text = post?.title || "Check out this technical analysis on ViewSpree";
                      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="cursor-pointer text-white/30 hover:text-accent transition-all transform hover:scale-110"
                  >
                    <XIcon size={18} />
                  </button>
                  <button 
                    onClick={() => {
                      const url = window.location.href;
                      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                    }}
                    className="cursor-pointer text-white/30 hover:text-accent transition-all transform hover:scale-110"
                  >
                    <Facebook size={20} />
                  </button>
                  <button 
                    onClick={() => {
                      const url = window.location.href;
                      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                    }}
                    className="cursor-pointer text-white/30 hover:text-accent transition-all transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard');
                    }}
                    className="cursor-pointer text-white/30 hover:text-accent transition-all transform hover:scale-110"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Dedicated Component Sidebar */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/5 lg:pl-12">
            <PostSidebar />
          </div>

        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default SinglePost;
