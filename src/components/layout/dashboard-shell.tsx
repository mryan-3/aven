import React from "react";
import { Navbar } from "./navbar";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-canvas p-3 sm:p-5 md:p-7 lg:p-9 flex justify-center items-start">
      <main className="w-full max-w-335 bg-surface-card rounded-3xl md:rounded-[36px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-border-card p-5 sm:p-7 md:p-9">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
