import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Stat from '../../components/Stat/Stat';

/* ── Event images ── */
import imgFormation    from '../../assets/images/events/formation-2019.jpg';
import imgRecruitment  from '../../assets/images/events/recruitment-session.jpg';
import imgYoga         from '../../assets/images/events/yoga-with-youth.jpg';
import imgNaac         from '../../assets/images/events/naac-recognition.jpg';
import imgCentre       from '../../assets/images/events/centre-of-excellence.jpg';
import imgAward        from '../../assets/images/events/youth-ambassador-award.jpg';
import imgCampus       from '../../assets/images/events/best-heartful-campus.jpg';
import imgCoreTeam     from '../../assets/images/events/core-team.jpg';
import heroImg         from '../../assets/images/hero.jpg';

import './Home.css';

/* ── Gallery data ─────────────────────────────────────────── */
const galleryEvents = [
  {
    id: 'formation-2019',
    img: imgFormation,
    title: 'Formation — 16 October 2019',
    date: 'October 2019',
  },
  {
    id: 'recruitment-session',
    img: imgRecruitment,
    title: 'Recruitment Session',
    date: '2023',
  },
  {
    id: 'yoga-with-youth',
    img: imgYoga,
    title: 'Yoga with Youth',
    date: '2023',
  },
  {
    id: 'naac-recognition',
    img: imgNaac,
    title: 'NAAC Recognition',
    date: '2023',
  },
  {
    id: 'centre-of-excellence',
    img: imgCentre,
    title: 'Centre of Excellence',
    date: '2023',
  },
  {
    id: 'youth-ambassador-award',
    img: imgAward,
    title: 'Youth Ambassador Award',
    date: '2024',
  },
  {
    id: 'best-heartful-campus',
    img: imgCampus,
    title: 'Best Heartful Campus Award',
    date: '2024',
  },
  {
    id: 'core-team',
    img: imgCoreTeam,
    title: 'Core Team',
    date: '2024–25',
  },
];

/* ── Testimonials data ────────────────────────────────────── */
const testimonials = [
  {
    text: 'TAPAS-PCE changed my relationship with stress completely. The Heartfulness sessions before exams helped me stay calm and focused like never before.',
    name: 'Priya Sharma',
    role: 'B.E. Computer Engineering, Batch 2023',
  },
  {
    text: 'I joined out of curiosity and stayed because of the community. The meditation techniques I learned here are something I practice every single day.',
    name: 'Rahul Desai',
    role: 'B.E. Electronics, Batch 2024',
  },
  {
    text: 'The relaxation sessions organised by TAPAS before our practicals were incredibly helpful. It is rare to see a club care this much about student well-being.',
    name: 'Anjali Nair',
    role: 'B.E. Mechanical, Batch 2022',
  },
];

/* ── Arrow icon ───────────────────────────────────────────── */
function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === 'left'
        ? <polyline points="10 12 6 8 10 4" />
        : <polyline points="6 4 10 8 6 12" />}
    </svg>
  );
}

/**
 * Home Page Component
 * Sections (in order):
 *  1. Hero
 *  2. Mission and Vision
 *  3. Statistics
 *  4. Gallery / Slideshow (each card links to /events/:id)
 *  5. Testimonials
 */
