"use client";

import React from "react";
import { DashboardShell } from "../components/layout/dashboard-shell";
import { OverviewHeader } from "../components/header/overview-header";
import { PaymentFunnelCard } from "../components/funnel/payment-funnel-card";
import { GrossVolumeCard } from "../components/volume/gross-volume-card";

export default function HomePage() {
  return (
    <DashboardShell>
      <OverviewHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        {/* Left Column: Payments Funnel & Bottom Cards */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <PaymentFunnelCard />

          <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-10 text-center text-neutral-400 text-xs">
            Next section: Retention & Transactions Cards
          </div>
        </div>

        {/* Right Column: Gross Volume & Insights */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <GrossVolumeCard />

          <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-14 text-center text-neutral-400 text-xs">
            Next section: Insights Card
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
