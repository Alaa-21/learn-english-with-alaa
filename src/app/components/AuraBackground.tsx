"use client";

import React from "react";

export function AuraBackground() {
  return (
    <div className="aura-bg" aria-hidden="true">
      <div className="aura-layer-1"></div>
      <div className="aura-layer-2"></div>
      <div className="aura-layer-3"></div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          mixBlendMode: "overlay",
          opacity: 0.85,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix
              type="matrix"
              values="0.181 0.608 0.061 0 0.075
                    0.181 0.608 0.061 0 0.075
                    0.181 0.608 0.061 0 0.075
                    0     0     0     1 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
    </div>
  );
}
