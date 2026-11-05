import rawCourseData from "./english_course_all_levels.json";
import rawVocabData from "./Vocab.json";

export interface QuizQuestion {
  id: number;
  type: "mc" | "tf" | "fill";
  questionEn: string;
  questionAr: string;
  options?: string[];
  correctAnswer: string;
  explanationEn: string;
  explanationAr: string;
}

export interface VocabularyItem {
  word: string;
  translation: string;
  pronunciation: string;
  exampleEn: string;
  exampleAr: string;
  partOfSpeech?: string;
  rank?: number;
  set?: number;
  level?: string;
}

export interface GrammarRule {
  ruleEn: string;
  ruleAr: string;
  explanationEn: string;
  explanationAr: string;
  examples: { en: string; ar: string }[];
}

export interface SyntaxRule {
  topicEn: string;
  topicAr: string;
  structureEn: string;
  structureAr: string;
  examples: { en: string; ar: string }[];
}

export interface PracticeExercise {
  instructionEn: string;
  instructionAr: string;
  prompt: string;
  sampleAnswer: string;
  explanation: { en: string; ar: string };
}

export interface Lesson {
  id: string;
  titleEn: string;
  titleAr: string;
  duration: string;
  descriptionEn: string;
  descriptionAr: string;
  vocabulary: VocabularyItem[];
  grammar: GrammarRule;
  syntax: SyntaxRule;
  practice: PracticeExercise[];
  quiz: QuizQuestion[];
}

export interface Unit {
  unitId: string;
  titleEn: string;
  titleAr: string;
  objectivesEn: string[];
  objectivesAr: string[];
  grammarEn: string[];
  grammarAr: string[];
  lessons: Lesson[];
}

export interface LevelData {
  code: string;
  nameEn: string;
  nameAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  objectivesEn: string[];
  objectivesAr: string[];
  units: Unit[];
  vocabulary: VocabularyItem[];
}

interface RawExample {
  en: string;
  ar: string;
}

interface RawRule {
  rule?: string;
  explanation_en?: string;
  explanation_ar?: string;
  syntax?: string;
  examples?: RawExample[];
}

interface RawVocabulary {
  word?: string;
  term?: string;
  translation?: string;
  meaning?: string;
  pronunciation?: string;
  example_en?: string;
  exampleEn?: string;
  example_ar?: string;
  exampleAr?: string;
}

interface RawPractice {
  instruction_en?: string;
  instructionEn?: string;
  instruction_ar?: string;
  instructionAr?: string;
  prompt?: string;
  question?: string;
  sample_answer?: string;
  answer?: string;
  explanation_en?: string;
  explanationEn?: string;
  explanation_ar?: string;
  explanationAr?: string;
}

interface RawQuizQuestion {
  question?: string;
  question_en?: string;
  question_ar?: string;
  options?: string[];
  answer?: string;
  correct_answer?: string;
  explanation_en?: string;
  explanation_ar?: string;
}

interface RawLesson {
  lesson?: number | string;
  title?: string;
  title_ar?: string;
  rules?: RawRule[];
  vocabulary?: RawVocabulary[];
  practice?: RawPractice[];
  final_test?: RawQuizQuestion[];
}

interface RawUnit {
  unit?: number | string;
  title?: string;
  title_ar?: string;
  objectives?: string[];
  objectives_ar?: string[];
  grammar_topics?: string[];
  grammar_topics_ar?: string[];
  lessons?: RawLesson[];
  final_test?: RawQuizQuestion[];
}

interface RawLevel {
  level: string;
  title?: string;
  units?: RawUnit[];
}

