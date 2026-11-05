"tsx";
"use client";

import Link from "next/link";
import { levelsData, LevelData } from "@/data/curriculum";
import { LevelPageComp } from "@/app/components/LevelPage";

export default function LevelClient({ level }: { level: string }) {
  const levelInfo: LevelData | undefined = levelsData[level.toLowerCase()];

  if (!levelInfo) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex items-center justify-center text-slate-900 font-sans">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md">
          <h1 className="text-2xl font-bold mb-3">Level Not Found</h1>
          <p className="text-slate-600 mb-6">The requested CEFR level does not exist.</p>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-teal-800 text-white font-medium hover:bg-teal-900 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return <LevelPageComp levelInfo={levelInfo} />;
}
