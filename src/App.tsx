import { useEffect, useState } from 'react';
import { AlphabetView } from './components/AlphabetView';
import { ConversationsView } from './components/ConversationsView';
import { DictionaryView } from './components/DictionaryView';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { LessonsView } from './components/LessonsView';
import { Navbar } from './components/Navbar';
import { ProgressView } from './components/ProgressView';
import { QuizView } from './components/QuizView';
import { useLocalStorageProgress } from './hooks/useLocalStorageProgress';
import { AppSection } from './types/isl';

export default function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('home');
  const {
    progress,
    theme,
    toggleTheme,
    toggleAlphabetLearned,
    toggleLessonLearned,
    toggleScenarioCompleted,
    toggleBookmark,
    recordQuizResult,
    resetAllProgress,
  } = useLocalStorageProgress();

  const handleNavigate = (section: AppSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<AppSection, string> = {
      home: 'SignBridge — Learn. Sign. Connect.',
      alphabet: 'Alphabet A–Z | SignBridge',
      lessons: 'Numbers & Vocabulary | SignBridge',
      dictionary: 'ISL Dictionary | SignBridge',
      conversations: 'Real-Life Conversations | SignBridge',
      quiz: 'ISL Knowledge Quiz | SignBridge',
      progress: 'My Progress | SignBridge',
    };
    document.title = titles[activeSection];
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {activeSection === 'home' && (
          <HomeView progress={progress} onNavigate={handleNavigate} />
        )}

        {activeSection === 'alphabet' && (
          <AlphabetView
            learnedAlphabet={progress.learnedAlphabet}
            onToggleLearned={toggleAlphabetLearned}
          />
        )}

        {activeSection === 'lessons' && (
          <LessonsView
            learnedLessons={progress.learnedLessons}
            bookmarkedSigns={progress.bookmarkedSigns}
            onToggleLearned={toggleLessonLearned}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {activeSection === 'dictionary' && (
          <DictionaryView
            bookmarkedSigns={progress.bookmarkedSigns}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {activeSection === 'conversations' && (
          <ConversationsView
            completedScenarios={progress.completedScenarios}
            onToggleScenarioCompleted={toggleScenarioCompleted}
          />
        )}

        {activeSection === 'quiz' && (
          <QuizView
            bestQuizPercentage={progress.bestQuizPercentage}
            quizHistory={progress.quizHistory}
            onRecordResult={recordQuizResult}
          />
        )}

        {activeSection === 'progress' && (
          <ProgressView
            progress={progress}
            onNavigate={handleNavigate}
            onResetProgress={resetAllProgress}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
