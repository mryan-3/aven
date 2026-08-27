import React from "react";
import { ActivityHeader } from "./activity-header";
import { DotMatrixChart } from "./dot-matrix-chart";

interface ActivityMetricCardProps {
  title: string;
  total: string;
  comparisonLabel: string;
  comparisonValue: string;
  dotColumns: number[];
  peakIndices: number[];
  peakLabel: string;
  activeDotColor: string;
  inactiveDotColor: string;
}

export function ActivityMetricCard({
  title,
  total,
  comparisonLabel,
  comparisonValue,
  dotColumns,
  peakIndices,
  peakLabel,
  activeDotColor,
  inactiveDotColor,
}: ActivityMetricCardProps) {
  return (
    <div className="bg-surface-card rounded-2xl border border-border-card/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      <ActivityHeader title={title} />

      <div className="flex items-end justify-between gap-3 pt-2">
        {/* Left: Total Metric */}
        <span className="text-3xl sm:text-4xl font-normal tracking-tight text-content-primary tabular-nums mb-1">
          {total}
        </span>

        {/* Center: Dot Equalizer Chart */}
        <DotMatrixChart
          columns={dotColumns}
          peakIndices={peakIndices}
          peakLabel={peakLabel}
          activeColor={activeDotColor}
          inactiveColor={inactiveDotColor}
        />

        {/* Right: Period Comparison */}
        <div className="flex flex-col items-end text-right mb-1">
          <span className="text-2xs text-neutral-400 font-normal">
            {comparisonLabel}
          </span>
          <span className="text-base sm:text-lg font-medium text-content-primary tracking-tight tabular-nums">
            {comparisonValue}
          </span>
        </div>
      </div>
    </div>
  );
}
