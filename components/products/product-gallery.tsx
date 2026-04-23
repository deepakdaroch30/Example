'use client';

import { useState } from 'react';
import Image from 'next/image';

type ProductGalleryProps = {
  title: string;
  images: string[];
};

export function ProductGallery({ title, images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
        <Image src={activeImage} alt={title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
        {images.map((image, index) => {
          const active = activeImage === image;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                active ? 'border-brand-700' : 'border-transparent hover:border-brand-300'
              }`}
              aria-label={`Select image ${index + 1}`}
            >
              <Image src={image} alt={`${title} thumbnail ${index + 1}`} fill sizes="120px" className="object-cover" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
