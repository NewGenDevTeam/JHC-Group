import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | JHC Group",
  description:
    "Get in touch with JHC Group for logistics enquiries, freight quotes, and supply chain solutions across Malaysia.",
};

const branches = [
  {
    name: "Headquarters — Shah Alam",
    address: "Shah Alam, Selangor, Malaysia",
    phone: "+60 12-345 6789",
    email: "enquiry@jhc-group.com",
    type: "HQ & Operations",
  },
  {
    name: "Port Klang Hub",
    address: "Port Klang, Selangor, Malaysia",
    phone: "+60 19-331 2327",
    email: "portklang@jhc-group.com",
    type: "Warehousing & Freight",
  },
  {
    name: "Penang Branch",
    address: "Butterworth, Penang, Malaysia",
    phone: "+60 3-5115 0263",
    email: "penang@jhc-group.com",
    type: "Freight Operations",
  },
];

const contactMethods = [
  {
    label: "General Enquiry",
    value: "enquiry@jhc-group.com",
    href: "mailto:enquiry@jhc-group.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+60 16-306 3111",
    href: "https://wa.me/60163063111",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5 -.669 -.51 -.173 -.008 -.371 -.01 -.57 -.01 -.198 0 -.52 .074 -.792 .372 -.272 .297 -1.04 1.016 -1.04 2.479 0 1.462 1.065 2.875 1.2₁₃ 3.074 .₁₄₉ .₁₉₈ ₂₀₉₆ ₃.₂ ₅.₀₇₇ ₄.₄₈₇ .₇₀₉ .₃₀₆ ₁₂₆₂ .₄₈₉ ₁.₆₉₄ .₆₂伍 .７１２ .２２７ ₁３６ .１９５ ₁.８７₁ .１１８ .５７₁ -." />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+60 3-5115 0263",
    href: "tel:+603-5115 0263",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gray-900 py-16 text-white text-center px-6">
          <MotionReveal>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Reach Us
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold">Contact JHC Group</h1>
            <p className="mt-4 text-gray-300 text-base max-w-xl mx-auto">
              Whether you need a freight quote, logistics consultation, or general enquiry — our team responds within one business day.
            </p>
          </MotionReveal>
        </section>

        {/* Contact methods */}
        <section className="py-12 bg-orange-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {contactMethods.map((method, i) => (
                <MotionReveal key={method.label} delay={i * 60}>
                  <a
                    href={method.href}
                    className="flex items-center gap-4 bg-white/15 hover:bg-white/25 rounded-2xl px-6 py-5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-medium">{method.label}</p>
                      <p className="text-white font-semibold text-sm">{method.value}</p>
                    </div>
                  </a>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">

              {/* Form — wider column */}
              <MotionReveal className="lg:col-span-3" direction="left">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Send an Enquiry</h2>
                  <p className="text-sm text-gray-500 mb-7">
                    Fill in the form below and our team will get back to you promptly.
                  </p>
                  <ContactForm />
                </div>
              </MotionReveal>

              {/* Branch Info */}
              <MotionReveal className="lg:col-span-2" delay={120}>
                <div className="space-y-5">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-5">Branch Locations</h2>
                  </div>
                  {branches.map((branch) => (
                    <div key={branch.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs text-orange-500 font-semibold uppercase tracking-wide">{branch.type}</span>
                          <h3 className="font-semibold text-gray-900 text-sm mt-0.5">{branch.name}</h3>
                          <p className="text-xs text-gray-500 mt-1">{branch.address}</p>
                          <div className="mt-2 flex flex-col gap-1">
                            <a href={`tel:${branch.phone}`} className="text-xs text-gray-600 hover:text-orange-500 transition-colors">{branch.phone}</a>
                            <a href={`mailto:${branch.email}`} className="text-xs text-gray-600 hover:text-orange-500 transition-colors">{branch.email}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/60123456789"
                    className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl px-5 py-4 transition-colors"
                  >
                    <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Chat on WhatsApp</p>
                      <p className="text-xs text-white/80">Fastest way to reach us</p>
                    </div>
                  </a>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="bg-gray-100 h-64 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium text-sm">Shah Alam, Selangor — Malaysia</p>
            <a
              href="https://maps.google.com/?q=Shah+Alam+Selangor"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
