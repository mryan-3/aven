"use client";

import React from "react";
import { LinkIcon, CaretDownIcon } from "../icons/nav-icons";
import { PlusIcon } from "../icons/feature-icons";
import { DateFilterGroup } from "./date-filter-group";

export function OverviewHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-7">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-content-primary">
          Overview
        </h1>
        <button
          aria-label="Copy overview link"
          className="w-5 h-5 -mt-3 rounded-full bg-surface-card shadow-xs border border-border-card flex items-center justify-center text-content-muted hover:text-content-primary hover:shadow transition-all cursor-pointer"
        >
          <LinkIcon className="w-3 h-3" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <DateFilterGroup />

        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-subtle hover:bg-surface-subtle-hover text-content-primary text-xs font-medium transition-colors cursor-pointer">
          <span>Daily</span>
          <CaretDownIcon className="w-3 h-3 text-content-muted" />
        </button>

        <button className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-surface-subtle hover:bg-surface-subtle-hover text-content-primary text-xs font-medium transition-colors cursor-pointer">
          <span>Add widget</span>
          <PlusIcon className="w-3 h-3 text-content-secondary" />
        </button>
      </div>
    </div>
  );
}
