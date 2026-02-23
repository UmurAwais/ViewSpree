import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    name: 'Gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    count: '240+ Articles'
  },
  {
    name: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    count: '180+ Articles'
  },
  {
    name: 'Reviews',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    count: '150+ Articles'
  },
  {
    name: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
    count: '300+ Articles'
  },
  {
    name: 'Tech',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    count: '350+ Articles'
  }
];

const CategoryCard = ({ category }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden aspect-16/10 cursor-pointer bg-[#121212] border border-white/5 transition-all duration-500 hover:ring-1 hover:ring-white/20">
      {/* Background Image */}
      <img 
        src={category.image} 
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
      />
      
      {/* Cinematic Mask */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <div>
            {/* <span className="text-accent text-[8px] font-black uppercase tracking-[3px] mb-1 block opacity-0 group-hover:opacity-100 transition-opacity">Discover</span> */}
            <h3 className="text-white font-black text-xl lg:text-2xl tracking-tighter flex items-center gap-3">
              {category.name}
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black transform transition-all duration-500 hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </h3>
          </div>
          {/* <div className="text-white/20 text-[10px] font-black uppercase tracking-[2px] hidden lg:block group-hover:text-white/60 transition-colors">
            {category.count}
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">Explore Intelligence</h2>
          </div>
          <p className="text-white/40 text-xs font-black uppercase tracking-[3px] hidden md:block">
            Navigate by Specialty
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
