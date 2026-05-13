"use client";

import { useEffect, useState } from "react";

export default function LogisticsLoader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    const hideTimer = setTimeout(() => setVisible(false), 1900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading JHC Group"
      className={`fixed inset-0 z-[9999] flex items-center justify-center select-none${
        fadeOut ? " loader-exit" : ""
      }`}
      style={{ backgroundColor: "#02080a" }}
    >
      <video
        src="/videos/loader-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "clamp(280px, 80vw, 520px)",
          height: "auto",
          display: "block",
          background: "transparent",
          border: "none",
          boxShadow: "none",
          borderRadius: 0,
        }}
      />
    </div>
  );
}
