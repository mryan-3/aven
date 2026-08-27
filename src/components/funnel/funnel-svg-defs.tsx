import React from "react";

export function FunnelSvgDefs() {
  return (
    <defs>
      {/* Diagonal blue stripe pattern */}
      <pattern
        id="funnelBlueStripes"
        width="10"
        height="10"
        patternTransform="rotate(45 0 0)"
        patternUnits="userSpaceOnUse"
      >
        <line x1="0" y1="0" x2="0" y2="10" stroke="#3b82f6" strokeWidth="4.5" />
        <line x1="0" y1="0" x2="0" y2="10" stroke="#60a5fa" strokeWidth="2" />
      </pattern>

      {/* Fade mask for striped bars */}
      <linearGradient id="fadeMaskGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="60%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
      </linearGradient>

      <mask id="fadeMask">
        <rect width="1000" height="300" fill="url(#fadeMaskGrad)" />
      </mask>

      {/* 3D Connecting Sloped Ramp Gradient */}
      <linearGradient id="rampGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.85" />
        <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.2" />
      </linearGradient>

      {/* Active Stage Solid Blue Gradient */}
      <linearGradient id="activeBlueGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
  );
}
