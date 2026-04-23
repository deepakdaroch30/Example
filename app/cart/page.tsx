import type { Metadata } from 'next';
import { CartSummary } from '@/components/cart/cart-summary';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Review your premium saari selections and proceed to checkout.'
};

export default function CartPage() {
  return (
    <main>
      <Navbar />
      <section className="container-x py-14">
        <h1 className="font-display text-4xl text-ink">Your Cart</h1>
        <p className="mt-3 text-muted">Review items before checkout.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-brand-100 pb-4">
                <p className="font-medium text-ink">Ivory Zari Blossom</p>
                <p className="text-sm text-muted">$289</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium text-ink">Midnight Sequin Drape</p>
                <p className="text-sm text-muted">$219</p>
              </div>
            </div>
          </div>
          <CartSummary />
        </div>
      </section>
      <Footer />
    </main>
  );
}
