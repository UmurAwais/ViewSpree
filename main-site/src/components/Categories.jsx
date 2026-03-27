import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import LazyImage from './LazyImage';
import { categories } from '../data/categories';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/category/${category.slug}`)}
      className="group relative rounded-2xl overflow-hidden aspect-16/10 cursor-pointer bg-[#121212] border border-white/5 transition-all duration-500 hover:ring-1 hover:ring-white/20"
    >
      {/* Background Image */}
      <LazyImage 
        src={category.image} 
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
      />
      
      {/* Cinematic Mask */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-black text-[10px] sm:text-lg lg:text-xl xl:text-2xl tracking-tighter flex items-center justify-between w-full gap-2">
              <span className="truncate">{category.name}</span>
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-accent flex items-center justify-center text-black transform transition-all duration-500 hover:scale-110 shrink-0">
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Categories = ({ 
  title = "Go Specific", 
  subtitle = "Navigate by Specialty", 
  items = categories 
}) => {
  return (
    <section id="categories-section" className="py-12 md:py-20 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        {/* Responsive Header */}
        <div className="flex items-center justify-between mb-10 md:mb-12 px-1 md:px-0">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-1.5 h-6 md:w-2 md:h-8 bg-accent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            <h2 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{title}</h2>
          </div>
          <p className="hidden md:block text-white/40 text-[10px] font-black uppercase tracking-[3px]">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5">
          {items.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
