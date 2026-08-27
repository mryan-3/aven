import React from "react";

export function VolumeMetric() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-4xl sm:text-5xl font-bold tracking-tight text-content-primary tabular-nums">
        $41,540
      </span>
      <div className="flex items-center gap-1 bg-white border border-emerald-100/90 shadow-2xs rounded-full px-2.5 py-0.5 text-xs font-semibold text-emerald-600">
        <span className="text-3xs">▲</span>
        <span>15%</span>
      </div>
    </div>
  );
}
