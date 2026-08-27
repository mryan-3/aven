import React from "react";

export function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Primary 4-point star */}
      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
      {/* Secondary smaller 4-point sparkle */}
      <path d="M19 16l1.2 3.3L23.5 20.5l-3.3 1.2L19 25l-1.2-3.3L14.5 20.5l3.3-1.2L19 16z" opacity="0.8" transform="scale(0.5) translate(14, 8)" />
    </svg>
  );
}

export function LightbulbIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.36-12.78A87.92,87.92,0,1,1,216,104Zm-16,0A72,72,0,1,0,82.44,154.3a32,32,0,0,1,13.56,25.7H160a32.22,32.22,0,0,1,13.59-25.73A71.86,71.86,0,0,0,200,104Z" />
    </svg>
  );
}

export function CaretUpIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z" />
    </svg>
  );
}

export function PlusIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
    </svg>
  );
}
