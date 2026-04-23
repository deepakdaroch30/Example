import type { Product } from '@/types/product';

const STOREFRONT_QUERY = `#graphql
  query StorefrontProducts($first: Int!) {
    products(first: $first, sortKey: CREATED_AT, reverse: true) {
      nodes {
        id
        handle
        title
        description
        productType
        tags
        images(first: 10) {
          nodes {
            url
            altText
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        compareAtPriceRange {
          minVariantPrice {
            amount
          }
        }
        options {
          name
          values
        }
      }
    }
  }
`;

type ShopifyProductNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  productType: string;
  tags: string[];
  images: { nodes: Array<{ url: string; altText: string | null }> };
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  compareAtPriceRange: { minVariantPrice: { amount: string } | null };
  options: Array<{ name: string; values: string[] }>;
};

type ShopifyProductsResponse = {
  data?: {
    products: {
      nodes: ShopifyProductNode[];
    };
  };
  errors?: Array<{ message: string }>;
};

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=80';

const normalizeCategory = (value: string) => {
  const normalized = value.trim().toLowerCase();

  if (!normalized) {
    return 'festive';
  }

  return normalized;
};

const toSubtitle = (node: ShopifyProductNode) => node.productType || 'Premium handcrafted saari';

const toDetails = (node: ShopifyProductNode) => {
  const detailChips = ['Ships in 2-4 business days', 'Easy returns'];

  if (node.tags.length > 0) {
    detailChips.unshift(`Tagged: ${node.tags.slice(0, 2).join(', ')}`);
  }

  return detailChips;
};

const mapShopifyProduct = (node: ShopifyProductNode): Product => {
  const colorOption = node.options.find((option) => option.name.toLowerCase() === 'color')?.values;
  const sizeOption = node.options.find((option) => option.name.toLowerCase() === 'size')?.values;
  const compareAt = node.compareAtPriceRange.minVariantPrice?.amount;

  return {
    id: node.id,
    slug: node.handle,
    title: node.title,
    subtitle: toSubtitle(node),
    price: Number(node.priceRange.minVariantPrice.amount),
    compareAtPrice: compareAt ? Number(compareAt) : undefined,
    currencyCode: node.priceRange.minVariantPrice.currencyCode,
    images: node.images.nodes.map((image) => image.url).filter(Boolean).slice(0, 10),
    colors: colorOption && colorOption.length > 0 ? colorOption : ['Default'],
    sizes: sizeOption && sizeOption.length > 0 ? sizeOption : ['Free Size'],
    category: normalizeCategory(node.productType),
    tags: node.tags,
    rating: 4.6,
    reviewCount: 24,
    description: node.description || `${node.title} by Premium Saari`,
    details: toDetails(node)
  };
};

export const hasShopifyConfig = () =>
  Boolean(process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN && process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN);

export async function fetchShopifyProducts(first = 20): Promise<Product[]> {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

  if (!domain || !token) {
    return [];
  }

  const endpoint = `https://${domain}/api/2024-10/graphql.json`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token
    },
    body: JSON.stringify({ query: STOREFRONT_QUERY, variables: { first } }),
    next: { revalidate: 120 }
  });

  if (!response.ok) {
    return [];
  }

  const payload = (await response.json()) as ShopifyProductsResponse;

  if (payload.errors || !payload.data) {
    return [];
  }

  return payload.data.products.nodes.map((node) => {
    const mapped = mapShopifyProduct(node);
    if (mapped.images.length === 0) {
      mapped.images = [FALLBACK_IMAGE];
    }
    return mapped;
  });
}
