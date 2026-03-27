import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description = "ViewSpree - Your Window into Tomorrow. In-depth technical analysis, AI breakthroughs, gaming intelligence, and next-gen hardware reviews as it happens.",
  keywords = "tech news, AI breakthroughs, gaming intelligence, technical analysis, hardware reviews, viewspree, future tech, engineering insights",
  image = "/favicon.webp"
}) => {
  const siteName = "ViewSpree";
  const fullTitle = title ? `${siteName} - ${title}` : `${siteName} - Your Window into Tomorrow`;

  useEffect(() => {
    // Dynamic Page Title
    document.title = fullTitle;

    // Meta Description Refresh
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Meta Keywords Refresh
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Open Graph (Facebook/LinkedIn)
    updateMetaProperty('og:title', fullTitle);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:site_name', siteName);

    // Twitter Cards
    updateMetaProperty('twitter:title', fullTitle);
    updateMetaProperty('twitter:description', description);
    updateMetaProperty('twitter:image', image);
    updateMetaProperty('twitter:card', 'summary_large_image');

  }, [fullTitle, description, keywords, image]);

  const updateMetaProperty = (property, value) => {
    let tag = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      if (property.startsWith('og:')) tag.setAttribute('property', property);
      else tag.setAttribute('name', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', value || '');
  };

  return null; // This component handles DOM manipulation directly
};

export default SEO;
