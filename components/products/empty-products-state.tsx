import Link from 'next/link';

export function EmptyProductsState() {
  return (
    <div className="rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-10 text-center">
      <h3 className="font-display text-2xl text-ink">No matching products</h3>
      <p className="mt-2 text-sm text-muted">Try clearing your active filters to explore the full collection.</p>
      <Link href="/products" className="mt-6 inline-block rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white">
        View all products
      </Link>
    </div>
  );
}
