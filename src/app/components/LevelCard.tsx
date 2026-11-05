"tsx";
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface LevelCardProps {
  code: string;
  title: string;
  description: string;
  exploreLabel: string;
  href: string;
  stepNumber?: string;
}

export function LevelCard({ code, title, description, exploreLabel, href, stepNumber }: LevelCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const onMouseEnter = () => {
        gsap.to(card, { y: -6, borderColor: "rgba(20, 184, 166, 0.6)", boxShadow: "0 20px 40px -10px rgba(13, 148, 136, 0.25)", duration: 0.3, ease: "power2.out" });
      };

      const onMouseLeave = () => {
        gsap.to(card, { y: 0, borderColor: "rgba(30, 41, 59, 0.8)", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", duration: 0.3, ease: "power2.out" });
      };

      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mouseleave", onMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", onMouseEnter);
        card.removeEventListener("mouseleave", onMouseLeave);
      };
    },
    { scope: cardRef }
  );

  return (
    <div ref={cardRef} className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 border border-slate-800 transition-all flex flex-col justify-between group shadow-xl">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3.5 py-1.5 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-300 font-mono font-bold text-sm shadow-2xs">
            {code}
          </span>
          {stepNumber && (
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {stepNumber}
            </span>
          )}
        </div>
        <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-teal-300 transition-colors">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">{description}</p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 group-hover:text-teal-300 transition-colors"
      >
        <span>{exploreLabel}</span>
        <span className="group-hover:translate-x-1.5 transition-transform">→</span>
      </Link>
    </div>
  );
}
