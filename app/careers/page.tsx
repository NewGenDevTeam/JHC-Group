"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";

const values = [
  { title: "Reliability First", desc: "We deliver on our commitments — to clients and to each other. Dependability is core to how we work." },
  { title: "Continuous Growth", desc: "We invest in our people through training, mentorship, and real career progression opportunities." },
  { title: "Team Collaboration", desc: "Operations, sales, and support work as one unit. We solve problems together." },
  { title: "Safety & Compliance", desc: "We maintain the highest standards in all our operations — protecting people, cargo, and reputation." },
];

const openings = [
  {
    title: "Logistics Coordinator",
    dept: "Operations",
    type: "Full-Time",
    location: "Shah Alam, Selangor",
    desc: "Coordinate day-to-day freight movements, liaise with carriers and clients, and ensure timely delivery documentation.",
  },
  {
    title: "Cold Chain Driver",
    dept: "Cold Chain",
    type: "Full-Time",
    location: "Port Klang, Selangor",
    desc: "Operate reefer vehicles on scheduled cold delivery routes. CDL required. Temperature logging and vehicle care essential.",
  },
  {
    title: "Customs Documentation Exec",
    dept: "Customs",
    type: "Full-Time",
    location: "Klang Valley",
    desc: "Prepare and process import/export customs declarations, permits, and trade documents in compliance with Royal Malaysian Customs regulations.",
  },
  {
    title: "Warehouse Supervisor",
    dept: "Warehousing",
    type: "Full-Time",
    location: "Port Klang, Selangor",
    desc: "Supervise warehouse team, oversee inbound/outbound operations, manage inventory accuracy, and ensure safety compliance.",
  },
];

const benefits = [
  "Competitive salary & performance bonus",
  "Medical & hospitalisation coverage",
  "Career advancement framework",
  "On-the-job training & development",
  "Supportive team culture",
  "Annual leave & public holidays",
];

function ApplyForm({ positionTitle }: { positionTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: positionTitle, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900">Application Received</h3>
        <p className="mt-2 text-sm text-gray-500">Thank you, {form.name}. Our HR team will be in touch within 5 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-orange-500">*</span></label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-orange-500">*</span></label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+6012-345 6789" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Position Applied For</label>
        <input type="text" name="position" value={form.position} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Cover Note</label>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us a little about yourself and why you want to join JHC Group…" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
      </div>
      <button type="submit" className="w-full py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors">
        Submit Application
      </button>
    </form>
  );
}

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative bg-gray-900 py-28 text-white text-center px-6 overflow-hidden">
          <Image
            src="/images/jhc-group-dot-com-about-us-people.jpg"
            alt="JHC Group team"
            fill
            className="object-cover object-[center_25%] opacity-20"
          />
          <div className="relative z-10">
            <MotionReveal>
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Join Our Team</span>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold max-w-3xl mx-auto">Careers at JHC Group</h1>
              <p className="mt-5 text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
                Build your logistics career with a company that values expertise, invests in its people, and operates at the heart of Malaysia&apos;s supply chain.
              </p>
            </MotionReveal>
          </div>
        </section>

        {/* Working at JHC */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <MotionReveal direction="left">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Culture</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 leading-snug">
                  Working at JHC Group
                </h2>
                <p className="mt-5 text-gray-600 text-base leading-relaxed">
                  We are a team of logistics professionals who take pride in doing the job right. At JHC Group, you&apos;ll work alongside experienced colleagues, handle real operational challenges, and grow your skills in a fast-moving industry.
                </p>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  Whether you&apos;re starting your career or bringing years of industry experience, there&apos;s a place for you in our growing organisation.
                </p>
              </MotionReveal>

              <MotionReveal delay={100}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {values.map((v, i) => (
                    <MotionReveal key={v.title} delay={i * 60}>
                      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                        <h3 className="font-semibold text-gray-900 text-sm">{v.title}</h3>
                        <p className="mt-2 text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                      </div>
                    </MotionReveal>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 bg-orange-500">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <h2 className="text-center text-2xl font-bold text-white mb-10">Employee Benefits</h2>
            </MotionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b, i) => (
                <MotionReveal key={b} delay={i * 60}>
                  <div className="flex items-center gap-3 bg-white/15 rounded-xl px-5 py-4">
                    <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white text-sm font-medium">{b}</span>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center max-w-xl mx-auto mb-14">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Now Hiring</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Open Positions</h2>
                <p className="mt-4 text-gray-500 text-sm">Click &quot;Apply Now&quot; on any role to fill in your details below.</p>
              </div>
            </MotionReveal>

            <div className="space-y-4">
              {openings.map((job, i) => (
                <MotionReveal key={job.title} delay={i * 60}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">{job.dept}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{job.type}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{job.location}</span>
                        </div>
                        <h3 className="font-bold text-gray-900">{job.title}</h3>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">{job.desc}</p>
                      </div>
                      <button
                        className="px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shrink-0"
                        onClick={() => {
                          setSelectedPosition(job.title);
                          setShowForm(true);
                          setTimeout(() => {
                            document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Form */}
        <section id="apply-form" className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <MotionReveal>
              <div className="text-center mb-10">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Apply</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {showForm && selectedPosition ? `Apply — ${selectedPosition}` : "General Application"}
                </h2>
                <p className="mt-3 text-gray-500 text-sm">
                  Don&apos;t see a suitable role? Send us a general application and we&apos;ll keep your profile on file.
                </p>
              </div>
            </MotionReveal>
            <MotionReveal delay={80}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <ApplyForm positionTitle={selectedPosition || "General Application"} />
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
