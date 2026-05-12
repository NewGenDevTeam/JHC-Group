import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Warehousing | JHC Group",
  description:
    "JHC Group offers bonded and non-bonded warehousing, pick-and-pack, inventory management, and distribution services in Port Klang and Klang Valley.",
};

const features = [
  { title: "Bonded Warehousing", desc: "Licensed bonded facilities at Port Klang for duty-suspended storage pending customs clearance." },
  { title: "Non-Bonded Storage", desc: "General cargo storage for domestic goods with flexible term options." },
  { title: "Pick & Pack", desc: "Order fulfilment, labelling, kitting, and value-added packing services." },
  { title: "Inventory Management", desc: "Real-time WMS (Warehouse Management System) with full stock visibility." },
  { title: "Distribution", desc: "Outbound delivery coordination — nationwide or to specific distribution points." },
  { title: "Cross-Docking", desc: "Rapid cargo transshipment from inbound to outbound without long-term storage." },
];

const specs = [
  { label: "Location", value: "Port Klang & Shah Alam" },
  { label: "Storage Type", value: "Bonded & Non-Bonded" },
  { label: "Temperature", value: "Ambient & Controlled" },
  { label: "Security", value: "24/7 CCTV & Guards" },
  { label: "WMS", value: "Real-Time Inventory" },
  { label: "Racking", value: "Selective & Drive-In" },
];

export default function WarehousingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-linear-to-br from-purple-900 to-gray-900 py-20 text-white px-6">
          <div className="max-w-7xl mx-auto">
            <MotionReveal>
              <Link href="/services" className="inline-flex items-center gap-2 text-purple-300 text-sm mb-8 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Services
              </Link>
              <span className="text-purple-300 text-sm font-semibold uppercase tracking-widest">Service</span>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl">Warehousing</h1>
              <p className="mt-5 text-purple-100 text-base max-w-2xl leading-relaxed">
                Strategic bonded and non-bonded warehousing with full inventory management, pick-and-pack, and distribution — based in Port Klang and Klang Valley.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Enquire About Storage
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
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Warehousing Services</h2>
              </div>
            </MotionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <MotionReveal key={f.title} delay={i * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover h-full">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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

        {/* Specs & Image */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <MotionReveal direction="left">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Facility</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 leading-snug">
                  Secure, Modern Facilities
                </h2>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  Our warehousing facilities are designed for efficiency — with high-bay racking, loading bays, security monitoring, and WMS integration ensuring every pallet is tracked and managed.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-xs text-gray-400 font-medium">{spec.label}</p>
                      <p className="mt-1 text-sm font-semibold text-gray-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </MotionReveal>

              <MotionReveal delay={100}>
                <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg">
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                  >
                    <source src="/videos/supply-chain-teamwork-and-man-with-boxes-in-wareh-2025-12-17-15-39-23-utc.mp4" type="video/mp4" />
                  </video>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Storage Enquiry"
          title="Looking for Reliable Warehousing in Malaysia?"
          subtitle="Tell us your storage requirements — volume, type, duration — and we&apos;ll provide a competitive proposal."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="All Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
