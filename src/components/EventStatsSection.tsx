'use client';

import { useState, useEffect, useRef } from 'react';
import { EventStatItem } from '@/types';

interface EventStatsSectionProps {
  stats: EventStatItem[];
}

function StatCard({ stat, inView }: { stat: EventStatItem; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(stat.targetNum);
      return;
    }

    const duration = 1200; // ms
    const startTime = performance.now();
    const endValue = stat.targetNum;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    const frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [inView, stat.targetNum]);

  return (
    <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between text-center min-h-[140px]">
      {/* Top Section: Number & Optional Suffix */}
      <div className="flex flex-col items-center">
        <div className="font-heading text-3xl sm:text-4xl font-extrabold text-tapas-accent leading-none">
          {count}+
        </div>
        {stat.suffix ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-tapas-muted mt-1.5 h-4">
            {stat.suffix}
          </span>
        ) : (
          <span className="h-4 mt-1.5" aria-hidden="true" />
        )}
      </div>

      {/* Bottom Section: Event Name */}
      <div className="pt-3 border-t border-tapas-border/60">
        <h3 className="font-heading text-base sm:text-[1.05rem] font-semibold text-tapas-text leading-snug">
          {stat.event}
        </h3>
      </div>
    </div>
  );
}

export default function EventStatsSection({ stats }: EventStatsSectionProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Heading Line (Intro text centered, no heavy box, readable size, max-width ~800px) */}
      <div className="text-center max-w-[800px] mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Proven Reach &amp; Impact
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-tapas-text mb-4">
          Event-wise Statistics
        </h2>
        <p className="text-sm sm:text-base md:text-[1.05rem] text-tapas-text font-normal leading-relaxed">
          &ldquo;Since its inception in 2019, over 20,000 students have practiced meditation through
          TAPAS, and more than 200 meditation sessions and wellness programs have been successfully
          organized on campus.&rdquo;
        </p>
      </div>

      {/* 3-column grid on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <StatCard key={stat.event} stat={stat} inView={inView} />
        ))}
      </div>
    </div>
  );
}
