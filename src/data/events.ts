import { EventStatItem, EventItem } from '@/types';

export interface SlideshowEventItem {
  id: string;
  name: string;
  img: string;
  description: string;
}

export const slideshowEvents: SlideshowEventItem[] = [
  {
    id: 'dhyanotsav',
    name: 'Dhyanotsav',
    img: '/images/events/dhyanotsav-auditorium.jpg',
    description:
      'Annual flagship meditation gathering organized by TAPAS, bringing over 2,000 students and faculty together in the college auditorium for guided Heartfulness meditation, relaxation, and wellness sessions.',
  },
  {
    id: 'wellness-fest',
    name: 'Wellness Fest',
    img: '/images/events/stage-gathering.jpg',
    description:
      'Campus-wide youth wellness festival impacting over 8,000 students with practical mental health workshops, stress relief techniques, and interactive wellness initiatives.',
  },
  {
    id: 'kanha-visit',
    name: 'Kanha Visit',
    img: '/images/events/kanha-visit.jpg',
    description:
      "Annual retreat and educational tour taking over 500 students to Kanha Shanti Vanam, Hyderabad, to experience meditation under the world's largest meditation dome.",
  },
  {
    id: 'yog-mahotsav',
    name: 'Yog Mahotsav',
    img: '/images/events/yoga-with-youth.jpg',
    description:
      'Extensive yoga and meditation sessions engaging over 1,000 students, celebrating International Yoga Day with nationwide youth initiatives felicitated by the Ministry of AYUSH.',
  },
  {
    id: 'weekly-meditation',
    name: 'Weekly Meditation',
    img: '/images/events/yoga-session.jpg',
    description:
      'Regular guided meditation circles and relaxation sessions conducted on campus, helping more than 700 students de-stress and cultivate inner balance.',
  },
  {
    id: 'dhyanratri',
    name: 'Dhyanratri',
    img: '/images/events/team-auditorium.jpg',
    description:
      'An evening of dedicated quiet reflection and meditation for more than 500 students, fostering deep relaxation and inner calm during intensive semesters.',
  },
  {
    id: '21-days-meditation',
    name: '21 Days Meditation',
    img: '/images/events/book-distribution.jpg',
    description:
      "A structured 21-day campus wellness program guiding over 1,000 students through daily meditation practices and distribution of 'The Heartfulness Way'.",
  },
  {
    id: 'ashram-events',
    name: 'Ashram Events',
    img: '/images/events/kanha-dome.jpg',
    description:
      'Immersive spiritual retreats and experiential learning workshops connecting over 1,000 students with certified Heartfulness trainers.',
  },
];

export const eventStatistics: EventStatItem[] = [
  { event: 'Wellness Fest', targetNum: 8000, displayNum: '8000+' },
  { event: 'Dhyanotsav', targetNum: 2000, suffix: 'every year', displayNum: '2000+' },
  { event: 'Dhyanratri', targetNum: 500, displayNum: '500+' },
  { event: '21 Days Meditation', targetNum: 1000, displayNum: '1000+' },
  { event: 'Ashram Events', targetNum: 1000, displayNum: '1000+' },
  { event: 'Weekly Meditation', targetNum: 700, displayNum: '700+' },
  { event: 'Sunday Meditations', targetNum: 500, displayNum: '500+' },
  { event: 'Yog Mahotsav', targetNum: 1000, displayNum: '1000+' },
  { event: 'Kanha Visit', targetNum: 500, suffix: 'every year', displayNum: '500+' },
];
