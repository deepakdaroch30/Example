import type { ReactNode } from 'react';
import Link from 'next/link';

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'light';
  className?: string;
};

export function PillButton({ href, children, variant = 'solid', className = '' }: PillButtonProps) {
  const variantClass =
    variant === 'solid'
      ? 'bg-brand-700 text-white hover:bg-brand-800'
      : variant === 'outline'
        ? 'border border-brand-300 text-brand-800 hover:border-brand-400'
        : 'bg-white text-brand-800 hover:bg-brand-50';

  return (
    <Link href={href} className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
