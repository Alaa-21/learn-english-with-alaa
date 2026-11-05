"tsx";
"use client";

import Link from "next/link";
import { levelsData, Lesson, LevelData } from "@/data/curriculum";
import { LessonPageComp } from "@/app/components/LessonPage";

export default function LessonClient({ level, lessonId }: { level: string; lessonId: string }) {
  const levelInfo: LevelData | undefined = levelsData[level.toLowerCase()];
  let foundLesson: Lesson | undefined;

  if (levelInfo) {
    for (const unit of levelInfo.units) {
      const l = unit.lessons.find((item) => item.id === lessonId);
      if (l) {
        foundLesson = l;
        break;
      }
    }
  }

  if (!levelInfo || !foundLesson) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex items-center justify-center text-slate-900 font-sans">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md">
          <h1 className="text-2xl font-bold mb-3">Lesson Not Found</h1>
          <p className="text-slate-600 mb-6">The requested lesson does not exist in our curriculum.</p>
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

  return <LessonPageComp levelInfo={levelInfo} lesson={foundLesson} />;
}
