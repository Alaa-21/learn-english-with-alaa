"tsx";
"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const isVisible = window.scrollY > 400;
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      const btn = btnRef.current;
      if (!btn) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        gsap.set(btn, { display: visible ? "flex" : "none" });
        return;
      }

      if (visible) {
        gsap.to(btn, {
          display: "flex",
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(btn, {
          opacity: 0,
          scale: 0.8,
          y: 10,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(btn, { display: "none" });
          },
        });
      }
    },
    { dependencies: [visible] }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-teal-600 text-white shadow-xl hover:bg-teal-500 transition-colors flex items-center justify-center cursor-pointer border border-teal-400/40"
      style={{ display: "none", opacity: 0 }}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
