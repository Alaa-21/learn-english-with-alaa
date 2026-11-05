"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LevelData } from "@/data/curriculum";
import { LessonCard } from "./LessonCard";
import { Vocabulary } from "./Vocabulary";

interface LevelPageComponentProps {
  levelInfo: LevelData;
}

export function LevelPageComp({ levelInfo }: LevelPageComponentProps) {
  const brandName = "Learn English with Alaa";
  const [activeTab, setActiveTab] = useState<"curriculum" | "vocabulary">("curriculum");

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
            <Link href="/#levels" className="hover:text-teal-400 transition-colors">
              Levels
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-teal-400 font-semibold">
              {levelInfo.code} — {levelInfo.nameEn}
            </span>
          </div>

          {/* Level Hero Header */}
          <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold mb-4 shadow-2xs">
                CEFR Level {levelInfo.code}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                {levelInfo.nameEn} ({levelInfo.code})
              </h1>
              <p className="text-lg font-medium text-teal-300 mb-6">
                {levelInfo.subtitleEn}
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
                {levelInfo.descriptionEn}
              </p>

              {/* Learning Objectives */}
              <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 mb-8">
                <h3 className="font-bold text-white mb-3 text-base">
                  Level Learning Objectives / أهداف المستوى:
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-300">
                  {levelInfo.objectivesEn.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-teal-400 font-bold">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tabs for Curriculum vs Vocabulary */}
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
                    activeTab === "curriculum"
                      ? "bg-teal-600 text-white shadow-lg"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-750"
                  }`}
                >
                  Curriculum Units ({levelInfo.units.length})
                </button>
                <button
                  onClick={() => setActiveTab("vocabulary")}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
                    activeTab === "vocabulary"
                      ? "bg-teal-600 text-white shadow-lg"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-750"
                  }`}
                >
                  Level Vocabulary ({levelInfo.vocabulary.length} Words)
                </button>
              </div>
            </div>
          </div>

          {activeTab === "curriculum" ? (
            /* Curriculum Units & Lessons */
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Curriculum & Lessons
                </h2>
                <span className="text-sm text-slate-400 font-medium">
                  {levelInfo.units.length} Units
                </span>
              </div>

              {levelInfo.units.map((unit) => (
                <div key={unit.unitId} className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="w-12 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                      {unit.unitId}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {unit.titleEn}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {unit.lessons.length} Lessons included — {unit.titleAr}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {unit.lessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        title={lesson.titleEn}
                        description={lesson.descriptionEn}
                        duration={lesson.duration}
                        buttonLabel="Start Lesson"
                        href={`/levels/${levelInfo.code.toLowerCase()}/lessons/${lesson.id}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Level Vocabulary Bank */
            <div className="space-y-6">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      CEFR Level {levelInfo.code} Vocabulary Bank
                    </h2>
                    <p className="text-slate-300 text-sm mt-1">
                      Complete list of {levelInfo.vocabulary.length} vocabulary words and expressions for level {levelInfo.code}.
                    </p>
                  </div>
                </div>
                <Vocabulary vocabulary={levelInfo.vocabulary} />
              </div>
            </div>
          )}
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