const levelMeta: Record<string, { nameEn: string; nameAr: string; subtitleEn: string; subtitleAr: string; descEn: string; descAr: string; objectivesEn: string[]; objectivesAr: string[] }> = {
  A1: {
    nameEn: "Beginner",
    nameAr: "المبتدئ",
    subtitleEn: "Breakthrough / Beginner",
    subtitleAr: "مستوى التأسيس للمبتدئين",
    descEn: "Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type.",
    descAr: "يستطيع فهم واستخدام التعبيرات اليومية المألوفة والعبارات الأساسية جداً التي تهدف إلى تلبية احتياجات ملموسة.",
    objectivesEn: [
      "Introduce oneself and others",
      "Ask and answer questions about personal details",
      "Describe daily habits and routines",
      "Identify and describe common household items and rooms"
    ],
    objectivesAr: [
      "التعريف بالنفس والآخرين",
      "طرح أسئلة والإجابة عليها حول التفاصيل الشخصية",
      "وصف العادات والروتين اليومي",
      "تحديد ووصف الأدوات المنزلية الشائعة والغرف"
    ]
  },
  A2: {
    nameEn: "Elementary",
    nameAr: "الأساسي",
    subtitleEn: "Waystage / Elementary",
    subtitleAr: "مستوى الإنجاز الأساسي",
    descEn: "Can understand sentences and frequently used expressions related to areas of most immediate relevance.",
    descAr: "يستطيع فهم الجمل والتعبيرات المستخدمة بشكل متكرر والمرتبطة بالمجالات ذات الأهمية المباشرة.",
    objectivesEn: [
      "Understand sentences and frequently used expressions",
      "Communicate in simple and routine tasks requiring a direct exchange",
      "Describe in simple terms aspects of background and immediate environment",
      "Discuss past events and future plans"
    ],
    objectivesAr: [
      "فهم الجمل والتعبيرات المستخدمة بشكل متكرر",
      "التواصل في المهام البسيطة والروتينية",
      "وصف جوانب الخلفية والبيئة المحيطة ببساطة",
      "مناقشة أحداث الماضي والخطط المستقبلية"
    ]
  },
  B1: {
    nameEn: "Intermediate",
    nameAr: "المتوسط",
    subtitleEn: "Threshold / Intermediate",
    subtitleAr: "مستوى الكفاءة المتوسطة",
    descEn: "Can deal with most situations likely to arise whilst travelling in an area where the language is spoken.",
    descAr: "يستطيع التعامل مع معظم المواقف المحتملة أثناء السفر في مناطق تتحدث اللغة.",
    objectivesEn: [
      "Enter unprepared into conversation on familiar topics",
      "Describe experiences, events, dreams, hopes and ambitions",
      "Briefly give reasons and explanations for opinions and plans",
      "Narrate a story or relate the plot of a book or film"
    ],
    objectivesAr: [
      "الدخول في محادثات غير معدة حول مواضيع مألوفة",
      "وصف التجارب والأحداث والآمال والطموحات",
      "إعطاء أسباب وتفسيرات مختصرة للآراء والخطط",
      "سرد قصة أو حبكة كتاب أو فيلم"
    ]
  },
  B2: {
    nameEn: "Upper Intermediate",
    nameAr: "فوق المتوسط",
    subtitleEn: "Vantage / Upper Intermediate",
    subtitleAr: "مستوى الإتقان فوق المتوسط",
    descEn: "Can understand the main ideas of complex text on both concrete and abstract topics.",
    descAr: "يستطيع فهم الأفكار الرئيسية للنصوص المعقدة حول مواضيع ملموسة ومجردة.",
    objectivesEn: [
      "Interact with a degree of fluency and spontaneity",
      "Produce clear, detailed text on a wide range of subjects",
      "Explain a viewpoint on a topical issue giving the advantages and disadvantages",
      "Use advanced grammatical structures and idiomatic expressions"
    ],
    objectivesAr: [
      "التفاعل بدرجة من الطلاقة والعفوية",
      "إنتاج نص واضح ومفصل حول مجموعة واسعة من المواضيع",
      "شرح وجهة نظر حول قضية معينة مع ذكر المزايا والعيوب",
      "استخدام تراكيب نحوية متقدمة وتعبيرات اصطلاحية"
    ]
  },
  C1: {
    nameEn: "Advanced",
    nameAr: "المتقدم",
    subtitleEn: "Effective Operational Proficiency / Advanced",
    subtitleAr: "مستوى الكفاءة التشغيلية الفعالة / المتقدم",
    descEn: "Can understand a wide range of demanding, longer clauses, and recognize implicit meaning.",
    descAr: "يستطيع فهم مجموعة واسعة من الجمل الطويلة الصعبة والتعرف على المعاني الضمنية.",
    objectivesEn: [
      "Express ideas fluently and spontaneously without much obvious searching for expressions",
      "Use language flexibly and effectively for social, academic and professional purposes",
      "Produce clear, well-structured, detailed text on complex subjects",
      "Master nuanced vocabulary and specialized register"
    ],
    objectivesAr: [
      "التعبير عن الأفكار بطلاقة وعفوية دون بحث واضح عن التعبيرات",
      "استخدام اللغة بمرونة وفعالية لأغراض اجتماعية وأكاديمية ومهنية",
      "إنتاج نص واضح وجيد الهيكل ومفصل حول مواضيع معقدة",
      "إتقان المفردات الدقيقة والمستويات المتخصصة"
    ]
  },
  C2: {
    nameEn: "Proficiency",
    nameAr: "التمكن الكامل",
    subtitleEn: "Mastery / Proficiency",
    subtitleAr: "مستوى التمكن الكامل والإتقان التام",
    descEn: "Can summarize information from different spoken and written sources, reconstructing arguments and accounts.",
    descAr: "يستطيع تلخيص المعلومات من مصادر منطوقة ومكتوبة مختلفة وإعادة بناء الحجج.",
    objectivesEn: [
      "Express yourself with spontaneity, exactness and fluency",
      "Differentiate finer shades of meaning even in more complex situations",
      "Master academic, technical and sophisticated literary registers",
      "Handle professional and highly technical academic materials effortlessly"
    ],
    objectivesAr: [
      "التعبير عن النفس بعفوية ودقة وطلاقة",
      "التمييز بين الظلال الدقيقة للمعاني حتى في المواقف الأكثر تعقيداً",
      "إتقان المستويات الأكاديمية والتقنية والأدبية المعقدة",
      "التعامل مع المواد الأكاديمية المهنية والتقنية للغاية بسهولة"
    ]
  }
};

