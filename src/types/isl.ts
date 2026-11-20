export type AppSection =
  | 'home'
  | 'alphabet'
  | 'lessons'
  | 'dictionary'
  | 'conversations'
  | 'quiz'
  | 'progress';

export type ArticulationType = 'Two-Handed' | 'One-Handed' | 'Manual + Facial (NMM)';

export type VowelFingertip = 'thumb' | 'index' | 'middle' | 'ring' | 'pinky';

export interface AlphabetSign {
  letter: string;
  isVowel: boolean;
  vowelFingertip?: VowelFingertip;
  articulation: ArticulationType;
  hindiPhonetic: string;
  verifiedDescription: string;
  usageNote: string;
  demonstrationAvailable: boolean;
  placeholderNote: string;
}

export type LessonCategory =
  | 'Numbers'
  | 'Greetings & Politeness'
  | 'Family & People'
  | 'Daily Essentials'
  | 'Actions & Responses'
  | 'Emergency & Health';

export interface SignEntry {
  id: string;
  term: string;
  hindiTerm: string;
  transliteration: string;
  category: LessonCategory;
  articulation: ArticulationType;
  verifiedNote: string;
  islGlossExample: string;
  englishExample: string;
  nonManualMarker: string;
  demonstrationAvailable: boolean;
  placeholderNote: string;
}

export interface ConversationTurn {
  id: string;
  speaker: 'Signer A' | 'Signer B';
  english: string;
  islGloss: string;
  nonManualMarker: string;
  learningNote: string;
  keySigns: string[];
}

export interface ConversationScenario {
  id: string;
  title: string;
  context: string;
  difficulty: 'Beginner' | 'Intermediate';
  estimatedMinutes: number;
  culturalNote: string;
  turns: ConversationTurn[];
}

export type FacialExpressionCue =
  | 'raised-brows'
  | 'furrowed-brows'
  | 'headshake'
  | 'warm-nod'
  | 'attentive';

export interface QuizQuestion {
  id: string;
  category: 'Alphabet' | 'ISL Grammar' | 'Vocabulary' | 'Conversations' | 'Deaf Culture & ISLRTC';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  exampleGloss: string;
  facialExpressionCue: FacialExpressionCue;
  facialExpressionLabel: string;
  facialExpressionDetail: string;
  hideFacialCueUntilAnswered?: boolean;
  handGestureMode: ArticulationType;
  handGestureExample: string;
  vowelHighlight?: VowelFingertip;
  vowelQuizMode?: 'mystery-middle' | 'unlabeled-palm';
}

export interface QuizAttempt {
  id: string;
  dateIso: string;
  score: number;
  total: number;
  percentage: number;
}

export interface LearningProgress {
  learnedAlphabet: string[];
  learnedLessons: string[];
  completedScenarios: string[];
  bookmarkedSigns: string[];
  quizHistory: QuizAttempt[];
  bestQuizPercentage: number;
}
