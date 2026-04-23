import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'prod_1',
    slug: 'ivory-zari-blossom',
    title: 'Ivory Zari Blossom',
    subtitle: 'Hand-embroidered organza saari',
    price: 289,
    compareAtPrice: 349,
    currencyCode: 'USD',
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0f6d63f6e80?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80'
    ],
    colors: ['Ivory', 'Rose Gold'],
    sizes: ['Free Size'],
    category: 'bridal',
    tags: ['new', 'best seller'],
    rating: 4.8,
    reviewCount: 112,
    description:
      'A signature drape crafted in sheer organza, detailed with hand-set zari vines and finished with a scalloped border.',
    details: ['Blouse piece included', 'Dry clean only', 'Ships in 2-4 business days']
  },
  {
    id: 'prod_2',
    slug: 'ruby-moonlight-weave',
    title: 'Ruby Moonlight Weave',
    subtitle: 'Banarasi silk statement saari',
    price: 259,
    currencyCode: 'USD',
    images: ['https://images.unsplash.com/photo-1611582461675-d6ae8f0c6ec7?auto=format&fit=crop&w=1200&q=80'],
    colors: ['Ruby', 'Gold'],
    sizes: ['Free Size'],
    category: 'silk',
    tags: ['limited'],
    rating: 4.6,
    reviewCount: 84,
    description: 'A rich ruby silk weave designed with intricate zari motifs for wedding and festive wear.',
    details: ['Pure silk', 'Comes with tassel pallu', 'Express shipping available']
  },
  {
    id: 'prod_3',
    slug: 'midnight-sequin-drape',
    title: 'Midnight Sequin Drape',
    subtitle: 'Contemporary georgette shimmer',
    price: 219,
    currencyCode: 'USD',
    images: ['https://images.unsplash.com/photo-1583391733981-8494f4cd8c70?auto=format&fit=crop&w=1200&q=80'],
    colors: ['Midnight', 'Graphite'],
    sizes: ['Free Size'],
    category: 'partywear',
    tags: ['trending'],
    rating: 4.7,
    reviewCount: 63,
    description: 'A modern, fluid silhouette with all-over tonal sequin work for elevated evening occasions.',
    details: ['Pre-stitched option available', 'Lightweight georgette', 'Padded blouse add-on']
  },
  {
    id: 'prod_4',
    slug: 'blush-floral-aura',
    title: 'Blush Floral Aura',
    subtitle: 'Soft net pastel partywear',
    price: 199,
    currencyCode: 'USD',
    images: ['https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1200&q=80'],
    colors: ['Blush', 'Nude Pink'],
    sizes: ['Free Size'],
    category: 'festive',
    tags: ['new'],
    rating: 4.5,
    reviewCount: 41,
    description: 'An airy floral embroidered net saari with delicate sequin highlights and satin edging.',
    details: ['Comes with unstitched blouse', 'Ideal for day festivities', 'Gift wrap available']
  }
];

export type ProductQuery = {
  category?: string;
  tag?: string;
  sort?: 'featured' | 'price-asc' | 'price-desc' | 'rating';
};

export const productCategories = ['all', ...new Set(products.map((product) => product.category))];
export const productTags = [...new Set(products.flatMap((product) => product.tags))];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

export const getFilteredProducts = ({ category, tag, sort = 'featured' }: ProductQuery) => {
  const filtered = products.filter((product) => {
    const matchesCategory = category && category !== 'all' ? product.category === category : true;
    const matchesTag = tag ? product.tags.includes(tag) : true;

    return matchesCategory && matchesTag;
  });

  const sorted = [...filtered];

  if (sort === 'price-asc') {
    sorted.sort((a, b) => a.price - b.price);
  }

  if (sort === 'price-desc') {
    sorted.sort((a, b) => b.price - a.price);
  }

  if (sort === 'rating') {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  return sorted;
};
