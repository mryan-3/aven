"use client";

import React from "react";
import { ActivityMetricCard } from "./activity-metric-card";

export function ActivityCardsSection() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Transactions Card */}
      <ActivityMetricCard
        title="Transactions"
        total="106k"
        comparisonLabel="vs last period"
        comparisonValue="+34,002"
        dotColumns={[1, 2, 1, 2, 3, 4, 3, 1, 1, 2, 1, 1, 1]}
        peakIndices={[4, 5]}
        peakLabel="Peak: Wed"
        activeDotColor="bg-emerald-600"
        inactiveDotColor="bg-emerald-300/80"
      />

      {/* Customers Card */}
      <ActivityMetricCard
        title="Customers"
        total="1,284"
        comparisonLabel="vs last period"
        comparisonValue="+320"
        dotColumns={[1, 1, 1, 2, 2, 3, 4, 3, 1, 1, 1, 3, 1, 1]}
        peakIndices={[6, 7]}
        peakLabel="Highest: Thu"
        activeDotColor="bg-blue-600"
        inactiveDotColor="bg-blue-300/80"
      />
    </div>
  );
}
