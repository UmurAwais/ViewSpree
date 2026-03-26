import React from 'react';

const Skeleton = ({ className = "" }) => {
  return (
    <div className={`animate-pulse bg-white/5 rounded-lg ${className}`} />
  );
};

export const PostCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-3 border border-white/5 h-full bg-[#121212]/30">
      {/* Image Skeleton */}
      <Skeleton className="aspect-16/10 rounded-xl w-full" />
      
      {/* Category/Badge Skeleton */}
      <div className="flex gap-3">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-24 ml-auto" />
      </div>

      {/* Title Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-[80%]" />
      </div>

      {/* Excerpt Skeleton */}
      <div className="space-y-1 mt-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-[60%]" />
      </div>
    </div>
  );
};

export const GridSkeleton = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
      {[...Array(count)].map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row items-center w-full px-4 overflow-hidden">
      <div className="flex-1 w-full lg:order-2">
         <Skeleton className="aspect-16/9 rounded-[32px] w-full" />
      </div>
      <div className="flex-1 space-y-8 w-full lg:order-1 lg:pr-12">
        <div className="flex gap-4">
           <Skeleton className="h-4 w-24" />
           <Skeleton className="h-4 w-32" />
        </div>
        <div className="space-y-4">
           <Skeleton className="h-16 w-full" />
           <Skeleton className="h-16 w-3/4" />
        </div>
        <div className="space-y-2">
           <Skeleton className="h-4 w-full" />
           <Skeleton className="h-4 w-[90%]" />
        </div>
        <Skeleton className="h-12 w-48 rounded-full" />
      </div>
    </div>
  );
};

export const ListSkeleton = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="flex gap-6 items-start">
          <Skeleton className="w-48 h-32 rounded-2xl shrink-0" />
          <div className="flex-1 space-y-4 pt-2">
             <div className="flex gap-3">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-20" />
             </div>
             <Skeleton className="h-6 w-full" />
             <Skeleton className="h-6 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
