import {
  ArrowRight,
  Award,
  CheckCircle2,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { useState } from 'react';
import { ISL_QUIZ_QUESTIONS } from '../data/islData';
import { QuizAttempt } from '../types/isl';
import { QuizVisualAid } from './QuizVisualAid';

interface QuizViewProps {
  bestQuizPercentage: number;
  quizHistory: QuizAttempt[];
  onRecordResult: (score: number, total: number) => void;
}

export function QuizView({
  bestQuizPercentage,
  quizHistory,
  onRecordResult,
}: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const totalQuestions = ISL_QUIZ_QUESTIONS.length;
  const currentQuestion = ISL_QUIZ_QUESTIONS[currentIndex];
  const hasSubmittedCurrent = selectedOption !== null;

  const handleSelectOption = (optionIndex: number) => {
    if (hasSubmittedCurrent) return;
    setSelectedOption(optionIndex);
    setAnswers((prev) => [...prev, optionIndex]);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      const finalScore = answers.reduce((acc, ans, idx) => {
        return acc + (ans === ISL_QUIZ_QUESTIONS[idx].correctIndex ? 1 : 0);
      }, 0);
      onRecordResult(finalScore, totalQuestions);
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setQuizFinished(false);
  };

  const scoreCount = answers.reduce((acc, ans, idx) => {
    return acc + (ans === ISL_QUIZ_QUESTIONS[idx].correctIndex ? 1 : 0);
  }, 0);
  const finalPercentage = Math.round((scoreCount / totalQuestions) * 100);

  if (quizFinished) {
    return (
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 text-center space-y-5">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
            <Award className="h-7 w-7" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Quiz Complete
            </p>
            <h1 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              You scored {scoreCount} out of {totalQuestions}
            </h1>
            <p className="mt-2 font-mono-tabular text-2xl font-bold text-blue-600 dark:text-blue-400">
              {finalPercentage}% Accuracy
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {finalPercentage >= 80
                ? 'Strong grasp of Indian Sign Language fundamentals, vowel mapping, and ISL syntax.'
                : finalPercentage >= 50
                  ? 'Solid start! Review the Alphabet vowel map and Conversation glosses to boost your score.'
                  : 'Keep practicing! Explore the Alphabet and Lessons modules and try again.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </button>
          </div>
        </div>

        {/* Question-by-Question Review */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
            Answer Breakdown
          </h2>
          {ISL_QUIZ_QUESTIONS.map((q, idx) => {
            const userChoice = answers[idx];
            const isCorrect = userChoice === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-2"
              >
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400">
                    Question {idx + 1} · {q.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 font-semibold ${
                      isCorrect
                        ? 'text-emerald-700 dark:text-emerald-400'
                        : 'text-rose-700 dark:text-rose-400'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Correct
                      </>
                    ) : (
                      <>
                        <XCircle className="h-3.5 w-3.5" />
                        Incorrect
                      </>
                    )}
                  </span>
                </div>
                <p className="font-medium text-slate-900 dark:text-white">
                  {q.question}
                </p>
                {!isCorrect && (
                  <p className="text-xs text-rose-700 dark:text-rose-400">
                    Your answer: {q.options[userChoice]}
                  </p>
                )}
                <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Correct answer: {q.options[q.correctIndex]}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {q.explanation}
                </p>
                <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1 border-t border-slate-100 dark:border-slate-800">
                  <p>
                    <strong className="text-purple-700 dark:text-purple-400">
                      Facial Expression ({q.exampleGloss}):
                    </strong>{' '}
                    {q.facialExpressionLabel} — {q.facialExpressionDetail}
                  </p>
                  <p>
                    <strong className="text-blue-700 dark:text-blue-400">
                      Hand Gesture ({q.handGestureMode}):
                    </strong>{' '}
                    {q.handGestureExample}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Interactive Assessment
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold text-slate-900 dark:text-white">
            ISL Knowledge Quiz
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Test your understanding of verified ISL fingerspelling, grammar, vocabulary, and Deaf culture.
          </p>
        </div>

        <div className="text-left sm:text-right shrink-0">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Personal Best · {quizHistory.length} attempt
            {quizHistory.length === 1 ? '' : 's'}
          </p>
          <p className="font-mono-tabular text-xl font-bold text-blue-600 dark:text-blue-400">
            {bestQuizPercentage}%
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
          <span>
            Question{' '}
            <span className="font-mono-tabular font-semibold text-slate-900 dark:text-white">
              {currentIndex + 1} / {totalQuestions}
            </span>
          </span>
          <span>{currentQuestion.category}</span>
        </div>
        <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300"
            style={{
              width: `${Math.round(
                ((currentIndex + (hasSubmittedCurrent ? 1 : 0)) /
                  totalQuestions) *
                  100
              )}%`,
            }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
          {currentQuestion.question}
        </h2>

        <QuizVisualAid
          question={currentQuestion}
          revealed={hasSubmittedCurrent}
        />

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctIndex;

            let optionClasses =
              'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-100 hover:border-blue-500 dark:hover:border-blue-500';

            if (hasSubmittedCurrent) {
              if (isCorrect) {
                optionClasses =
                  'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
              } else if (isSelected) {
                optionClasses =
                  'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
              } else {
                optionClasses =
                  'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/30 text-slate-400 dark:text-slate-500';
              }
            }

            return (
              <button
                key={option}
                type="button"
                disabled={hasSubmittedCurrent}
                onClick={() => handleSelectOption(idx)}
                className={`w-full flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm sm:text-base font-medium transition-colors ${
                  hasSubmittedCurrent ? 'cursor-default' : 'cursor-pointer'
                } ${optionClasses}`}
              >
                <span>{option}</span>
                {hasSubmittedCurrent && isCorrect && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                    Correct
                  </span>
                )}
                {hasSubmittedCurrent && isSelected && !isCorrect && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 dark:text-rose-400 shrink-0">
                    <XCircle className="h-4 w-4" />
                    Incorrect
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Verified Explanation */}
        {hasSubmittedCurrent && (
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Verified Explanation
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentQuestion.explanation}
            </p>
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer"
              >
                {currentIndex + 1 < totalQuestions
                  ? 'Next Question'
                  : 'Finish & See Score'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
