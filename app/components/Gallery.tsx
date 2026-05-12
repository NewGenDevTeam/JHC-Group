import Image from "next/image";

const images = [
  {
    src: "/images/jhc-group-dot-com-about-us-1.jpg",
    alt: "JHC Group logistics operations",
  },
  {
    src: "/images/jhc-group-dot-com-about-us-people.jpg",
    alt: "JHC Group team",
  },
  {
    src: "/images/jhc-group-dot-com-post-hino-delivers-5-trucks-2017-rmtg4xtqt1r180ju3h0skbh9h1g2skls5x4x5n6wyg.jpg",
    alt: "JHC Group fleet delivery",
  },
];

export default function Gallery() {
  return (
    <section id="media" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Media
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Gallery</h2>
          <p className="mt-4 text-gray-500 text-base">A look into our operations and people.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
