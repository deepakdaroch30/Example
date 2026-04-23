import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AddToCartSection } from '@/components/products/add-to-cart-section';
import { ProductGallery } from '@/components/products/product-gallery';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { getProductBySlug } from '@/lib/products';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.title,
    description: product.description
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <section className="container-x grid gap-10 py-12 lg:grid-cols-2">
        <ProductGallery title={product.title} images={product.images} />

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">{product.title}</h1>
          <p className="mt-3 text-lg text-muted">{product.subtitle}</p>
          <p className="mt-6 leading-relaxed text-muted">{product.description}</p>

          <ul className="mt-6 space-y-2 text-sm text-muted">
            {product.details.map((detail) => (
              <li key={detail}>• {detail}</li>
            ))}
          </ul>

          <AddToCartSection
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            colors={product.colors}
            sizes={product.sizes}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