export default function Home() {
  const trackRef = useRef(null);

  /* Scroll gallery by one card width */
  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.tapas-gallery__slide');
    const amount = card ? card.offsetWidth + 20 : 320; /* 20 = gap */
    track.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="site-container tapas-home">

      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className="tapas-hero" aria-labelledby="hero-heading">
        <div className="tapas-hero__content">
          <span className="tapas-hero__eyebrow">Breathe. Balance. Belong.</span>
          <h1 id="hero-heading" className="tapas-hero__headline">
            Your journey to inner peace.
          </h1>
          <p className="tapas-hero__subtext">
            Experience calm, clarity and connection through Heartfulness meditation.
          </p>
          <Link to="/join" className="tapas-hero__btn">
            Begin Your Journey
          </Link>
        </div>

        <div className="tapas-hero__media">
          <div className="tapas-hero__image-wrapper">
            <img
              src={heroImg}
              alt="Heartfulness meditation session at TAPAS-PCE"
              className="tapas-hero__image"
            />
          </div>
        </div>
      </section>

      {/* ── 2. Mission and Vision ───────────────────────────── */}
      <section aria-labelledby="mv-heading">
        <div className="tapas-section-header">
          <span className="tapas-section-eyebrow">What we stand for</span>
          <h2 id="mv-heading" className="tapas-section-title">Mission &amp; Vision</h2>
        </div>
        <div className="tapas-mission-vision__cards">
          <div className="tapas-card">
            <h3 className="tapas-card__title">Mission</h3>
            <p className="tapas-card__text">
              TAPAS-PCE organizes various informative sessions on topics including meditation, mental health, inner peace, etc.
            </p>
          </div>
          <div className="tapas-card">
            <h3 className="tapas-card__title">Vision</h3>
            <p className="tapas-card__text">
              TAPAS-PCE comes under the umbrella of Heartfulness, where we follow the four simple steps: relax, meditate, rejuvenate, and connect.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Statistics ───────────────────────────────────── */}
      <section aria-labelledby="stats-heading">
        <div className="tapas-section-header">
          <span className="tapas-section-eyebrow">By the numbers</span>
          <h2 id="stats-heading" className="tapas-section-title">Our impact</h2>
        </div>
        <div className="tapas-stats">
          <Stat
            value="20,000+"
            label="students have practiced meditation through TAPAS-PCE"
          />
          <Stat
            value="200+"
            label="meditation sessions and wellness programs organized on campus"
          />
          <Stat
            value="2019"
            label="formed on 16 October 2019, in collaboration with Heartfulness"
          />
        </div>
      </section>

      {/* ── 4. Gallery / Slideshow ──────────────────────────── */}
      <section aria-labelledby="gallery-heading">
        <div className="tapas-section-header">
          <span className="tapas-section-eyebrow">Moments from campus</span>
          <h2 id="gallery-heading" className="tapas-section-title">Events &amp; Gallery</h2>
          <p className="tapas-section-sub">
            A glimpse of our sessions, award ceremonies, and community milestones.
          </p>
        </div>

        <div className="tapas-gallery__track-wrapper">
          <div className="tapas-gallery__track" ref={trackRef}>
            {galleryEvents.map((ev) => (
              <Link
                key={ev.id}
                to={`/events#${ev.id}`}
                className="tapas-gallery__slide"
                aria-label={`View details for ${ev.title}`}
              >
                <div className="tapas-gallery__img-wrapper">
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="tapas-gallery__img"
                    loading="lazy"
                  />
                </div>
                <div className="tapas-gallery__caption">
                  <span className="tapas-gallery__caption-date">{ev.date}</span>
                  <span className="tapas-gallery__caption-title">{ev.title}</span>
                  <span className="tapas-gallery__caption-cta">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Prev / Next controls */}
        <div className="tapas-gallery__controls">
          <button
            type="button"
            className="tapas-gallery__arrow"
            onClick={() => scroll('left')}
            aria-label="Scroll gallery left"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            className="tapas-gallery__arrow"
            onClick={() => scroll('right')}
            aria-label="Scroll gallery right"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </section>

      {/* ── 5. Testimonials ─────────────────────────────────── */}
      <section aria-labelledby="testimonials-heading">
        <div className="tapas-section-header">
          <span className="tapas-section-eyebrow">Student voices</span>
          <h2 id="testimonials-heading" className="tapas-section-title">What our members say</h2>
        </div>

        <div className="tapas-testimonials">
          <div className="tapas-testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.name} className="tapas-tcard">
                <div className="tapas-tcard__quote-icon" aria-hidden="true">"</div>
                <p className="tapas-tcard__text">{t.text}</p>
                <div className="tapas-tcard__author">
                  <span className="tapas-tcard__name">{t.name}</span>
                  <span className="tapas-tcard__role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
