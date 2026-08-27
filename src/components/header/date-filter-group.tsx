"use client";

import React from "react";
import { DatePickerPopover } from "./date-picker-popover";

export function DateFilterGroup() {
  return (
    <div className="flex items-center bg-surface-subtle rounded-xl p-1 gap-1">
      <DatePickerPopover initialLabel="Jan 01 - July 31" />
      <span className="text-2xs text-content-muted font-normal px-2 select-none">
        compared to
      </span>
      <DatePickerPopover initialLabel="Aug 01 - Dec 31" />
    </div>
  );
}
