"use client";

import React from "react";
import { LinkIcon } from "../icons/nav-icons";
import { DateFilterGroup } from "./date-filter-group";
import { CadenceDropdown } from "./cadence-dropdown";
import { AddWidgetButton } from "./add-widget-button";

export function OverviewHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-7">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-content-primary">
          Overview
        </h1>
        <button
          aria-label="Copy overview link"
          className="w-5 h-5 -mt-2 rounded-full bg-surface-card shadow-xs border border-border-card flex items-center justify-center text-content-muted hover:text-content-primary hover:shadow transition-all cursor-pointer"
        >
          <LinkIcon className="w-3 h-3" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <DateFilterGroup />
        <CadenceDropdown />
        <AddWidgetButton />
      </div>
    </div>
  );
}
