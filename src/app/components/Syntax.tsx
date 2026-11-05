"tsx";
"use client";

import React, { useRef } from "react";
import { SyntaxRule } from "@/data/curriculum";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface SyntaxProps {
  syntax: SyntaxRule;
}

export function Syntax({ syntax }: SyntaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.from(".syntax-element", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl">
      <h2 className="syntax-element text-2xl font-bold text-white mb-2">
        Sentence Structure & Syntax / التركيب النحوي
      </h2>
      <p className="syntax-element text-teal-400 font-semibold mb-6 text-lg">
        {syntax.topicEn}
      </p>

      <div className="syntax-element p-6 rounded-2xl bg-slate-950/80 border border-slate-800 mb-8">
        <span className="block text-xs font-semibold text-teal-400 uppercase tracking-wide mb-2">
          Formula / Structure:
        </span>
        <p className="font-mono text-teal-200 font-bold text-base">
          {syntax.structureEn}
        </p>
      </div>

      <h3 className="syntax-element text-lg font-bold text-white mb-4">
        Syntax Patterns / الأنماط التركيبية:
      </h3>
      <div className="space-y-3">
        {syntax.examples.map((ex, idx) => (
          <div key={idx} className="syntax-element p-4 rounded-xl bg-slate-950/50 border border-slate-800">
            <p className="font-semibold text-white mb-1">{ex.en}</p>
            <p className="text-slate-400 text-sm">{ex.ar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
