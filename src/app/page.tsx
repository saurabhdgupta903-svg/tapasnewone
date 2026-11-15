import Link from 'next/link';
import Image from 'next/image';
import GalleryGrid from '@/components/GalleryGrid';
import { testimonials } from '@/data/testimonials';
import { awards, eventStatistics, galleryEvents } from '@/data/events';

/**
 * TAPAS Home Page Component
 * Sections:
 *  1. Hero
 *  2. About TAPAS (Formation block + Mission & Vision cards)
 *  3. Awards and Achievements (5 award cards with photos)
 *  4. Event-wise Statistics (9 campus event stats)
 *  5. Gallery (responsive grid + interactive lightbox)
 *  6. Testimonials (verbatim quotes)
 *  7. Heartfulness Resources Hub (callout card to /resources)
 */
export default function HomePage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-20 md:gap-28 pt-10 pb-24 md:pt-14">
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section
        id="home"
        className="flex flex-col min-[900px]:flex-row min-[900px]:justify-between items-center gap-10 min-[900px]:gap-14 pt-2"
        aria-labelledby="hero-heading"
      >
        <div className="flex-1 flex flex-col items-start">
          <span className="text-[0.85rem] font-bold tracking-[0.12em] uppercase text-tapas-accent mb-3">
            Relax, Meditate, Rejuvenate and Connect
          </span>
          <h1
            id="hero-heading"
            className="font-heading text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-tapas-text leading-[1.18] mb-5"
          >
            Your journey to inner peace.
          </h1>
          <p className="text-[clamp(1.05rem,2vw,1.2rem)] text-tapas-muted leading-[1.65] mb-8 max-w-[32rem]">
            Experience calm, clarity and connection through Heartfulness meditation at Pillai College
            of Engineering.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-tapas-accent text-white px-8 py-[0.85rem] rounded-[6px] text-[1.05rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-sm"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center border border-tapas-border bg-tapas-soft text-tapas-text px-6 py-[0.85rem] rounded-[6px] text-[1.05rem] font-medium transition-colors duration-200 hover:border-tapas-accent hover:text-tapas-accent"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[520px]">
          <div className="relative w-full aspect-[4/3] bg-tapas-bg rounded-[12px] overflow-hidden flex items-center justify-center border border-tapas-border shadow-md">
            <Image
              src="/images/hero.jpg"
              alt="Heartfulness meditation session at TAPAS"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 2. About Section: Formation, Mission and Vision ─── */}
      <section id="about" className="scroll-mt-24" aria-labelledby="about-heading">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Who We Are
          </span>
          <h2
            id="about-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3 font-semibold"
          >
            About TAPAS
          </h2>
          <p className="text-[1.05rem] text-tapas-muted max-w-[36rem] mx-auto leading-[1.6]">
            Dedicated to student mental wellness, holistic growth, and self-discovery through
            Heartfulness meditation.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Formation of TAPAS Block */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 sm:p-10 shadow-[0_2px_12px_rgba(11,120,200,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-tapas-accent">
                Inception &amp; Legacy
              </span>
              <h3 className="font-heading text-[1.65rem] text-tapas-text font-semibold leading-snug">
                Formation of TAPAS
              </h3>
              <p className="text-[1.03rem] text-tapas-muted leading-[1.7]">
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
                  alt="Inauguration and Formation of TAPAS on 16 October 2019"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-center text-tapas-muted mt-2 italic">
                Inauguration of TAPAS at Pillai College on 16 October 2019
              </p>
            </div>
          </div>

          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-8 md:p-9 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col">
              <div className="w-10 h-10 rounded-full bg-tapas-pastel text-tapas-accent flex items-center justify-center font-bold text-lg mb-4">
                M
              </div>
              <h3 className="font-heading text-[1.5rem] text-tapas-text mb-3 font-semibold">
                Mission
              </h3>
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
              <h3 className="font-heading text-[1.5rem] text-tapas-text mb-3 font-semibold">
                Vision
              </h3>
              <p className="text-[1.02rem] text-tapas-muted leading-[1.7]">
                TAPAS functions under Heartfulness, which is based on four simple practices: Relax,
                Meditate, Rejuvenate (Cleaning), and Connect. These steps help individuals calm the
                body, center the mind, remove mental burdens, and develop inner clarity and
                connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Awards and Achievements ───────────────────────── */}
      <section id="awards" className="scroll-mt-24" aria-labelledby="awards-heading">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Honors &amp; Milestones
          </span>
          <h2
            id="awards-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3 font-semibold"
          >
            Awards &amp; Achievements
          </h2>
          <p className="text-[1.05rem] text-tapas-muted max-w-[36rem] mx-auto leading-[1.6]">
            Recognitions acknowledging TAPAS&apos;s pioneering contribution to wellness and youth
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-tapas-soft border border-tapas-border rounded-[14px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full bg-tapas-pastel overflow-hidden">
                <Image
                  src={award.img}
                  alt={award.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {award.badge && (
                  <span className="absolute top-3 left-3 bg-white/95 text-tapas-accent text-[0.75rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {award.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex-1 flex items-center">
                <p className="font-heading text-[1.02rem] text-tapas-text font-semibold leading-[1.5]">
                  {award.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Event-wise Statistics ────────────────────────── */}
      <section id="statistics" className="scroll-mt-24" aria-labelledby="stats-heading">
        <div className="text-center mb-10">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Proven Reach &amp; Impact
          </span>
          <h2
            id="stats-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-4 font-semibold"
          >
            Event-wise Statistics
          </h2>
          <p className="text-[1.12rem] text-tapas-text font-medium max-w-[48rem] mx-auto leading-[1.7] bg-tapas-sky/60 p-4 sm:p-5 rounded-xl border border-tapas-border">
            &ldquo;Since its inception in 2019, over 20,000 students have practiced meditation through
            TAPAS, and more than 200 meditation sessions and wellness programs have been successfully
            organized on campus.&rdquo;
          </p>
        </div>

        {/* Responsive Cards Grid for Mobile & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eventStatistics.map((stat) => (
            <div
              key={stat.event}
              className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 shadow-sm hover:border-tapas-accent/40 transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-tapas-muted block mb-1">
                  Event
                </span>
                <h4 className="font-heading text-lg font-bold text-tapas-text">{stat.event}</h4>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase tracking-wider font-semibold text-tapas-muted block mb-1">
                  Students
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-tapas-accent font-heading">
                  {stat.students}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Gallery ───────────────────────────────────────── */}
      <section id="gallery" className="scroll-mt-24" aria-labelledby="gallery-heading">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Campus Moments
          </span>
          <h2
            id="gallery-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3 font-semibold"
          >
            Gallery
          </h2>
          <p className="text-[1.05rem] text-tapas-muted max-w-[36rem] mx-auto leading-[1.6]">
            Moments of meditation, youth workshops, Ashram visits, and landmark celebrations.
          </p>
        </div>

        <GalleryGrid items={galleryEvents} limit={6} />

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border border-tapas-accent text-tapas-accent bg-transparent px-7 py-3 rounded-[6px] text-[0.95rem] font-semibold hover:bg-tapas-accent hover:text-white transition-colors duration-200"
          >
            <span>View Full Gallery</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ── 6. Testimonials ─────────────────────────────────── */}
      <section id="testimonials" className="scroll-mt-24" aria-labelledby="testimonials-heading">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Student Voices
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3 font-semibold"
          >
            Testimonials
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

      {/* ── 7. Heartfulness Resources Hub Callout ─────────────── */}
      <section id="resources" className="scroll-mt-24" aria-labelledby="resources-hub-heading">
        <div className="bg-gradient-to-r from-tapas-soft via-tapas-pastel to-tapas-soft border border-tapas-border rounded-[18px] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 max-w-[38rem]">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-tapas-accent mb-2 block">
              Official Meditation &amp; Wellness Material
            </span>
            <h2
              id="resources-hub-heading"
              className="font-heading text-2xl sm:text-3xl font-semibold text-tapas-text mb-3"
            >
              Heartfulness Resources Hub
            </h2>
            <p className="text-[1.02rem] text-tapas-muted leading-[1.65]">
              Access official Heartfulness meditation guides, audio sessions, wellness literature,
              and practice materials.
            </p>
          </div>
          <div>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center bg-tapas-accent text-white px-7 py-3.5 rounded-[6px] text-[1rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-md whitespace-nowrap"
            >
              Explore Resources Hub &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
