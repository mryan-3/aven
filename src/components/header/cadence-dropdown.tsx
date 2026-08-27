"use client";

import React, { useState, useRef, useEffect } from "react";
import { CaretDownIcon } from "../icons/nav-icons";

const CADENCE_OPTIONS = ["Hourly", "Daily", "Weekly", "Monthly", "Quarterly", "Yearly"];

export function CadenceDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCadence, setSelectedCadence] = useState("Daily");
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
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-subtle hover:bg-surface-subtle-hover text-content-primary text-xs font-normal transition-colors cursor-pointer"
      >
        <span>{selectedCadence}</span>
        <CaretDownIcon
          className={`w-3 h-3 text-content-muted transition-transform duration-150 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1.5 w-36 bg-white rounded-xl shadow-lg border border-border-card/80 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          {CADENCE_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelectedCadence(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                selectedCadence === opt
                  ? "bg-neutral-100 font-semibold text-content-primary"
                  : "text-content-secondary hover:bg-neutral-50 hover:text-content-primary"
              }`}
            >
              <span>{opt}</span>
              {selectedCadence === opt && (
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
