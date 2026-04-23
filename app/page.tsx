import { CtaSection } from '@/components/home/cta-section';
import { HeroSection } from '@/components/home/hero-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ProductGrid } from '@/components/products/product-grid';
import { products } from '@/lib/products';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <section className="container-x section-shell pt-8 sm:pt-10">
        <SectionHeading eyebrow="Featured Edit" title="Most Loved This Week" className="mb-8" />
        <ProductGrid products={products} />
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
