import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import LazyImage from './LazyImage';
import { categories } from '../data/categories';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
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
            <h3 className="text-white font-black text-sm sm:text-lg lg:text-2xl tracking-tighter flex items-center gap-2 md:gap-3">
              {category.name}
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-black transform transition-all duration-500 hover:scale-110 shrink-0">
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
  title = "Explore Intelligence", 
  subtitle = "Navigate by Specialty", 
  items = categories 
}) => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">{title}</h2>
          </div>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[3px] hidden md:block">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5">
          {items.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
