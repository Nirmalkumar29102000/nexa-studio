"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#08080c] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Contact
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something great together.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/50">
              Have an idea, a project, or simply want to say hello?
              Tell us about it and we&apos;ll get back to you.
            </p>

            <div className="mt-10 space-y-4 text-white/60">
              <p>hello@nexastudio.com</p>
              <p>Chennai, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10 text-2xl">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Message sent!
                </h3>

                <p className="mt-3 max-w-sm text-white/50">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-violet-400/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-violet-400/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-violet-400/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white px-6 py-3.5 font-medium text-black transition hover:bg-white/90"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}