// Process vocabulary from vocab.json
const allVocabWords: Array<{
  rank?: number;
  word?: string;
  part_of_speech?: string;
  level?: string;
  set?: number;
  arabic?: string;
  example?: string;
  example_arabic?: string;
}> = (rawVocabData as { words?: Array<{ rank?: number; word?: string; part_of_speech?: string; level?: string; set?: number; arabic?: string; example?: string; example_arabic?: string }> }).words || [];

const vocabByLevel: Record<string, VocabularyItem[]> = {
  A1: [],
  A2: [],
  B1: [],
  B2: [],
  C1: [],
  C2: [],
  Unassigned: []
};

for (const vw of allVocabWords) {
  const lvl = (vw.level || "").toUpperCase();
  const item: VocabularyItem = {
    word: vw.word || "",
    translation: vw.arabic || "",
    pronunciation: "standard",
    exampleEn: vw.example || "",
    exampleAr: vw.example_arabic || "",
    partOfSpeech: vw.part_of_speech || "",
    rank: vw.rank,
    set: vw.set,
    level: vw.level
  };
  if (vocabByLevel[lvl]) {
    vocabByLevel[lvl].push(item);
  } else {
    vocabByLevel.Unassigned.push(item);
  }
}

export const unassignedVocabulary = vocabByLevel.Unassigned;

export const levelsData: Record<string, LevelData> = {};

const rawLevels = (rawCourseData as { levels: RawLevel[] }).levels;

