import Link from 'next/link';

const navLinks = [
  { label: 'Shop', href: '/products' },
  { label: 'New Arrivals', href: '/products?tag=new' },
  { label: 'Bridal', href: '/products?category=bridal' },
  { label: 'Lookbook', href: '/products?tag=trending' }
];

export function Navbar() {
  return (
    <header className="border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-2xl font-semibold tracking-wide text-brand-800">
          Premium Saari
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-ink transition hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/products" className="text-sm font-medium text-ink">
            Explore
          </Link>
          <Link
            href="/cart"
            className="rounded-full bg-brand-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-800"
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
