interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "text-center mx-auto" : ""} max-w-2xl mb-12`}>
      {eyebrow && (
        <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2
        className={`${eyebrow ? "mt-3" : ""} text-3xl sm:text-4xl font-bold leading-snug ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
