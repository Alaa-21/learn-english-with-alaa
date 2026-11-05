"tsx";
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { QuizQuestion } from "@/data/curriculum";
import { Button } from "./Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface QuizProps {
  quiz: QuizQuestion[];
  levelCode: string;
}

export function Quiz({ quiz, levelCode }: QuizProps) {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.from(".quiz-card", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef, dependencies: [isSubmitted] }
  );

  const handleSelectAnswer = (questionId: number, answer: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quiz.forEach((q) => {
      const userAns = userAnswers[q.id]?.trim().toLowerCase();
      const correctAns = q.correctAnswer.trim().toLowerCase();
      if (userAns === correctAns) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setIsSubmitted(true);
  };

  const handleRetryQuiz = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  return (
    <div ref={containerRef} className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            Comprehensive Lesson Quiz / اختبار الدرس
          </h2>
          <p className="text-slate-300 text-sm">
            Test your mastery with {quiz.length} questions covering vocabulary, grammar, and syntax.
          </p>
        </div>
        {isSubmitted && (
          <div className="px-5 py-3 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-300 font-bold text-center">
            Score: {score} / {quiz.length} ({Math.round((score / quiz.length) * 100)}%)
          </div>
        )}
      </div>

      {/* Quiz Questions List */}
      <div className="space-y-8">
        {quiz.map((q, idx) => {
          const userAns = userAnswers[q.id];
          const isCorrect = isSubmitted && userAns?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

          return (
            <div
              key={q.id}
              className={`quiz-card p-6 rounded-2xl border transition-all ${
                isSubmitted
                  ? isCorrect
                    ? "bg-emerald-950/40 border-emerald-800/80"
                    : "bg-rose-950/40 border-rose-800/80"
                  : "bg-slate-950/70 border-slate-800"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                  Q{idx + 1} ({q.type.toUpperCase()})
                </span>
                {isSubmitted && (
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      isCorrect ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
                    }`}
                  >
                    {isCorrect ? "Correct" : "Incorrect"}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                {q.questionEn}
              </h3>
              <p className="text-sm font-medium text-slate-300 mb-4" dir="rtl">
                {q.questionAr}
              </p>

              {q.options ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {q.options.map((option, optIdx) => {
                    const isSelected = userAns === option;
                    return (
                      <button
                        key={optIdx}
                        disabled={isSubmitted}
                        onClick={() => handleSelectAnswer(q.id, option)}
                        className={`text-left p-4 rounded-xl border font-medium text-sm transition-all cursor-pointer ${
                          isSelected
                            ? "bg-teal-600 text-white border-teal-500 shadow-lg"
                            : "bg-slate-900 text-slate-200 border-slate-800 hover:bg-slate-850"
                        } ${isSubmitted ? "cursor-default" : ""}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="mb-4">
                  <input
                    type="text"
                    disabled={isSubmitted}
                    value={userAns || ""}
                    onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-white font-medium text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              )}

              {isSubmitted && (
                <div className="mt-4 pt-4 border-t border-slate-800 text-sm space-y-1">
                  <p className="text-slate-200 font-semibold">
                    Correct Answer: <span className="text-teal-400">{q.correctAnswer}</span>
                  </p>
                  <p className="text-slate-300">
                    <span className="font-semibold">Explanation: </span>
                    {q.explanationEn}
                  </p>
                  <p className="text-slate-300" dir="rtl">
                    <span className="font-semibold">الشرح: </span>
                    {q.explanationAr}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Actions */}
      <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {!isSubmitted ? (
          <Button onClick={handleSubmitQuiz} variant="primary">
            Submit Quiz & Grade
          </Button>
        ) : (
          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={handleRetryQuiz} variant="secondary">
              Retry Quiz
            </Button>
            <Link
              href={`/levels/${levelCode.toLowerCase()}`}
              className="px-6 py-3 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-500 transition-colors shadow-lg"
            >
              Back to Level Curriculum
            </Link>
          </div>
        )}
        <Link
          href="/"
          className="text-sm font-semibold text-slate-400 hover:text-teal-300 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
