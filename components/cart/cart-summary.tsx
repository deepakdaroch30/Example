const cartItems = [
  { id: 'prod_1', title: 'Ivory Zari Blossom', qty: 1, price: 289 },
  { id: 'prod_3', title: 'Midnight Sequin Drape', qty: 1, price: 219 }
];

export function CartSummary() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 18;
  const total = subtotal + shipping;

  return (
    <section className="rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
      <h2 className="font-display text-2xl text-ink">Order Summary</h2>
      <div className="mt-5 space-y-3 text-sm text-muted">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
        <div className="border-t border-brand-100 pt-3 text-base font-semibold text-ink">
          <div className="flex justify-between">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
      <button className="mt-6 w-full rounded-full bg-brand-700 py-3 text-sm font-semibold text-white hover:bg-brand-800">
        Proceed to Checkout
      </button>
    </section>
  );
}
