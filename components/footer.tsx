export function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-100 bg-sand">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl text-brand-800">Premium Saari</h2>
          <p className="mt-3 max-w-md text-sm text-muted">
            Curated heritage drapes for modern celebrations. Thoughtful craftsmanship, effortless elegance.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Bridal Collection</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Shipping Policy</li>
            <li>Returns & Exchanges</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
