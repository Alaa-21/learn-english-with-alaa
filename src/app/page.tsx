"tsx";
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { LevelCard } from "@/app/components/LevelCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const content = {
  nav: {
    brand: "Learn English with Alaa",
    home: "Home",
    message: "From Alaa",
    levels: "Levels",
  },
  hero: {
    badge: "Welcome to your English home",
    title: "Your English journey starts here.",
    subtitle:
      "Learn at your own pace, practice a little every day, and build the confidence to use English in real life. You don't have to be perfect to get started.",
    startLearning: "Let's Start Learning",
    exploreLevels: "Explore Learning Levels",
  },
  message: {
    title: "A Message from Alaa",
    subtitle: "Why I built this space for your learning journey",
    p1: "Hello! I am Alaa. I created Learn English with Alaa because I believe learning a new language should feel supportive, calm, and approachable. Too often, language learning feels intimidating or overly academic.",
    p2: "Here, there is no pressure and no rush. Every fluent speaker started exactly where you are standing right now. Take a deep breath, practice at your own pace, and remember that making mistakes is simply part of growing.",
    signoff: "Warmly, Alaa",
  },
  levels: {
    heading: "Your Learning Path",
    subheading:
      "English is a journey, not a race. Find the level that fits where you are today, from complete beginner to fluent speaker.",
    exploreBtn: "Explore Level",
    step: "Step",
    items: [
      {
        code: "A1",
        name: "Beginner",
        desc: "Start with the absolute basics: simple greetings, everyday expressions, and introducing yourself with confidence.",
      },
      {
        code: "A2",
        name: "Elementary",
        desc: "Build on your foundation. Learn to talk about routine tasks, family, shopping, and familiar surroundings.",
      },
      {
        code: "B1",
        name: "Intermediate",
        desc: "Gain independence. Handle most situations while traveling, express your opinions, and describe experiences.",
      },
      {
        code: "B2",
        name: "Upper Intermediate",
        desc: "Communicate with fluency and spontaneity. Discuss complex topics and interact comfortably with native speakers.",
      },
      {
        code: "C1",
        name: "Advanced",
        desc: "Express yourself smoothly and flexibly in social, academic, and professional settings with nuance.",
      },
      {
        code: "C2",
        name: "Proficiency",
        desc: "Master the subtlest shades of meaning, mastering near-native precision across demanding contexts.",
      },
    ],
  },
  features: {
    heading: "How We Practice Together",
    subheading: "Focused, practical tools designed to build real-world language skills without the clutter.",
    items: [
      {
        title: "Vocabulary",
        desc: "Learn practical everyday words and phrases that you can actually use in daily conversations.",
      },
      {
        title: "Grammar",
        desc: "Understand how sentences work through clear, calm explanations without confusing jargon.",
      },
      {
        title: "Reading",
        desc: "Enjoy graded stories and short articles that improve your comprehension naturally.",
      },
      {
        title: "Listening",
        desc: "Train your ear with clear dialogues and pronunciation guidance to tune into natural English.",
      },
      {
        title: "Writing",
        desc: "Practice putting your thoughts into simple, clear sentences through guided writing prompts.",
      },
      {
        title: "Quizzes",
        desc: "Check your understanding with friendly, low-stress practice checks that show your progress.",
      },
    ],
  },
  footer: {
    desc: "A calm, welcoming space to learn English step by step with Alaa.",
    rights: "© 2026 Learn English with Alaa. All rights reserved.",
    navHeading: "Navigation",
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = content;

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.8 })
        .from(".hero-title", { opacity: 0, y: 30, duration: 1 }, "-=0.5")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.9 }, "-=0.7")
        .from(".hero-btns > *", { opacity: 0, y: 20, duration: 0.8, stagger: 0.15 }, "-=0.6");

      gsap.utils.toArray<HTMLElement>(".animate-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-transparent text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#100e0b]/80 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-teal-500 transition-colors">
              A
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-white">
              {t.nav.brand}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#home" className="hover:text-teal-400 transition-colors">
              {t.nav.home}
            </Link>
            <Link href="#message" className="hover:text-teal-400 transition-colors">
              {t.nav.message}
            </Link>
            <Link href="#levels" className="hover:text-teal-400 transition-colors">
              {t.nav.levels}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-teal-600 text-white text-sm font-medium hover:bg-teal-500 transition-colors shadow-lg"
            >
              Dashboard
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-6 space-y-4 shadow-2xl animate-fadeIn">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-teal-400"
            >
              {t.nav.home}
            </Link>
            <Link
              href="#message"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-teal-400"
            >
              {t.nav.message}
            </Link>
            <Link
              href="#levels"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-teal-400"
            >
              {t.nav.levels}
            </Link>
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium text-sm"
              >
                Sign In
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 rounded-xl bg-teal-600 text-white font-medium text-sm"
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-semibold mb-6 shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
            {t.hero.badge}
          </div>
          <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto drop-shadow-sm">
            {t.hero.title}
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>
          <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#levels"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-teal-600 text-white font-semibold text-base hover:bg-teal-500 transition-all shadow-xl shadow-teal-900/40"
            >
              {t.hero.startLearning}
            </Link>
            <Link
              href="#message"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 font-semibold text-base hover:bg-slate-850 transition-all shadow-xl"
            >
              {t.message.title}
            </Link>
          </div>
        </div>
      </section>

      {/* Message from Alaa */}
      <section id="message" className="animate-section py-20 bg-slate-900/80 backdrop-blur-md border-y border-slate-800 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                A
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{t.message.title}</h2>
                <p className="text-sm text-teal-400 font-medium">{t.message.subtitle}</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>{t.message.p1}</p>
              <p>{t.message.p2}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="font-semibold text-white">{t.message.signoff}</span>
              <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center justify-center text-xs font-bold">
                ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path (Levels A1 - C2) */}
      <section id="levels" className="animate-section py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.levels.heading}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {t.levels.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.levels.items.map((level, idx) => (
              <LevelCard
                key={level.code}
                code={level.code}
                title={level.name}
                description={level.desc}
                exploreLabel={t.levels.exploreBtn}
                href={`/levels/${level.code.toLowerCase()}`}
                stepNumber={`${t.levels.step} ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="animate-section py-24 bg-slate-900/80 backdrop-blur-md border-t border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.features.heading}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {t.features.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-xl hover:border-teal-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg group-hover:scale-105 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
              A
            </div>
            <span className="font-bold text-lg text-white">
              {t.nav.brand}
            </span>
          </div>
          <p className="text-sm text-slate-400 text-center md:text-left">
            {t.footer.desc}
          </p>
          <div className="text-xs text-slate-500 text-center md:text-right">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
