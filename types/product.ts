export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  currencyCode: string;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
};

export type ProductQuery = {
  category?: string;
  tag?: string;
  sort?: 'featured' | 'price-asc' | 'price-desc' | 'rating';
};
