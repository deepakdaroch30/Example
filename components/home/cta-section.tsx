import { PillButton } from '@/components/ui/pill-button';
import { SectionHeading } from '@/components/ui/section-heading';

export function CtaSection() {
  return (
    <section className="container-x mt-10 sm:mt-12">
      <div className="rounded-3xl bg-brand-800 px-8 py-12 text-white sm:px-12">
        <SectionHeading
          eyebrow="Private Styling"
          title="Need help finding the perfect drape for your occasion?"
          description="Book a complimentary styling consult and get curated picks based on your event, color story, and draping preference."
          className="gap-3 [&_.section-eyebrow]:text-brand-100 [&_.section-title]:text-white [&_.section-title]:sm:text-4xl [&_.section-copy]:text-brand-100"
        />
        <PillButton href="/products" variant="light" className="mt-8">
          Book Consultation
        </PillButton>
      </div>
    </section>
  );
}
