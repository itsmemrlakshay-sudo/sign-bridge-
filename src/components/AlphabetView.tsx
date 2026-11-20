import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  RotateCcw,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { ISL_ALPHABET } from '../data/islData';
import { DemonstrationStage } from './DemonstrationStage';

interface AlphabetViewProps {
  learnedAlphabet: string[];
  onToggleLearned: (letter: string) => void;
}

type AlphabetFilter = 'all' | 'vowels' | 'learned' | 'remaining';

export function AlphabetView({
  learnedAlphabet,
  onToggleLearned,
}: AlphabetViewProps) {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const [filter, setFilter] = useState<AlphabetFilter>('all');
  const [practiceHideDetails, setPracticeHideDetails] = useState<boolean>(false);

  const filteredAlphabet = useMemo(() => {
    if (filter === 'vowels') return ISL_ALPHABET.filter((item) => item.isVowel);
    if (filter === 'learned')
      return ISL_ALPHABET.filter((item) => learnedAlphabet.includes(item.letter));
    if (filter === 'remaining')
      return ISL_ALPHABET.filter((item) => !learnedAlphabet.includes(item.letter));
    return ISL_ALPHABET;
  }, [filter, learnedAlphabet]);

  const currentSign = useMemo(() => {
    return (
      ISL_ALPHABET.find((item) => item.letter === selectedLetter) ?? ISL_ALPHABET[0]
    );
  }, [selectedLetter]);

  const currentIndex = ISL_ALPHABET.findIndex(
    (item) => item.letter === currentSign.letter
  );

  const handlePrev = () => {
    const prevIdx =
      (currentIndex - 1 + ISL_ALPHABET.length) % ISL_ALPHABET.length;
    setSelectedLetter(ISL_ALPHABET[prevIdx].letter);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % ISL_ALPHABET.length;
    setSelectedLetter(ISL_ALPHABET[nextIdx].letter);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const isLearned = learnedAlphabet.includes(currentSign.letter);
  const masteryPercent = Math.round(
    (learnedAlphabet.length / ISL_ALPHABET.length) * 100
  );

  return (
    <div className="space-y-8">
      {/* Header & Mastery Summary */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Two-Handed Fingerspelling
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold text-slate-900 dark:text-white">
            Indian Sign Language Alphabet (A–Z)
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            ISL uses a two-handed manual alphabet system. Select any letter below or use left/right arrow keys to study verified vowel fingertip maps and linguistic notes.
          </p>
        </div>

        <div className="shrink-0 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 min-w-[210px]">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Letters Learned</span>
            <span className="font-mono-tabular font-semibold text-slate-900 dark:text-slate-100">
              {learnedAlphabet.length}/26 ({masteryPercent}%)
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300"
              style={{ width: `${masteryPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter Bar & Practice Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800"
          role="tablist"
          aria-label="Filter alphabet letters"
        >
          {(
            [
              { id: 'all', label: 'All (26)' },
              { id: 'vowels', label: 'Vowels (A–U Map)' },
              { id: 'learned', label: `Learned (${learnedAlphabet.length})` },
              {
                id: 'remaining',
                label: `To Learn (${26 - learnedAlphabet.length})`,
              },
            ] as { id: AlphabetFilter; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={filter === tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === tab.id
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPracticeHideDetails((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          {practiceHideDetails ? (
            <>
              <Eye className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              Show Study Notes
            </>
          ) : (
            <>
              <EyeOff className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              Practice Recall Mode
            </>
          )}
        </button>
      </div>

      {/* Main Split Stage: A-Z Grid + Active Learning Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: A-Z Interactive Selector */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Select a Letter
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {filteredAlphabet.length} shown
            </span>
          </div>

          {filteredAlphabet.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No letters match this filter yet.
              </p>
              <button
                type="button"
                onClick={() => setFilter('all')}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Show all 26 letters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
              {filteredAlphabet.map((item) => {
                const active = item.letter === currentSign.letter;
                const done = learnedAlphabet.includes(item.letter);
                return (
                  <button
                    key={item.letter}
                    type="button"
                    onClick={() => setSelectedLetter(item.letter)}
                    aria-label={`Letter ${item.letter}${done ? ', learned' : ''}`}
                    className={`relative flex h-12 flex-col items-center justify-center rounded-lg border font-display text-base font-bold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      active
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : done
                          ? 'border-purple-300 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 hover:border-purple-500'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-600'
                    }`}
                  >
                    <span>{item.letter}</span>
                    {done && (
                      <CheckCircle2
                        className={`h-3 w-3 absolute top-1 right-1 ${
                          active
                            ? 'text-white'
                            : 'text-purple-600 dark:text-purple-400'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Purple-tinted keys indicate letters marked as learned. Vowels A, E, I, O, U include verified fingertip diagrams.
          </p>
        </div>

        {/* Right: Detailed Learning Stage */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{currentSign.isVowel ? 'Vowel' : 'Consonant'}</span>
                <span aria-hidden="true">·</span>
                <span>{currentSign.articulation}</span>
                <span aria-hidden="true">·</span>
                <span>Hindi sound: {currentSign.hindiPhonetic}</span>
              </div>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
                Letter {currentSign.letter}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onToggleLearned(currentSign.letter)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isLearned
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              {isLearned ? 'Learned' : 'Mark as Learned'}
            </button>
          </div>

          <DemonstrationStage
            title={`Letter ${currentSign.letter}`}
            articulation={currentSign.articulation}
            placeholderNote={currentSign.placeholderNote}
            vowelFingertip={currentSign.vowelFingertip}
          />

          {practiceHideDetails ? (
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5 text-center space-y-3">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Recall Check: Can you describe the articulation type and fingerspelling role of "{currentSign.letter}" before revealing?
              </p>
              <button
                type="button"
                onClick={() => setPracticeHideDetails(false)}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <Eye className="h-3.5 w-3.5" />
                Reveal Verified Notes
              </button>
            </div>
          ) : (
            <div className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-5">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Verified Formation Note
                </h3>
                <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  {currentSign.verifiedDescription}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Practical Fingerspelling Tip
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {currentSign.usageNote}
                </p>
              </div>
            </div>
          )}

          {/* Previous / Next Navigation */}
          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-5">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <span className="font-mono-tabular text-xs text-slate-500 dark:text-slate-400">
              {currentIndex + 1} / {ISL_ALPHABET.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
