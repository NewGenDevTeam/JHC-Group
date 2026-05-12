import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | JHC Group",
  description:
    "See how JHC Group solved real logistics challenges for clients in automotive distribution, cold chain delivery, and warehouse fulfilment.",
};

const caseStudies = [
  {
    id: "01",
    tag: "Automotive Logistics",
    title: "Automotive Distribution Optimisation",
    client: "National Automotive Distributor",
    tagline: "Reducing delivery lead time by 40% for a high-volume vehicle distribution programme.",
    accent: "bg-red-500",
    lightAccent: "bg-red-50 border-red-100",
    textAccent: "text-red-600",
    problem: {
      heading: "The Challenge",
      body: "A leading automotive distributor was managing nationwide vehicle delivery across 80+ dealerships using multiple fragmented carriers, resulting in inconsistent delivery windows, high damage rates, and limited visibility into vehicle status between port and dealership.",
    },
    solution: {
      heading: "JHC Solution",
      body: "JHC Group consolidated all vehicle movements under a single managed operation — introducing a dedicated car-carrier fleet, a centralised dispatch system, and a compound management facility at Port Klang to pre-stage vehicles ahead of scheduled delivery runs. Each delivery was assigned a dedicated vehicle coordinator.",
    },
    results: [
      { metric: "40%", label: "Reduction in delivery lead time" },
      { metric: "0%", label: "Damage rate over 12-month period" },
      { metric: "80+", label: "Dealerships served nationwide" },
    ],
  },
  {
    id: "02",
    tag: "Cold Chain Logistics",
    title: "Cold Chain Delivery Efficiency",
    client: "Regional Food & Beverage Manufacturer",
    tagline: "Achieving 99.8% temperature compliance across 300+ cold deliveries per month.",
    accent: "bg-blue-500",
    lightAccent: "bg-blue-50 border-blue-100",
    textAccent: "text-blue-600",
    problem: {
      heading: "The Challenge",
      body: "A growing F&B manufacturer was experiencing recurring temperature excursions during last-mile delivery to supermarkets and food service clients. Their existing logistics provider lacked proper reefer equipment, and manual temperature logs were unreliable for compliance audits.",
    },
    solution: {
      heading: "JHC Solution",
      body: "JHC Group deployed a dedicated reefer fleet calibrated to the client&apos;s product temperature requirements (2–8°C chilled zone). IoT temperature loggers were fitted in every vehicle, providing real-time alerts and automated delivery reports. A pre-cool staging protocol was introduced to prevent excursions during loading.",
    },
    results: [
      { metric: "99.8%", label: "Temperature compliance rate" },
      { metric: "300+", label: "Cold deliveries per month" },
      { metric: "100%", label: "Audit-ready trip reports" },
    ],
  },
  {
    id: "03",
    tag: "Warehousing",
    title: "Warehouse Fulfilment Operations",
    client: "FMCG Importer & Distributor",
    tagline: "Cutting order processing time by 55% and reducing fulfilment errors to near zero.",
    accent: "bg-orange-500",
    lightAccent: "bg-orange-50 border-orange-100",
    textAccent: "text-orange-600",
    problem: {
      heading: "The Challenge",
      body: "An FMCG importer was managing multiple warehouses with inconsistent inventory practices, high pick-error rates, and delayed outbound fulfilment — causing frequent stockouts and retailer complaints. The existing setup had no WMS integration and relied heavily on paper-based processes.",
    },
    solution: {
      heading: "JHC Solution",
      body: "JHC Group migrated the client to our Port Klang bonded facility and implemented a WMS-driven pick-and-pack operation. SKU-level barcode scanning was introduced for receiving, picking, and despatch. A dedicated fulfilment team was assigned to the account with SLA-based performance tracking.",
    },
    results: [
      { metric: "55%", label: "Faster order processing" },
      { metric: "99.6%", label: "Pick accuracy rate" },
      { metric: "0", label: "Stockout incidents in 6 months" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gray-900 py-20 text-white text-center px-6">
          <MotionReveal>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Proven Results
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl mx-auto">
              Case Studies
            </h1>
            <p className="mt-5 text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              Real problems. Real solutions. See how JHC Group has helped clients across automotive, cold chain, and warehousing overcome their logistics challenges.
            </p>
          </MotionReveal>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            {caseStudies.map((cs, i) => (
              <MotionReveal key={cs.id} delay={i * 60}>
                <div className={`rounded-2xl border ${cs.lightAccent} overflow-hidden`}>
                  {/* Header */}
                  <div className="px-8 pt-8 pb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <span className={`text-xs font-semibold uppercase tracking-widest ${cs.textAccent}`}>
                          {cs.tag}
                        </span>
                        <h2 className="mt-2 text-2xl font-bold text-gray-900">{cs.title}</h2>
                        <p className="mt-1 text-sm text-gray-500">Client: {cs.client}</p>
                        <p className="mt-2 text-gray-600 text-sm italic">{cs.tagline}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-2xl ${cs.accent} flex items-center justify-center text-white font-black text-lg`}>
                        {cs.id}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid md:grid-cols-2 gap-0 border-t border-white/50">
                    <div className="px-8 py-6 bg-white/50">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">{cs.problem.heading}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{cs.problem.body}</p>
                    </div>
                    <div className="px-8 py-6 bg-white/80 border-t md:border-t-0 md:border-l border-white/50">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">{cs.solution.heading}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: cs.solution.body }}
                      />
                    </div>
                  </div>

                  {/* Results */}
                  <div className="px-8 py-6 bg-gray-900 grid grid-cols-3 gap-4 text-center">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <div className="text-2xl sm:text-3xl font-bold text-orange-400">{r.metric}</div>
                        <p className="mt-1 text-xs text-gray-400">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>

        {/* Industries link */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <MotionReveal>
              <p className="text-gray-600 text-base mb-4">Serving clients across multiple industries</p>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                View industries we serve
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </MotionReveal>
          </div>
        </section>

        <CTASection
          eyebrow="Your Success Story"
          title="Let&apos;s Solve Your Logistics Challenge"
          subtitle="Contact our team and we&apos;ll design a solution tailored to your specific requirements."
          primaryLabel="Talk to Our Team"
          primaryHref="/contact"
          secondaryLabel="Our Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
