import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="space-y-2 p-5">
        <p className="text-xs uppercase tracking-wider text-brand-700">{product.category}</p>
        <h3 className="font-display text-xl text-ink">{product.title}</h3>
        <p className="text-sm text-muted">{product.subtitle}</p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-base font-semibold text-ink">${product.price}</p>
          <Link href={`/products/${product.slug}`} className="text-sm font-medium text-brand-700 hover:text-brand-800">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
