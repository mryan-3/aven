"use client";

import React from "react";
import { LightbulbIcon } from "../icons/feature-icons";
import { InsightsNoiseBg } from "./insights-noise-bg";
import { InsightsCarouselBars } from "./insights-carousel-bars";

export function InsightsCard() {
  return (
    <div className="relative rounded-3xl p-7 md:p-8 shadow-md flex flex-col justify-between overflow-hidden text-white min-h-80 h-full w-full">
      <InsightsNoiseBg />

      {/* Top Frosted Glass Badge */}
      <div className="relative z-10 flex items-center self-start">
        <div className="bg-white/30 backdrop-blur-md border border-white/45 rounded-full px-3.5 py-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-800 shadow-xs">
          <LightbulbIcon className="w-3.5 h-3.5 text-slate-800" />
          <span>Insights</span>
        </div>
      </div>

      {/* Center Metric & Narrative */}
      <div className="relative z-10 flex flex-col gap-3 my-auto py-4">
        <span className="text-6xl font-light tracking-tight text-white select-none">
          75%
        </span>

        <h3 className="text-base sm:text-lg font-semibold text-white leading-snug tracking-tight">
          Authorization rate increased by 4% compared to last week.
        </h3>

        <p className="text-xs text-white/90 leading-relaxed font-normal">
          This improvement reduced failed transactions by 950 and is projected
          to recover $12,400.
        </p>
      </div>

      {/* Bottom Slide Indicators */}
      <div className="relative z-10">
        <InsightsCarouselBars />
      </div>
    </div>
  );
}
