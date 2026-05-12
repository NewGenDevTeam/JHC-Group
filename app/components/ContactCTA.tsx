export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-3xl px-10 py-16 text-center text-white">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Ready to Move Your Business Forward?
          </h2>
          <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
            Tell us about your logistics needs and our team will get back to you within one business day.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:enquiry@jhc-group.com"
              className="px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
            >
              Send an Enquiry
            </a>
            <a
              href="tel:+60123456789"
              className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
