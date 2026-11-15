import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import { galleryEvents } from '@/data/events';

export const metadata: Metadata = {
  title: 'Gallery | TAPAS',
  description:
    'Explore moments, events, workshops, and milestones from TAPAS at Pillai College of Engineering.',
};

export default function GalleryPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Visual Memories
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-tapas-text mb-4">
          TAPAS Gallery
        </h1>
        <p className="text-tapas-muted text-base sm:text-lg leading-relaxed">
          A visual journey through our meditation camps, campus wellness sessions, youth
          felicitations, and annual retreats.
        </p>
      </div>

      {/* Gallery Grid with Lightbox */}
      <GalleryGrid items={galleryEvents} />

      {/* Back to Home CTA */}
      <div className="text-center pt-8 border-t border-tapas-border">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-tapas-accent font-semibold hover:underline"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
