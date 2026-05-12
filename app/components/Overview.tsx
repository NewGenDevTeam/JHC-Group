import Image from "next/image";

export default function Overview() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              About JHC Group
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              Built on Reliability.<br />Driven by Excellence.
            </h2>
            <p className="mt-5 text-gray-600 text-base leading-relaxed">
              JHC Group is a Malaysia-based logistics and supply chain company committed to delivering
              seamless freight, transportation, and warehousing solutions. With decades of industry
              experience, we connect businesses to global markets efficiently and reliably.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Our team of professionals understands your logistics challenges and provides customised
              strategies that reduce cost, increase efficiency, and keep your cargo moving.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Explore Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-md">
            <Image
              src="/images/jhc-group-dot-com-about-us-people.jpg"
              alt="JHC Group team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
