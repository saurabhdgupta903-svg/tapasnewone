'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Computer Engineering',
    year: 'First Year',
    interests: 'Weekly Meditation Sessions',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col gap-12">
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Become a Member
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-tapas-text mb-4">
          Join TAPAS
        </h1>
        <p className="text-tapas-muted text-base sm:text-lg leading-relaxed">
          Embark on your journey of inner calm, stress relief, and holistic personal growth with our
          warm campus community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Membership Benefits */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-7 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-tapas-text mb-4">
              Why Join TAPAS?
            </h3>
            <ul className="space-y-4 text-sm text-tapas-muted">
              <li className="flex items-start gap-3">
                <span className="text-tapas-accent font-bold text-base">✓</span>
                <span>
                  <strong>Guided Meditation:</strong> Weekly sessions led by certified Heartfulness
                  trainers right on campus.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-tapas-accent font-bold text-base">✓</span>
                <span>
                  <strong>Exam Stress Relief:</strong> Learn proven relaxation and cleaning
                  techniques to boost mental stamina and academic focus.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-tapas-accent font-bold text-base">✓</span>
                <span>
                  <strong>Leadership &amp; Teamwork:</strong> Organize landmark campus fests like
                  Dhyanotsav, Yog Mahotsav, and youth outreach drives.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-tapas-accent font-bold text-base">✓</span>
                <span>
                  <strong>Excursions &amp; Retreats:</strong> Participate in annual visits to Kanha
                  Shanti Vanam, Hyderabad.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-tapas-pastel/50 border border-tapas-border rounded-[14px] p-6">
            <h4 className="font-heading font-semibold text-tapas-text text-base mb-1">
              Campus Location
            </h4>
            <p className="text-xs text-tapas-muted leading-relaxed">
              Pillai College of Engineering, Dr. K. M. Vasudevan Pillai Campus, 10, Sector 16, New
              Panvel, Navi Mumbai, Maharashtra 410206
            </p>
          </div>
        </div>

        {/* Right Side: Join Form */}
        <div className="lg:col-span-7">
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-tapas-pastel text-tapas-accent flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-heading text-2xl font-semibold text-tapas-text">
                  Welcome to TAPAS!
                </h3>
                <p className="text-tapas-muted text-sm max-w-md">
                  Thank you for registering. Our student coordinator will connect with you via
                  WhatsApp or email regarding the next orientation and meditation session.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-tapas-accent hover:underline"
                >
                  Submit another registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-heading text-xl font-semibold text-tapas-text mb-1">
                  Student Registration Form
                </h3>

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-tapas-text mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-tapas-text mb-1"
                    >
                      College Email / Personal Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@student.mes.ac.in"
                      className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-tapas-text mb-1"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="department"
                      className="block text-xs font-semibold text-tapas-text mb-1"
                    >
                      Department / Branch
                    </label>
                    <select
                      id="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                    >
                      <option>Computer Engineering</option>
                      <option>Information Technology</option>
                      <option>Electronics &amp; Computer Science</option>
                      <option>Mechanical Engineering</option>
                      <option>Automobile Engineering</option>
                      <option>Applied Sciences / First Year</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="year"
                      className="block text-xs font-semibold text-tapas-text mb-1"
                    >
                      Year of Study
                    </label>
                    <select
                      id="year"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                    >
                      <option>First Year (FE)</option>
                      <option>Second Year (SE)</option>
                      <option>Third Year (TE)</option>
                      <option>Final Year (BE)</option>
                      <option>Postgraduate / Faculty</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="interests"
                    className="block text-xs font-semibold text-tapas-text mb-1"
                  >
                    Primary Area of Interest
                  </label>
                  <select
                    id="interests"
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                  >
                    <option>Weekly Guided Meditation Sessions</option>
                    <option>Stress Management &amp; Relaxation Workshops</option>
                    <option>Yoga &amp; Wellness Festivals</option>
                    <option>Student Volunteer / Event Management Team</option>
                    <option>Kanha Ashram Educational Retreat</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-tapas-accent text-white py-3 rounded-[6px] font-semibold text-sm hover:bg-tapas-accent-hover transition-colors shadow-sm"
                  >
                    Join TAPAS Community
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
