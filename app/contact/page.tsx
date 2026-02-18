import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Artist Global Connect",
  description:
    "Partner with us or start a conversation. We collaborate with brands, agencies, and platforms to create culturally powerful partnerships.",
};

const contactDetails = [
  {
    label: "Artist Bookings — EeQue",
    value: "eeQuebookings@gmail.com",
    href: "mailto:eeQuebookings@gmail.com",
  },
  {
    label: "Artist Bookings — Masterpiece YVK",
    value: "bookings@yvkrecords.co.za",
    href: "mailto:bookings@yvkrecords.co.za",
  },
  {
    label: "General Enquiries",
    value: "info@yvkrecords.co.za",
    href: "mailto:info@yvkrecords.co.za",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Contact</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            Start a Conversation
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl">
            Whether you&apos;re a brand looking to activate a partnership, or you want to
            enquire about working with our artists — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: contact form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full bg-surface border border-border text-white text-sm px-5 py-4 outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full bg-surface border border-border text-white text-sm px-5 py-4 outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                  Company / Organisation
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full bg-surface border border-border text-white text-sm px-5 py-4 outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                  placeholder="Brand or Agency Name"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-surface border border-border text-white text-sm px-5 py-4 outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                  Enquiry Type
                </label>
                <select
                  name="enquiryType"
                  className="w-full bg-surface border border-border text-white/70 text-sm px-5 py-4 outline-none focus:border-gold/60 transition-colors appearance-none"
                >
                  <option value="">Select an enquiry type</option>
                  <option value="brand-partnership">Brand Partnership</option>
                  <option value="artist-booking">Artist Booking</option>
                  <option value="corporate-activation">Corporate Activation</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full bg-surface border border-border text-white text-sm px-5 py-4 outline-none focus:border-gold/60 transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Tell us about your project, campaign, or what you have in mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full text-sm tracking-[0.15em] uppercase bg-gold text-background px-10 py-4 font-semibold hover:bg-gold-light transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: contact info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                Direct Contact
              </h2>
              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="border-b border-border pb-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-2">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="text-gold/80 hover:text-gold transition-colors text-base"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border p-8">
              <div className="absolute-top-px" />
              <h3 className="font-display text-xl font-bold text-white mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {[
                  "Response within 48 business hours",
                  "Dedicated point of contact assigned",
                  "Full confidentiality guaranteed",
                  "Tailored partnership proposal",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 border border-gold/40 flex items-center justify-center">
                      <span className="w-1 h-1 bg-gold/60" />
                    </span>
                    <span className="text-white/50 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-xs tracking-[0.15em] uppercase text-white/40 hover:text-gold transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
