"use client";

import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const clients = [
  { id: "petronas", name: "Petronas" },
  { id: "perodua", name: "Perodua" },
  { id: "proton", name: "Proton" },
  { id: "honda", name: "Honda Malaysia" },
  { id: "toyota", name: "Toyota Malaysia" },
  { id: "hicm", name: "HICM" },
  { id: "sime-darby", name: "Sime Darby" },
];

export function SparklesPartnersSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 pt-20 pb-32">
      {/* Ambient sparkles — orange, low density, subtle */}
      <Sparkles
        density={350}
        speed={0.4}
        opacity={0.25}
        size={0.9}
        color="#F97316"
        className="absolute inset-0 h-full w-full"
      />

      {/* Radial gradient accent */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_center,rgba(249,115,22,0.12),transparent_65%)]" />

      {/* Content — z-10 keeps it above the SVG curve */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl px-6 text-center mb-14">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
            Our Clients
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-400 text-base leading-relaxed">
            From automotive giants to national energy companies, JHC Group powers the supply chains of Malaysia&apos;s most recognisable brands.
          </p>
        </div>

        {/* Infinite auto-scroll client strip */}
        <div className="relative mx-auto lg:max-w-5xl">
          <InfiniteSlider duration={22} gap={24} className="flex items-center py-3">
            {clients.map(({ id, name }) => (
              <div
                key={id}
                className="flex items-center justify-center px-8 py-3 bg-white/8 border border-white/10 rounded-xl backdrop-blur-sm min-w-max hover:bg-white/15 transition-colors duration-300"
              >
                <span className="text-white/70 font-semibold text-sm tracking-wide hover:text-white transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </InfiniteSlider>

          {/* Edge fades */}
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-32"
            direction="left"
            blurIntensity={0.4}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-32"
            direction="right"
            blurIntensity={0.4}
          />
        </div>
      </div>

      {/* Bottom curved divider — direct child of section so it anchors to section bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40 Z" fill="rgb(249 250 251)" />
        </svg>
      </div>
    </section>
  );
}
