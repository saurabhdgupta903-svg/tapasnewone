import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heartfulness Meditation | TAPAS',
  description:
    'Discover the scientific practice of Heartfulness meditation — Relax, Meditate, Rejuvenate, and Connect.',
};

export default function MeditationPage() {
  const steps = [
    {
      num: '01',
      title: 'Relax',
      desc: 'Physical relaxation from the feet upward, calming every organ and muscle.',
    },
    {
      num: '02',
      title: 'Meditate',
      desc: 'Meditation on the divine source of light in the heart, cultivating peace.',
    },
    {
      num: '03',
      title: 'Rejuvenate',
      desc: 'Clearing mental impressions and fatigue from the day to feel refreshed.',
    },
    {
      num: '04',
      title: 'Connect',
      desc: 'Deep inner contemplation and connection with the universal essence.',
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col gap-12">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Core Method
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-tapas-text mb-4">
          Heartfulness Practice
        </h1>
        <p className="text-tapas-muted text-base sm:text-lg leading-relaxed">
          The four simple steps of Heartfulness meditation that guide every TAPAS session.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div
            key={s.num}
            className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 text-center shadow-sm"
          >
            <span className="text-xs font-bold text-tapas-accent tracking-widest block mb-2">
              STEP {s.num}
            </span>
            <h3 className="font-heading text-xl font-semibold text-tapas-text mb-3">{s.title}</h3>
            <p className="text-sm text-tapas-muted leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <Link
          href="/resources"
          className="inline-flex items-center justify-center bg-tapas-accent text-white px-7 py-3 rounded-[6px] font-semibold hover:bg-tapas-accent-hover transition-colors shadow-sm"
        >
          View Resources Hub &rarr;
        </Link>
      </div>
    </div>
  );
}
