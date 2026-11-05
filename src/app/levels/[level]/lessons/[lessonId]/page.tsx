import { levelsData } from "@/data/curriculum";
import LessonClient from "./LessonClient";

export async function generateStaticParams() {
  const paths: { level: string; lessonId: string }[] = [];
  for (const levelKey of Object.keys(levelsData)) {
    const levelInfo = levelsData[levelKey];
    for (const unit of levelInfo.units) {
      for (const lesson of unit.lessons) {
        paths.push({
          level: levelKey,
          lessonId: lesson.id,
        });
      }
    }
  }
  return paths;
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ level: string; lessonId: string }>;
}) {
  const { level, lessonId } = await params;
  return <LessonClient level={level} lessonId={lessonId} />;
}
