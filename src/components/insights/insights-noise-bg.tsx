import React from "react";
import Image from "next/image";

export function InsightsNoiseBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
      <Image
        src="/insights-bg.jpg"
        alt="Insights Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
    </div>
  );
}
