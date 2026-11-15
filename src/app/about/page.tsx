import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | TAPAS',
  description:
    'Learn about the formation, mission, and vision of TAPAS Meditation and Wellness Club at Pillai College of Engineering.',
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col gap-16">
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Our Story
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-tapas-text mb-4">
          About TAPAS
        </h1>
        <p className="text-tapas-muted text-base sm:text-lg leading-relaxed">
          Nurturing peace, emotional resilience, and mindful living among college students.
        </p>
      </div>

      {/* Formation Block */}
      <section className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-tapas-accent">
            Inception
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-tapas-text">
            Formation of TAPAS
          </h2>
          <p className="text-tapas-muted text-base leading-[1.7]">
            TAPAS, a meditation and wellness club, was formed on 16 October 2019 in collaboration
            with Heartfulness, with the aim to spread the benefits of meditation to stressed-out
            students. It is a wellness and meditation club that emphasizes the well-being of
            students&apos; mental health. Here we organize various meditation sessions, yoga
            sessions, other rejuvenating events and trips etc.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[16/11] w-full rounded-[10px] overflow-hidden border border-tapas-border shadow-sm">
            <Image
              src="/images/events/formation-2019.jpg"
              alt="Formation of TAPAS on 16 October 2019"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p className="text-xs text-center text-tapas-muted mt-2 italic">
            Inauguration of TAPAS on 16 October 2019 with College Leadership
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-8 shadow-sm flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-tapas-accent mb-2">
            Purpose
          </span>
          <h3 className="font-heading text-2xl font-semibold text-tapas-text mb-4">Mission</h3>
          <p className="text-tapas-muted text-base leading-[1.7]">
            TAPAS is a wellness and meditation club focused on supporting students&apos; mental
            well-being. It offers a safe space to discuss challenges and learn coping strategies
            through workshops and guided meditation. The club promotes Heartfulness, balance, and
            holistic personal growth on campus.
          </p>
        </div>

        <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-8 shadow-sm flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-tapas-accent mb-2">
            Aspiration
          </span>
          <h3 className="font-heading text-2xl font-semibold text-tapas-text mb-4">Vision</h3>
          <p className="text-tapas-muted text-base leading-[1.7]">
            TAPAS functions under Heartfulness, which is based on four simple practices: Relax,
            Meditate, Rejuvenate (Cleaning), and Connect. These steps help individuals calm the
            body, center the mind, remove mental burdens, and develop inner clarity and connection.
          </p>
        </div>
      </section>

      {/* Values & Four Pillars */}
      <section className="bg-tapas-sky/40 border border-tapas-border rounded-[14px] p-8 sm:p-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-tapas-text mb-3">
            The 4 Heartfulness Pillars
          </h3>
          <p className="text-tapas-muted text-sm sm:text-base">
            Simple daily habits for lasting mental equilibrium and academic performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Relax',
              desc: 'Physical calm to dissolve fatigue, stress, and nervous tension.',
            },
            {
              title: 'Meditate',
              desc: 'Focusing on the heart to foster deep concentration and clarity.',
            },
            {
              title: 'Rejuvenate',
              desc: 'Clearing everyday impressions, anxieties, and negative feelings.',
            },
            {
              title: 'Connect',
              desc: 'Deep inner alignment and peaceful contemplation for holistic health.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-tapas-soft border border-tapas-border rounded-xl p-6 text-center"
            >
              <h4 className="font-heading text-xl font-bold text-tapas-accent mb-2">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-tapas-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/join"
          className="inline-flex items-center justify-center bg-tapas-accent text-white px-8 py-3 rounded-[6px] font-semibold hover:bg-tapas-accent-hover transition-colors shadow-sm"
        >
          Join Us Today
        </Link>
        <Link
          href="/gallery"
          className="inline-flex items-center justify-center border border-tapas-border bg-tapas-soft text-tapas-text px-6 py-3 rounded-[6px] font-medium hover:border-tapas-accent hover:text-tapas-accent transition-colors"
        >
          Explore Gallery
        </Link>
      </div>
    </div>
  );
}
