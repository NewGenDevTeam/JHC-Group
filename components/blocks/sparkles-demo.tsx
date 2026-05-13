"use client";

import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const clients = [
  { id: "petronas", name: "Petronas", logo: "/images/clients/petronas.png" },
  { id: "perodua", name: "Perodua", logo: "/images/clients/perodua.png" },
  { id: "proton", name: "Proton", logo: "/images/clients/proton.jpg" },
  { id: "honda", name: "Honda Malaysia", logo: "/images/clients/honda.jpg" },
  { id: "toyota", name: "Toyota Malaysia", logo: "/images/clients/toyota.jpg" },
  { id: "hicm", name: "HICOM", logo: "/images/clients/hicm.png" },
  { id: "sime-darby", name: "Sime Darby", logo: "/images/clients/sime-darby.jpg" },
];

export function SparklesPartnersSection() {
    return (
      <>
        <section className="relative overflow-hidden bg-gray-900 pt-20 pb-24">
          {/* Ambient sparkles - orange, low density, subtle */}
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

          {/* Content - z10 keeps it above the SVG curve */}
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
          </div>

          {/* Bottom curved divider */}
          <div className="absolute -bottom-px left-0 right-0 overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 40 C360 0 1080 0 1440 40 L1440 120 L0 120 Z" fill="rgb(249 250 251)" />
            </svg>
          </div>
        </section>

        {/* Logo section outside black background */}
        <div className="relative bg-gray-50 py-10 -mt-px">
          <div className="relative mx-auto max-w-5xl">
            <InfiniteSlider duration={22} gap={24} className="flex items-center py-3">
              {clients.map(({ id, name, logo }) => (
                <div
                  key={id}
                  className="flex items-center justify-center px-12 min-w-60"
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt={name}
                      className="h-24 max-w-60 object-contain opacity-100"
                    />
                  ) : (
                    <span className="text-gray-700 font-semibold text-sm tracking-wide">
                      {name}
                    </span>
                  )}
                </div>
              ))}
            </InfiniteSlider>

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
      </>
    );
}
