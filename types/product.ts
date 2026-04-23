export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  currencyCode: 'USD';
  images: string[];
  colors: string[];
  sizes: string[];
  category: 'bridal' | 'festive' | 'silk' | 'partywear';
  tags: string[];
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
};
