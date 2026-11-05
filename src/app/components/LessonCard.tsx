"tsx";
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  buttonLabel: string;
  href: string;
}

export function LessonCard({ title, description, duration, buttonLabel, href }: LessonCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const onMouseEnter = () => {
        gsap.to(card, { y: -4, borderColor: "rgba(20, 184, 166, 0.5)", boxShadow: "0 15px 30px -10px rgba(13, 148, 136, 0.2)", duration: 0.3, ease: "power2.out" });
      };

      const onMouseLeave = () => {
        gsap.to(card, { y: 0, borderColor: "rgba(30, 41, 59, 0.8)", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)", duration: 0.3, ease: "power2.out" });
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
    <div ref={cardRef} className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group">
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30">
            {duration}
          </span>
          <span className="text-xs text-slate-400 font-mono">Lesson</span>
        </div>
        <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-300 max-w-xl">{description}</p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal-600 text-white font-medium text-sm hover:bg-teal-500 transition-colors shadow-lg shadow-teal-900/30 shrink-0"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
