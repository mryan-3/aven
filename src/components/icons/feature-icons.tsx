import React from "react";

export function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M213.66,122.34l-40-40a8,8,0,0,0-11.32,11.32L188.69,120H136a8,8,0,0,0,0,16h52.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,213.66,122.34ZM104,40A64.07,64.07,0,0,0,40,104a8,8,0,0,0,16,0,48.05,48.05,0,0,1,48-48,8,8,0,0,0,0-16Zm40,176a8,8,0,0,0-8-8,48.05,48.05,0,0,1-48-48,8,8,0,0,0-16,0,64.07,64.07,0,0,0,64,64A8,8,0,0,0,144,216Z" />
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
