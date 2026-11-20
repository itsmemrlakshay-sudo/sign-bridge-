import { Bookmark, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ISL_SIGN_ENTRIES, LESSON_CATEGORIES } from '../data/islData';
import { LessonCategory, SignEntry } from '../types/isl';
import { DemonstrationStage } from './DemonstrationStage';

interface DictionaryViewProps {
  bookmarkedSigns: string[];
  onToggleBookmark: (id: string) => void;
}

export function DictionaryView({
  bookmarkedSigns,
  onToggleBookmark,
}: DictionaryViewProps) {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<
    'All' | 'Bookmarked' | LessonCategory
  >('All');
  const [selectedSign, setSelectedSign] = useState<SignEntry>(
    ISL_SIGN_ENTRIES[0]
  );

  const filteredEntries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ISL_SIGN_ENTRIES.filter((entry) => {
      if (categoryFilter === 'Bookmarked') {
        if (!bookmarkedSigns.includes(entry.id)) return false;
      } else if (categoryFilter !== 'All') {
        if (entry.category !== categoryFilter) return false;
      }

      if (!q) return true;
      return (
        entry.term.toLowerCase().includes(q) ||
        entry.hindiTerm.toLowerCase().includes(q) ||
        entry.transliteration.toLowerCase().includes(q) ||
        entry.category.toLowerCase().includes(q) ||
        entry.islGlossExample.toLowerCase().includes(q)
      );
    });
  }, [query, categoryFilter, bookmarkedSigns]);

  const activeEntry = useMemo(() => {
    if (filteredEntries.some((item) => item.id === selectedSign.id)) {
      return selectedSign;
    }
    return filteredEntries[0] ?? null;
  }, [filteredEntries, selectedSign]);

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
          Reference & Bookmarks
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold text-slate-900 dark:text-white">
          Searchable ISL Dictionary
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
          Search across English terms, Hindi words, transliterations, or ISL gloss phrases. Bookmark frequently used signs for fast revision.
        </p>
      </div>

      {/* Search Bar & Filters */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search English, Hindi, or transliteration (e.g. Water, Paani, Hospital)..."
            aria-label="Search ISL dictionary"
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-3 pl-10 pr-10 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {(['All', 'Bookmarked', ...LESSON_CATEGORIES] as const).map(
            (filter) => {
              const active = categoryFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setCategoryFilter(filter)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white'
                      : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-600'
                  }`}
                >
                  {filter === 'Bookmarked'
                    ? `Bookmarked (${bookmarkedSigns.length})`
                    : filter}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Results Layout */}
      {filteredEntries.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-12 text-center">
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            No matching dictionary entries found
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Try clearing your search query or switching to the "All" category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setCategoryFilter('All');
            }}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Result List */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 max-h-[640px] overflow-y-auto space-y-2">
            <div className="px-2 pb-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Matching Signs</span>
              <span className="font-mono-tabular">
                {filteredEntries.length} results
              </span>
            </div>

            {filteredEntries.map((entry) => {
              const isSelected = activeEntry?.id === entry.id;
              const isSaved = bookmarkedSigns.includes(entry.id);
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setSelectedSign(entry)}
                  className={`w-full flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/50'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 hover:border-blue-400 dark:hover:border-blue-700'
                  }`}
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-slate-900 dark:text-white truncate">
                      {entry.term}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 truncate">
                      {entry.hindiTerm} ({entry.transliteration}) ·{' '}
                      {entry.category}
                    </p>
                  </div>
                  {isSaved && (
                    <Bookmark className="h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400 fill-current" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Dictionary Inspector */}
          {activeEntry && (
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{activeEntry.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeEntry.articulation}</span>
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white">
                    {activeEntry.term}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Hindi: {activeEntry.hindiTerm} ({activeEntry.transliteration})
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onToggleBookmark(activeEntry.id)}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    bookmarkedSigns.includes(activeEntry.id)
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Bookmark
                    className={`h-4 w-4 ${
                      bookmarkedSigns.includes(activeEntry.id)
                        ? 'fill-current'
                        : ''
                    }`}
                  />
                  {bookmarkedSigns.includes(activeEntry.id)
                    ? 'Bookmarked'
                    : 'Bookmark Sign'}
                </button>
              </div>

              <DemonstrationStage
                title={activeEntry.term}
                articulation={activeEntry.articulation}
                placeholderNote={activeEntry.placeholderNote}
              />

              <div className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-5">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Verified Sign Note
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                    {activeEntry.verifiedNote}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                    Sentence Structure Example
                  </p>
                  <p className="font-mono-tabular text-sm font-semibold text-slate-900 dark:text-slate-100">
                    ISL Gloss: {activeEntry.islGlossExample}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    English: "{activeEntry.englishExample}"
                  </p>
                  <p className="text-xs text-purple-700 dark:text-purple-400">
                    Non-Manual Marker: {activeEntry.nonManualMarker}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
