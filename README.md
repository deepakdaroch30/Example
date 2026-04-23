# Premium Saari Frontend

Production-ready eCommerce frontend built with Next.js App Router, TypeScript, and Tailwind CSS.

## Shopify Storefront API integration

The UI now reads product data from Shopify Storefront API when environment variables are available, and automatically falls back to local mock data when they are not.

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your_storefront_access_token
```

Without these values, the existing mock product data in `lib/products.ts` is used so the UI remains functional.

## Folder structure

```txt
app/
  cart/page.tsx
  products/
    page.tsx
    [slug]/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  cart/cart-summary.tsx
  home/
    cta-section.tsx
    hero-section.tsx
  products/
    add-to-cart-section.tsx
    empty-products-state.tsx
    product-card.tsx
    product-gallery.tsx
    product-grid.tsx
    products-toolbar.tsx
  ui/
    pill-button.tsx
    section-heading.tsx
  footer.tsx
  navbar.tsx
lib/
  products.ts
  shopify/storefront.ts
types/
  product.ts
```

## Run

```bash
npm install
npm run dev
```
