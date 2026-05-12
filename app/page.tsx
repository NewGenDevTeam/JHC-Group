import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MotionReveal from "./components/MotionReveal";
import StatCounter from "./components/StatCounter";
import CTASection from "./components/CTASection";
import ContactForm from "./components/ContactForm";
import { SparklesPartnersSection } from "@/components/blocks/sparkles-demo";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/hero-logistics.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Trusted Logistics Partner Since 1998
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
          Moving Malaysia&apos;s Supply Chain
          <span className="block text-orange-400 mt-1">Forward with Precision</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto font-light leading-relaxed">
          End-to-end freight, cold chain, warehousing, and automotive logistics solutions — built on 25 years of Malaysian industry experience.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 rounded-full border border-white/60 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
          >
            Explore Services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Services Overview ─── */
const coreServices = [
  {
    title: "Cold Chain Logistics",
    desc: "Temperature-controlled transport and storage for perishables, pharmaceuticals, and sensitive cargo.",
    href: "/services/cold-chain-logistics",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m-4.5-9h9M7.5 7.5l9 9m0-9l-9 9" />
      </svg>
    ),
  },
  {
    title: "Export Freight",
    desc: "Seamless export documentation, customs clearance, and multi-modal freight forwarding to global ports.",
    href: "/services/export-freight",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Import Freight",
    desc: "End-to-end import management including customs brokerage, port handling, and inland delivery.",
    href: "/services/import-freight",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5l-9 2 9 18 9-18-9 2zm0 0v8" />
      </svg>
    ),
  },
  {
    title: "Warehousing",
    desc: "Strategically located bonded and non-bonded warehouses with full inventory and pick-and-pack services.",
    href: "/services/warehousing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Automotive Logistics",
    desc: "Specialist vehicle handling, compound management, PDI services, and fleet distribution across Malaysia.",
    href: "/services/automotive-logistics",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0H3m16-3h.01" />
      </svg>
    ),
  },
];

function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <MotionReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Core Services
            </h2>
            <p className="mt-4 text-gray-500 text-base leading-relaxed">
              Five specialist service lines, one trusted partner. We handle every link in your supply chain.
            </p>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((svc, i) => (
            <MotionReveal key={svc.title} delay={i * 80}>
              <Link
                href={svc.href}
                className="group flex flex-col bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                  {svc.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900">{svc.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{svc.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-orange-500 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </MotionReveal>
          ))}

          {/* View all card */}
          <MotionReveal delay={coreServices.length * 80}>
            <Link
              href="/services"
              className="flex flex-col items-center justify-center bg-orange-500 rounded-2xl p-7 card-hover text-white text-center h-full min-h-45"
            >
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <p className="font-semibold text-base">All Services</p>
              <p className="mt-1 text-sm text-white/80">View complete overview</p>
            </Link>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Industries ─── */
const industries = [
  { label: "Automotive", icon: "🚗" },
  { label: "FMCG", icon: "📦" },
  { label: "Manufacturing", icon: "🏭" },
  { label: "Cold Chain", icon: "❄️" },
  { label: "Industrial Supply", icon: "⚙️" },
];

function IndustriesStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <MotionReveal>
          <div className="text-center mb-10">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Industries We Serve
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Built for Your Industry
            </h2>
          </div>
        </MotionReveal>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <MotionReveal key={ind.label} delay={i * 60}>
              <Link
                href="/industries"
                className="flex items-center gap-3 bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 rounded-2xl px-6 py-4 transition-all duration-200 group"
              >
                <span className="text-2xl">{ind.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                  {ind.label}
                </span>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose JHC ─── */
const reasons = [
  {
    title: "25+ Years in Malaysia",
    desc: "Deep local knowledge combined with regional reach — we know how Malaysian logistics works.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "One-Stop Solution",
    desc: "From origin pickup to final delivery — freight, warehousing, customs, and transport under one roof.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Specialist Cold Chain",
    desc: "Dedicated reefer fleet and cold storage facilities maintaining precise temperature integrity throughout.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m-4.5-9h9M7.5 7.5l9 9m0-9l-9 9" />
      </svg>
    ),
  },
  {
    title: "Automotive Expertise",
    desc: "Malaysia&apos;s trusted vehicle logistics partner — PDI, compound management, and nationwide distribution.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <MotionReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Why JHC Group
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              The JHC Advantage
            </h2>
            <p className="mt-4 text-gray-500 text-base">
              We are more than a logistics provider — we are your operational partner.
            </p>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <MotionReveal key={r.title} delay={i * 80}>
              <div className="rounded-2xl bg-white p-7 border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition-all duration-200 group card-hover h-full">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200">
                  {r.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900">{r.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Nationwide Coverage ─── */
function Coverage() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <MotionReveal direction="left">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Operational Reach
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              Nationwide Coverage,<br />Regional Connections
            </h2>
            <p className="mt-5 text-gray-600 text-base leading-relaxed">
              JHC Group operates across Peninsular Malaysia with strategic hubs in Klang Valley, Penang, and Johor — supported by regional freight corridors into Singapore, Thailand, and beyond.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Klang Valley HQ & Warehousing Hub",
                "Penang Port Operations",
                "Johor Bahru — Singapore Corridor",
                "East Malaysia Freight Services",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Learn About JHC
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </MotionReveal>

          <MotionReveal delay={100}>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-105 shadow-lg">
              <Image
                src="/images/jhc-group-dot-com-about-us-1.jpg"
                alt="JHC Group nationwide logistics operations"
                fill
                className="object-cover img-reveal"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4">
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">Active Operations</p>
                  <p className="text-gray-900 font-bold text-sm mt-0.5">Peninsula &amp; East Malaysia</p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <MotionReveal direction="left">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              Let&apos;s Discuss Your Logistics Needs
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Send us your enquiry and our operations team will respond within one business day.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:enquiry@jhc-group.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-orange-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="text-sm font-semibold text-gray-800">enquiry@jhc-group.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/60123456789"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-orange-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">WhatsApp</p>
                  <p className="text-sm font-semibold text-gray-800">+603-5115 0263</p>
                </div>
              </a>
            </div>
          </MotionReveal>

          <MotionReveal delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ContactForm />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <StatCounter />
        <ServicesOverview />
        <IndustriesStrip />
        <WhyChoose />
        <SparklesPartnersSection />
        <Coverage />
        <CTASection
          eyebrow="Ready to Move?"
          title="Start Your Logistics Journey with JHC"
          subtitle="Our operations team is ready to plan your next shipment, cold chain run, or warehousing solution."
          primaryLabel="Get a Free Quote"
          primaryHref="/contact"
          secondaryLabel="View Our Services"
          secondaryHref="/services"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
