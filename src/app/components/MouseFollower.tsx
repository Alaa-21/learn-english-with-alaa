"tsx";
"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power2.out",
        opacity: 0.8,
        scale: 1,
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);

    // Hover scale effect for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, .vocab-item, [role='button']")) {
        gsap.to(cursor, { scale: 1.8, backgroundColor: "rgba(20, 184, 166, 0.3)", duration: 0.2 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, .vocab-item, [role='button']")) {
        gsap.to(cursor, { scale: 1, backgroundColor: "rgba(20, 184, 166, 0.5)", duration: 0.2 });
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-teal-500/50 border border-teal-400/80 pointer-events-none z-[9999] hidden md:block"
      style={{ transform: "translate(-50%, -50%)" }}
      aria-hidden="true"
    />
  );
}
