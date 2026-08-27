"use client";

import React from "react";
import { FunnelHeader } from "./funnel-header";
import { FunnelChart } from "./funnel-chart";
import { FunnelAiBar } from "./funnel-ai-bar";

export function PaymentFunnelCard() {
  return (
    <div className="bg-surface-card rounded-2xl border border-border-card/80 p-6 md:p-7 shadow-xs flex flex-col justify-between gap-6">
      <FunnelHeader />
      <FunnelChart />
      <FunnelAiBar />
    </div>
  );
}
