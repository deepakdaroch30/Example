import Image from 'next/image';
import { PillButton } from '@/components/ui/pill-button';
import { SectionHeading } from '@/components/ui/section-heading';

export function HeroSection() {
  return (
    <section className="container-x section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-100 p-8 sm:p-12">
        <SectionHeading
          eyebrow="Spring 2026 Collection"
          title="Wear Heritage, Styled for Today."
          description="Discover handcrafted saaris with timeless textures, couture drapes, and statement silhouettes for every celebration."
          className="gap-4"
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <PillButton href="/products">Shop Collection</PillButton>
          <PillButton href="/products?category=bridal" variant="outline">
            Explore Bridal
          </PillButton>
        </div>
      </div>
      <div className="relative min-h-[380px] overflow-hidden rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=80"
          alt="Model wearing premium saari"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
