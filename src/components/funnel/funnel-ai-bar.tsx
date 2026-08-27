"use client";

import React, { useState } from "react";
import { SparkleIcon, CaretUpIcon } from "../icons/feature-icons";

export function FunnelAiBar() {
  const [text, setText] = useState(
    "I want to know what caused the drop-off from authorized to /successful payments"
  );
  const [isOpen, setIsOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const renderTokens = () => {
    const parts = text.split(/(\/[a-zA-Z0-9_\-\s]+)/g);
    return parts.map((part, index) => {
      if (part.startsWith("/")) {
        return (
          <span
            key={index}
            className="inline-block px-1.5 py-0.5 rounded-md bg-amber-100/90 text-amber-800 border border-amber-300/80 font-medium text-2xs mx-0.5"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="rounded-2xl border border-blue-100/90 bg-linear-to-b from-blue-50/80 via-blue-50/40 to-blue-50/20 p-3 mt-2 shadow-2xs">
      <div className="flex items-center justify-between px-1 mb-2">
        <div className="flex items-center gap-2 text-slate-700 font-medium text-xs">
          <SparkleIcon className="w-3.5 h-3.5 text-blue-600" />
          <span>What would you like to explore next?</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle exploration"
          className="text-slate-400 hover:text-slate-600 cursor-pointer transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
        >
          <CaretUpIcon className="w-3.5 h-3.5" />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsEditing(true)}
          className="relative w-full bg-white rounded-xl border border-blue-200/70 px-3 py-2 shadow-2xs min-h-9.5 flex items-center cursor-text"
        >
          {isEditing ? (
            <input
              type="text"
              value={text}
              autoFocus
              onBlur={() => setIsEditing(false)}
              onChange={(e) => setText(e.target.value)}
              className="w-full text-xs text-slate-800 focus:outline-none"
              placeholder="Ask a question or type /stage..."
            />
          ) : (
            <div className="text-xs text-slate-700 leading-normal">
              {renderTokens()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
