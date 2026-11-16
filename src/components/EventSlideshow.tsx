'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SlideshowEventItem } from '@/data/events';

interface EventSlideshowProps {
  events: SlideshowEventItem[];
}

export default function EventSlideshow({ events }: EventSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<SlideshowEventItem | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  const total = events.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic slideshow on page load every 4 seconds
  useEffect(() => {
    if (isPaused || selectedEvent !== null) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, selectedEvent, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation & accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedEvent) return;
      if (e.key === 'Escape') setSelectedEvent(null);
      if (e.key === 'ArrowLeft' && selectedEvent.photos.length > 1) {
        setGalleryIndex((prev) => (prev - 1 + selectedEvent.photos.length) % selectedEvent.photos.length);
      }
      if (e.key === 'ArrowRight' && selectedEvent.photos.length > 1) {
        setGalleryIndex((prev) => (prev + 1) % selectedEvent.photos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  // Focus trap for modal
  useEffect(() => {
    if (selectedEvent && modalCloseRef.current) {
      modalCloseRef.current.focus();
    }
  }, [selectedEvent]);

  const openModal = (ev: SlideshowEventItem) => {
    setSelectedEvent(ev);
    setGalleryIndex(0);
  };

  const currentEvent = events[currentIndex];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center max-w-[800px] mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Campus Glimpses
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-tapas-text mb-3">
          Events &amp; Sessions
        </h2>
        <p className="text-sm sm:text-base text-tapas-muted">
          Moments from our flagship gatherings, wellness retreats, and student meditation circles.
        </p>
      </div>

      {/* Large Full-width Slideshow Container */}
      <div className="relative w-full max-w-5xl mx-auto">
        <div
          className="relative bg-tapas-soft border border-tapas-border rounded-[18px] overflow-hidden shadow-sm group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card */}
          <div
            onClick={() => openModal(currentEvent)}
            className="cursor-pointer relative aspect-[16/9] sm:aspect-[21/10] w-full bg-tapas-pastel overflow-hidden"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(currentEvent);
              }
            }}
            aria-label={`View details for event: ${currentEvent.name}`}
          >
            <Image
              src={currentEvent.img}
              alt={currentEvent.name}
              fill
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Event Name Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <span className="text-xs uppercase font-bold tracking-widest text-white/80 mb-1.5">
                TAPAS Event ({currentIndex + 1} of {total})
              </span>
              <h3 className="font-heading text-xl sm:text-3xl font-semibold text-white leading-snug">
                {currentEvent.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-2 font-medium flex items-center gap-1.5">
                <span>Click slide to view event details &amp; gallery</span>
                <span>&rarr;</span>
              </p>
            </div>
          </div>

          {/* Prev Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/75 transition-colors border-0 cursor-pointer shadow"
            aria-label="Previous slide"
          >
            &#8249;
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/75 transition-colors border-0 cursor-pointer shadow"
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {events.map((ev, idx) => (
            <button
              key={ev.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full border-0 cursor-pointer p-0 ${
                idx === currentIndex
                  ? 'w-7 h-2.5 bg-tapas-accent'
                  : 'w-2.5 h-2.5 bg-tapas-border hover:bg-tapas-muted'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${ev.name}`}
            />
          ))}
        </div>
      </div>

      {/* Event Details Modal with Photo Gallery */}
      {selectedEvent !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-tapas-soft rounded-[18px] overflow-hidden shadow-2xl border border-tapas-border flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              ref={modalCloseRef}
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/65 text-white flex items-center justify-center hover:bg-black/85 transition-colors border-0 cursor-pointer shadow"
              aria-label="Close event modal"
            >
              &#10005;
            </button>

            {/* Gallery Photo Viewport */}
            <div className="relative w-full aspect-[16/10] bg-tapas-pastel shrink-0">
              <Image
                src={selectedEvent.photos[galleryIndex]}
                alt={`${selectedEvent.name} photo ${galleryIndex + 1}`}
                fill
                priority
                decoding="async"
                className="object-cover"
              />

              {/* Gallery navigation if multiple photos */}
              {selectedEvent.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGalleryIndex((prev) => (prev - 1 + selectedEvent.photos.length) % selectedEvent.photos.length);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/80 transition-colors border-0 cursor-pointer shadow"
                    aria-label="Previous photo"
                  >
                    &#8249;
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGalleryIndex((prev) => (prev + 1) % selectedEvent.photos.length);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/80 transition-colors border-0 cursor-pointer shadow"
                    aria-label="Next photo"
                  >
                    &#8250;
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold">
                    {galleryIndex + 1} / {selectedEvent.photos.length}
                  </div>
                </>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h3
                  id="event-modal-title"
                  className="font-heading text-2xl font-semibold text-tapas-text leading-snug"
                >
                  {selectedEvent.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {selectedEvent.date && (
                    <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-tapas-pastel text-tapas-accent">
                      📅 {selectedEvent.date}
                    </span>
                  )}
                  {selectedEvent.students && (
                    <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-tapas-pastel text-tapas-accent">
                      👥 {selectedEvent.students}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-tapas-muted leading-relaxed">
                {selectedEvent.description}
              </p>

              <div className="pt-4 border-t border-tapas-border flex items-center justify-between">
                <Link
                  href="/events"
                  className="text-sm font-semibold text-tapas-accent hover:underline inline-flex items-center gap-1.5"
                  onClick={() => setSelectedEvent(null)}
                >
                  <span>View all events</span>
                  <span>&rarr;</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="text-xs font-semibold text-tapas-muted hover:text-tapas-text bg-transparent border-0 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
