'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState({ name: '', email: '', subject: '', body: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col gap-12">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Get in Touch
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-tapas-text mb-4">
          Contact TAPAS
        </h1>
        <p className="text-tapas-muted text-base sm:text-lg leading-relaxed">
          Have questions about our sessions, workshops, or club activities? We would love to hear
          from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-7 shadow-sm flex flex-col gap-5">
            <h3 className="font-heading text-xl font-semibold text-tapas-text">
              Contact Information
            </h3>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tapas-muted block mb-1">
                Email Address
              </span>
              <a
                href="mailto:tapas.pce@mes.ac.in"
                className="text-sm font-medium text-tapas-accent hover:underline"
              >
                tapas.pce@mes.ac.in
              </a>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tapas-muted block mb-1">
                Campus Location
              </span>
              <p className="text-sm text-tapas-muted leading-relaxed">
                Pillai College of Engineering, Dr. K. M. Vasudevan Pillai Campus, 10, Sector 16, New
                Panvel, Navi Mumbai, Maharashtra 410206
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tapas-muted block mb-2">
                Social Profiles
              </span>
              <div className="flex flex-col gap-2 text-sm text-tapas-muted">
                <a
                  href="https://www.instagram.com/tapas.pce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tapas-accent transition-colors"
                >
                  Instagram: @tapas.pce
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100092632995551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tapas-accent transition-colors"
                >
                  Facebook: TAPAS Club
                </a>
                <a
                  href="https://www.linkedin.com/in/tapas-pce-ab809a1a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tapas-accent transition-colors"
                >
                  LinkedIn: TAPAS Pillai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-10 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-tapas-pastel text-tapas-accent flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-heading text-2xl font-semibold text-tapas-text">
                  Message Sent!
                </h3>
                <p className="text-tapas-muted text-sm max-w-md">
                  Thank you for reaching out. We will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-4 text-xs font-semibold text-tapas-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-heading text-xl font-semibold text-tapas-text mb-1">
                  Send us a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-semibold text-tapas-text mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="c-name"
                      required
                      value={message.name}
                      onChange={(e) => setMessage({ ...message, name: e.target.value })}
                      placeholder="Name"
                      className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-xs font-semibold text-tapas-text mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="c-email"
                      required
                      value={message.email}
                      onChange={(e) => setMessage({ ...message, email: e.target.value })}
                      placeholder="Email"
                      className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-subject" className="block text-xs font-semibold text-tapas-text mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="c-subject"
                    value={message.subject}
                    onChange={(e) => setMessage({ ...message, subject: e.target.value })}
                    placeholder="General Inquiry / Workshop Collaboration"
                    className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent"
                  />
                </div>

                <div>
                  <label htmlFor="c-body" className="block text-xs font-semibold text-tapas-text mb-1">
                    Message *
                  </label>
                  <textarea
                    id="c-body"
                    required
                    rows={4}
                    value={message.body}
                    onChange={(e) => setMessage({ ...message, body: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2.5 rounded-[6px] border border-tapas-border bg-white text-sm text-tapas-text focus:outline-none focus:border-tapas-accent resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-tapas-accent text-white py-3 rounded-[6px] font-semibold text-sm hover:bg-tapas-accent-hover transition-colors shadow-sm"
                  >
                    Send Message
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
