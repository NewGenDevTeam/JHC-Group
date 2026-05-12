import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Export Freight | JHC Group",
  description:
    "JHC Group handles export freight forwarding — sea, air, FCL, LCL — with full customs clearance and documentation across global trade lanes.",
};

const features = [
  { title: "FCL & LCL Sea Freight", desc: "Full container loads and groupage consolidation to major global ports." },
  { title: "Air Freight Export", desc: "Express and standard air cargo to global destinations with reliable transit times." },
  { title: "Customs Clearance", desc: "In-house licensed customs agents handling all export declarations and permits." },
  { title: "Documentation Support", desc: "Bill of lading, certificate of origin, packing list, and trade compliance documents." },
  { title: "Multi-Port Routing", desc: "Port Klang, Penang, Johor Bahru — flexibility to choose the best route." },
  { title: "Project & Break-Bulk", desc: "Specialist handling for oversized, heavy-lift, and project cargo exports." },
];

const destinations = [
  "China & Hong Kong", "Japan & Korea", "Middle East", "Europe",
  "USA & Canada", "Australia & NZ", "ASEAN Region", "South Asia",
];

export default function ExportFreightPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-linear-to-br from-orange-900 to-gray-900 py-20 text-white px-6">
          <div className="max-w-7xl mx-auto">
            <MotionReveal>
              <Link href="/services" className="inline-flex items-center gap-2 text-orange-300 text-sm mb-8 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Services
              </Link>
              <span className="text-orange-300 text-sm font-semibold uppercase tracking-widest">Service</span>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl">Export Freight</h1>
              <p className="mt-5 text-orange-100 text-base max-w-2xl leading-relaxed">
                Reliable export freight forwarding — sea, air, and multi-modal — with full documentation and customs handling from Malaysian ports to global destinations.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Request Export Quote
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
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Export Services We Provide</h2>
              </div>
            </MotionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <MotionReveal key={f.title} delay={i * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover h-full">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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

        {/* Why JHC for Export */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <MotionReveal direction="left">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Why JHC</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 leading-snug">
                  Your Export Cargo in Expert Hands
                </h2>
                <p className="mt-5 text-gray-600 text-base leading-relaxed">
                  With in-house customs agents and established carrier relationships at Port Klang, Penang, and KLIA Cargo, JHC Group ensures your exports move efficiently with full compliance — no delays, no surprises.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Licensed Customs Agent (LCA) on-site",
                    "Established partnerships with major shipping lines",
                    "Real-time shipment visibility",
                    "Dedicated export coordinator per account",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </MotionReveal>

              <MotionReveal delay={100}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-5">Global Destinations</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {destinations.map((dest) => (
                      <div key={dest} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                        {dest}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-gray-200">
                    <p className="text-xs text-gray-400">And many more destinations via our global agent network.</p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Export Enquiry"
          title="Ready to Ship Your Goods Globally?"
          subtitle="Contact our export team to get rates and discuss your shipment requirements."
          primaryLabel="Get Export Quote"
          primaryHref="/contact"
          secondaryLabel="All Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
