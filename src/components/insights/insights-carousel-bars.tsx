"use client";

import React, { useState } from "react";

export function InsightsCarouselBars() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center gap-2 w-full pt-4">
      {[0, 1, 2].map((idx) => {
        const isActive = activeIndex === idx;
        return (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="flex-1 py-1 cursor-pointer group"
          >
            <div
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "h-1 bg-white shadow-xs"
                  : "h-0.5 bg-white/35 group-hover:bg-white/50"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
