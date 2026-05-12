"use client";

import Image from "next/image";
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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none${
        fadeOut ? " loader-exit" : ""
      }`}
    >
      {/* Logo */}
      <Image
        src="/logo/jhc-group-dot-com-corporate-identity-website-official-retina-logo-440x110px.png"
        alt="JHC Group"
        width={160}
        height={40}
        priority
        className="mb-10 opacity-90"
      />

      {/* Truck + road */}
      <div className="flex flex-col items-center gap-2">
        <div className="loader-truck">
          <TruckSVG />
        </div>
        {/* Road — matches truck width */}
        <div className="w-[280px] h-1.5 rounded-full overflow-hidden bg-gray-100">
          <div className="loader-road h-full w-full" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-52 h-px rounded-full overflow-hidden bg-gray-100">
        <div className="loader-progress h-full w-full bg-orange-500 rounded-full" />
      </div>

      {/* Status label + animated dots */}
      <p className="mt-5 text-[10px] font-medium tracking-[0.22em] uppercase text-gray-400">
        Preparing Logistics Network
        <span className="loader-dot-1 ml-1.5 inline-block">•</span>
        <span className="loader-dot-2 inline-block">•</span>
        <span className="loader-dot-3 inline-block">•</span>
      </p>
    </div>
  );
}

function TruckSVG() {
  return (
    <svg
      width="280"
      height="88"
      viewBox="0 0 280 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Trailer gradient — dark top to very dark bottom */}
        <linearGradient id="ldr-trailer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2235" />
          <stop offset="100%" stopColor="#0c0f1a" />
        </linearGradient>

        {/* Cab gradient — slightly lighter than trailer */}
        <linearGradient id="ldr-cab" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#242d42" />
          <stop offset="100%" stopColor="#0f1320" />
        </linearGradient>

        {/* Roof fairing gradient */}
        <linearGradient id="ldr-fairing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2840" />
          <stop offset="100%" stopColor="#151c2e" />
        </linearGradient>

        {/* Headlight/DRL glow filter */}
        <filter id="ldr-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft orange glow for running lights */}
        <filter id="ldr-orange-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── TRAILER ─────────────────────────────────────── */}
      {/* Main body */}
      <rect x="2" y="13" width="158" height="45" rx="2" fill="url(#ldr-trailer)" />

      {/* Top edge highlight */}
      <rect x="2" y="13" width="158" height="2" rx="1" fill="#2a3455" fillOpacity="0.5" />

      {/* Orange running light bar (bottom of trailer) */}
      <rect
        x="2" y="55" width="158" height="3" rx="1.5"
        fill="#f97316"
        filter="url(#ldr-orange-glow)"
      />

      {/* Rear marker cluster */}
      <rect x="159" y="17" width="3" height="6" rx="1" fill="#f97316" filter="url(#ldr-orange-glow)" />
      <rect x="159" y="28" width="3" height="6" rx="1" fill="#f97316" filter="url(#ldr-orange-glow)" />
      <rect x="159" y="44" width="3" height="6" rx="1" fill="#f97316" filter="url(#ldr-orange-glow)" />

      {/* Panel division lines */}
      <line x1="56"  y1="16" x2="56"  y2="55" stroke="#141a28" strokeWidth="1" />
      <line x1="110" y1="16" x2="110" y2="55" stroke="#141a28" strokeWidth="1" />

      {/* Subtle JHC text */}
      <text
        x="84" y="38"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#2a3455"
        style={{ letterSpacing: "3px" }}
      >
        JHC
      </text>

      {/* ── ROOF FAIRING (aerodynamic transition) ───────── */}
      {/* Arches from cab roof back over the trailer-cab gap */}
      <path
        d="M 160 13 C 172 10 190 8 210 8 L 238 8 L 238 19 L 160 19 Z"
        fill="url(#ldr-fairing)"
      />

      {/* ── CAB (aerodynamic side profile using path) ───── */}
      {/*
         Rear bottom  → rear top  → shoulder  → roof peak  → windshield top
         → front face → bumper top → bumper bottom → close
      */}
      <path
        d="
          M 162 58
          L 162 22
          L 168 14
          L 238 8
          L 256 18
          L 264 34
          L 266 46
          L 266 58
          Z
        "
        fill="url(#ldr-cab)"
      />

      {/* Windshield — large raked glass */}
      <path
        d="M 184 24 L 238 10 L 256 20 L 256 42 L 184 42 Z"
        fill="#071424"
        fillOpacity="0.88"
      />

      {/* Windshield reflection (upper-left highlight) */}
      <path
        d="M 187 25 L 220 14 L 226 18 L 187 30 Z"
        fill="#1a4a70"
        fillOpacity="0.28"
      />

      {/* A-pillar / door post */}
      <line
        x1="184" y1="42"
        x2="172" y2="54"
        stroke="#0a0f1e"
        strokeWidth="2"
      />

      {/* Cab side door window */}
      <rect x="163" y="26" width="8" height="14" rx="1" fill="#071424" fillOpacity="0.85" />

      {/* DRL strip (continuous LED line across front) */}
      <path
        d="M 245 20 L 256 20"
        stroke="#fbbf24"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#ldr-glow)"
      />

      {/* Main headlight block */}
      <path d="M 258 24 L 266 28 L 266 40 L 258 40 Z" fill="#0f1728" />

      {/* Headlight inner glow element */}
      <path
        d="M 260 27 L 266 30 L 266 38 L 260 38 Z"
        fill="#fbbf24"
        fillOpacity="0.75"
        filter="url(#ldr-glow)"
      />

      {/* Front bumper / lower fascia */}
      <path
        d="M 264 46 L 268 46 L 270 50 L 270 58 L 264 58 Z"
        fill="#1a2035"
      />

      {/* Grille slats */}
      <line x1="265" y1="48" x2="269" y2="48" stroke="#2a3450" strokeWidth="0.8" />
      <line x1="265" y1="51" x2="269" y2="51" stroke="#2a3450" strokeWidth="0.8" />
      <line x1="265" y1="54" x2="269" y2="54" stroke="#2a3450" strokeWidth="0.8" />

      {/* ── WHEELS ──────────────────────────────────────── */}
      {/* Trailer rear — dual wheel set */}
      <circle cx="24"  cy="72" r="11" fill="#080c14" />
      <circle cx="24"  cy="72" r="7.5" fill="#141b28" />
      <circle cx="24"  cy="72" r="3.5" fill="#1e2840" />
      <circle cx="24"  cy="72" r="1.5" fill="#2e3d58" />

      <circle cx="40"  cy="72" r="11" fill="#080c14" />
      <circle cx="40"  cy="72" r="7.5" fill="#141b28" />
      <circle cx="40"  cy="72" r="3.5" fill="#1e2840" />
      <circle cx="40"  cy="72" r="1.5" fill="#2e3d58" />

      {/* Trailer front wheel */}
      <circle cx="130" cy="72" r="11" fill="#080c14" />
      <circle cx="130" cy="72" r="7.5" fill="#141b28" />
      <circle cx="130" cy="72" r="3.5" fill="#1e2840" />
      <circle cx="130" cy="72" r="1.5" fill="#2e3d58" />

      {/* Cab wheel — larger, with spoke detail */}
      <circle cx="226" cy="72" r="12" fill="#080c14" />
      <circle cx="226" cy="72" r="8.5" fill="#141b28" />
      <circle cx="226" cy="72" r="4.5" fill="#1e2840" />
      <circle cx="226" cy="72" r="2"   fill="#2e3d58" />
      {/* Spokes */}
      <line x1="226" y1="63.5" x2="226" y2="80.5" stroke="#1e2840" strokeWidth="1.2" />
      <line x1="217.5" y1="66.5" x2="234.5" y2="77.5" stroke="#1e2840" strokeWidth="1.2" />
      <line x1="217.5" y1="77.5" x2="234.5" y2="66.5" stroke="#1e2840" strokeWidth="1.2" />

      {/* ── GROUND SHADOW ────────────────────────────────── */}
      <ellipse cx="140" cy="84" rx="136" ry="4" fill="#000000" fillOpacity="0.06" />
    </svg>
  );
}
