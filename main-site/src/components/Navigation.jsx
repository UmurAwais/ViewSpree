import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import NavDropdown from './NavDropdown';
import { categories as staticCategories } from '../data/categories';
import { getCategoryIdBySlug, fetchSubcategories } from '../lib/wordpress';
import Skeleton from './Skeleton';

const Navigation = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNavData() {
      const dynamicNav = await Promise.all(
        staticCategories.map(async (cat) => {
          const parentId = await getCategoryIdBySlug(cat.slug);
          let subs = [];
          if (parentId) {
            const rawSubs = await fetchSubcategories(parentId);
            subs = rawSubs.map(s => s.name);
          }
          return {
            name: cat.name,
            slug: cat.slug,
            hasDropdown: subs.length > 0,
            subcategories: subs
          };
        })
      );
      setNavLinks(dynamicNav);
      setLoading(false);
    }
    loadNavData();
  }, []);

  if (loading) {
    return (
      <nav className="hidden lg:flex items-center gap-8 h-full">
         <Skeleton className="h-4 w-16" />
         <Skeleton className="h-4 w-12" />
         <Skeleton className="h-4 w-14" />
         <Skeleton className="h-4 w-16" />
         <Skeleton className="h-4 w-12" />
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-4 xl:gap-8 h-full text-white/90">
      {navLinks.map((link) => (
        <div key={link.slug} className="relative group/nav h-16 flex items-center">
          <Link
            to={`/category/${link.slug}`}
            className="text-[15px] font-normal hover:text-white tracking-wider flex items-center gap-1 transition-colors cursor-pointer font-display"
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown className="w-4 h-4 opacity-40 group-hover/nav:opacity-100 transition-all duration-300 group-hover/nav:rotate-180" />
            )}
          </Link>

          {/* Dynamic Dropdown Menu */}
          {link.hasDropdown && <NavDropdown subcategories={link.subcategories} />}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
