# Premium Saari Frontend

Production-ready eCommerce frontend built with Next.js App Router, TypeScript, and Tailwind CSS.

## Design analysis and component breakdown

Because the Figma-hosted prototype requires JavaScript in-browser rendering, implementation is structured around a premium fashion storefront pattern with:
- Editorial hero with dual-column visual hierarchy
- Featured product grid
- Conversion-focused CTA section
- Reusable commerce layout primitives (navbar, product card, grid, footer)

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
    product-card.tsx
    product-grid.tsx
  footer.tsx
  navbar.tsx
lib/
  products.ts
types/
  product.ts
```

## Run

```bash
npm install
npm run dev
```
