import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Our Services | JHC Group",
  description:
    "JHC Group offers cold chain logistics, export freight, import freight, warehousing, and automotive logistics across Malaysia.",
};

const services = [
  {
    title: "Cold Chain Logistics",
    href: "/services/cold-chain-logistics",
    desc: "Temperature-controlled transport and storage solutions that maintain product integrity from origin to delivery — for food, pharmaceuticals, and sensitive cargo.",
    features: ["Reefer fleet 2°C–25°C", "Cold storage facilities", "Real-time temperature monitoring", "GDP-compliant processes"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m-4.5-9h9M7.5 7.5l9 9m0-9l-9 9" />
      </svg>
    ),
    color: "from-blue-50 to-cyan-50",
    accent: "text-blue-600",
  },
  {
    title: "Export Freight",
    href: "/services/export-freight",
    desc: "Full-service export freight forwarding — FCL, LCL, air freight, and project cargo — with customs clearance and documentation handled end-to-end.",
    features: ["Sea & air freight", "Customs documentation", "FCL & LCL shipments", "Multi-port routing"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: "from-orange-50 to-amber-50",
    accent: "text-orange-600",
  },
  {
    title: "Import Freight",
    href: "/services/import-freight",
    desc: "Seamless import handling from port of origin through customs clearance, deconsolidation, and last-mile inland delivery across Malaysia.",
    features: ["Port handling & clearance", "Deconsolidation", "Inland transportation", "Duty & tax management"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5l-9 2 9 18 9-18-9 2zm0 0v8" />
      </svg>
    ),
    color: "from-green-50 to-emerald-50",
    accent: "text-green-600",
  },
  {
    title: "Warehousing",
    href: "/services/warehousing",
    desc: "Strategically located bonded and non-bonded warehousing in Port Klang and Klang Valley with full inventory management, pick-and-pack, and distribution.",
    features: ["Bonded & non-bonded", "Pick-and-pack services", "Inventory management", "Distribution services"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: "from-purple-50 to-violet-50",
    accent: "text-purple-600",
  },
  {
    title: "Automotive Logistics",
    href: "/services/automotive-logistics",
    desc: "Specialist vehicle handling services including PDI, compound management, and nationwide OEM distribution — trusted by leading automotive brands in Malaysia.",
    features: ["Vehicle PDI services", "Compound management", "OEM distribution", "Haulage & delivery"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0H3m16-3h.01" />
      </svg>
    ),
    color: "from-red-50 to-rose-50",
    accent: "text-red-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Page Hero */}
        <section className="bg-gray-900 py-20 text-white text-center px-6">
          <MotionReveal>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl mx-auto">
              Integrated Logistics Services
            </h1>
            <p className="mt-5 text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              Five specialist service lines — all under one roof. From cold chain to automotive, freight to warehousing, JHC Group handles every link in your supply chain.
            </p>
          </MotionReveal>
        </section>

        {/* Service Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {services.map((svc, i) => (
              <MotionReveal key={svc.title} delay={i * 60}>
                <div className={`bg-linear-to-br ${svc.color} rounded-2xl p-8 border border-white shadow-sm`}>
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Icon + Title */}
                    <div className="md:col-span-1">
                      <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center ${svc.accent} shadow-sm mb-5`}>
                        {svc.icon}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{svc.title}</h2>
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                      <Link
                        href={svc.href}
                        className="mt-5 inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all duration-200"
                      >
                        View service details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>

                    {/* Features */}
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
                      {svc.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-3">
                          <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <CTASection
          eyebrow="Start Today"
          title="Need a Custom Logistics Plan?"
          subtitle="Our team will assess your requirements and propose the right combination of services for your business."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="Learn About JHC"
          secondaryHref="/about"
        />
      </main>
      <Footer />
    </>
  );
}
