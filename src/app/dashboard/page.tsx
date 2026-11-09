"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { AuraBackground } from "@/app/components/AuraBackground";
import { BackToTop } from "@/app/components/BackToTop";

interface Profile {
  full_name?: string;
  current_cefr_level?: string;
}

interface Progress {
  current_level?: string;
  total_points?: number;
  completed_lessons?: string[];
  completed_quizzes?: string[];
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function loadDashboard() {
      const {
        data: { user: currentUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !currentUser) {
        router.push("/login");
        return;
      }

      setUser(currentUser);

      // Fetch user profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .single();

      if (profileData) {
        setProfile(profileData);
      }

      // Fetch user progress
      const { data: progressData } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", currentUser.id)
        .single();

      if (progressData) {
        setProgress(progressData);
      }

      setLoading(false);
    }

    loadDashboard();
  }, [supabase, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#100e0b] text-slate-100">
        <AuraBackground />
        <p className="relative z-10 text-slate-400">Loading your dashboard...</p>
      </div>
    );
  }

  const userName = profile?.full_name || user?.email?.split("@")[0] || "Learner";
  const currentLevel = profile?.current_cefr_level || progress?.current_level || "A1";
  const totalPoints = progress?.total_points || 0;
  const completedLessonsCount = progress?.completed_lessons?.length || 0;
  const completedQuizzesCount = progress?.completed_quizzes?.length || 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#100e0b] text-slate-100 relative">
      <AuraBackground />

      {/* Navbar */}
      <header className="relative z-20 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-teal-400 transition-colors">
            Learn English with Alaa
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              Profile Settings
            </Link>
            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-red-950/50 border border-red-800 text-red-200 hover:bg-red-900/50 transition-colors text-sm font-medium cursor-pointer"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex-grow w-full space-y-8">
        {/* Welcome Banner */}
        <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-teal-600/30 border border-teal-500/30 flex items-center justify-center text-teal-300 font-bold text-2xl">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white">Welcome back, {userName}!</h1>
              <p className="text-slate-400 text-sm mt-1">Ready to take the next step in your English learning journey today?</p>
            </div>
          </div>
          <Link
            href={`/levels/${currentLevel.toLowerCase()}`}
            className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-colors shadow-lg cursor-pointer whitespace-nowrap"
          >
            Continue Level {currentLevel}
          </Link>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl">
            <p className="text-xs uppercase font-medium text-slate-400 tracking-wider">Current CEFR Level</p>
            <p className="text-3xl font-extrabold text-teal-400 mt-2">{currentLevel}</p>
            <p className="text-xs text-slate-500 mt-1">Your active learning stage</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl">
            <p className="text-xs uppercase font-medium text-slate-400 tracking-wider">Completed Lessons</p>
            <p className="text-3xl font-extrabold text-white mt-2">{completedLessonsCount}</p>
            <p className="text-xs text-slate-500 mt-1">Lessons finished</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl">
            <p className="text-xs uppercase font-medium text-slate-400 tracking-wider">Completed Quizzes</p>
            <p className="text-3xl font-extrabold text-white mt-2">{completedQuizzesCount}</p>
            <p className="text-xs text-slate-500 mt-1">Quizzes passed</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl">
            <p className="text-xs uppercase font-medium text-slate-400 tracking-wider">Total Points</p>
            <p className="text-3xl font-extrabold text-amber-400 mt-2">{totalPoints} pts</p>
            <p className="text-xs text-slate-500 mt-1">Earned from practice</p>
          </div>
        </div>

        {/* Quick Level Access */}
        <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Explore Curriculum Levels</h2>
              <p className="text-slate-400 text-sm">Choose any level from A1 beginner to C2 proficiency.</p>
            </div>
            <Link href="/#levels" className="text-sm font-medium text-teal-400 hover:underline">
              View All Levels
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: "a1", name: "Beginner", desc: "Basic greetings and everyday expressions." },
              { code: "a2", name: "Elementary", desc: "Routine tasks, family, and surroundings." },
              { code: "b1", name: "Intermediate", desc: "Travel, opinions, and personal experiences." },
              { code: "b2", name: "Upper Intermediate", desc: "Fluent, spontaneous communication." },
              { code: "c1", name: "Advanced", desc: "Social, academic, and professional fluency." },
              { code: "c2", name: "Proficiency", desc: "Near-native nuance and master precision." },
            ].map((lvl) => (
              <Link
                key={lvl.code}
                href={`/levels/${lvl.code}`}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-teal-500/50 transition-all group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-teal-400 uppercase">{lvl.code}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-teal-950 text-teal-300 border border-teal-800/50 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    Start
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{lvl.name}</h3>
                <p className="text-slate-400 text-xs">{lvl.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <BackToTop />
    </div>
  );
}