for (const rawLevel of rawLevels) {
  const code = rawLevel.level.toLowerCase();
  const upperCode = rawLevel.level.toUpperCase();
  const meta = levelMeta[upperCode] || {
    nameEn: upperCode,
    nameAr: upperCode,
    subtitleEn: `CEFR Level ${upperCode}`,
    subtitleAr: `مستوى ${upperCode}`,
    descEn: rawLevel.title || `Complete English course for level ${upperCode}.`,
    descAr: rawLevel.title || `منصة تعلم اللغة الإنجليزية للمستوى ${upperCode}.`,
    objectivesEn: ["Master core vocabulary and grammar rules", "Practice communicative functional dialogues", "Succeed in unit quizzes"],
    objectivesAr: ["إتقان المفردات الأساسية وقواعد النحو", "ممارسة الحوارات التواصلية الوظيفية", "النجاح في اختبارات الوحدات"]
  };

  const levelVocab = vocabByLevel[upperCode] || [];

  const units: Unit[] = (rawLevel.units || []).map((rawUnit: RawUnit, uIdx: number) => {
    const unitId = `${upperCode}.${rawUnit.unit || uIdx + 1}`;
    const unitTitleEn = rawUnit.title || `Unit ${rawUnit.unit || uIdx + 1}`;
    const unitTitleAr = rawUnit.title_ar || unitTitleEn;

    const lessons: Lesson[] = (rawUnit.lessons || []).map((rawLesson: RawLesson, lIdx: number) => {
      const lessonNum = rawLesson.lesson || lIdx + 1;
      const lessonId = `lesson-${rawUnit.unit || uIdx + 1}-${lessonNum}`;
      const titleEn = rawLesson.title || `Lesson ${lessonNum}`;
      const titleAr = rawLesson.title_ar || titleEn;
      
      const firstRule = rawLesson.rules?.[0];
      const descEn = firstRule?.explanation_en || titleEn;
      const descAr = firstRule?.explanation_ar || titleAr;

      const vocabItems: VocabularyItem[] = [];
      if (rawLesson.vocabulary && Array.isArray(rawLesson.vocabulary)) {
        for (const v of rawLesson.vocabulary) {
          vocabItems.push({
            word: v.word || v.term || "Word",
            translation: v.translation || v.meaning || "ترجمة",
            pronunciation: v.pronunciation || "prəˌnʌnsiˈāshən",
            exampleEn: v.example_en || v.exampleEn || "Example sentence.",
            exampleAr: v.example_ar || v.exampleAr || "مثال توضيحي."
          });
        }
      } else {
        const rulesList = rawLesson.rules || [];
        for (const r of rulesList) {
          if (r.examples && Array.isArray(r.examples)) {
            for (const ex of r.examples.slice(0, 3)) {
              vocabItems.push({
                word: ex.en.split(" ")[0]?.replace(/[^a-zA-Z]/g, "") || "Key Term",
                translation: ex.ar || "مصطلح",
                pronunciation: "standard",
                exampleEn: ex.en,
                exampleAr: ex.ar
              });
            }
          }
        }
      }

      if (vocabItems.length === 0) {
        vocabItems.push({
          word: titleEn,
          translation: titleAr,
          pronunciation: "general",
          exampleEn: `Practice using concepts from ${titleEn}.`,
          exampleAr: `تدرب على استخدام المفاهيم من ${titleAr}.`
        });
      }

      const grammarRule: GrammarRule = {
        ruleEn: firstRule?.rule || titleEn,
        ruleAr: firstRule?.rule || titleAr,
        explanationEn: firstRule?.explanation_en || `Grammar principles for ${titleEn}.`,
        explanationAr: firstRule?.explanation_ar || `قواعد النحو لدرس ${titleAr}.`,
        examples: firstRule?.examples || [{ en: `Example for ${titleEn}.`, ar: `مثال على ${titleAr}.` }]
      };

      const syntaxRule: SyntaxRule = {
        topicEn: firstRule?.rule || titleEn,
        topicAr: firstRule?.rule || titleAr,
        structureEn: firstRule?.syntax || "Subject + Verb + Object",
        structureAr: firstRule?.syntax || "الفاعل + الفعل + المفعول به",
        examples: firstRule?.examples || [{ en: `Syntax pattern for ${titleEn}.`, ar: `نمط التركيب لـ ${titleAr}.` }]
      };

      const practiceExercises: PracticeExercise[] = (rawLesson.practice || []).map((p: RawPractice) => ({
        instructionEn: p.instruction_en || p.instructionEn || "Complete the practice exercise.",
        instructionAr: p.instruction_ar || p.instructionAr || "أكمل تمرين التدريب.",
        prompt: p.prompt || p.question || "Fill in the blank.",
        sampleAnswer: p.sample_answer || p.answer || "Correct answer",
        explanation: {
          en: p.explanation_en || p.explanationEn || "Grammar application rule.",
          ar: p.explanation_ar || p.explanationAr || "قاعدة تطبيق النحو."
        }
      }));

      if (practiceExercises.length === 0 && firstRule?.examples?.[0]) {
        practiceExercises.push({
          instructionEn: `Practice: ${firstRule.rule || titleEn}`,
          instructionAr: `تدريب: ${firstRule.rule || titleAr}`,
          prompt: firstRule.examples[0].en.replace(/\b[A-Za-z]+\b/, "_____"),
          sampleAnswer: firstRule.examples[0].en.split(" ")[0],
          explanation: {
            en: firstRule.explanation_en || "Apply correct grammar structure.",
            ar: firstRule.explanation_ar || "طبق التركيب النحوي الصحيح."
          }
        });
      }

      const quizQuestions: QuizQuestion[] = [];
      const testSource = rawLesson.final_test || rawUnit.final_test || [];
      if (Array.isArray(testSource) && testSource.length > 0) {
        testSource.forEach((q: RawQuizQuestion, qIdx: number) => {
          quizQuestions.push({
            id: qIdx + 1,
            type: q.options ? "mc" : "fill",
            questionEn: q.question || q.question_en || `Question ${qIdx + 1}`,
            questionAr: q.question_ar || q.question_en || `السؤال ${qIdx + 1}`,
            options: q.options || ["Option A", "Option B", "Option C"],
            correctAnswer: q.answer || q.correct_answer || q.options?.[0] || "Answer",
            explanationEn: q.explanation_en || "Grammar rule verification.",
            explanationAr: q.explanation_ar || "التحقق من القاعدة النحوية."
          });
        });
      }

      if (quizQuestions.length === 0) {
        let qId = 1;
        for (const r of (rawLesson.rules || [])) {
          if (r.examples && r.examples.length > 0) {
            for (const ex of r.examples.slice(0, 2)) {
              quizQuestions.push({
                id: qId++,
                type: "fill",
                questionEn: `Complete or evaluate: ${ex.en}`,
                questionAr: `أكمل أو قيّم: ${ex.ar}`,
                correctAnswer: ex.en.split(" ")[0],
                explanationEn: `Based on rule: ${r.rule}`,
                explanationAr: `بناءً على القاعدة: ${r.rule}`
              });
            }
          }
        }
      }

      if (quizQuestions.length === 0) {
        quizQuestions.push({
          id: 1,
          type: "mc",
          questionEn: `Select the correct usage for ${titleEn}.`,
          questionAr: `اختر الاستخدام الصحيح لـ ${titleEn}.`,
          options: [titleEn, "Alternative 1", "Alternative 2"],
          correctAnswer: titleEn,
          explanationEn: "Core curriculum standard.",
          explanationAr: "معيار المنهج الأساسي."
        });
      }

      return {
        id: lessonId,
        titleEn,
        titleAr,
        duration: "30 mins",
        descriptionEn: descEn,
        descriptionAr: descAr,
        vocabulary: vocabItems,
        grammar: grammarRule,
        syntax: syntaxRule,
        practice: practiceExercises,
        quiz: quizQuestions
      };
    });

    return {
      unitId,
      titleEn: unitTitleEn,
      titleAr: unitTitleAr,
      objectivesEn: rawUnit.objectives || [unitTitleEn],
      objectivesAr: rawUnit.objectives_ar || [unitTitleAr],
      grammarEn: rawUnit.grammar_topics || [unitTitleEn],
      grammarAr: rawUnit.grammar_topics_ar || [unitTitleAr],
      lessons
    };
  });

  levelsData[code] = {
    code: upperCode,
    nameEn: meta.nameEn,
    nameAr: meta.nameAr,
    subtitleEn: meta.subtitleEn,
    subtitleAr: meta.subtitleAr,
    descriptionEn: meta.descEn,
    descriptionAr: meta.descAr,
    objectivesEn: meta.objectivesEn,
    objectivesAr: meta.objectivesAr,
    units,
    vocabulary: levelVocab
  };
}
