"use client";

import React from "react";
import { DotsThreeIcon } from "../icons/nav-icons";

export function VolumeHeader() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-content-primary tracking-tight">
        Gross Volume
      </h2>
      <button
        aria-label="Volume options"
        className="w-9 h-9 rounded-full border border-neutral-200/80 bg-surface-card flex items-center justify-center text-content-muted hover:text-content-primary hover:bg-surface-subtle transition-colors shadow-2xs cursor-pointer"
      >
        <DotsThreeIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
