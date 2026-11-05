"tsx";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lesson, LevelData } from "@/data/curriculum";
import { Grammar } from "./Grammar";
import { Syntax } from "./Syntax";

interface LessonPageComponentProps {
  levelInfo: LevelData;
  lesson: Lesson;
}

type LessonTab = "grammar" | "syntax";

export function LessonPageComp({ levelInfo, lesson }: LessonPageComponentProps) {
  const [activeTab, setActiveTab] = useState<LessonTab>("grammar");
  const brandName = "Learn English with Alaa";

  return (
    <div className="min-h-screen bg-transparent text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#100e0b]/80 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-teal-500 transition-colors">
              A
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-white">
              {brandName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <Link href={`/levels/${levelInfo.code.toLowerCase()}`} className="hover:text-teal-400 transition-colors">
              {levelInfo.code} — {levelInfo.nameEn}
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Lesson Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={`/levels/${levelInfo.code.toLowerCase()}`} className="hover:text-teal-400 transition-colors">
              {levelInfo.code} ({levelInfo.nameEn})
            </Link>
            <span>/</span>
            <span className="text-teal-400 font-semibold">
              {lesson.titleEn}
            </span>
          </div>

          {/* Lesson Hero */}
          <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3.5 py-1.5 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/40">
                {lesson.duration}
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold">
                Level {levelInfo.code}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              {lesson.titleEn}
            </h1>
            <p className="text-teal-400 font-semibold text-lg mb-4" dir="rtl">
              {lesson.titleAr}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-3">
              {lesson.descriptionEn}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed" dir="rtl">
              {lesson.descriptionAr}
            </p>
          </div>

          {/* Lesson Navigation Tabs (Grammar & Syntax) */}
          <div className="flex overflow-x-auto gap-2 p-1.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl mb-8">
            <button
              onClick={() => setActiveTab("grammar")}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "grammar"
                  ? "bg-teal-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              Grammar / القواعد
            </button>
            <button
              onClick={() => setActiveTab("syntax")}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "syntax"
                  ? "bg-teal-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              Syntax / التركيب
            </button>
          </div>

          {/* Tab Content: Grammar */}
          {activeTab === "grammar" && <Grammar grammar={lesson.grammar} />}

          {/* Tab Content: Syntax */}
          {activeTab === "syntax" && <Syntax syntax={lesson.syntax} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
          <p>© 2026 Learn English with Alaa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
