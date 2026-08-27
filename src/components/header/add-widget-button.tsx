"use client";

import React, { useState, useRef, useEffect } from "react";
import { PlusIcon } from "../icons/feature-icons";
import { AddWidgetModal } from "./add-widget-modal";

export function AddWidgetButton() {
  const [isOpen, setIsOpen] = useState(false);
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
        className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-surface-subtle hover:bg-surface-subtle-hover text-content-primary text-xs font-normal transition-colors cursor-pointer"
      >
        <span>Add widget</span>
        <PlusIcon
          className={`w-3 h-3 text-content-secondary transition-transform duration-150 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>

      {isOpen && <AddWidgetModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
