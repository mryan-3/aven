"use client";

import React from "react";
import { FunnelHeader } from "./funnel-header";
import { FunnelChart } from "./funnel-chart";
import { FunnelAiBar } from "./funnel-ai-bar";

export function PaymentFunnelCard() {
  return (
    <div className="bg-surface-card rounded-3xl border border-border-card/80 p-7 md:p-8 shadow-xs flex flex-col justify-between gap-6 w-full h-full">
      <FunnelHeader />
      <FunnelChart />
      <FunnelAiBar />
    </div>
  );
}
