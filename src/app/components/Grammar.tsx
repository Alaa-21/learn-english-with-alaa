"tsx";
"use client";

import React, { useRef } from "react";
import { GrammarRule } from "@/data/curriculum";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface GrammarProps {
  grammar: GrammarRule;
}

export function Grammar({ grammar }: GrammarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.from(".grammar-element", {
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
      <h2 className="grammar-element text-2xl font-bold text-white mb-2">
        Grammar Rules / قواعد النحو
      </h2>
      <div className="grammar-element mb-6 space-y-1">
        <p className="text-teal-400 font-semibold text-lg">
          {grammar.ruleEn}
        </p>
        <p className="text-slate-300 font-medium text-base">
          {grammar.ruleAr}
        </p>
      </div>

      <div className="grammar-element bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 mb-8 space-y-4">
        <div>
          <span className="block text-xs font-semibold text-teal-400 uppercase tracking-wide mb-1">
            Explanation (English):
          </span>
          <p className="text-slate-200 leading-relaxed">
            {grammar.explanationEn}
          </p>
        </div>
        <div className="pt-3 border-t border-slate-800">
          <span className="block text-xs font-semibold text-teal-400 uppercase tracking-wide mb-1">
            الشرح بالعربية:
          </span>
          <p className="text-slate-200 leading-relaxed" dir="rtl">
            {grammar.explanationAr}
          </p>
        </div>
      </div>

      <h3 className="grammar-element text-lg font-bold text-white mb-4">
        Example Sentences / أمثلة توضيحية:
      </h3>
      <div className="space-y-3">
        {grammar.examples.map((ex, idx) => (
          <div key={idx} className="grammar-element p-4 rounded-xl bg-slate-950/50 border border-slate-800">
            <p className="font-semibold text-white mb-1">{ex.en}</p>
            <p className="text-slate-400 text-sm">{ex.ar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
