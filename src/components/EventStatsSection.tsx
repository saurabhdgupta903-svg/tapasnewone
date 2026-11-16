'use client';

import { useEffect, useRef, useState } from 'react';
import { EventStatItem } from '@/types';

interface EventStatsSectionProps {
  stats: EventStatItem[];
}

function StatCard({ stat }: { stat: EventStatItem }) {
  return (
    <div className="tapas-marquee-card bg-tapas-soft border border-tapas-border rounded-[14px] p-6 shadow-sm flex flex-col justify-between text-center min-w-[180px] max-w-[200px] min-h-[140px] shrink-0 select-none">
      {/* Number */}
      <div className="flex flex-col items-center">
        <div className="font-heading text-3xl sm:text-4xl font-extrabold text-tapas-accent leading-none">
          {stat.targetNum}+
        </div>
        {stat.suffix ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-tapas-muted mt-1.5 h-4">
            {stat.suffix}
          </span>
        ) : (
          <span className="h-4 mt-1.5" aria-hidden="true" />
        )}
      </div>
      {/* Event Name */}
      <div className="pt-3 border-t border-tapas-border/60">
        <h3 className="font-heading text-base font-semibold text-tapas-text leading-snug">
          {stat.event}
        </h3>
      </div>
    </div>
  );
}

export default function EventStatsSection({ stats }: EventStatsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Duplicate items for seamless loop
  const doubled = [...stats, ...stats];

  return (
    <div className="w-full">
      {/* Intro / Heading */}
      <div className="text-center max-w-[800px] mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Proven Reach &amp; Impact
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-tapas-text mb-4">
          Event-wise Statistics
        </h2>
        <p className="text-sm sm:text-base md:text-[1.05rem] text-tapas-text font-normal leading-relaxed">
          Since its inception in 2019, over 20,000 students have practiced meditation through TAPAS,
          and more than 200 meditation sessions and wellness programs have been successfully organized
          on campus.
        </p>
      </div>

      {/* Marquee or static scrollable row */}
      {prefersReduced ? (
        // Reduced-motion: simple horizontal scroll
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x">
          {stats.map((stat, i) => (
            <div key={i} className="snap-start">
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="relative overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
        >
          <div
            ref={trackRef}
            className="flex gap-4 tapas-marquee-track"
            style={{ width: 'max-content' }}
            onMouseEnter={() => {
              if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
            }}
            onMouseLeave={() => {
              if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
            }}
            onTouchStart={() => {
              if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
            }}
            onTouchEnd={() => {
              if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
            }}
          >
            {doubled.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
