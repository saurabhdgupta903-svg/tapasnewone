import Link from 'next/link';
import Image from 'next/image';
import EventStatsSection from '@/components/EventStatsSection';
import EventSlideshow from '@/components/EventSlideshow';
import { eventStatistics, slideshowEvents } from '@/data/events';
import { testimonials } from '@/data/testimonials';

/**
 * TAPAS Home Page Component
 * Multi-page architecture: This page contains ONLY the 4 requested sections:
 *  1. Hero + Mission & Vision
 *  2. Statistics (Redesigned clean vertical grid with count-up animation)
 *  3. Automatic Event Slideshow (With click-to-open event modal & link to /events)
 *  4. Feedbacks / Testimonials (3 verbatim member reflections)
 */
export default function HomePage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-24 md:gap-32 pt-8 pb-24 md:pt-12">
      {/* ── 1. Hero + Mission & Vision ───────────────────────── */}
      <section className="flex flex-col gap-16" aria-labelledby="hero-heading">
        {/* Hero Banner */}
        <div className="flex flex-col min-[900px]:flex-row min-[900px]:justify-between items-center gap-10 min-[900px]:gap-14 pt-4">
          <div className="flex-1 flex flex-col items-start">
            <span className="text-[0.85rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-3">
              Relax, Meditate, Rejuvenate and Connect
            </span>
            <h1
              id="hero-heading"
              className="font-heading text-[clamp(2.5rem,6vw,4rem)] font-bold text-tapas-text leading-[1.15] mb-4"
            >
              TAPAS
            </h1>
            <p className="text-[clamp(1.05rem,2vw,1.2rem)] text-tapas-muted leading-[1.65] mb-8 max-w-[32rem]">
              Experience calm, clarity, and holistic personal growth through Heartfulness meditation
              at Pillai College of Engineering.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-tapas-accent text-white px-8 py-[0.85rem] rounded-[6px] text-[1.05rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-sm"
            >
              Join Us
            </Link>
          </div>

          <div className="flex-1 w-full max-w-[520px]">
            <div className="relative w-full aspect-[4/3] bg-tapas-bg rounded-[16px] overflow-hidden flex items-center justify-center border border-tapas-border shadow-md">
              <Image
                src="/images/hero.jpg"
                alt="Heartfulness meditation session at TAPAS"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-8 md:p-9 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col">
            <div className="w-10 h-10 rounded-full bg-tapas-pastel text-tapas-accent flex items-center justify-center font-bold text-lg mb-4">
              M
            </div>
            <h2 className="font-heading text-[1.5rem] text-tapas-text mb-3 font-semibold">
              Mission
            </h2>
            <p className="text-[1.02rem] text-tapas-muted leading-[1.7]">
              TAPAS is a wellness and meditation club focused on supporting students&apos; mental
              well-being. It offers a safe space to discuss challenges and learn coping strategies
              through workshops and guided meditation. The club promotes Heartfulness, balance, and
              holistic personal growth on campus.
            </p>
          </div>

          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-8 md:p-9 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col">
            <div className="w-10 h-10 rounded-full bg-tapas-pastel text-tapas-accent flex items-center justify-center font-bold text-lg mb-4">
              V
            </div>
            <h2 className="font-heading text-[1.5rem] text-tapas-text mb-3 font-semibold">Vision</h2>
            <p className="text-[1.02rem] text-tapas-muted leading-[1.7]">
              TAPAS functions under Heartfulness, which is based on four simple practices: Relax,
              Meditate, Rejuvenate (Cleaning), and Connect. These steps help individuals calm the
              body, center the mind, remove mental burdens, and develop inner clarity and connection.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Statistics ───────────────────────────────────── */}
      <section aria-labelledby="statistics-heading">
        <EventStatsSection stats={eventStatistics} />
      </section>

      {/* ── 3. Slideshow (Automatic with Event Modal) ───────── */}
      <section aria-labelledby="slideshow-heading">
        <EventSlideshow events={slideshowEvents} />
      </section>

      {/* ── 4. Feedbacks / Testimonials ─────────────────────── */}
      <section aria-labelledby="testimonials-heading">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Student Voices
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-tapas-text mb-3"
          >
            What our members say
          </h2>
          <p className="text-[1.05rem] text-tapas-muted max-w-[36rem] mx-auto leading-[1.6]">
            Read how TAPAS and Heartfulness meditation transformed our students&apos; college
            journey.
          </p>
        </div>

        <div className="bg-tapas-sky border border-tapas-border rounded-[18px] p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-tapas-soft border border-tapas-border rounded-[14px] p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(11,120,200,0.04)]"
              >
                <div>
                  <div
                    className="font-heading text-4xl leading-none text-tapas-accent/30 select-none mb-3"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <p className="text-[0.96rem] text-tapas-muted leading-[1.7] italic mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-tapas-border">
                  <span className="font-heading font-semibold text-[1rem] text-tapas-text block">
                    {t.name}
                  </span>
                  <span className="text-[0.82rem] text-tapas-accent font-medium block mt-0.5">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
