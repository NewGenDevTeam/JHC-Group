import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Import Freight | JHC Group",
  description:
    "JHC Group manages import freight from port handling and customs clearance through to inland delivery across Malaysia.",
};

const features = [
  { title: "Port Handling", desc: "Coordination at Port Klang, Penang, and Johor ports for container release and gate-out." },
  { title: "Customs Clearance", desc: "Licensed in-house agents managing import declarations, permits, and duty payments." },
  { title: "Deconsolidation", desc: "LCL cargo unstuffing and sorting at our CFS facility in Port Klang." },
  { title: "Duty & Tax Management", desc: "Accurate duty calculation, AP permits, and government agency liaisons." },
  { title: "Inland Transportation", desc: "Nationwide delivery from port to warehouse, factory, or end customer." },
  { title: "Document Management", desc: "BL release, invoicing, COO verification, and import licence processing." },
];

const process = [
  { step: "01", title: "Pre-Arrival", desc: "Review documents and prepare customs declaration ahead of vessel arrival." },
  { step: "02", title: "Arrival & Clearance", desc: "Handle port formalities, release, and customs clearance." },
  { step: "03", title: "Deconsolidation", desc: "Unstuff and sort LCL cargo at our CFS facility." },
  { step: "04", title: "Delivery", desc: "Arrange inland transport to your warehouse or delivery address." },
];

export default function ImportFreightPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-linear-to-br from-green-900 to-gray-900 py-20 text-white px-6">
          <div className="max-w-7xl mx-auto">
            <MotionReveal>
              <Link href="/services" className="inline-flex items-center gap-2 text-green-300 text-sm mb-8 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Services
              </Link>
              <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">Service</span>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl">Import Freight</h1>
              <p className="mt-5 text-green-100 text-base max-w-2xl leading-relaxed">
                Smooth, compliant import management from port of entry through customs clearance to your warehouse door — handled by licensed professionals.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Request Import Quote
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
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Import Services We Provide</h2>
              </div>
            </MotionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <MotionReveal key={f.title} delay={i * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover h-full">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5l-9 2 9 18 9-18-9 2zm0 0v8" />
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
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Process</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">How Import Clearance Works</h2>
              </div>
            </MotionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <MotionReveal key={p.step} delay={i * 80}>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                    <div className="text-3xl font-black text-orange-100">{p.step}</div>
                    <h3 className="mt-2 font-semibold text-gray-900 text-sm">{p.title}</h3>
                    <p className="mt-2 text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Import Enquiry"
          title="Importing Goods into Malaysia?"
          subtitle="Our customs-licensed team handles every step — let us simplify your import process."
          primaryLabel="Get Import Quote"
          primaryHref="/contact"
          secondaryLabel="All Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
