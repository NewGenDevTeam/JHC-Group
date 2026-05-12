"use client";

import Image from "next/image";
import { useState } from "react";

const clients = [
  { name: "Petronas", src: "/images/clients/petronas.png" },
  { name: "Perodua", src: "/images/clients/perodua.png" },
  { name: "Proton", src: "/images/clients/proton.jpg" },
  { name: "Honda", src: "/images/clients/honda.jpg" },
  { name: "Toyota", src: "/images/clients/toyota.jpg" },
  { name: "HICM", src: "/images/clients/hicm.png" },
  { name: "Sime Darby", src: "/images/clients/sime-darby.jpg" },
];

// Duplicate array for seamless infinite loop
const track = [...clients, ...clients];

function LogoCard({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center justify-center shrink-0 w-35 h-17.5 sm:w-45 sm:h-22.5 mx-3 sm:mx-4 rounded-2xl bg-gray-50 border border-gray-100 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-300 cursor-default">
      {failed ? (
        <span className="text-[11px] sm:text-xs font-semibold text-gray-400 px-3 text-center leading-snug">
          {name}
        </span>
      ) : (
        <div className="relative w-25 h-12 sm:w-35 sm:h-16.25">
          <Image
            src={src}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100px, 140px"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <div className="marquee-wrapper overflow-hidden py-4 select-none">
      <div className="marquee-track flex items-center">
        {track.map((client, i) => (
          <LogoCard key={`${client.name}-${i}`} name={client.name} src={client.src} />
        ))}
      </div>
    </div>
  );
}
