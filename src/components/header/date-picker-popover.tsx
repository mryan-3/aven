"use client";

import React, { useState, useRef, useEffect } from "react";
import { CalendarIcon, CaretDownIcon } from "../icons/nav-icons";

interface DatePickerPopoverProps {
  initialLabel: string;
}

const PRESETS = [
  "Jan 01 - July 31",
  "Aug 01 - Dec 31",
  "Last 30 days",
  "Last 90 days",
  "Year to date",
  "Last year",
];

export function DatePickerPopover({ initialLabel }: DatePickerPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(initialLabel);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-card text-content-primary text-xs font-medium shadow-xs hover:bg-neutral-50 transition-colors cursor-pointer border border-border-card/50"
      >
        <CalendarIcon className="w-3.5 h-3.5 text-content-secondary" />
        <span>{selectedLabel}</span>
        <CaretDownIcon
          className={`w-3 h-3 text-content-muted transition-transform duration-150 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1.5 w-48 bg-white rounded-xl shadow-lg border border-border-card/80 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="text-3xs font-semibold uppercase tracking-wider text-neutral-400 px-2.5 py-1">
            Select Range
          </div>
          {PRESETS.map((preset) => (
            <button
              key={preset}
              onClick={() => {
                setSelectedLabel(preset);
                setIsOpen(false);
              }}
              className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                selectedLabel === preset
                  ? "bg-neutral-100 font-semibold text-content-primary"
                  : "text-content-secondary hover:bg-neutral-50 hover:text-content-primary"
              }`}
            >
              <span>{preset}</span>
              {selectedLabel === preset && (
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
