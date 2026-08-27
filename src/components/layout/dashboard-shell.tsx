import React from "react";
import { Navbar } from "./navbar";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-surface-card w-full flex flex-col">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
