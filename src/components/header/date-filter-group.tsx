"use client";

import React from "react";
import { CalendarIcon, CaretDownIcon } from "../icons/nav-icons";

interface DateButtonProps {
  label: string;
}

export function DateCapsuleItem({ label }: DateButtonProps) {
  return (
    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-card text-content-primary text-xs font-medium shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:bg-neutral-50 transition-colors cursor-pointer border border-border-card/50">
      <CalendarIcon className="w-3.5 h-3.5 text-content-secondary" />
      <span>{label}</span>
      <CaretDownIcon className="w-3 h-3 text-content-muted" />
    </button>
  );
}

export function DateFilterGroup() {
  return (
    <div className="flex items-center bg-surface-subtle rounded-xl p-1 gap-1">
      <DateCapsuleItem label="Jan 01 - July 31" />
      <span className="text-[11px] text-content-muted font-normal px-2">
        compared to
      </span>
      <DateCapsuleItem label="Aug 01 - Dec 31" />
    </div>
  );
}
