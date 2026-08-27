"use client";

import React from "react";
import { DashboardShell } from "../components/layout/dashboard-shell";
import { OverviewHeader } from "../components/header/overview-header";

export default function HomePage() {
  return (
    <DashboardShell>
      <OverviewHeader />
      <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-12 text-center text-neutral-400 text-sm">
        Next section: Payment Funnel Card
      </div>
    </DashboardShell>
  );
}
