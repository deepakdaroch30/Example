import Link from 'next/link';

type ProductsToolbarProps = {
  total: number;
  activeCategory?: string;
  activeTag?: string;
  activeSort?: string;
  categories: string[];
  tags: string[];
};

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' }
];

const makeLink = (category?: string, tag?: string, sort?: string) => {
  const params = new URLSearchParams();

  if (category && category !== 'all') {
    params.set('category', category);
  }

  if (tag) {
    params.set('tag', tag);
  }

  if (sort && sort !== 'featured') {
    params.set('sort', sort);
  }

  const query = params.toString();
  return query ? `/products?${query}` : '/products';
};

export function ProductsToolbar({ total, activeCategory = 'all', activeTag, activeSort = 'featured', categories, tags }: ProductsToolbarProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          Showing <span className="font-semibold text-ink">{total}</span> curated pieces
        </p>
        <Link href="/products" className="text-sm font-medium text-brand-700 hover:text-brand-800">
          Clear filters
        </Link>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Shop by Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <Link
                key={category}
                href={makeLink(category, activeTag, activeSort)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'border-brand-700 bg-brand-700 text-white' : 'border-brand-200 text-ink hover:border-brand-400'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Trending Tags</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <Link
                key={tag}
                href={makeLink(activeCategory, tag, activeSort)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                  isActive ? 'border-brand-300 bg-brand-50 text-brand-800' : 'border-brand-100 text-muted hover:border-brand-300'
                }`}
              >
                {tag}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Sort By</p>
        <div className="flex flex-wrap gap-2">
          {sortOptions.map((sortOption) => {
            const isActive = activeSort === sortOption.value;
            return (
              <Link
                key={sortOption.value}
                href={makeLink(activeCategory, activeTag, sortOption.value)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive ? 'border-brand-700 text-brand-700' : 'border-brand-200 text-muted hover:border-brand-400 hover:text-ink'
                }`}
              >
                {sortOption.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
