"use client";

import React from "react";
import { DashboardShell } from "../components/layout/dashboard-shell";
import { OverviewHeader } from "../components/header/overview-header";
import { PaymentFunnelCard } from "../components/funnel/payment-funnel-card";
import { GrossVolumeCard } from "../components/volume/gross-volume-card";
import { RetentionCard } from "../components/retention/retention-card";
import { ActivityCardsSection } from "../components/activity/activity-cards-section";
import { InsightsCard } from "../components/insights/insights-card";

export default function HomePage() {
  return (
    <DashboardShell>
      <OverviewHeader />

      <div className="flex flex-col gap-6 w-full">
        {/* Top Row: Payments Funnel (8 cols) & Gross Volume (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 flex">
            <PaymentFunnelCard />
          </div>
          <div className="lg:col-span-4 flex">
            <GrossVolumeCard />
          </div>
        </div>

        {/* Bottom Row: Retention & Activity (8 cols) & Insights (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-5 flex">
              <RetentionCard />
            </div>
            <div className="md:col-span-7 flex">
              <ActivityCardsSection />
            </div>
          </div>

          <div className="lg:col-span-4 flex">
            <InsightsCard />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
