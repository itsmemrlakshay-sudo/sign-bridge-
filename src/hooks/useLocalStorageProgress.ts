import { useCallback, useEffect, useState } from 'react';
import { LearningProgress } from '../types/isl';

const PROGRESS_STORAGE_KEY = 'signbridge_progress_v1';
const THEME_STORAGE_KEY = 'signbridge_theme_v1';

const DEFAULT_PROGRESS: LearningProgress = {
  learnedAlphabet: [],
  learnedLessons: [],
  completedScenarios: [],
  bookmarkedSigns: [],
  quizHistory: [],
  bestQuizPercentage: 0,
};

function loadInitialProgress(): LearningProgress {
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<LearningProgress>;
    return {
      learnedAlphabet: Array.isArray(parsed.learnedAlphabet) ? parsed.learnedAlphabet : [],
      learnedLessons: Array.isArray(parsed.learnedLessons) ? parsed.learnedLessons : [],
      completedScenarios: Array.isArray(parsed.completedScenarios) ? parsed.completedScenarios : [],
      bookmarkedSigns: Array.isArray(parsed.bookmarkedSigns) ? parsed.bookmarkedSigns : [],
      quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
      bestQuizPercentage:
        typeof parsed.bestQuizPercentage === 'number' ? parsed.bestQuizPercentage : 0,
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function loadInitialTheme(): 'light' | 'dark' {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // Fallback to light
  }
  return 'light';
}

export function useLocalStorageProgress() {
  const [progress, setProgress] = useState<LearningProgress>(loadInitialProgress);
  const [theme, setTheme] = useState<'light' | 'dark'>(loadInitialTheme);

  useEffect(() => {
    try {
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [progress]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const toggleAlphabetLearned = useCallback((letter: string) => {
    setProgress((prev) => {
      const exists = prev.learnedAlphabet.includes(letter);
      return {
        ...prev,
        learnedAlphabet: exists
          ? prev.learnedAlphabet.filter((item) => item !== letter)
          : [...prev.learnedAlphabet, letter],
      };
    });
  }, []);

  const toggleLessonLearned = useCallback((id: string) => {
    setProgress((prev) => {
      const exists = prev.learnedLessons.includes(id);
      return {
        ...prev,
        learnedLessons: exists
          ? prev.learnedLessons.filter((item) => item !== id)
          : [...prev.learnedLessons, id],
      };
    });
  }, []);

  const toggleScenarioCompleted = useCallback((id: string) => {
    setProgress((prev) => {
      const exists = prev.completedScenarios.includes(id);
      return {
        ...prev,
        completedScenarios: exists
          ? prev.completedScenarios.filter((item) => item !== id)
          : [...prev.completedScenarios, id],
      };
    });
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedSigns.includes(id);
      return {
        ...prev,
        bookmarkedSigns: exists
          ? prev.bookmarkedSigns.filter((item) => item !== id)
          : [...prev.bookmarkedSigns, id],
      };
    });
  }, []);

  const recordQuizResult = useCallback((score: number, total: number) => {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const attempt = {
      id: `${Date.now()}`,
      dateIso: new Date().toISOString(),
      score,
      total,
      percentage,
    };
    setProgress((prev) => ({
      ...prev,
      quizHistory: [attempt, ...prev.quizHistory].slice(0, 10),
      bestQuizPercentage: Math.max(prev.bestQuizPercentage, percentage),
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
    try {
      window.localStorage.removeItem(PROGRESS_STORAGE_KEY);
    } catch {
      // Ignore
    }
  }, []);

  return {
    progress,
    theme,
    toggleTheme,
    toggleAlphabetLearned,
    toggleLessonLearned,
    toggleScenarioCompleted,
    toggleBookmark,
    recordQuizResult,
    resetAllProgress,
  };
}
