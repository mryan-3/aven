"use client";

import React, { useState } from "react";
import { FUNNEL_STAGES } from "../../data/dashboard-data";
import { FunnelColumnHeader } from "./funnel-column-header";
import { FunnelSvgMesh } from "./funnel-svg-mesh";

const Y_AXIS = ["70k", "60k", "50k", "40k", "30k"];

export function FunnelChart() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="relative flex flex-col w-full">
      <div className="flex w-full items-stretch">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between text-2xs text-neutral-400 font-normal pr-4 pt-20 pb-4 select-none">
          {Y_AXIS.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        {/* 5 Funnel Columns Grid */}
        <div className="flex-1 relative">
          <div className="grid grid-cols-5 border-l border-neutral-100 relative z-10">
            {FUNNEL_STAGES.map((stage, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={stage.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`relative border-r border-neutral-100/90 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-linear-to-b from-blue-50/90 via-blue-50/35 to-transparent"
                      : "hover:bg-neutral-50/40"
                  }`}
                >
                  <FunnelColumnHeader
                    name={stage.name}
                    count={stage.count}
                    isActive={isActive}
                  />
                </div>
              );
            })}
          </div>

          {/* 3D Sloped Stepped SVG Mesh */}
          <div className="w-full -mt-6 relative z-0">
            <FunnelSvgMesh
              activeIndex={activeIndex}
              onHover={(idx) => setActiveIndex(idx)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
