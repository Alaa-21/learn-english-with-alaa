import { levelsData } from "@/data/curriculum";
import LevelClient from "./LevelClient";

export async function generateStaticParams() {
  return Object.keys(levelsData).map((level) => ({
    level,
  }));
}

export default async function LevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  return <LevelClient level={level} />;
}
