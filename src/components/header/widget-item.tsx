"use client";

import React from "react";
import { PlusIcon } from "../icons/feature-icons";

export interface WidgetOption {
  id: string;
  name: string;
  category: string;
  description: string;
}

interface WidgetItemProps {
  widget: WidgetOption;
  isAdded: boolean;
  onToggle: (id: string) => void;
}

export function WidgetItem({ widget, isAdded, onToggle }: WidgetItemProps) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-50 transition-colors group">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-content-primary">
            {widget.name}
          </span>
          <span className="text-3xs uppercase tracking-wider font-semibold text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded-md">
            {widget.category}
          </span>
        </div>
        <p className="text-2xs text-content-secondary line-clamp-1">
          {widget.description}
        </p>
      </div>

      <button
        onClick={() => onToggle(widget.id)}
        className={`px-2.5 py-1 rounded-lg text-2xs font-medium transition-all cursor-pointer flex items-center gap-1 ${
          isAdded
            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
            : "bg-surface-card border border-border-card text-content-primary hover:bg-neutral-100"
        }`}
      >
        <span>{isAdded ? "Added" : "Add"}</span>
        {!isAdded && <PlusIcon className="w-2.5 h-2.5 text-neutral-500" />}
      </button>
    </div>
  );
}
