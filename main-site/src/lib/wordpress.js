const WP_API_URL = "https://mediumorchid-wolverine-249342.hostingersite.com/wp-json/wp/v2";

export async function fetchPosts(params = {}) {
  const query = new URLSearchParams({
    _embed: true, // This embeds featured images and other media
    ...params
  }).toString();
  
  try {
    const response = await fetch(`${WP_API_URL}/posts?${query}`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    const posts = await response.json();
    return posts.map(transformPost);
  } catch (err) {
    console.error("WordPress Data Fetch Error:", err);
    return [];
  }
}

export async function fetchPostById(id) {
  try {
    const response = await fetch(`${WP_API_URL}/posts/${id}?_embed=true`);
    if (!response.ok) throw new Error("Failed to fetch post");
    const wpPost = await response.json();
    return {
      ...transformPost(wpPost),
      content: wpPost.content.rendered
    };
  } catch (err) {
    console.error(`WordPress Single Post Fetch Error (${id}):`, err);
    return null;
  }
}

export async function getCategoryIdBySlug(slug) {
  try {
    const response = await fetch(`${WP_API_URL}/categories?slug=${slug}`);
    if (!response.ok) return null;
    const categories = await response.json();
    return categories.length > 0 ? categories[0].id : null;
  } catch (err) {
    console.error(`Error fetching category ID for ${slug}:`, err);
    return null;
  }
}

export async function fetchPostsByCategory(slug, count = 8) {
  const categoryId = await getCategoryIdBySlug(slug);
  if (!categoryId) {
    console.warn(`Category slug '${slug}' not found, fetching general posts.`);
    return fetchPosts({ per_page: count });
  }
  return fetchPosts({ categories: categoryId, per_page: count });
}

export async function fetchSubcategories(parentId) {
  try {
    const response = await fetch(`${WP_API_URL}/categories?parent=${parentId}&per_page=100&hide_empty=0`);
    if (!response.ok) return [];
    const subcats = await response.json();
    return subcats.map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug
    }));
  } catch (err) {
    console.error(`Error fetching subcategories for parent ${parentId}:`, err);
    return [];
  }
}

function transformPost(wpPost) {
  // Extracting data from WordPress format to our application's format
  const featuredImage = wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"; // default fallback
  
  const category = wpPost._embedded?.['wp:term']?.[0]?.[0]?.name || "Uncategorized";

  return {
    id: wpPost.id,
    title: decodeHTMLEntities(wpPost.title.rendered),
    excerpt: decodeHTMLEntities(wpPost.excerpt.rendered.replace(/<[^>]*>?/gm, '').trim()), // Stripping HTML tags
    image: featuredImage,
    category: category.toUpperCase(),
    date: formatWPDate(wpPost.date),
    readTime: "5 Min Read", // Dummy value
    link: wpPost.link
  };
}

function decodeHTMLEntities(text) {
  if (!text) return "";
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

function formatWPDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);

  if (hours >= 24) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  if (hours > 0) return `${hours} HOURS AGO`;
  if (minutes > 0) return `${minutes} MINS AGO`;
  return "JUST NOW";
}
