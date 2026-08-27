"use client";

import React from "react";
import { DotsThreeIcon } from "../icons/nav-icons";

export function VolumeHeader() {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-base font-semibold text-content-primary tracking-tight">
        Gross Volume
      </h2>
      <button
        aria-label="Volume options"
        className="w-7 h-7 rounded-full border border-border-card bg-surface-card flex items-center justify-center text-content-muted hover:text-content-primary hover:bg-surface-subtle transition-colors shadow-2xs cursor-pointer"
      >
        <DotsThreeIcon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
