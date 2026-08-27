import React from "react";

interface FunnelColumnHeaderProps {
  name: string;
  count: string;
  isActive?: boolean;
}

export function FunnelColumnHeader({
  name,
  count,
  isActive = false,
}: FunnelColumnHeaderProps) {
  return (
    <div className="flex flex-col gap-1.5 px-3 pt-3 pb-8">
      <span
        className={`text-xs truncate transition-colors duration-150 ${
          isActive
            ? "font-medium text-neutral-800"
            : "font-normal text-neutral-400"
        }`}
      >
        {name}
      </span>
      <span
        className={`text-3xl tracking-tight transition-colors duration-150 ${
          isActive
            ? "font-medium text-neutral-900"
            : "font-light text-neutral-300"
        }`}
      >
        {count}
      </span>
    </div>
  );
}
