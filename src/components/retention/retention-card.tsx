"use client";

import React from "react";
import { RetentionHeader } from "./retention-header";
import { RetentionChart } from "./retention-chart";

export function RetentionCard() {
  return (
    <div className="bg-surface-card rounded-2xl border border-border-card/80 p-6 shadow-xs flex flex-col justify-between h-full">
      <RetentionHeader />
      <RetentionChart />
    </div>
  );
}
