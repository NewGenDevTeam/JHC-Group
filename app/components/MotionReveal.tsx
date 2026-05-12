"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "fade";
}

export default function MotionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hiddenClass =
      direction === "left" ? "reveal-hidden-left" : "reveal-hidden";
    const animClass =
      direction === "left"
        ? "animate-slide-left"
        : direction === "fade"
        ? "animate-fade-in"
        : "animate-fade-up";

    el.classList.add(hiddenClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.remove(hiddenClass);
            el.style.animationDelay = `${delay}ms`;
            el.classList.add(animClass);
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
