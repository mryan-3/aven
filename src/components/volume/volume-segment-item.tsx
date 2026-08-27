import React from "react";

interface VolumeSegmentItemProps {
  label: string;
  amount: string;
  percentage: number;
  stripeClass: string;
}

export function VolumeSegmentItem({
  label,
  amount,
  percentage,
  stripeClass,
}: VolumeSegmentItemProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-normal text-content-secondary">{label}</span>
        <span className="font-medium text-content-primary tabular-nums">
          {amount}
        </span>
      </div>

      <div className="w-full bg-neutral-100/90 h-2 rounded-full overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className={`h-full rounded-full ${stripeClass} transition-all duration-300`}
        />
      </div>
    </div>
  );
}
