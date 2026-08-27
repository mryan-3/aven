import React from "react";

export function SearchIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
    </svg>
  );
}

export function BellIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,0,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,0,1,128,0c0,36.05,8.28,66.73,16,80Z" />
    </svg>
  );
}

export function LinkIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M136.37,187.66a8,8,0,0,1,0,11.31l-37.66,37.69a56,56,0,0,1-79.24-79.23l37.66-37.7a56.07,56.07,0,0,1,79.24,0,8,8,0,0,1-11.31,11.31,40.07,40.07,0,0,0-56.62,0l-37.66,37.7a40,40,0,1,0,56.62,56.61l37.66-37.69A8,8,0,0,1,136.37,187.66Zm96.26-164.29a56,56,0,0,0-79.24,0l-37.66,37.7a56.07,56.07,0,0,0,0,79.23,8,8,0,0,0,11.31-11.31,40.07,40.07,0,0,1,0-56.62l37.66-37.7a40,40,0,1,1,56.62,56.61l-37.66,37.69a8,8,0,1,0,11.31,11.32l37.66-37.7A56.08,56.08,0,0,0,232.63,23.37Z" />
    </svg>
  );
}

export function DotsThreeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm136,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116Z" />
    </svg>
  );
}

export function CaretDownIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A24,24,0,0,0,24,56V208a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V56A24,24,0,0,0,208,32ZM40,56a8,8,0,0,1,8-8H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24a8,8,0,0,1,8,8V88H40ZM216,208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V104H216Z" />
    </svg>
  );
}
