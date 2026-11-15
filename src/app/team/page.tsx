import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Team | TAPAS',
  description:
    'Meet the dedicated faculty mentors, student convenors, and executive committee of TAPAS at Pillai College of Engineering.',
};

export default function TeamPage() {
  const leaders = [
    {
      name: 'Dr. Nivedita Shreyans',
      role: 'Director - Public Relations & Heartfulness Mentor',
      dept: 'Mahatma Education Society',
      note: 'Leading institutional wellness initiatives, Heartful Campus programs, and youth development across campuses.',
    },
    {
      name: 'Faculty Coordinators',
      role: 'Staff Mentors & Wellness Guides',
      dept: 'Pillai College of Engineering',
      note: 'Faculty advisors guiding weekly meditation circles and student welfare programs.',
    },
    {
      name: 'Student Executive Committee',
      role: 'Student Convenors & Event Organizers',
      dept: 'TAPAS Core Team',
      note: 'Passionate student volunteers organizing campus meditation, yoga sessions, and Dhyanotsav festivals.',
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col gap-14">
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Our People
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-tapas-text mb-4">
          The TAPAS Team
        </h1>
        <p className="text-tapas-muted text-base sm:text-lg leading-relaxed">
          The passionate mentors and student leaders driving mental well-being and meditation across
          the Pillai campus.
        </p>
      </div>

      {/* Team Group Feature */}
      <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full rounded-[10px] overflow-hidden border border-tapas-border shadow-sm">
            <Image
              src="/images/events/team-auditorium.jpg"
              alt="TAPAS Student Committee and Volunteers"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p className="text-xs text-center text-tapas-muted mt-2 italic">
            TAPAS Student Committee and Heartfulness Volunteers at Campus Auditorium
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-tapas-accent">
            Community &amp; Culture
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-tapas-text">
            A Supportive Campus Family
          </h2>
          <p className="text-tapas-muted text-base leading-[1.7]">
            TAPAS operates not just as a student committee, but as an enduring and supportive
            family. Student coordinators gain valuable experience in leadership, communication,
            public speaking, and mindful teamwork while supporting their peers.
          </p>
          <div className="mt-2">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-tapas-accent text-white px-6 py-2.5 rounded-[6px] font-semibold text-sm hover:bg-tapas-accent-hover transition-colors"
            >
              Join Our Committee &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Leadership & Advisors Cards */}
      <section>
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-tapas-text mb-2">
            Mentorship &amp; Leadership
          </h2>
          <p className="text-tapas-muted text-sm sm:text-base">
            Guided by experienced educators and certified Heartfulness trainers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((person) => (
            <div
              key={person.name}
              className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-xl font-semibold text-tapas-text mb-1">
                  {person.name}
                </h3>
                <span className="text-xs font-bold text-tapas-accent block mb-1">
                  {person.role}
                </span>
                <span className="text-xs text-tapas-muted block mb-4">{person.dept}</span>
                <p className="text-sm text-tapas-muted leading-relaxed">{person.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Team Showcase */}
      <div className="bg-tapas-sky/50 border border-tapas-border rounded-[14px] p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-3">
            <h3 className="font-heading text-2xl font-semibold text-tapas-text">
              Annual Core Committee
            </h3>
            <p className="text-tapas-muted text-sm sm:text-base leading-relaxed">
              Every year, a dedicated team of student ambassadors from various engineering
              disciplines step forward to organize weekly meditation sessions, manage retreats to
              Kanha Shanti Vanam, and coordinate flagship festivals like Dhyanotsav.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-[10px] overflow-hidden border border-tapas-border shadow-sm">
              <Image
                src="/images/events/core-team.jpg"
                alt="TAPAS Core Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
