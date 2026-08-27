"use client";

import React from "react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export function RetentionChart() {
  const stepOutline = "10,100 30,100 30,110 48,110 48,92 65,92 65,65 100,65 100,78 118,78 118,70 135,70 135,48 142,48 142,44 160,44 160,65 175,65 175,55 195,55 195,105 212,105 212,88 230,88 230,95 250,95";
  const stepFill = `10,170 10,100 ${stepOutline} 250,170`;

  return (
    <div className="relative flex flex-col w-full">
      <div className="w-full h-56 relative">
        <svg viewBox="0 0 260 175" className="w-full h-full overflow-visible select-none" preserveAspectRatio="none">
          <defs>
            <pattern id="retentionPinkStripes" width="6" height="6" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#fbcfe8" strokeWidth="2.5" />
            </pattern>
            <linearGradient id="retentionMaskGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="75%" stopColor="#fff" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.05" />
            </linearGradient>
            <mask id="retentionMask">
              <rect width="300" height="200" fill="url(#retentionMaskGrad)" />
            </mask>
          </defs>

          {/* Vertical Pink Striped Fill with Fade */}
          <polygon points={stepFill} fill="url(#retentionPinkStripes)" mask="url(#retentionMask)" />

          {/* Stepped Magenta Boundary Line */}
          <polyline points={stepOutline} fill="none" stroke="#f43f5e" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter" />

          {/* Pink Vertex Dot */}
          <circle cx="135" cy="48" r="3.5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
        </svg>

        {/* Floating 42% Pill Badge */}
        <div className="absolute top-2 left-[52%] -translate-x-1/2">
          <div className="bg-white/95 border border-pink-100 shadow-[0_4px_14px_rgba(244,63,94,0.14)] rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 tracking-tight">
            42%
          </div>
        </div>
      </div>

      {/* X-Axis Month Baseline */}
      <div className="flex items-center justify-between text-xs text-neutral-500 font-normal pt-3 border-t border-neutral-200/70">
        {MONTHS.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </div>
  );
}
