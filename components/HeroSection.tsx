import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.06),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center pt-32 pb-24">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Amapiano Artist Management
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
          Strategic Artist Management{" "}
          <span className="text-gold">for the Business</span> of Music.
        </h1>

        {/* Sub-headline */}
        <p className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
          We manage Amapiano artists with a focus on long-term career growth, brand
          partnerships, and commercial strategy — not just bookings and releases.
        </p>

        {/* Supporting line */}
        <p className="text-white/30 text-sm tracking-[0.15em] uppercase mb-14">
          Where talent meets structure, strategy, and corporate opportunity.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto text-sm tracking-[0.15em] uppercase bg-gold text-background px-10 py-4 font-semibold hover:bg-gold-light transition-colors duration-200"
          >
            Partner With Us
          </Link>
          <Link
            href="#artists"
            className="w-full sm:w-auto text-sm tracking-[0.15em] uppercase border border-white/20 text-white/70 px-10 py-4 hover:border-gold hover:text-gold transition-all duration-200"
          >
            Work With Our Artists
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
