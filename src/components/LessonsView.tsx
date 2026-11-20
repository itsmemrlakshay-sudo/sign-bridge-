import { Bookmark, CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ISL_SIGN_ENTRIES, LESSON_CATEGORIES } from '../data/islData';
import { LessonCategory } from '../types/isl';
import { DemonstrationStage } from './DemonstrationStage';

interface LessonsViewProps {
  learnedLessons: string[];
  bookmarkedSigns: string[];
  onToggleLearned: (id: string) => void;
  onToggleBookmark: (id: string) => void;
}

export function LessonsView({
  learnedLessons,
  bookmarkedSigns,
  onToggleLearned,
  onToggleBookmark,
}: LessonsViewProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<LessonCategory>('Numbers');

  const categoryEntries = useMemo(
    () =>
      ISL_SIGN_ENTRIES.filter((entry) => entry.category === selectedCategory),
    [selectedCategory]
  );

  const [selectedId, setSelectedId] = useState<string>(
    ISL_SIGN_ENTRIES[0].id
  );

  const activeEntry = useMemo(() => {
    const found = categoryEntries.find((item) => item.id === selectedId);
    return found ?? categoryEntries[0];
  }, [categoryEntries, selectedId]);

  const handleCategoryChange = (category: LessonCategory) => {
    setSelectedCategory(category);
    const first = ISL_SIGN_ENTRIES.find((entry) => entry.category === category);
    if (first) setSelectedId(first.id);
  };

  const categoryLearnedCount = categoryEntries.filter((e) =>
    learnedLessons.includes(e.id)
  ).length;
  const totalLearnedCount = learnedLessons.length;
  const totalCount = ISL_SIGN_ENTRIES.length;

  const isLearned = learnedLessons.includes(activeEntry.id);
  const isBookmarked = bookmarkedSigns.includes(activeEntry.id);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Guided Curriculum
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold text-slate-900 dark:text-white">
            Numbers & Basic Vocabulary
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Study foundational ISL numerals (0–10) and everyday signs grouped by real-life context, complete with Hindi glosses and ISL sentence order.
          </p>
        </div>

        <div className="shrink-0 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 min-w-[210px]">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Curriculum Progress</span>
            <span className="font-mono-tabular font-semibold text-slate-900 dark:text-slate-100">
              {totalLearnedCount}/{totalCount}
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-purple-600 dark:bg-purple-500 transition-all duration-300"
              style={{
                width: `${Math.round((totalLearnedCount / totalCount) * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Lesson categories"
      >
        {LESSON_CATEGORIES.map((category) => {
          const items = ISL_SIGN_ENTRIES.filter((e) => e.category === category);
          const done = items.filter((e) => learnedLessons.includes(e.id)).length;
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => handleCategoryChange(category)}
              className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                active
                  ? 'bg-blue-600 text-white'
                  : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-600'
              }`}
            >
              <span>{category}</span>
              <span
                className={`font-mono-tabular text-xs ${
                  active
                    ? 'text-blue-100'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {done}/{items.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Split Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List of Signs in Category */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {selectedCategory}
            </h2>
            <span className="font-mono-tabular text-xs text-slate-500 dark:text-slate-400">
              {categoryLearnedCount}/{categoryEntries.length} done
            </span>
          </div>

          <div className="space-y-2">
            {categoryEntries.map((entry) => {
              const active = entry.id === activeEntry.id;
              const done = learnedLessons.includes(entry.id);
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setSelectedId(entry.id)}
                  className={`w-full flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors cursor-pointer ${
                    active
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/50 text-slate-900 dark:text-white'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-700'
                  }`}
                >
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{entry.term}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {entry.hindiTerm} · {entry.transliteration}
                    </p>
                  </div>
                  {done && (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail Stage */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{activeEntry.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeEntry.articulation}</span>
                <span aria-hidden="true">·</span>
                <span>
                  {activeEntry.hindiTerm} ({activeEntry.transliteration})
                </span>
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                {activeEntry.term}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onToggleBookmark(activeEntry.id)}
                aria-label={
                  isBookmarked ? 'Remove bookmark' : 'Bookmark this sign'
                }
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Bookmark
                  className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`}
                />
              </button>

              <button
                type="button"
                onClick={() => onToggleLearned(activeEntry.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  isLearned
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
                {isLearned ? 'Completed' : 'Mark Complete'}
              </button>
            </div>
          </div>

          <DemonstrationStage
            title={activeEntry.term}
            articulation={activeEntry.articulation}
            placeholderNote={activeEntry.placeholderNote}
          />

          <div className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-5">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Verified Linguistic Note
              </h3>
              <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {activeEntry.verifiedNote}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  ISL Gloss Example
                </p>
                <p className="mt-1.5 font-mono-tabular text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {activeEntry.islGlossExample}
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  English: "{activeEntry.englishExample}"
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                  Facial / Non-Manual Cue
                </p>
                <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeEntry.nonManualMarker}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
