import { AppSection } from '../types/isl';

interface FooterProps {
  onNavigate: (section: AppSection) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
              Sign<span className="text-blue-600 dark:text-blue-400">Bridge</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Learn. Sign. Connect. A zero-budget educational initiative dedicated to accessible Indian Sign Language (ISL) literacy.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Learning Modules
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('alphabet')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Alphabet A–Z
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('lessons')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Numbers & Vocabulary
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('dictionary')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  ISL Dictionary
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('conversations')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Conversation Practice
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Content Accuracy & Privacy
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Built around verified Indian Sign Language linguistics and ISLRTC standards. Where verified visual media is unavailable offline, clear placeholders are shown rather than invented gestures.
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
              No account needed · Progress saved locally in browser storage
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>SignBridge Indian Sign Language Education</span>
          <span>Reference: Indian Sign Language Research and Training Centre (ISLRTC)</span>
        </div>
      </div>
    </footer>
  );
}
