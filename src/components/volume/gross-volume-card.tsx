"use client";

import React from "react";
import { VolumeHeader } from "./volume-header";
import { VolumeMetric } from "./volume-metric";
import { VolumeSegmentItem } from "./volume-segment-item";

const SEGMENTS = [
  {
    label: "Online Payments",
    amount: "$26,800",
    percentage: 68,
    stripeClass: "stripe-green",
  },
  {
    label: "Subscriptions",
    amount: "$10,400",
    percentage: 45,
    stripeClass: "stripe-blue",
  },
  {
    label: "In-Store Sales",
    amount: "$4,340",
    percentage: 28,
    stripeClass: "stripe-pink",
  },
];

export function GrossVolumeCard() {
  return (
    <div className="bg-surface-card rounded-2xl border border-border-card/80 p-6 shadow-xs flex flex-col justify-between">
      <div>
        <VolumeHeader />
        <VolumeMetric />
      </div>

      <div className="border-t border-neutral-100/90 my-5" />

      <div className="flex flex-col gap-4">
        {SEGMENTS.map((segment) => (
          <VolumeSegmentItem
            key={segment.label}
            label={segment.label}
            amount={segment.amount}
            percentage={segment.percentage}
            stripeClass={segment.stripeClass}
          />
        ))}
      </div>
    </div>
  );
}
