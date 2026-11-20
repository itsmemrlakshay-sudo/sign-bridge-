import { Eye, Info } from 'lucide-react';
import { VowelFingertip } from '../types/isl';

interface DemonstrationStageProps {
  title: string;
  articulation: string;
  placeholderNote: string;
  vowelFingertip?: VowelFingertip;
}

const FINGERTIP_COORDS: Record<
  VowelFingertip,
  { cx: number; cy: number; letter: string; label: string }
> = {
  thumb: { cx: 52, cy: 132, letter: 'A', label: 'Thumb = A' },
  index: { cx: 88, cy: 48, letter: 'E', label: 'Index = E' },
  middle: { cx: 120, cy: 36, letter: 'I', label: 'Middle = I' },
  ring: { cx: 152, cy: 48, letter: 'O', label: 'Ring = O' },
  pinky: { cx: 180, cy: 76, letter: 'U', label: 'Pinky = U' },
};

export function DemonstrationStage({
  title,
  articulation,
  placeholderNote,
  vowelFingertip,
}: DemonstrationStageProps) {
  if (vowelFingertip) {
    const active = FINGERTIP_COORDS[vowelFingertip];
    return (
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4">
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            Verified Two-Handed Vowel Position Map
          </span>
          <span>{articulation}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
            <svg
              viewBox="0 0 230 220"
              className="w-48 h-48"
              role="img"
              aria-label={`Verified ISL vowel fingertip map showing ${active.label}`}
            >
              {/* Stylized schematic non-dominant open palm reference (abstract anatomical guide) */}
              <path
                d="M72 190 L72 148 L48 134 C43 131 44 124 50 122 C56 120 65 126 74 134 L82 54 C82 46 92 46 93 54 L96 112 L113 42 C114 34 125 34 126 42 L125 110 L146 52 C148 44 158 46 157 54 L147 115 L174 78 C178 72 187 76 184 83 L156 142 L152 190 Z"
                className="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Five vowel reference points */}
              {(Object.keys(FINGERTIP_COORDS) as VowelFingertip[]).map((tip) => {
                const pt = FINGERTIP_COORDS[tip];
                const isSelected = tip === vowelFingertip;
                return (
                  <g key={tip}>
                    <circle
                      cx={pt.cx}
                      cy={pt.cy}
                      r={isSelected ? 14 : 9}
                      className={
                        isSelected
                          ? 'fill-blue-600 dark:fill-blue-500 stroke-white dark:stroke-slate-950'
                          : 'fill-purple-100 dark:fill-purple-950 stroke-purple-400 dark:stroke-purple-600'
                      }
                      strokeWidth="2"
                    />
                    <text
                      x={pt.cx}
                      y={pt.cy + 4}
                      textAnchor="middle"
                      className={`text-[11px] font-bold ${
                        isSelected
                          ? 'fill-white'
                          : 'fill-purple-800 dark:fill-purple-200'
                      }`}
                    >
                      {pt.letter}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="space-y-3 text-sm">
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              Touch Point: {active.label}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              In Indian Sign Language two-handed fingerspelling, the non-dominant open palm serves as the vowel map. Point with your dominant index finger to the highlighted fingertip.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sequence: Thumb (A) · Index (E) · Middle (I) · Ring (O) · Pinky (U)
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 p-6">
      <div className="flex flex-col items-center text-center max-w-md mx-auto">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
          <Eye className="h-5 w-5" />
        </div>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
          Verified ISL Demonstration Placeholder
        </p>
        <h4 className="mt-1 font-display text-base font-semibold text-slate-900 dark:text-slate-100">
          {title} — {articulation}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {placeholderNote}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Info className="h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-400" />
          <span>No unverified or synthetic hand gestures are rendered.</span>
        </div>
      </div>
    </div>
  );
}
