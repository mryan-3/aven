"use client";

import React from "react";
import { SearchIcon, BellIcon } from "../icons/nav-icons";

export function UserProfile() {
  return (
    <div className="flex items-center gap-2.5">
      <button
        aria-label="Search"
        className="w-9 h-9 rounded-full bg-surface-card border border-border-card/80 flex items-center justify-center text-content-secondary hover:text-content-primary hover:bg-surface-subtle transition-colors shadow-2xs cursor-pointer"
      >
        <SearchIcon className="w-4 h-4" />
      </button>

      <button
        aria-label="Notifications"
        className="w-9 h-9 rounded-full bg-surface-card border border-border-card/80 flex items-center justify-center text-content-secondary hover:text-content-primary hover:bg-surface-subtle transition-colors shadow-2xs relative cursor-pointer"
      >
        <BellIcon className="w-4 h-4" />
        <span className="w-2 h-2 bg-brand-primary rounded-full absolute top-2 right-2 ring-2 ring-white" />
      </button>

      <div className="w-9 h-9 rounded-full p-0.5 bg-linear-to-tr from-amber-400 via-rose-400 to-indigo-500 cursor-pointer shadow-2xs">
        <div className="w-full h-full rounded-full overflow-hidden bg-surface-card">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
