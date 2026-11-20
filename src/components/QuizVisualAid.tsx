import { Hand, HelpCircle, Smile } from 'lucide-react';
import {
  FacialExpressionCue,
  QuizQuestion,
  VowelFingertip,
} from '../types/isl';

interface QuizVisualAidProps {
  question: QuizQuestion;
  revealed: boolean;
}

const VOWEL_POINTS: Record<
  VowelFingertip,
  { cx: number; cy: number; letter: string }
> = {
  thumb: { cx: 42, cy: 106, letter: 'A' },
  index: { cx: 70, cy: 38, letter: 'E' },
  middle: { cx: 96, cy: 28, letter: 'I' },
  ring: { cx: 122, cy: 38, letter: 'O' },
  pinky: { cx: 145, cy: 61, letter: 'U' },
};

function FacialExpressionSvg({
  cue,
  isHidden,
}: {
  cue: FacialExpressionCue;
  isHidden: boolean;
}) {
  if (isHidden) {
    return (
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-dashed border-purple-300 dark:border-purple-700 bg-purple-50/70 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
        <HelpCircle className="h-7 w-7" />
      </div>
    );
  }

  return (
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-1.5">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        role="img"
        aria-label={`Facial expression guide: ${cue}`}
      >
        {/* Head Outline */}
        <circle
          cx="50"
          cy="52"
          r="30"
          className="fill-slate-50 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-500"
          strokeWidth="2.5"
        />

        {/* Eyes */}
        <circle cx="39" cy="48" r="2.8" className="fill-slate-800 dark:fill-slate-100" />
        <circle cx="61" cy="48" r="2.8" className="fill-slate-800 dark:fill-slate-100" />

        {/* Eyebrows by NMM cue */}
        {cue === 'raised-brows' && (
          <>
            <path
              d="M32 36 Q39 30 46 36"
              fill="none"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M54 36 Q61 30 68 36"
              fill="none"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Upward cue arrows */}
            <path
              d="M20 34 L20 22 M17 25 L20 22 L23 25"
              fill="none"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M80 34 L80 22 M77 25 L80 22 L83 25"
              fill="none"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}

        {cue === 'furrowed-brows' && (
          <>
            <path
              d="M32 37 L45 42"
              fill="none"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M68 37 L55 42"
              fill="none"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Inward focus arrows */}
            <path
              d="M22 36 L30 39"
              fill="none"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M78 36 L70 39"
              fill="none"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}

        {(cue === 'attentive' || cue === 'warm-nod' || cue === 'headshake') && (
          <>
            <path
              d="M33 40 Q39 38 45 40"
              fill="none"
              className="stroke-slate-600 dark:stroke-slate-300"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M55 40 Q61 38 67 40"
              fill="none"
              className="stroke-slate-600 dark:stroke-slate-300"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Mouth */}
        {cue === 'warm-nod' ? (
          <path
            d="M39 62 Q50 71 61 62"
            fill="none"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        ) : cue === 'headshake' ? (
          <line
            x1="41"
            y1="64"
            x2="59"
            y2="64"
            className="stroke-slate-700 dark:stroke-slate-200"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M41 63 Q50 67 59 63"
            fill="none"
            className="stroke-slate-700 dark:stroke-slate-200"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}

        {/* Head motion indicators */}
        {cue === 'headshake' && (
          <>
            <path
              d="M14 52 L7 52 M10 49 L7 52 L10 55"
              fill="none"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M86 52 L93 52 M90 49 L93 52 L90 55"
              fill="none"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </>
        )}

        {cue === 'warm-nod' && (
          <path
            d="M86 42 L86 58 M83 45 L86 42 L89 45 M83 55 L86 58 L89 55"
            fill="none"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}

function VowelMiniMap({
  highlight,
  mode,
  revealed,
}: {
  highlight: VowelFingertip;
  mode?: 'mystery-middle' | 'unlabeled-palm';
  revealed: boolean;
}) {
  return (
    <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-1">
      <svg
        viewBox="0 0 185 165"
        className="h-full w-full"
        role="img"
        aria-label="Verified ISL two-handed vowel fingertip diagram"
      >
        <path
          d="M58 150 L58 118 L39 107 C35 104 36 99 41 97 C46 95 53 100 60 107 L66 43 C66 36 74 36 75 43 L77 89 L91 33 C92 26 101 26 102 33 L101 87 L117 41 C119 35 127 36 126 43 L118 92 L140 62 C143 57 151 60 148 66 L126 113 L123 150 Z"
          className="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {(Object.keys(VOWEL_POINTS) as VowelFingertip[]).map((tip) => {
          const pt = VOWEL_POINTS[tip];
          const isTarget = tip === highlight;
          const showHighlight =
            revealed || (mode === 'mystery-middle' && isTarget);
          const label = revealed
            ? pt.letter
            : mode === 'mystery-middle' && isTarget
              ? '?'
              : '';

          return (
            <g key={tip}>
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r={showHighlight && isTarget ? 11 : 7}
                className={
                  showHighlight && isTarget
                    ? 'fill-blue-600 dark:fill-blue-500 stroke-white dark:stroke-slate-950'
                    : 'fill-purple-100 dark:fill-purple-950 stroke-purple-400 dark:stroke-purple-600'
                }
                strokeWidth="1.8"
              />
              {label && (
                <text
                  x={pt.cx}
                  y={pt.cy + 3.5}
                  textAnchor="middle"
                  className="fill-white text-[10px] font-bold"
                >
                  {label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function QuizVisualAid({ question, revealed }: QuizVisualAidProps) {
  const hideFacial = Boolean(question.hideFacialCueUntilAnswered) && !revealed;

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 p-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-semibold text-blue-700 dark:text-blue-400">
          Example ISL Context & Visual Guide
        </span>
        <span className="font-mono-tabular font-medium text-slate-600 dark:text-slate-300">
          Gloss: {question.exampleGloss}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Example Facial Expression */}
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
          <FacialExpressionSvg
            cue={question.facialExpressionCue}
            isHidden={hideFacial}
          />
          <div className="min-w-0 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 dark:text-purple-400">
              <Smile className="h-3.5 w-3.5 shrink-0" />
              <span>Example Facial Expression</span>
            </div>
            {hideFacial ? (
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Select an answer to reveal the verified facial expression diagram and Non-Manual Marker guide.
              </p>
            ) : (
              <>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  {question.facialExpressionLabel}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {question.facialExpressionDetail}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Example Hand Gesture */}
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
          {question.vowelHighlight ? (
            <VowelMiniMap
              highlight={question.vowelHighlight}
              mode={question.vowelQuizMode}
              revealed={revealed}
            />
          ) : (
            <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-2 text-center">
              <Hand className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="mt-1 text-[10px] font-semibold leading-tight text-slate-600 dark:text-slate-400">
                ISLRTC Placeholder
              </span>
            </div>
          )}

          <div className="min-w-0 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <Hand className="h-3.5 w-3.5 shrink-0" />
              <span>Hand Gesture ({question.handGestureMode})</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {question.handGestureExample}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
