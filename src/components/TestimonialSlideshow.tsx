'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { TestimonialItem } from '@/types';

interface TestimonialSlideshowProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialSlideshow({ testimonials }: TestimonialSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef(0);

  const total = testimonials.length;

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(((idx % total) + total) % total);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning, total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        goTo(current + 1);
      }
    }, 6000);
  }, [current, goTo]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  // Swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    pause();
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartRef.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
    resume();
  };

  // Keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    else if (e.key === 'ArrowRight') next();
  };

  const t = testimonials[current];

  return (
    <div
      ref={containerRef}
      className="w-full"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
          Student Voices
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-tapas-text mb-3">
          What our members say
        </h2>
        <p className="text-[1.05rem] text-tapas-muted max-w-[36rem] mx-auto leading-[1.6]">
          Read how TAPAS and Heartfulness meditation transformed our students&apos; college journey.
        </p>
      </div>

      {/* Slide */}
      <div className="bg-tapas-sky border border-tapas-border rounded-[18px] p-6 sm:p-10 md:p-12">
        <div
          className={`flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center order-2 md:order-1 min-h-[280px] sm:min-h-[320px]">
            <div
              className="font-heading text-6xl leading-none text-tapas-accent/20 select-none mb-2"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <div className="text-[0.96rem] sm:text-[1.02rem] text-tapas-muted leading-[1.75] italic mb-6 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin">
              {t.text.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="pt-4 border-t border-tapas-border">
              <span className="font-heading font-semibold text-[1.05rem] text-tapas-text block">
                {t.name}
              </span>
              <span className="text-[0.85rem] text-tapas-accent font-medium block mt-0.5">
                {t.role}
              </span>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 md:order-2 shrink-0 flex flex-col items-center gap-4">
            <div
              className={`relative rounded-[16px] overflow-hidden shadow-lg bg-tapas-soft border border-tapas-border ${
                t.isPortrait
                  ? 'w-[200px] h-[280px] sm:w-[240px] sm:h-[340px]'
                  : 'w-[200px] h-[200px] sm:w-[260px] sm:h-[260px]'
              }`}
            >
              <Image
                src={t.photo}
                alt={`Photo of ${t.name}`}
                fill
                className={t.isPortrait ? 'object-contain' : 'object-cover object-top'}
                sizes="(max-width: 640px) 200px, 260px"
              />
            </div>

            {/* Prev / Next arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-tapas-border bg-tapas-soft text-tapas-text flex items-center justify-center hover:bg-tapas-pastel hover:text-tapas-accent transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-tapas-border bg-tapas-soft text-tapas-text flex items-center justify-center hover:bg-tapas-pastel hover:text-tapas-accent transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-tapas-accent w-6'
                  : 'bg-tapas-border hover:bg-tapas-accent/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
