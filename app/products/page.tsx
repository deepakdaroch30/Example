import type { Metadata } from 'next';
import { EmptyProductsState } from '@/components/products/empty-products-state';
import { ProductsToolbar } from '@/components/products/products-toolbar';
import { SectionHeading } from '@/components/ui/section-heading';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ProductGrid } from '@/components/products/product-grid';
import { getFilteredProducts, productCategories, productTags } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore premium saari collections with modern and heritage-inspired styles.'
};

type ProductsPageProps = {
  searchParams?: {
    category?: string;
    tag?: string;
    sort?: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  };
};

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const activeCategory = searchParams?.category ?? 'all';
  const activeTag = searchParams?.tag;
  const activeSort = searchParams?.sort ?? 'featured';

  const filteredProducts = getFilteredProducts({
    category: activeCategory,
    tag: activeTag,
    sort: activeSort
  });

  return (
    <main>
      <Navbar />
      <section className="container-x section-shell">
        <SectionHeading
          eyebrow="Catalog"
          title="All Products"
          description="Browse our curated range of bridal, festive, silk, and partywear pieces. Designed with timeless craft and modern flair."
        />

        <div className="mt-8 rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
          <ProductsToolbar
            total={filteredProducts.length}
            activeCategory={activeCategory}
            activeTag={activeTag}
            activeSort={activeSort}
            categories={productCategories}
            tags={productTags}
          />
        </div>

        <div className="mt-10">
          {filteredProducts.length > 0 ? <ProductGrid products={filteredProducts} /> : <EmptyProductsState />}
        </div>
      </section>
      <Footer />
    </main>
  );
}
