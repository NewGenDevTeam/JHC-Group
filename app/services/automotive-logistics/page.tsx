import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Automotive Logistics | JHC Group",
  description:
    "JHC Group is Malaysia's trusted automotive logistics partner — PDI, vehicle compound management, OEM distribution, and nationwide fleet delivery.",
};

const features = [
  { title: "PDI Services", desc: "Pre-Delivery Inspection services ensuring every vehicle meets OEM standards before handover." },
  { title: "Compound Management", desc: "Secure vehicle holding compounds with CCTV, damage tracking, and inventory control." },
  { title: "OEM Distribution", desc: "Nationwide vehicle distribution for leading automotive brands and their dealers." },
  { title: "Haulage Services", desc: "Low-loader and car-carrier transport for sedans, SUVs, and commercial vehicles." },
  { title: "Port-to-Dealer", desc: "Complete vehicle movement from port of entry to dealership showroom floor." },
  { title: "Fleet Logistics", desc: "Corporate fleet delivery and management for large-volume vehicle programmes." },
];

const clients = [
  "Passenger Vehicle OEMs",
  "Commercial Vehicle Manufacturers",
  "Automotive Dealership Groups",
  "Fleet Management Companies",
  "Vehicle Importers & Distributors",
  "Government Fleet Programmes",
];

export default function AutomotiveLogisticsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-linear-to-br from-red-900 to-gray-900 py-20 text-white px-6">
          <div className="max-w-7xl mx-auto">
            <MotionReveal>
              <Link href="/services" className="inline-flex items-center gap-2 text-red-300 text-sm mb-8 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Services
              </Link>
              <span className="text-red-300 text-sm font-semibold uppercase tracking-widest">Service</span>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl">Automotive Logistics</h1>
              <p className="mt-5 text-red-100 text-base max-w-2xl leading-relaxed">
                Malaysia&apos;s specialist automotive logistics partner — PDI, compound management, and OEM distribution trusted by leading vehicle brands since 2008.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Request Automotive Quote
              </Link>
            </MotionReveal>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center max-w-xl mx-auto mb-14">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Capabilities</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Automotive Services</h2>
              </div>
            </MotionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <MotionReveal key={f.title} delay={i * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover h-full">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0H3m16-3h.01" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">{f.title}</h3>
                    <p className="mt-2 text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Image + Clients */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <MotionReveal>
                <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg">
                  <Image
                    src="/images/jhc-group-dot-com-post-hino-delivers-5-trucks-2017-rmtg4xtqt1r180ju3h0skbh9h1g2skls5x4x5n6wyg.jpg"
                    alt="JHC Group automotive fleet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-4 py-3">
                    <p className="text-xs font-semibold text-orange-500">Since 2008</p>
                    <p className="text-sm font-bold text-gray-900">Automotive Division</p>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal delay={100} direction="left">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Who We Serve</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 leading-snug">
                  Trusted by the Automotive Industry
                </h2>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  Since entering the automotive sector in 2008, JHC Group has built a reputation for precision handling, zero-damage delivery, and reliable OEM-compliant operations.
                </p>
                <div className="mt-6 space-y-2">
                  {clients.map((c) => (
                    <div key={c} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Automotive Enquiry"
          title="Vehicle Logistics Done Right"
          subtitle="From port to showroom — trust JHC Group to move your vehicles safely and on schedule."
          primaryLabel="Get a Quote"
          primaryHref="/contact"
          secondaryLabel="All Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
