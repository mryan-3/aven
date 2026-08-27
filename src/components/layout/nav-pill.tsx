"use client";

import React from "react";

interface NavPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function NavPill({ label, isActive = false, onClick }: NavPillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
        isActive
          ? "bg-nav-active text-white shadow-xs"
          : "text-content-secondary hover:text-content-primary"
      }`}
    >
      {label}
    </button>
  );
}
