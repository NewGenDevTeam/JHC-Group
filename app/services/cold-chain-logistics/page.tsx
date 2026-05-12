import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Cold Chain Logistics | JHC Group",
  description:
    "JHC Group's cold chain logistics services provide temperature-controlled transport and storage for food, pharmaceuticals, and sensitive cargo across Malaysia.",
};

const features = [
  { title: "Reefer Fleet", desc: "Dedicated refrigerated trucks maintaining 2°C to 25°C across all zones throughout transit." },
  { title: "Cold Storage Facilities", desc: "Purpose-built cold rooms and blast freezers at our Port Klang facility." },
  { title: "Real-Time Monitoring", desc: "IoT temperature loggers with live data access and automated alerts for any deviation." },
  { title: "GDP Compliance", desc: "All cold chain operations follow Good Distribution Practice (GDP) protocols." },
  { title: "Flexible Temperature Zones", desc: "Chilled (2–8°C), cool (8–15°C), and ambient-controlled (15–25°C) options." },
  { title: "Last-Mile Cold Delivery", desc: "Nationwide cold delivery with insulated packaging and time-definite windows." },
];

const sectors = [
  "Fresh & Frozen Food",
  "Dairy & Beverages",
  "Pharmaceuticals & Healthcare",
  "Confectionery & Chocolate",
  "Cosmetics & Personal Care",
  "Floral & Perishables",
];

const steps = [
  { step: "01", title: "Collection", desc: "Cold-chain-certified pickup from supplier or manufacturer at origin." },
  { step: "02", title: "Pre-Cool", desc: "Cargo is pre-cooled to required temperature before loading." },
  { step: "03", title: "Transport", desc: "Transit in monitored reefer vehicle with sealed temperature zone." },
  { step: "04", title: "Storage", desc: "Intermediate cold storage if required, with full traceability." },
  { step: "05", title: "Delivery", desc: "Last-mile delivery to retailer, distributor, or end point." },
];

export default function ColdChainPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-linear-to-br from-blue-900 to-gray-900 py-20 text-white px-6">
          <div className="max-w-7xl mx-auto">
            <MotionReveal>
              <Link href="/services" className="inline-flex items-center gap-2 text-blue-300 text-sm mb-8 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Services
              </Link>
              <span className="text-blue-300 text-sm font-semibold uppercase tracking-widest">Service</span>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl">Cold Chain Logistics</h1>
              <p className="mt-5 text-blue-100 text-base max-w-2xl leading-relaxed">
                End-to-end temperature-controlled logistics designed to protect product quality and compliance — from producer to point of sale.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Request Cold Chain Quote
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
                <h2 className="mt-3 text-3xl font-bold text-gray-900">What We Provide</h2>
              </div>
            </MotionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <MotionReveal key={f.title} delay={i * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover h-full">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m-4.5-9h9M7.5 7.5l9 9m0-9l-9 9" />
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

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center max-w-xl mx-auto mb-14">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">How It Works</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">The Cold Chain Process</h2>
              </div>
            </MotionReveal>
            <div className="flex flex-col md:flex-row gap-0 md:gap-0">
              {steps.map((s, i) => (
                <MotionReveal key={s.step} delay={i * 80} className="flex-1">
                  <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 p-5 md:text-center relative">
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-8 w-px h-8 bg-gray-200 rotate-90 translate-x-1/2" />
                    )}
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{s.title}</h3>
                      <p className="mt-1 text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Industries</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Sectors We Serve</h2>
              </div>
            </MotionReveal>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-6">
              {sectors.map((s, i) => (
                <MotionReveal key={s} delay={i * 50}>
                  <span className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm">
                    {s}
                  </span>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Cold Chain Enquiry"
          title="Protect Your Cargo from Origin to Delivery"
          subtitle="Talk to our cold chain specialists about your temperature-sensitive shipment requirements."
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
