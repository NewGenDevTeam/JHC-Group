export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/aerial-view-of-cargo-logistics-and-container-termi-2026-03-26-19-30-16-utc.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
          Your Trusted Partner in Global Logistics
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-white/75 max-w-xl mx-auto font-light">
          End-to-end supply chain solutions tailored for your business.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full border border-white/60 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
