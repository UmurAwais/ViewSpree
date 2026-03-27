/**
 * ViewSpree Subcategory Image Mapping
 * 
 * To replace images for your subcategories:
 * 1. Find the SLUG of your subcategory in WordPress (e.g., 'playstation').
 * 2. Add a new entry to the mapping below with the slug as the key.
 * 3. Use an absolute path if the image is in public/assets (e.g., '/assets/playstation.webp')
 */

export const subcategoryImages = {
  // Gaming Subcategories (Local Assets)
  "ea-sports": "/assets/easports.webp",
  "nintendo": "/assets/nintendo.webp",
  "playstation": "/assets/playstation.webp",
  "rockstar-games": "/assets/rockstart.webp", // Note: Using the provided rockstart.webp file
  "xbox": "/assets/xbox.webp",

  // AI Subcategories (Unsplash Fallbacks)
  "machine-learning": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
  "generative-ai": "https://images.unsplash.com/photo-1635241161466-541f065683ba?auto=format&fit=crop&q=80&w=1200",
  "neural-networks": "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",

  // Tech Industry
  "crypto-intelligence": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200",
  "cloud-computing": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",

  // Default Fallback
  "default": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
};

export const getSubcategoryImage = (slug) => {
  return subcategoryImages[slug] || subcategoryImages["default"];
};
