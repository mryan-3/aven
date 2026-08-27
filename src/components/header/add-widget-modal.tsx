"use client";

import React, { useState } from "react";
import { WidgetItem, WidgetOption } from "./widget-item";

const WIDGETS: WidgetOption[] = [
  {
    id: "forecast",
    name: "Revenue Forecast",
    category: "Revenue",
    description: "Predict MRR, ARR trajectory and quarterly pacing",
  },
  {
    id: "methods",
    name: "Payment Method Mix",
    category: "Payments",
    description: "Card, Apple Pay, Google Pay, and Wire distribution",
  },
  {
    id: "disputes",
    name: "Dispute & Refund Rate",
    category: "Risk",
    description: "Chargeback monitoring and prevention metrics",
  },
  {
    id: "geo",
    name: "Global Geo Volume",
    category: "Markets",
    description: "Cross-border transaction distribution by country",
  },
];

interface AddWidgetModalProps {
  onClose: () => void;
}

export function AddWidgetModal({ onClose }: AddWidgetModalProps) {
  const [addedIds, setAddedIds] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const filteredWidgets = WIDGETS.filter(
    (w) =>
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.category.toLowerCase().includes(search.toLowerCase())
  );

  const toggleWidget = (id: string) => {
    setAddedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-border-card p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
        <div>
          <h3 className="text-sm font-semibold text-content-primary">
            Add Dashboard Widget
          </h3>
          <p className="text-2xs text-content-secondary">
            Customize your overview analytics
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="text-neutral-400 hover:text-neutral-700 text-xs p-1 cursor-pointer font-bold"
        >
          ✕
        </button>
      </div>

      <div className="py-2.5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search widgets or categories..."
          className="w-full bg-surface-subtle rounded-xl px-3 py-1.5 text-xs text-content-primary placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>

      <div className="flex flex-col gap-1 max-h-60 overflow-y-auto pt-1">
        {filteredWidgets.map((widget) => (
          <WidgetItem
            key={widget.id}
            widget={widget}
            isAdded={addedIds.includes(widget.id)}
            onToggle={toggleWidget}
          />
        ))}
      </div>
    </div>
  );
}
