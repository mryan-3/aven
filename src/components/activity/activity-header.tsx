"use client";

import React from "react";
import { DotsThreeIcon } from "../icons/nav-icons";

interface ActivityHeaderProps {
  title: string;
}

export function ActivityHeader({ title }: ActivityHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-content-primary tracking-tight">
        {title}
      </h2>
      <button
        aria-label={`${title} options`}
        className="w-8 h-8 rounded-full border border-border-card bg-surface-card flex items-center justify-center text-content-muted hover:text-content-primary hover:bg-surface-subtle transition-colors shadow-2xs cursor-pointer"
      >
        <DotsThreeIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
