import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { eventStatistics, awards } from '@/data/events';

export const metadata: Metadata = {
  title: 'Events & Initiatives | TAPAS',
  description:
    'Discover meditation sessions, wellness fests, Dhyanotsav, and youth programs conducted by TAPAS at Pillai College of Engineering.',
};

export default function EventsPage() {
  const featuredEvents = [
    {
      id: 'dhyanotsav',
      title: 'Dhyanotsav — Meditation Celebration',
      stat: '2000+ Students Every Year',
      desc: 'Our flagship annual celebration bringing together thousands of students and faculty for an immersive day of relaxation, group meditation, and motivational talks.',
      img: '/images/events/dhyanotsav-auditorium.jpg',
    },
    {
      id: 'kanha-visit',
      title: 'Kanha Shanti Vanam Annual Retreat',
      stat: '500+ Students Annually',
      desc: 'Annual educational and spiritual excursion to the world headquarters of Heartfulness in Hyderabad, featuring guided meditation under the world’s largest meditation dome.',
      img: '/images/events/kanha-visit.jpg',
    },
    {
      id: 'yoga-with-youth',
      title: 'Yoga with Youth & AYUSH Ministry',
      stat: '1000+ Students',
      desc: 'Statewide youth wellness drives and International Yoga Day celebrations felicitated by Hon’ble Union Minister of State for AYUSH, Shri Prataprao Jadhav.',
      img: '/images/events/ayush-minister-felicitation.jpg',
    },
    {
      id: 'wellness-fest',
      title: 'Campus Wellness Fest',
      stat: '8000+ Students Impacted',
      desc: 'Campus-wide festival engaging engineering students with hands-on mental wellness booths, stress busters, guided relaxation booths, and expert discussions.',
      img: '/images/events/stage-gathering.jpg',
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col gap-16">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Campus Initiatives
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-tapas-text mb-4">
          Events &amp; Programs
        </h1>
        <p className="text-tapas-muted text-base sm:text-lg leading-relaxed">
          Since its inception in 2019, over 20,000 students have practiced meditation through TAPAS,
          and more than 200 meditation sessions and wellness programs have been successfully
          organized on campus.
        </p>
      </div>

      {/* Featured Flagship Events */}
      <section className="flex flex-col gap-10">
        <div className="border-b border-tapas-border pb-4">
          <h2 className="font-heading text-2xl font-semibold text-tapas-text">Flagship Programs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredEvents.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-tapas-soft border border-tapas-border rounded-[14px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full bg-tapas-pastel">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
                <span className="absolute top-3 right-3 bg-tapas-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.stat}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-tapas-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-tapas-muted leading-relaxed mb-4">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Event Statistics Table */}
      <section className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 sm:p-10 shadow-sm">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold text-tapas-text mb-2">
            Event-wise Participation Summary
          </h2>
          <p className="text-sm text-tapas-muted">
            Overview of regular, weekly, and annual student engagement metrics.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-tapas-border text-xs uppercase tracking-wider text-tapas-muted">
                <th className="py-3 px-4">Event / Program Name</th>
                <th className="py-3 px-4 text-right">No. of Students</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tapas-border text-sm">
              {eventStatistics.map((stat, idx) => (
                <tr key={idx} className="hover:bg-tapas-pastel/30 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-tapas-text">{stat.event}</td>
                  <td className="py-3.5 px-4 text-right font-bold text-tapas-accent">
                    {stat.students}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section>
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-tapas-text mb-2">
            Event Honors &amp; Accreditations
          </h2>
          <p className="text-tapas-muted text-sm sm:text-base">
            Recognitions achieved through our active wellness calendar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-tapas-soft border border-tapas-border rounded-[12px] p-5 shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-4">
                <Image src={award.img} alt={award.title} fill className="object-cover" />
              </div>
              <p className="font-heading text-sm font-semibold text-tapas-text leading-snug">
                {award.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-6 border-t border-tapas-border">
        <Link
          href="/join"
          className="inline-flex items-center justify-center bg-tapas-accent text-white px-8 py-3 rounded-[6px] font-semibold hover:bg-tapas-accent-hover transition-colors shadow-sm"
        >
          Attend Our Next Event &rarr;
        </Link>
      </div>
    </div>
  );
}
