import {
  ArrowRight,
  Bookmark,
  RotateCcw,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import {
  ISL_ALPHABET,
  ISL_CONVERSATIONS,
  ISL_SIGN_ENTRIES,
} from '../data/islData';
import { AppSection, LearningProgress } from '../types/isl';

interface ProgressViewProps {
  progress: LearningProgress;
  onNavigate: (section: AppSection) => void;
  onResetProgress: () => void;
}

export function ProgressView({
  progress,
  onNavigate,
  onResetProgress,
}: ProgressViewProps) {
  const [confirmingReset, setConfirmingReset] = useState(false);

  const alphabetPercent = Math.round(
    (progress.learnedAlphabet.length / ISL_ALPHABET.length) * 100
  );
  const lessonsPercent = Math.round(
    (progress.learnedLessons.length / ISL_SIGN_ENTRIES.length) * 100
  );
  const scenariosPercent = Math.round(
    (progress.completedScenarios.length / ISL_CONVERSATIONS.length) * 100
  );

  const bookmarkedItems = ISL_SIGN_ENTRIES.filter((entry) =>
    progress.bookmarkedSigns.includes(entry.id)
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Local Browser Storage
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold text-slate-900 dark:text-white">
            My Learning Progress
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            All milestones, bookmarked signs, and quiz results are stored locally in your browser with zero login required.
          </p>
        </div>

        <div className="shrink-0">
          {!confirmingReset ? (
            <button
              type="button"
              onClick={() => setConfirmingReset(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset Progress
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-lg border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 px-3 py-2">
              <span className="text-xs font-medium text-rose-800 dark:text-rose-200">
                Clear all saved data?
              </span>
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setConfirmingReset(false);
                }}
                className="inline-flex items-center gap-1 rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700 cursor-pointer"
              >
                <Trash2 className="h-3 w-3" />
                Confirm
              </button>
              <button
                type="button"
                onClick={() => setConfirmingReset(false)}
                className="rounded px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:underline cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mastery Bars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">
              Alphabet A–Z
            </h2>
            <span className="font-mono-tabular text-sm font-bold text-blue-600 dark:text-blue-400">
              {alphabetPercent}%
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300"
              style={{ width: `${alphabetPercent}%` }}
            />
          </div>
          <p className="font-mono-tabular text-xs text-slate-500 dark:text-slate-400">
            {progress.learnedAlphabet.length} of {ISL_ALPHABET.length} letters mastered
          </p>
          <button
            type="button"
            onClick={() => onNavigate('alphabet')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Continue Alphabet <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">
              Numbers & Vocabulary
            </h2>
            <span className="font-mono-tabular text-sm font-bold text-purple-600 dark:text-purple-400">
              {lessonsPercent}%
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-purple-600 dark:bg-purple-500 transition-all duration-300"
              style={{ width: `${lessonsPercent}%` }}
            />
          </div>
          <p className="font-mono-tabular text-xs text-slate-500 dark:text-slate-400">
            {progress.learnedLessons.length} of {ISL_SIGN_ENTRIES.length} signs completed
          </p>
          <button
            type="button"
            onClick={() => onNavigate('lessons')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
          >
            Continue Lessons <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">
              Conversations
            </h2>
            <span className="font-mono-tabular text-sm font-bold text-blue-600 dark:text-blue-400">
              {scenariosPercent}%
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300"
              style={{ width: `${scenariosPercent}%` }}
            />
          </div>
          <p className="font-mono-tabular text-xs text-slate-500 dark:text-slate-400">
            {progress.completedScenarios.length} of {ISL_CONVERSATIONS.length} scenarios finished
          </p>
          <button
            type="button"
            onClick={() => onNavigate('conversations')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Practice Scenarios <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Bookmarks + Quiz History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Saved Bookmarks */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Bookmarked Dictionary Signs
            </h2>
            <span className="font-mono-tabular text-xs text-slate-500 dark:text-slate-400">
              {bookmarkedItems.length} saved
            </span>
          </div>

          {bookmarkedItems.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-6 text-center space-y-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No signs bookmarked yet. Bookmark vocabulary in Lessons or Dictionary for quick review.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('dictionary')}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Open Dictionary
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {bookmarkedItems.map((item) => (
                <div
                  key={item.id}
                  className="py-3 flex items-center justify-between gap-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.term}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.hindiTerm} ({item.transliteration}) · {item.category}
                    </p>
                  </div>
                  <Bookmark className="h-4 w-4 text-purple-600 dark:text-purple-400 fill-current shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quiz History */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Quiz Score History
            </h2>
            <span className="font-mono-tabular text-xs font-semibold text-blue-600 dark:text-blue-400">
              Best: {progress.bestQuizPercentage}%
            </span>
          </div>

          {progress.quizHistory.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-6 text-center space-y-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                You haven’t completed a quiz attempt yet.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('quiz')}
                className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 cursor-pointer"
              >
                Take Quiz Now
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                    <th className="pb-2 font-medium">Date</th>
                    <th className="pb-2 font-medium">Score</th>
                    <th className="pb-2 font-medium text-right">Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {progress.quizHistory.map((attempt) => (
                    <tr key={attempt.id}>
                      <td className="py-2.5 text-xs text-slate-600 dark:text-slate-300">
                        {new Date(attempt.dateIso).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="py-2.5 font-mono-tabular text-xs font-medium text-slate-900 dark:text-white">
                        {attempt.score} / {attempt.total}
                      </td>
                      <td className="py-2.5 font-mono-tabular text-xs font-bold text-right text-blue-600 dark:text-blue-400">
                        {attempt.percentage}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
