import React from "react";

export function VolumeMetric() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-3xl font-normal tracking-tight text-content-primary tabular-nums">
        $41,540
      </span>
      <div className="flex items-center gap-1 bg-white border border-emerald-100/90 shadow-2xs rounded-full px-2 py-0.5 text-2xs font-medium text-emerald-600">
        <span className="text-3xs">▲</span>
        <span>15%</span>
      </div>
    </div>
  );
}
