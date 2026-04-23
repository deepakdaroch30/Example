'use client';

import { useMemo, useState } from 'react';

type AddToCartSectionProps = {
  price: number;
  compareAtPrice?: number;
  colors: string[];
  sizes: string[];
};

export function AddToCartSection({ price, compareAtPrice, colors, sizes }: AddToCartSectionProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const savings = useMemo(() => {
    if (!compareAtPrice || compareAtPrice <= price) {
      return null;
    }

    return compareAtPrice - price;
  }, [compareAtPrice, price]);

  return (
    <div className="mt-8 rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
      <div className="flex items-end gap-3">
        <p className="text-3xl font-semibold text-ink">${price}</p>
        {compareAtPrice ? <p className="text-base text-muted line-through">${compareAtPrice}</p> : null}
      </div>
      {savings ? <p className="mt-1 text-sm font-medium text-brand-700">You save ${savings}</p> : null}

      <div className="mt-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Color</p>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedColor === color ? 'border-brand-700 bg-brand-700 text-white' : 'border-brand-200 text-ink hover:border-brand-400'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Size</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedSize === size ? 'border-brand-700 text-brand-700' : 'border-brand-200 text-muted hover:border-brand-400 hover:text-ink'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <label htmlFor="quantity" className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
          Qty
        </label>
        <input
          id="quantity"
          name="quantity"
          min={1}
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
          className="h-11 w-20 rounded-xl border border-brand-200 px-3 text-sm font-medium text-ink outline-none ring-brand-300 focus:ring"
        />
      </div>

      <button className="mt-8 w-full rounded-full bg-brand-700 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
        Add to Cart
      </button>
      <p className="mt-3 text-center text-xs text-muted">Selected: {selectedColor} • {selectedSize}</p>
    </div>
  );
}
