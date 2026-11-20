import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Hand,
  MessageSquare,
  Search,
} from 'lucide-react';
import { ISL_ALPHABET, ISL_CONVERSATIONS, ISL_SIGN_ENTRIES } from '../data/islData';
import { AppSection, LearningProgress } from '../types/isl';

interface HomeViewProps {
  progress: LearningProgress;
  onNavigate: (section: AppSection) => void;
}

export function HomeView({ progress, onNavigate }: HomeViewProps) {
  const totalAlphabet = ISL_ALPHABET.length;
  const totalLessons = ISL_SIGN_ENTRIES.length;
  const totalScenarios = ISL_CONVERSATIONS.length;

  const moduleCards: {
    id: AppSection;
    title: string;
    subtitle: string;
    metric: string;
    icon: typeof Hand;
  }[] = [
    {
      id: 'alphabet',
      title: 'Alphabet A–Z',
      subtitle:
        'Explore the two-handed Indian Sign Language manual alphabet with verified vowel fingertip maps and practice mode.',
      metric: `${progress.learnedAlphabet.length} / ${totalAlphabet} letters learned`,
      icon: Hand,
    },
    {
      id: 'lessons',
      title: 'Numbers & Vocabulary',
      subtitle:
        'Master ISL numerals 0–10, greetings, family kinship signs, daily essentials, and emergency phrases.',
      metric: `${progress.learnedLessons.length} / ${totalLessons} signs completed`,
      icon: BookOpen,
    },
    {
      id: 'dictionary',
      title: 'Searchable Dictionary',
      subtitle:
        'Search by English word, Hindi gloss, or topic. Inspect ISL word order examples and bookmark signs.',
      metric: `${progress.bookmarkedSigns.length} signs bookmarked`,
      icon: Search,
    },
    {
      id: 'conversations',
      title: 'Real-Life Conversations',
      subtitle:
        'Step through practical Indian dialogue scenarios with ISL gloss structure and Non-Manual Marker cues.',
      metric: `${progress.completedScenarios.length} / ${totalScenarios} scenarios completed`,
      icon: MessageSquare,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section: Balanced 2-Column Split */}
      <section className="pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-semibold text-purple-700 dark:text-purple-400">
              Indian Sign Language Education · ISLRTC-Aligned
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] [text-wrap:balance]">
              Learn. Sign.{' '}
              <span className="text-blue-600 dark:text-blue-400">Connect.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              SignBridge is a free, self-paced Indian Sign Language learning workspace. Practice A–Z fingerspelling, build everyday vocabulary, explore real conversation glosses, and track your progress directly in your browser.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('alphabet')}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                Start Alphabet A–Z
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('quiz')}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Take Knowledge Quiz
              </button>
            </div>
          </div>

          {/* Right Column: Clean Geometric Educational Stage Graphic */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>ISL Curriculum Overview</span>
                <span className="font-mono-tabular">100% Free · Offline Ready</span>
              </div>

              <div className="my-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-purple-950/40 border border-slate-200 dark:border-slate-800 p-6">
                <svg
                  viewBox="0 0 320 200"
                  className="w-full max-w-[280px] h-auto"
                  role="img"
                  aria-label="SignBridge conceptual bridge diagram connecting alphabet, grammar, and conversation"
                >
                  {/* Bridge Arch connecting two communication pillars */}
                  <path
                    d="M 40 155 Q 160 35 280 155"
                    fill="none"
                    className="stroke-blue-600 dark:stroke-blue-400"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 65 155 Q 160 65 255 155"
                    fill="none"
                    className="stroke-purple-500 dark:stroke-purple-400"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                  {/* Three learning nodes */}
                  <circle cx="48" cy="148" r="18" className="fill-blue-600 dark:fill-blue-500" />
                  <text x="48" y="153" textAnchor="middle" className="fill-white text-xs font-bold">
                    A–Z
                  </text>

                  <circle cx="160" cy="78" r="22" className="fill-purple-600 dark:fill-purple-500" />
                  <text x="160" y="83" textAnchor="middle" className="fill-white text-xs font-bold">
                    ISL
                  </text>

                  <circle cx="272" cy="148" r="18" className="fill-blue-600 dark:fill-blue-500" />
                  <text x="272" y="153" textAnchor="middle" className="fill-white text-xs font-bold">
                    Talk
                  </text>

                  {/* Baseline */}
                  <line
                    x1="24"
                    y1="176"
                    x2="296"
                    y2="176"
                    className="stroke-slate-300 dark:stroke-slate-700"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Two-handed ISL fingerspelling & vowel map</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>Verified SOV gloss order & Non-Manual Markers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Progress Strip below hero split */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Alphabet Mastery
            </p>
            <p className="mt-1 font-mono-tabular text-2xl font-bold text-slate-900 dark:text-white">
              {progress.learnedAlphabet.length}/{totalAlphabet}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Vocabulary & Numbers
            </p>
            <p className="mt-1 font-mono-tabular text-2xl font-bold text-slate-900 dark:text-white">
              {progress.learnedLessons.length}/{totalLessons}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Conversations Practiced
            </p>
            <p className="mt-1 font-mono-tabular text-2xl font-bold text-slate-900 dark:text-white">
              {progress.completedScenarios.length}/{totalScenarios}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Best Quiz Score
            </p>
            <p className="mt-1 font-mono-tabular text-2xl font-bold text-blue-600 dark:text-blue-400">
              {progress.bestQuizPercentage}%
            </p>
          </div>
        </div>
      </section>

      {/* Core Learning Modules Grid */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Structured Learning Modules
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
              Choose a module to begin. Your completed letters, signs, bookmarks, and quiz scores are saved automatically in your browser.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('progress')}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            View full progress report
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {moduleCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => onNavigate(card.id)}
                className="group text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-blue-400 dark:hover:border-blue-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono-tabular text-xs font-medium text-slate-500 dark:text-slate-400">
                    {card.metric}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {card.subtitle}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  <span>Open module</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Verified ISL Foundations Section */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Linguistic Accuracy Commitment
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Indian Sign Language is an independent visual language
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Indian Sign Language (ISL) is not signed English or Hindi on the hands. It has its own grammar—including Subject–Object–Verb sentence structure, clause-final WH-questions, and meaningful Non-Manual Markers (eyebrow posture, head nods, and headshakes). SignBridge strictly avoids inventing handshapes: where verified visual demonstrations are unavailable offline, clear placeholders guide you to the official ISLRTC dictionary.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => onNavigate('dictionary')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-colors cursor-pointer"
            >
              <Search className="h-4 w-4" />
              Browse Verified Dictionary
            </button>
            <button
              type="button"
              onClick={() => onNavigate('quiz')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ClipboardCheck className="h-4 w-4" />
              Test Your ISL Knowledge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
