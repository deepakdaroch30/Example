import { CtaSection } from '@/components/home/cta-section';
import { HeroSection } from '@/components/home/hero-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ProductGrid } from '@/components/products/product-grid';
import { getProductsData } from '@/lib/products';

export default async function HomePage() {
  const products = await getProductsData();

  return (
    <main>
      <Navbar />
      <HeroSection />

      <section className="container-x section-shell pt-8 sm:pt-10">
        <SectionHeading eyebrow="Featured Edit" title="Most Loved This Week" className="mb-8" />
        <ProductGrid products={products.slice(0, 4)} />
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
