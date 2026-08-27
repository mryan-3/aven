"use client";

import React from "react";
import { FunnelSvgDefs } from "./funnel-svg-defs";

interface FunnelSvgMeshProps {
  activeIndex: number;
  onHover: (index: number) => void;
}

const STAGES = [
  { x: 10, y: 15, w: 125, h: 185, pillX: 63, pillY: 7 },
  { x: 160, y: 55, w: 125, h: 145, pillX: 213, pillY: 47 },
  { x: 310, y: 95, w: 125, h: 105, pillX: 363, pillY: 87 },
  { x: 460, y: 135, w: 125, h: 65, pillX: 513, pillY: 127 },
  { x: 610, y: 155, w: 125, h: 45, pillX: 663, pillY: 147 },
];

export function FunnelSvgMesh({ activeIndex, onHover }: FunnelSvgMeshProps) {
  return (
    <svg viewBox="0 0 745 200" className="w-full h-auto overflow-visible select-none" preserveAspectRatio="none">
      <FunnelSvgDefs />

      {/* 3D Connecting Slopes */}
      <polygon points="135,15 160,55 160,200 135,200" fill="url(#rampGrad)" />
      <polygon points="285,55 310,95 310,200 285,200" fill="url(#rampGrad)" />
      <polygon points="435,95 460,135 460,200 435,200" fill="url(#rampGrad)" />
      <polygon points="585,135 610,155 610,200 585,200" fill="url(#rampGrad)" />

      {/* 5 Funnel Stages */}
      {STAGES.map((s, idx) => {
        const isActive = activeIndex === idx;
        return (
          <g key={idx} onMouseEnter={() => onHover(idx)} className="cursor-pointer transition-all duration-200">
            {isActive ? (
              <rect x={s.x} y={s.y} width={s.w} height={s.h} fill="url(#activeBlueGrad)" rx="1" />
            ) : (
              <rect x={s.x} y={s.y} width={s.w} height={s.h} fill="url(#funnelBlueStripes)" mask="url(#fadeMask)" />
            )}
            <rect x={s.pillX} y={s.pillY} width="18" height="3" rx="1.5" fill={isActive ? "#3b82f6" : "#93c5fd"} opacity={isActive ? 1 : 0.75} />
          </g>
        );
      })}
    </svg>
  );
}
