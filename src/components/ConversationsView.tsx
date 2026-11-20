import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  MessageSquare,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { ISL_CONVERSATIONS } from '../data/islData';

interface ConversationsViewProps {
  completedScenarios: string[];
  onToggleScenarioCompleted: (id: string) => void;
}

export function ConversationsView({
  completedScenarios,
  onToggleScenarioCompleted,
}: ConversationsViewProps) {
  const [selectedId, setSelectedId] = useState<string>(ISL_CONVERSATIONS[0].id);
  const [turnIndex, setTurnIndex] = useState<number>(0);
  const [hideGloss, setHideGloss] = useState<boolean>(false);

  const scenario = useMemo(() => {
    return (
      ISL_CONVERSATIONS.find((item) => item.id === selectedId) ??
      ISL_CONVERSATIONS[0]
    );
  }, [selectedId]);

  const activeTurn = scenario.turns[turnIndex] ?? scenario.turns[0];
  const isCompleted = completedScenarios.includes(scenario.id);

  const handleSelectScenario = (id: string) => {
    setSelectedId(id);
    setTurnIndex(0);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Contextual Practice
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold text-slate-900 dark:text-white">
            Real-Life Conversation Scenarios
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Practice everyday dialogues in Indian contexts. Step through each turn to learn ISL gloss word order alongside essential facial Non-Manual Markers.
          </p>
        </div>

        <div className="shrink-0 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 min-w-[200px]">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Scenarios Completed</span>
            <span className="font-mono-tabular font-semibold text-slate-900 dark:text-slate-100">
              {completedScenarios.length}/{ISL_CONVERSATIONS.length}
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300"
              style={{
                width: `${Math.round(
                  (completedScenarios.length / ISL_CONVERSATIONS.length) * 100
                )}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scenario Picker + Interactive Dialogue Player */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Scenario List */}
        <div className="lg:col-span-4 space-y-3">
          {ISL_CONVERSATIONS.map((item) => {
            const active = item.id === scenario.id;
            const done = completedScenarios.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectScenario(item.id)}
                className={`w-full text-left rounded-2xl border p-5 transition-colors cursor-pointer ${
                  active
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-600'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.difficulty} · {item.estimatedMinutes} min ·{' '}
                    {item.turns.length} turns
                  </span>
                  {done && (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                  )}
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {item.context}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right: Active Scenario Player */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {scenario.context} · {scenario.difficulty}
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-white">
                {scenario.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setHideGloss((prev) => !prev)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {hideGloss ? (
                  <>
                    <Eye className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                    Show Gloss
                  </>
                ) : (
                  <>
                    <EyeOff className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                    Test Yourself
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onToggleScenarioCompleted(scenario.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                  isCompleted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
                {isCompleted ? 'Completed' : 'Mark Complete'}
              </button>
            </div>
          </div>

          {/* Cultural & Grammar Note */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 text-sm text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-purple-700 dark:text-purple-400">
              Cultural & Grammar Note:{' '}
            </span>
            {scenario.culturalNote}
          </div>

          {/* Dialogue Thread Overview */}
          <div className="space-y-3">
            {scenario.turns.map((turn, idx) => {
              const isCurrent = idx === turnIndex;
              const isSignerA = turn.speaker === 'Signer A';
              return (
                <button
                  key={turn.id}
                  type="button"
                  onClick={() => setTurnIndex(idx)}
                  className={`w-full text-left rounded-xl border p-4 transition-colors cursor-pointer ${
                    isCurrent
                      ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/30 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className={`font-semibold ${
                        isSignerA
                          ? 'text-blue-700 dark:text-blue-400'
                          : 'text-purple-700 dark:text-purple-400'
                      }`}
                    >
                      {turn.speaker}
                    </span>
                    <span className="font-mono-tabular text-slate-400">
                      Turn {idx + 1} of {scenario.turns.length}
                    </span>
                  </div>
                  <p className="mt-1.5 text-base font-medium text-slate-900 dark:text-white">
                    {turn.english}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Turn Detailed Breakdown */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <MessageSquare className="h-4 w-4" />
              <span>
                Turn {turnIndex + 1} Breakdown · {activeTurn.speaker}
              </span>
            </div>

            {hideGloss ? (
              <div className="rounded-lg border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 text-center space-y-2">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Think about the ISL word order and facial expression for:{' '}
                  <strong className="text-slate-900 dark:text-white">
                    "{activeTurn.english}"
                  </strong>
                </p>
                <button
                  type="button"
                  onClick={() => setHideGloss(false)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  Reveal ISL Gloss
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    ISL Gloss Order
                  </p>
                  <p className="mt-1 font-mono-tabular text-base font-bold text-slate-900 dark:text-white">
                    {activeTurn.islGloss}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                      Non-Manual Marker (Face / Head)
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      {activeTurn.nonManualMarker}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                      Grammar Insight
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      {activeTurn.learningNote}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                  Key Signs: {activeTurn.keySigns.join(' · ')} — Reference ISLRTC dictionary for verified movement demonstrations.
                </p>
              </div>
            )}

            {/* Turn Stepper */}
            <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-4">
              <button
                type="button"
                disabled={turnIndex === 0}
                onClick={() => setTurnIndex((i) => Math.max(0, i - 1))}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous Turn
              </button>

              {turnIndex < scenario.turns.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setTurnIndex((i) =>
                      Math.min(scenario.turns.length - 1, i + 1)
                    )
                  }
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 cursor-pointer"
                >
                  Next Turn
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (!isCompleted) onToggleScenarioCompleted(scenario.id);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-purple-700 cursor-pointer"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {isCompleted ? 'Scenario Completed' : 'Finish & Mark Complete'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
