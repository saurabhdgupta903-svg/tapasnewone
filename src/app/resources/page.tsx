import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heartfulness Resources Hub | TAPAS',
  description:
    'Access official Heartfulness meditation guides, audio sessions, wellness literature, and practice materials.',
};

export default function ResourcesPage() {
  const practices = [
    {
      step: '01',
      title: 'Relax',
      desc: 'Heartfulness Relaxation helps calm the physical body from the tips of the toes to the top of the head, releasing deep-seated muscular tension and stress.',
      duration: '5–7 minutes',
    },
    {
      step: '02',
      title: 'Meditate',
      desc: 'Gently turn your attention inward toward the source of Divine Light already present in your heart. Cultivate mental poise, focus, and heartfelt serenity.',
      duration: '15–30 minutes',
    },
    {
      step: '03',
      title: 'Rejuvenate (Cleaning)',
      desc: 'An evening practice to remove daily mental burdens, emotional impressions, and fatigue, leaving you feeling renewed, light, and refreshed.',
      duration: '15 minutes',
    },
    {
      step: '04',
      title: 'Connect',
      desc: 'A silent prayerful reflection at bedtime to re-establish connection with your inner self and rest peacefully in profound balance.',
      duration: '5 minutes',
    },
  ];

  const literature = [
    {
      title: 'The Heartfulness Way',
      author: 'Kamlesh D. Patel (Daaji) & Joshua Pollock',
      desc: 'A definitive dialogic guide unveiling the principles, philosophy, and practical techniques of Heartfulness meditation.',
      link: 'https://heartfulnessway.com/',
    },
    {
      title: 'Designing Destiny',
      author: 'Kamlesh D. Patel (Daaji)',
      desc: 'Explore how meditation, lifestyle choices, and mental disciplines empower you to reshape destiny and mental resilience.',
      link: 'https://daaji.org/designing-destiny/',
    },
    {
      title: 'The Wisdom Bridge',
      author: 'Kamlesh D. Patel (Daaji)',
      desc: 'Nine principles to cultivate thriving families, balanced young minds, and nurturing campus ecosystems.',
      link: 'https://daaji.org/thewisdombridge/',
    },
  ];

  const officialLinks = [
    {
      name: 'Daaji — Global Guide',
      url: 'https://www.daaji.org/',
      desc: 'Official writings, articles, and video addresses by Kamlesh D. Patel.',
    },
    {
      name: 'HeartsApp (Mobile App)',
      url: 'https://heartfulness.org/en/heartsapp/',
      desc: 'Meditate with a certified Heartfulness trainer live 24/7 on your phone.',
    },
    {
      name: 'Green Kanha Initiatives',
      url: 'https://heartfulness.org/kanha/green-initiatives',
      desc: 'Ecological preservation, rainforest conservation, and sustainable campus models.',
    },
    {
      name: 'Shri Ram Chandra Mission',
      url: 'http://www.srcm.org/',
      desc: 'Global spiritual fellowship promoting Sahaj Marg raja yoga meditation.',
    },
    {
      name: 'Spirituality Foundation',
      url: 'https://www.spiritualityfoundation.org/',
      desc: 'Promoting universal values, inner peace, and human brotherhood worldwide.',
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col gap-14">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Knowledge &amp; Practice
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-tapas-text mb-4">
          Heartfulness Resources Hub
        </h1>
        <p className="text-tapas-muted text-base sm:text-lg leading-relaxed">
          Access official Heartfulness meditation guides, audio sessions, wellness literature, and
          practice materials to support your daily journey.
        </p>
      </div>

      {/* 4 Core Practices */}
      <section>
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-tapas-text mb-2">
            The Four Core Practices
          </h2>
          <p className="text-tapas-muted text-sm sm:text-base">
            The foundation of Heartfulness: simple, scientific, and transformational.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practices.map((p) => (
            <div
              key={p.step}
              className="bg-tapas-soft border border-tapas-border rounded-[14px] p-7 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-tapas-accent tracking-widest uppercase">
                    Step {p.step}
                  </span>
                  <span className="text-xs font-medium text-tapas-muted bg-tapas-pastel px-2.5 py-0.5 rounded-full">
                    {p.duration}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-tapas-text mb-2">
                  {p.title}
                </h3>
                <p className="text-tapas-muted text-[0.95rem] leading-[1.65]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Literature */}
      <section>
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-tapas-text mb-2">
            Literature &amp; Publications
          </h2>
          <p className="text-tapas-muted text-sm sm:text-base">
            Inspiring books distributed on campus and recommended for all students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {literature.map((book) => (
            <div
              key={book.title}
              className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-tapas-text mb-1">
                  {book.title}
                </h3>
                <span className="text-xs text-tapas-accent font-medium block mb-3">
                  {book.author}
                </span>
                <p className="text-tapas-muted text-sm leading-[1.6] mb-5">{book.desc}</p>
              </div>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-tapas-accent hover:underline inline-flex items-center gap-1"
              >
                <span>Read More</span>
                <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Official Network Portals */}
      <section>
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-tapas-text mb-2">
            Official Heartfulness Links
          </h2>
          <p className="text-tapas-muted text-sm sm:text-base">
            Connect with global centers, mobile meditation tools, and initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {officialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-tapas-soft border border-tapas-border rounded-[12px] p-5 hover:border-tapas-accent/50 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading font-semibold text-base text-tapas-text group-hover:text-tapas-accent transition-colors mb-1">
                  {link.name} &rarr;
                </h3>
                <p className="text-xs text-tapas-muted leading-relaxed">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-tapas-sky border border-tapas-border rounded-[14px] p-8 text-center flex flex-col items-center gap-4">
        <h3 className="font-heading text-2xl font-semibold text-tapas-text">
          Want to experience a guided session on campus?
        </h3>
        <p className="text-tapas-muted text-sm sm:text-base max-w-xl">
          Join our regular weekly sessions and special meditation workshops at Pillai College of
          Engineering.
        </p>
        <Link
          href="/join"
          className="inline-flex items-center justify-center bg-tapas-accent text-white px-7 py-3 rounded-[6px] font-semibold hover:bg-tapas-accent-hover transition-colors shadow-sm"
        >
          Join TAPAS
        </Link>
      </div>
    </div>
  );
}
