import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";
import CTASection from "../components/CTASection";
import ClientLogos from "../components/ClientLogos";

export const metadata: Metadata = {
  title: "About Us | JHC Group",
  description:
    "Learn about JHC Group's 25+ year journey as Malaysia's trusted logistics and supply chain partner.",
};

const milestones = [
  { year: "1998", event: "JHC Group founded in Kuala Lumpur, beginning as a freight forwarding agency." },
  { year: "2003", event: "Expanded into warehousing and launched first bonded warehouse in Port Klang." },
  { year: "2008", event: "Entered automotive logistics sector, securing first OEM distribution contract." },
  { year: "2013", event: "Cold chain division established with dedicated reefer fleet and cold storage facility." },
  { year: "2018", event: "Regional expansion — freight corridors into Singapore, Thailand, and Indonesia." },
  { year: "2023", event: "Achieved ISO certification and onboarded 500th client across all service lines." },
];

const stats = [
  { value: "25+", label: "Years Operating" },
  { value: "500+", label: "Active Clients" },
  { value: "99%", label: "On-Time Delivery" },
  { value: "3", label: "Regional Hubs" },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System" },
  { name: "Customs Approved", desc: "Licensed Customs Agent (LCA)" },
  { name: "FIATA Member", desc: "International Freight Association" },
  { name: "MFFA Member", desc: "Malaysia Freight Forwarders Association" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Page Hero */}
        <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden bg-gray-900">
          <Image
            src="/images/jhc-group-dot-com-about-us-people.jpg"
            alt="JHC Group team"
            fill
            className="object-cover object-[center_20%] opacity-30"
            priority
          />
          <div className="relative z-10 text-center text-white px-6 translate-y-12">
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold">About JHC Group</h1>
            <p className="mt-4 text-gray-300 text-base max-w-xl mx-auto">
              25 years of reliability, expertise, and operational excellence in Malaysian logistics.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <MotionReveal direction="left">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
                  Company Overview
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
                  Built on Reliability.<br />Driven by Excellence.
                </h2>
                <p className="mt-5 text-gray-600 text-base leading-relaxed">
                  JHC Group is a Malaysia-based integrated logistics and supply chain company delivering freight forwarding, cold chain, warehousing, and automotive logistics solutions since 1998. We connect Malaysian businesses to domestic markets and global trade lanes with precision and care.
                </p>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  With dedicated teams across Klang Valley, Penang, and Johor, we offer a genuinely local perspective — backed by international freight networks and industry-compliant processes.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  Partner With Us
                </Link>
              </MotionReveal>

              <MotionReveal delay={100}>
                <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-lg">
                  <Image
                    src="/images/jhc-group-dot-com-about-us-1.jpg"
                    alt="JHC Group operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-900 py-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <MotionReveal key={stat.label} delay={i * 80}>
                  <div className="text-white">
                    <div className="text-4xl sm:text-5xl font-bold text-orange-400">{stat.value}</div>
                    <p className="mt-2 text-sm text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center max-w-xl mx-auto mb-14">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
                  Direction
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                  Vision &amp; Mission
                </h2>
              </div>
            </MotionReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <MotionReveal delay={0}>
                <div className="bg-orange-500 rounded-2xl p-8 text-white h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-white/85 leading-relaxed">
                    To be Malaysia&apos;s most trusted integrated logistics partner — recognised for operational excellence, innovation, and the long-term relationships we build with every client.
                  </p>
                </div>
              </MotionReveal>

              <MotionReveal delay={80}>
                <div className="bg-gray-900 rounded-2xl p-8 text-white h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To deliver reliable, compliant, and cost-efficient logistics solutions that empower our clients&apos; businesses — through skilled people, smart processes, and a commitment to continuous improvement.
                  </p>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center max-w-xl mx-auto mb-14">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
                  Our Journey
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                  Company Milestones
                </h2>
              </div>
            </MotionReveal>

            <div className="relative">
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden sm:block" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <MotionReveal key={m.year} delay={i * 80}>
                    <div className={`flex flex-col sm:flex-row gap-6 items-start ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                      <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                        <div className={`inline-block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left max-w-sm ${i % 2 === 0 ? "sm:ml-auto" : ""}`}>
                          <span className="text-orange-500 font-bold text-lg">{m.year}</span>
                          <p className="mt-1 text-gray-600 text-sm leading-relaxed">{m.event}</p>
                        </div>
                      </div>
                      <div className="hidden sm:flex w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm shrink-0 mt-6 relative z-10" />
                      <div className="flex-1" />
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Operational Strength & Fleet */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <MotionReveal>
                <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg">
                  <Image
                    src="/images/jhc-group-dot-com-post-hino-delivers-5-trucks-2017-rmtg4xtqt1r180ju3h0skbh9h1g2skls5x4x5n6wyg.jpg"
                    alt="JHC Group fleet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </MotionReveal>

              <MotionReveal delay={100} direction="left">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
                  Operational Strength
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
                  Fleet, Facilities &amp; People
                </h2>
                <p className="mt-5 text-gray-600 text-base leading-relaxed">
                  Our operational backbone includes a modern mixed fleet, purpose-built cold storage, bonded warehouses, and a team of customs-licensed professionals managing every shipment with precision.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Mixed fleet: prime movers, panel vans, and reefer trucks",
                    "Cold storage from 2°C to 25°C ambient-controlled",
                    "Bonded and non-bonded warehousing in Port Klang",
                    "In-house licensed customs agents (LCA)",
                    "24/7 shipment monitoring and client coordination",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
                  Our Clients
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                  Trusted by Local &amp; International Companies
                </h2>
                <p className="mt-4 text-gray-500 text-base leading-relaxed">
                  JHC Group supports established brands with reliable logistics, warehousing, and supply chain operations.
                </p>
              </div>
            </MotionReveal>
            <MotionReveal delay={80}>
              <ClientLogos />
            </MotionReveal>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center max-w-xl mx-auto mb-14">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
                  Standards &amp; Compliance
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                  Certifications
                </h2>
                <p className="mt-4 text-gray-500 text-base">
                  We operate to internationally recognised standards so your cargo moves with confidence.
                </p>
              </div>
            </MotionReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, i) => (
                <MotionReveal key={cert.name} delay={i * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center card-hover">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">{cert.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">{cert.desc}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Work With Us"
          title="Ready to Partner with JHC Group?"
          subtitle="Talk to our team about your logistics requirements and get a customised solution."
          primaryLabel="Get in Touch"
          primaryHref="/contact"
          secondaryLabel="View Our Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
