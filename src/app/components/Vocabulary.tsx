"tsx";
"use client";

import React, { useRef, useState, useMemo } from "react";
import { VocabularyItem } from "@/data/curriculum";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface VocabularyProps {
  vocabulary: VocabularyItem[];
}

export function Vocabulary({ vocabulary }: VocabularyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(50);

  const filteredVocabulary = useMemo(() => {
    if (!searchTerm.trim()) return vocabulary;
    const query = searchTerm.toLowerCase().trim();
    return vocabulary.filter(
      (item) =>
        item.word.toLowerCase().includes(query) ||
        item.translation.toLowerCase().includes(query) ||
        item.exampleEn.toLowerCase().includes(query) ||
        item.exampleAr.toLowerCase().includes(query)
    );
  }, [vocabulary, searchTerm]);

  const displayedVocabulary = useMemo(() => {
    return filteredVocabulary.slice(0, visibleCount);
  }, [filteredVocabulary, visibleCount]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.from(".vocab-item", {
        opacity: 0,
        y: 15,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
      });
    },
    { scope: containerRef, dependencies: [visibleCount, searchTerm] }
  );

  const speakWord = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.9;

      const voices = window.speechSynthesis.getVoices();
      const usVoice = voices.find((v) => v.lang === "en-US" || v.lang.startsWith("en"));
      if (usVoice) {
        utterance.voice = usVoice;
      }

      setPlayingWord(word);

      utterance.onend = () => {
        setPlayingWord(null);
      };

      utterance.onerror = () => {
        setPlayingWord(null);
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      setPlayingWord(null);
    }
  };

  return (
    <div ref={containerRef} className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            Lesson Vocabulary / مفردات الدرس
          </h2>
          <p className="text-slate-300 text-sm">
            Showing {displayedVocabulary.length} of {filteredVocabulary.length} words ({vocabulary.length} total). Click the speaker icon to listen.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-72">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(50);
            }}
            placeholder="Search vocabulary..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedVocabulary.map((item, idx) => {
          const isPlaying = playingWord === item.word;

          return (
            <div key={idx} className="vocab-item bg-slate-950/70 p-5 rounded-2xl border border-slate-800/80 relative group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-white">{item.word}</span>
                  {item.word && (
                    <button
                      onClick={(e) => speakWord(item.word || "", e)}
                      title="Listen to pronunciation"
                      aria-label={`Listen to pronunciation of ${item.word}`}
                      className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center border ${
                        isPlaying
                          ? "bg-teal-500 text-white border-teal-400 animate-pulse scale-105"
                          : "bg-slate-900 text-teal-400 border-slate-800 hover:bg-teal-600 hover:text-white"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </button>
                  )}
                </div>
                <span className="text-sm font-semibold text-teal-400">{item.translation}</span>
              </div>
              <p className="text-xs font-mono text-slate-400 mb-3">/{item.pronunciation}/</p>
              <div className="space-y-1 text-sm pt-2 border-t border-slate-800">
                <p className="text-slate-200 font-medium">{item.exampleEn}</p>
                <p className="text-slate-400 text-xs">{item.exampleAr}</p>
              </div>
            </div>
          );
        })}
      </div>

      {visibleCount < filteredVocabulary.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 50)}
            className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-500 transition-colors shadow-lg cursor-pointer"
          >
            Load More Words ({filteredVocabulary.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
