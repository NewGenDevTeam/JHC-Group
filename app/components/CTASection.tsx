import Link from "next/link";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  eyebrow = "Get Started",
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-3xl px-8 sm:px-14 py-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.15),transparent_60%)]" />
          <div className="relative z-10">
            {eyebrow && (
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{title}</h2>
            {subtitle && (
              <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors duration-200"
              >
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:border-white/60 hover:bg-white/5 transition-all duration-200"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
