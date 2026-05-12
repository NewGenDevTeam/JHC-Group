import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Industries Served | JHC Group",
  description:
    "JHC Group serves automotive, FMCG, manufacturing, cold chain, and industrial supply chain industries across Malaysia.",
};

const industries = [
  {
    title: "Automotive",
    icon: "🚗",
    color: "border-red-200 bg-red-50",
    accent: "text-red-600",
    desc: "JHC Group is a trusted logistics partner to Malaysia's automotive sector — supporting OEM manufacturers, importers, and dealership groups with PDI, compound management, and nationwide vehicle distribution.",
    services: [
      "Pre-Delivery Inspection (PDI)",
      "Vehicle compound & storage management",
      "Car-carrier haulage & delivery",
      "Port-to-dealer distribution",
      "Fleet logistics programmes",
    ],
    link: "/services/automotive-logistics",
  },
  {
    title: "FMCG",
    icon: "📦",
    color: "border-orange-200 bg-orange-50",
    accent: "text-orange-600",
    desc: "Fast-moving consumer goods demand speed, visibility, and accuracy. JHC Group's warehousing, pick-and-pack, and distribution capabilities are built to handle high-volume FMCG supply chains efficiently.",
    services: [
      "High-volume warehouse fulfilment",
      "Pick, pack & label services",
      "Retail distribution management",
      "Ambient & temperature-controlled storage",
      "Import & export freight management",
    ],
    link: "/services/warehousing",
  },
  {
    title: "Manufacturing",
    icon: "🏭",
    color: "border-blue-200 bg-blue-50",
    accent: "text-blue-600",
    desc: "Manufacturers rely on JHC Group to keep raw materials arriving and finished goods moving. We support inbound components via import freight and outbound products through export forwarding and domestic distribution.",
    services: [
      "Inbound raw material logistics",
      "Export freight forwarding",
      "Bonded warehousing for manufacturers",
      "Customs documentation support",
      "JIT delivery coordination",
    ],
    link: "/services",
  },
  {
    title: "Cold Chain",
    icon: "❄️",
    color: "border-cyan-200 bg-cyan-50",
    accent: "text-cyan-600",
    desc: "From fresh produce and frozen food to pharmaceutical products, our dedicated cold chain infrastructure ensures temperature integrity at every stage — collection, transit, storage, and delivery.",
    services: [
      "Reefer transport 2°C to 25°C",
      "Cold room & blast freezer storage",
      "Temperature monitoring & reporting",
      "GDP-compliant pharmaceutical handling",
      "Last-mile cold delivery",
    ],
    link: "/services/cold-chain-logistics",
  },
  {
    title: "Industrial Supply Chain",
    icon: "⚙️",
    color: "border-gray-200 bg-gray-50",
    accent: "text-gray-600",
    desc: "For industrial and heavy cargo — machinery, equipment, and project goods — JHC Group provides reliable import, export, and local transport with specialist handling capabilities.",
    services: [
      "Project & break-bulk cargo",
      "Heavy equipment transport",
      "Import permit & customs clearance",
      "Cross-border freight (Singapore, Thailand)",
      "Industrial warehousing & lay-down areas",
    ],
    link: "/services",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gray-900 py-20 text-white text-center px-6">
          <MotionReveal>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Sector Expertise
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl mx-auto">
              Industries We Serve
            </h1>
            <p className="mt-5 text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              Deep operational experience across five core industries — we understand your sector&apos;s supply chain challenges and deliver solutions that fit.
            </p>
          </MotionReveal>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            {industries.map((ind, i) => (
              <MotionReveal key={ind.title} delay={i * 60}>
                <div className={`rounded-2xl border ${ind.color} p-8`}>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="text-4xl mb-4">{ind.icon}</div>
                      <h2 className="text-2xl font-bold text-gray-900">{ind.title}</h2>
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{ind.desc}</p>
                      <Link
                        href={ind.link}
                        className="mt-5 inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all duration-200"
                      >
                        Related services
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        How JHC Supports {ind.title}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {ind.services.map((svc) => (
                          <div key={svc} className="flex items-start gap-3 bg-white/70 rounded-xl px-4 py-3">
                            <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{svc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <CTASection
          eyebrow="Your Industry"
          title="Don&apos;t See Your Sector Listed?"
          subtitle="JHC Group handles diverse cargo and supply chain requirements. Talk to us — we may have exactly what you need."
          primaryLabel="Speak to Our Team"
          primaryHref="/contact"
          secondaryLabel="Our Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
