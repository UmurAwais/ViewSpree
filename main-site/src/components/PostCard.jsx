import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import LazyImage from './LazyImage';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/post/${post.id}`, { state: { post } })}
      className="group cursor-pointer bg-[#202020] hover:bg-[#2a2a2c] transition-colors duration-300 rounded-[28px] p-4 border border-white/5 flex flex-col h-full"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-16/10 rounded-[20px] overflow-hidden bg-[#121212] mb-5 w-full shrink-0">
        <LazyImage 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Category Badge on Hover */}
        <div className="absolute top-4 left-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-accent text-white px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-[2px] shadow-2xl">
            {post.category}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-3 px-1 pb-1 grow">
        <h3 className="text-white font-bold text-[18px] leading-snug group-hover:underline decoration-accent decoration-[3px] underline-offset-2 transition-all line-clamp-2">
          {post.title}
        </h3>
        
        {post.excerpt && (
          <p className="text-white/50 text-[14px] leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}

        <div className="mt-auto pt-2 flex items-center gap-2 text-white/40 text-[12px] font-medium">
          <Gamepad2 className="w-4 h-4 shrink-0" />
          <span className="truncate">{post.date} • {post.readTime} Read</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
