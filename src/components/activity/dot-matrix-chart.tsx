import React from "react";

interface DotMatrixChartProps {
  columns: number[];
  peakIndices: number[];
  peakLabel: string;
  activeColor: string;
  inactiveColor: string;
}

export function DotMatrixChart({
  columns,
  peakIndices,
  peakLabel,
  activeColor,
  inactiveColor,
}: DotMatrixChartProps) {
  const [labelPrefix, labelValue] = peakLabel.split(": ");

  return (
    <div className="relative flex flex-col items-center justify-end h-20 pt-8">
      {/* Floating Peak Capsule */}
      <div className="absolute top-0 z-10">
        <div className="bg-white border border-neutral-200/80 shadow-2xs rounded-full px-3 py-0.5 text-2xs text-neutral-500 whitespace-nowrap">
          <span>{labelPrefix}: </span>
          <span className="font-semibold text-neutral-900">{labelValue}</span>
        </div>
      </div>

      {/* Dot Matrix Columns */}
      <div className="flex items-end gap-1.5 sm:gap-2 pb-1">
        {columns.map((count, colIdx) => {
          const isPeakCol = peakIndices.includes(colIdx);
          return (
            <div key={colIdx} className="flex flex-col-reverse gap-1.5">
              {Array.from({ length: count }).map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`w-2 h-2 rounded-xs transition-colors ${
                    isPeakCol ? activeColor : inactiveColor
                  }`}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
