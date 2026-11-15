'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { EventItem } from '@/types';

interface GalleryGridProps {
  items: EventItem[];
  limit?: number;
}

export default function GalleryGrid({ items, limit }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const displayItems = limit ? items.slice(0, limit) : items;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % displayItems.length);
  }, [selectedIndex, displayItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + displayItems.length) % displayItems.length);
  }, [selectedIndex, displayItems.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  return (
    <div>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="group cursor-pointer bg-tapas-soft border border-tapas-border rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-tapas-pastel">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-tapas-text/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-tapas-text text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                  Click to View
                </span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between gap-1">
              <h4 className="font-heading font-semibold text-[1rem] text-tapas-text leading-snug">
                {item.title}
              </h4>
              <span className="text-[0.82rem] text-tapas-muted font-medium">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl w-full bg-tapas-soft rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close image"
            >
              ✕
            </button>

            {/* Image View */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black">
              <Image
                src={displayItems[selectedIndex].img}
                alt={displayItems[selectedIndex].title}
                fill
                priority
                className="object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Previous image"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Caption & Counter */}
            <div className="p-5 flex items-center justify-between border-t border-tapas-border bg-tapas-soft">
              <div>
                <h3 className="font-heading text-lg font-semibold text-tapas-text">
                  {displayItems[selectedIndex].title}
                </h3>
                <p className="text-xs text-tapas-muted">{displayItems[selectedIndex].date}</p>
              </div>
              <span className="text-xs font-semibold text-tapas-accent bg-tapas-pastel px-3 py-1 rounded-full">
                {selectedIndex + 1} / {displayItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
