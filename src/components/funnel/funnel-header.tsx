"use client";

import React from "react";
import { DotsThreeIcon } from "../icons/nav-icons";

export function FunnelHeader() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-content-primary tracking-tight">
        Payments
      </h2>
      <button
        aria-label="Funnel options"
        className="w-8 h-8 rounded-full border border-border-card bg-surface-card flex items-center justify-center text-content-muted hover:text-content-primary hover:bg-surface-subtle transition-colors shadow-2xs cursor-pointer"
      >
        <DotsThreeIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
