import {
  AlphabetSign,
  ConversationScenario,
  LessonCategory,
  QuizQuestion,
  SignEntry,
} from '../types/isl';

export const ISL_ALPHABET: AlphabetSign[] = [
  {
    letter: 'A',
    isVowel: true,
    vowelFingertip: 'thumb',
    articulation: 'Two-Handed',
    hindiPhonetic: 'ए / अ',
    verifiedDescription:
      'Verified two-handed ISL vowel: Hold the non-dominant hand open with palm facing upward/inward, and touch the tip of its thumb with the dominant index finger.',
    usageNote:
      'Used in fingerspelling proper nouns, technical terms, and names without established lexical signs.',
    demonstrationAvailable: true,
    placeholderNote: 'Interactive fingertip position map shown below; refer to ISLRTC for live video.',
  },
  {
    letter: 'B',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'बी / ब',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet system.',
    usageNote: 'Consonant in the two-handed ISL fingerspelling chart standardized by ISLRTC.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult the official ISLRTC ISL Dictionary (islrtc.nic.in) for the exact two-handed B handshape video.',
  },
  {
    letter: 'C',
    isVowel: false,
    articulation: 'One-Handed',
    hindiPhonetic: 'सी / स-क',
    verifiedDescription:
      'Verified ISL form: Curve the thumb and fingers of the dominant hand into a clean "C" arc facing sideways.',
    usageNote: 'One of the letters commonly articulated on a single hand in standard ISL fingerspelling charts.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Refer to ISLRTC chart for exact palm orientation and wrist angle for C.',
  },
  {
    letter: 'D',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'डी / ड',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Used when fingerspelling names, places, and acronyms in ISL.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed D formation.',
  },
  {
    letter: 'E',
    isVowel: true,
    vowelFingertip: 'index',
    articulation: 'Two-Handed',
    hindiPhonetic: 'ई / ए',
    verifiedDescription:
      'Verified two-handed ISL vowel: Hold the non-dominant open hand steady and touch the tip of its index finger with the dominant index finger.',
    usageNote: 'Part of the 5-fingertip vowel sequence (Thumb=A, Index=E, Middle=I, Ring=O, Pinky=U).',
    demonstrationAvailable: true,
    placeholderNote: 'Interactive fingertip position map shown below; refer to ISLRTC for live video.',
  },
  {
    letter: 'F',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'एफ / फ',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Keep hands centered in the neutral signing space in front of the chest.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed F handshape.',
  },
  {
    letter: 'G',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'जी / ग',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Maintain clear separation and steady wrist posture during fingerspelling.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed G handshape.',
  },
  {
    letter: 'H',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'एच / ह',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Uses a smooth movement across the non-dominant palm in standard two-handed fingerspelling.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed H movement.',
  },
  {
    letter: 'I',
    isVowel: true,
    vowelFingertip: 'middle',
    articulation: 'Two-Handed',
    hindiPhonetic: 'आई / इ',
    verifiedDescription:
      'Verified two-handed ISL vowel: Hold the non-dominant hand open and touch the tip of its middle finger with the dominant index finger.',
    usageNote: 'Third position in the verified five-finger vowel sequence (A-E-I-O-U).',
    demonstrationAvailable: true,
    placeholderNote: 'Interactive fingertip position map shown below; refer to ISLRTC for live video.',
  },
  {
    letter: 'J',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'जे / ज',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Dynamic letter in the two-handed ISL fingerspelling system.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed J motion.',
  },
  {
    letter: 'K',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'के / क',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Ensure fingers remain relaxed and clearly visible to your conversation partner.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed K formation.',
  },
  {
    letter: 'L',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'एल / ल',
    verifiedDescription:
      'Formed in the standard Indian Sign Language manual alphabet.',
    usageNote: 'Double letters (such as in "ALL" or names) are often articulated with a light repeated tap or slight shift.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified ISL L demonstration.',
  },
  {
    letter: 'M',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'एम / म',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Commonly paired with clear mouthing when fingerspelling names.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed M handshape.',
  },
  {
    letter: 'N',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'एन / न',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Distinguished cleanly from M by finger count contact on the non-dominant palm.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed N handshape.',
  },
  {
    letter: 'O',
    isVowel: true,
    vowelFingertip: 'ring',
    articulation: 'Two-Handed',
    hindiPhonetic: 'ओ',
    verifiedDescription:
      'Verified two-handed ISL vowel: Hold the non-dominant open hand steady and touch the tip of its ring finger with the dominant index finger.',
    usageNote: 'Fourth position in the verified five-finger vowel sequence (A-E-I-O-U).',
    demonstrationAvailable: true,
    placeholderNote: 'Interactive fingertip position map shown below; refer to ISLRTC for live video.',
  },
  {
    letter: 'P',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'पी / प',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Keep the signing space at comfortable chest-to-shoulder height.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed P formation.',
  },
  {
    letter: 'Q',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'क्यू / क',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Often paired with U when fingerspelling English loanwords.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed Q formation.',
  },
  {
    letter: 'R',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'आर / र',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Used frequently in fingerspelling Indian names and cities.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed R handshape.',
  },
  {
    letter: 'S',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'एस / स',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Hold briefly at the end of a fingerspelled word to mark word completion.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed S handshape.',
  },
  {
    letter: 'T',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'टी / ट-त',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Note that ISL fingerspelling represents Roman script letters for English/transliterated words.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed T handshape.',
  },
  {
    letter: 'U',
    isVowel: true,
    vowelFingertip: 'pinky',
    articulation: 'Two-Handed',
    hindiPhonetic: 'यू / उ',
    verifiedDescription:
      'Verified two-handed ISL vowel: Hold the non-dominant hand open and touch the tip of its little (pinky) finger with the dominant index finger.',
    usageNote: 'Fifth and final position in the verified five-finger vowel sequence (A-E-I-O-U).',
    demonstrationAvailable: true,
    placeholderNote: 'Interactive fingertip position map shown below; refer to ISLRTC for live video.',
  },
  {
    letter: 'V',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'वी / व',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Articulated with clear contact on the non-dominant palm.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed V formation.',
  },
  {
    letter: 'W',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'डब्ल्यू / व',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Interlocking finger posture; refer to verified visual chart for exact finger placement.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed W formation.',
  },
  {
    letter: 'X',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'एक्स',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Crossed index fingers in standard two-handed manual alphabet conventions.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed X formation.',
  },
  {
    letter: 'Y',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'वाई / य',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Commonly used at the end of fingerspelled names.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed Y formation.',
  },
  {
    letter: 'Z',
    isVowel: false,
    articulation: 'Two-Handed',
    hindiPhonetic: 'ज़ेड / ज़',
    verifiedDescription:
      'Formed using both hands in the standard Indian Sign Language two-handed manual alphabet.',
    usageNote: 'Completes the 26-letter ISL fingerspelling alphabet.',
    demonstrationAvailable: false,
    placeholderNote:
      'Verified Demonstration Placeholder: Consult ISLRTC official chart for verified two-handed Z formation.',
  },
];

export const LESSON_CATEGORIES: LessonCategory[] = [
  'Numbers',
  'Greetings & Politeness',
  'Family & People',
  'Daily Essentials',
  'Actions & Responses',
  'Emergency & Health',
];

export const ISL_SIGN_ENTRIES: SignEntry[] = [
  // NUMBERS (0-10)
  {
    id: 'num-0',
    term: '0 (Zero)',
    hindiTerm: 'शून्य',
    transliteration: 'Shunya',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Represented by forming a closed circular "O" shape or closed fist depending on numeric context (currency vs. digit-by-digit phone numbers).',
    islGlossExample: 'MY PHONE NUMBER ZERO-NINE...',
    englishExample: 'My phone number starts with zero-nine...',
    nonManualMarker: 'Neutral facial expression; clear pacing for each digit.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Check ISLRTC Number Series (0–10) video for palm orientation.',
  },
  {
    id: 'num-1',
    term: '1 (One)',
    hindiTerm: 'एक',
    transliteration: 'Ek',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Extend one finger (typically the index finger) upward on the dominant hand while keeping other fingers curled.',
    islGlossExample: 'WATER BOTTLE ONE GIVE',
    englishExample: 'Please give me one bottle of water.',
    nonManualMarker: 'Neutral expression; slight nod when confirming quantity.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Refer to ISLRTC Numerals module for official 1–5 finger posture.',
  },
  {
    id: 'num-2',
    term: '2 (Two)',
    hindiTerm: 'दो',
    transliteration: 'Do',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Extend two fingers (index and middle fingers) cleanly on the dominant hand.',
    islGlossExample: 'TICKET TWO NEED',
    englishExample: 'I need two tickets.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Refer to ISLRTC Numerals module for palm direction.',
  },
  {
    id: 'num-3',
    term: '3 (Three)',
    hindiTerm: 'तीन',
    transliteration: 'Teen',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Extend three fingers on the dominant hand in standard counting posture.',
    islGlossExample: 'WE THREE FRIEND',
    englishExample: 'The three of us are friends.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Refer to ISLRTC Numerals module for exact 3-finger selection.',
  },
  {
    id: 'num-4',
    term: '4 (Four)',
    hindiTerm: 'चार',
    transliteration: 'Chaar',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Extend four fingers upward while folding the thumb across the palm.',
    islGlossExample: 'CLASS FOUR O-CLOCK START',
    englishExample: 'Class starts at four o’clock.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Refer to ISLRTC Numerals module for verified demonstration.',
  },
  {
    id: 'num-5',
    term: '5 (Five)',
    hindiTerm: 'पाँच',
    transliteration: 'Paanch',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Open hand with all five fingers extended comfortably.',
    islGlossExample: 'MINUTE FIVE WAIT',
    englishExample: 'Please wait five minutes.',
    nonManualMarker: 'Polite relaxed expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Refer to ISLRTC Numerals module for verified demonstration.',
  },
  {
    id: 'num-6',
    term: '6 (Six)',
    hindiTerm: 'छह',
    transliteration: 'Chhah',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'ISL numbers 6–10 have standardized forms in the ISLRTC dictionary (alongside regional variations across Indian states).',
    islGlossExample: 'MORNING SIX WAKE-UP',
    englishExample: 'I wake up at six in the morning.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC official chart for standardized ISL 6.',
  },
  {
    id: 'num-7',
    term: '7 (Seven)',
    hindiTerm: 'सात',
    transliteration: 'Saat',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Standardized ISL numeral in the ISLRTC curriculum.',
    islGlossExample: 'WEEK DAY SEVEN',
    englishExample: 'There are seven days in a week.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC official chart for standardized ISL 7.',
  },
  {
    id: 'num-8',
    term: '8 (Eight)',
    hindiTerm: 'आठ',
    transliteration: 'Aath',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Standardized ISL numeral in the ISLRTC curriculum.',
    islGlossExample: 'NIGHT EIGHT DINNER',
    englishExample: 'Dinner is at eight at night.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC official chart for standardized ISL 8.',
  },
  {
    id: 'num-9',
    term: '9 (Nine)',
    hindiTerm: 'नौ',
    transliteration: 'Nau',
    category: 'Numbers',
    articulation: 'One-Handed',
    verifiedNote:
      'Standardized ISL numeral in the ISLRTC curriculum.',
    islGlossExample: 'SCHOOL NINE START',
    englishExample: 'School starts at nine.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC official chart for standardized ISL 9.',
  },
  {
    id: 'num-10',
    term: '10 (Ten)',
    hindiTerm: 'दस',
    transliteration: 'Das',
    category: 'Numbers',
    articulation: 'Two-Handed',
    verifiedNote:
      'Standardized ISL numeral 10; confirm exact palm direction and movement in the ISLRTC dictionary.',
    islGlossExample: 'BOOK TEN HAVE',
    englishExample: 'I have ten books.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC official chart for standardized ISL 10.',
  },

  // GREETINGS & POLITENESS
  {
    id: 'greet-namaste',
    term: 'Namaste / Hello',
    hindiTerm: 'नमस्ते',
    transliteration: 'Namaste',
    category: 'Greetings & Politeness',
    articulation: 'Two-Handed',
    verifiedNote:
      'Culturally grounded Indian greeting: bring both palms together in front of the chest (Anjali posture) with a warm nod and smile.',
    islGlossExample: 'NAMASTE! YOU HOW?',
    englishExample: 'Hello! How are you?',
    nonManualMarker: 'Warm smile, eye contact, slight respectful head nod.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Refer to ISLRTC Greetings module for formal vs. casual greeting movement.',
  },
  {
    id: 'greet-thankyou',
    term: 'Thank You',
    hindiTerm: 'धन्यवाद',
    transliteration: 'Dhanyavaad',
    category: 'Greetings & Politeness',
    articulation: 'Manual + Facial (NMM)',
    verifiedNote:
      'Standard ISL expression of gratitude paired with genuine facial warmth and a polite nod.',
    islGlossExample: 'HELP FOR THANK-YOU',
    englishExample: 'Thank you for your help.',
    nonManualMarker: 'Soft smile and polite nod toward the listener.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Greetings module for exact ISL THANK-YOU sign.',
  },
  {
    id: 'greet-sorry',
    term: 'Sorry',
    hindiTerm: 'माफ़ कीजिए',
    transliteration: 'Maaf Kijiye',
    category: 'Greetings & Politeness',
    articulation: 'Manual + Facial (NMM)',
    verifiedNote:
      'Expression of apology; facial expression carries grammatical weight in ISL to show sincerity.',
    islGlossExample: 'LATE SORRY',
    englishExample: 'Sorry I am late.',
    nonManualMarker: 'Apologetic facial expression, slightly lowered eyebrows.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Politeness module for verified SORRY sign.',
  },
  {
    id: 'greet-please',
    term: 'Please',
    hindiTerm: 'कृपया',
    transliteration: 'Kripaya',
    category: 'Greetings & Politeness',
    articulation: 'Manual + Facial (NMM)',
    verifiedNote:
      'Polite request marker in ISL; often accompanied by gentle head tilt and respectful eye contact.',
    islGlossExample: 'PLEASE SLOW SIGN',
    englishExample: 'Please sign slowly.',
    nonManualMarker: 'Polite, attentive expression with slight head tilt.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Politeness module for verified PLEASE sign.',
  },
  {
    id: 'greet-welcome',
    term: 'Welcome',
    hindiTerm: 'स्वागत है',
    transliteration: 'Swaagat Hai',
    category: 'Greetings & Politeness',
    articulation: 'Two-Handed',
    verifiedNote:
      'Inviting gesture used to greet guests into a home, classroom, or community event.',
    islGlossExample: 'MY HOME WELCOME',
    englishExample: 'Welcome to my home.',
    nonManualMarker: 'Open, welcoming smile and inviting eye gaze.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Dictionary for verified WELCOME sign.',
  },

  // FAMILY & PEOPLE
  {
    id: 'fam-mother',
    term: 'Mother',
    hindiTerm: 'माँ',
    transliteration: 'Maa',
    category: 'Family & People',
    articulation: 'One-Handed',
    verifiedNote:
      'Core family kinship vocabulary in ISL. Kinship signs are frequently combined with possessive signs (MY, YOUR).',
    islGlossExample: 'MY MOTHER TEACHER',
    englishExample: 'My mother is a teacher.',
    nonManualMarker: 'Neutral or warm expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Family & Relations category for verified MOTHER sign.',
  },
  {
    id: 'fam-father',
    term: 'Father',
    hindiTerm: 'पिता',
    transliteration: 'Pita',
    category: 'Family & People',
    articulation: 'One-Handed',
    verifiedNote:
      'Core family kinship sign in standard ISL vocabulary.',
    islGlossExample: 'MY FATHER OFFICE GO',
    englishExample: 'My father went to the office.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Family & Relations category for verified FATHER sign.',
  },
  {
    id: 'fam-friend',
    term: 'Friend',
    hindiTerm: 'दोस्त',
    transliteration: 'Dost',
    category: 'Family & People',
    articulation: 'Two-Handed',
    verifiedNote:
      'Represents companionship and friendship; widely used across all ISL regions.',
    islGlossExample: 'HE MY GOOD FRIEND',
    englishExample: 'He is my good friend.',
    nonManualMarker: 'Warm smile.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Dictionary for verified FRIEND sign.',
  },
  {
    id: 'fam-teacher',
    term: 'Teacher',
    hindiTerm: 'शिक्षक',
    transliteration: 'Shikshak',
    category: 'Family & People',
    articulation: 'Two-Handed',
    verifiedNote:
      'Often combines the concept of teaching/imparting knowledge with a person marker.',
    islGlossExample: 'TEACHER ISL SIGN TEACH',
    englishExample: 'The teacher teaches Indian Sign Language.',
    nonManualMarker: 'Neutral attentive expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Education category for verified TEACHER sign.',
  },

  // DAILY ESSENTIALS
  {
    id: 'daily-water',
    term: 'Water',
    hindiTerm: 'पानी',
    transliteration: 'Paani',
    category: 'Daily Essentials',
    articulation: 'One-Handed',
    verifiedNote:
      'Essential everyday sign used in homes, cafés, and travel.',
    islGlossExample: 'WATER DRINK WANT',
    englishExample: 'I want to drink water.',
    nonManualMarker: 'Polite request expression when asking for water.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Food & Drink category for verified WATER sign.',
  },
  {
    id: 'daily-food',
    term: 'Food / Eat',
    hindiTerm: 'खाना',
    transliteration: 'Khaana',
    category: 'Daily Essentials',
    articulation: 'One-Handed',
    verifiedNote:
      'In ISL, context and movement distinguish noun ("food") vs. verb ("eat") forms cleanly.',
    islGlossExample: 'FOOD EAT FINISH?',
    englishExample: 'Have you finished eating?',
    nonManualMarker: 'Raised eyebrows for yes/no question.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Food & Drink category for verified FOOD sign.',
  },
  {
    id: 'daily-home',
    term: 'Home',
    hindiTerm: 'घर',
    transliteration: 'Ghar',
    category: 'Daily Essentials',
    articulation: 'Two-Handed',
    verifiedNote:
      'Commonly represented by bringing fingertips together at an angle to evoke a roof structure.',
    islGlossExample: 'NOW I HOME GO',
    englishExample: 'Now I am going home.',
    nonManualMarker: 'Neutral expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Places category for verified HOME sign.',
  },
  {
    id: 'daily-book',
    term: 'Book',
    hindiTerm: 'किताब',
    transliteration: 'Kitaab',
    category: 'Daily Essentials',
    articulation: 'Two-Handed',
    verifiedNote:
      'Iconic two-handed sign where both palms open outward like the pages of a book.',
    islGlossExample: 'THIS ISL BOOK GOOD',
    englishExample: 'This ISL book is good.',
    nonManualMarker: 'Neutral or positive nod.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Education category for verified BOOK sign.',
  },

  // ACTIONS & RESPONSES
  {
    id: 'act-yes',
    term: 'Yes',
    hindiTerm: 'हाँ',
    transliteration: 'Haan',
    category: 'Actions & Responses',
    articulation: 'Manual + Facial (NMM)',
    verifiedNote:
      'Affirmation in ISL is always reinforced by a clear head nod (Non-Manual Marker).',
    islGlossExample: 'YES, I UNDERSTAND',
    englishExample: 'Yes, I understand.',
    nonManualMarker: 'Clear affirmative head nod.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Common Responses for verified YES sign.',
  },
  {
    id: 'act-no',
    term: 'No',
    hindiTerm: 'नहीं',
    transliteration: 'Nahin',
    category: 'Actions & Responses',
    articulation: 'Manual + Facial (NMM)',
    verifiedNote:
      'Negation in ISL requires a side-to-side headshake as a grammatical Non-Manual Marker alongside the manual sign.',
    islGlossExample: 'NO, PROBLEM NOTHING',
    englishExample: 'No, there is no problem.',
    nonManualMarker: 'Side-to-side headshake.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Common Responses for verified NO sign.',
  },
  {
    id: 'act-learn',
    term: 'Learn',
    hindiTerm: 'सीखना',
    transliteration: 'Seekhna',
    category: 'Actions & Responses',
    articulation: 'One-Handed',
    verifiedNote:
      'Core educational verb in ISL; used in school, study, and practice contexts.',
    islGlossExample: 'I ISL LEARN',
    englishExample: 'I am learning Indian Sign Language.',
    nonManualMarker: 'Focused, engaged expression.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Education category for verified LEARN sign.',
  },
  {
    id: 'act-help',
    term: 'Help',
    hindiTerm: 'मदद',
    transliteration: 'Madad',
    category: 'Actions & Responses',
    articulation: 'Two-Handed',
    verifiedNote:
      'Directional verb in ISL: movement toward the signer means "help me"; movement outward means "help you/them".',
    islGlossExample: 'PLEASE ME HELP',
    englishExample: 'Please help me.',
    nonManualMarker: 'Earnest expression with raised eyebrows when requesting help.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Verbs category for directional HELP sign.',
  },

  // EMERGENCY & HEALTH
  {
    id: 'emg-doctor',
    term: 'Doctor',
    hindiTerm: 'डॉक्टर',
    transliteration: 'Doctor',
    category: 'Emergency & Health',
    articulation: 'Two-Handed',
    verifiedNote:
      'Essential medical communication sign in ISL (commonly articulated near the wrist pulse area).',
    islGlossExample: 'DOCTOR WHERE?',
    englishExample: 'Where is the doctor?',
    nonManualMarker: 'Furrowed brows for WH-question ("WHERE").',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Health & Medical section for verified DOCTOR sign.',
  },
  {
    id: 'emg-hospital',
    term: 'Hospital',
    hindiTerm: 'अस्पताल',
    transliteration: 'Aspataal',
    category: 'Emergency & Health',
    articulation: 'One-Handed',
    verifiedNote:
      'Critical public safety and healthcare sign in Indian Sign Language.',
    islGlossExample: 'HOSPITAL NEAR HERE?',
    englishExample: 'Is the hospital near here?',
    nonManualMarker: 'Raised eyebrows for yes/no question.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Health & Medical section for verified HOSPITAL sign.',
  },
  {
    id: 'emg-medicine',
    term: 'Medicine',
    hindiTerm: 'दवाई',
    transliteration: 'Dawaai',
    category: 'Emergency & Health',
    articulation: 'Two-Handed',
    verifiedNote:
      'Used in clinics and pharmacies when asking about tablets, syrups, or prescriptions.',
    islGlossExample: 'FEVER MEDICINE NEED',
    englishExample: 'I need medicine for fever.',
    nonManualMarker: 'Clear expression indicating discomfort if unwell.',
    demonstrationAvailable: false,
    placeholderNote: 'Verified Demonstration Placeholder: Consult ISLRTC Health & Medical section for verified MEDICINE sign.',
  },
];

export const ISL_CONVERSATIONS: ConversationScenario[] = [
  {
    id: 'conv-intro',
    title: 'First Meeting & Introductions',
    context: 'College campus or community workshop in India',
    difficulty: 'Beginner',
    estimatedMinutes: 3,
    culturalNote:
      'In the Indian Deaf community, eye contact is essential before starting a conversation. Names are introduced using fingerspelling (A–Z) or a personal Name Sign.',
    turns: [
      {
        id: 'intro-1',
        speaker: 'Signer A',
        english: 'Namaste! How are you?',
        islGloss: 'NAMASTE! YOU HOW?',
        nonManualMarker: 'Warm smile, direct eye contact, eyebrows slightly furrowed on "HOW".',
        learningNote:
          'Notice that ISL places the WH-question word ("HOW") at the end of the phrase.',
        keySigns: ['NAMASTE', 'YOU', 'HOW'],
      },
      {
        id: 'intro-2',
        speaker: 'Signer B',
        english: 'I am fine, thank you. What is your name?',
        islGloss: 'I FINE, THANK-YOU. YOUR NAME WHAT?',
        nonManualMarker: 'Affirmative nod on "FINE", furrowed brows on "WHAT".',
        learningNote:
          'No linking verb ("am", "is") is needed in ISL gloss structure.',
        keySigns: ['I', 'FINE', 'THANK-YOU', 'NAME', 'WHAT'],
      },
      {
        id: 'intro-3',
        speaker: 'Signer A',
        english: 'My name is Priya. I am learning Indian Sign Language.',
        islGloss: 'MY NAME P-R-I-Y-A. I ISL LEARN.',
        nonManualMarker: 'Neutral relaxed posture; clear pacing while fingerspelling P-R-I-Y-A.',
        learningNote:
          'Hyphenated letters (P-R-I-Y-A) indicate two-handed ISL fingerspelling.',
        keySigns: ['MY', 'NAME', 'FINGERSPELLING', 'LEARN'],
      },
      {
        id: 'intro-4',
        speaker: 'Signer B',
        english: 'Nice to meet you! Welcome.',
        islGloss: 'MEET GOOD! WELCOME.',
        nonManualMarker: 'Open smile and welcoming nod.',
        learningNote:
          'Facial expression conveys friendliness and warmth just as tone of voice does in spoken language.',
        keySigns: ['MEET', 'GOOD', 'WELCOME'],
      },
    ],
  },
  {
    id: 'conv-cafe',
    title: 'At a Café or Tea Stall',
    context: 'Ordering water and food politely',
    difficulty: 'Beginner',
    estimatedMinutes: 4,
    culturalNote:
      'ISL follows Subject–Object–Verb (SOV) or Topic–Comment order, closely mirroring many Indian spoken languages like Hindi.',
    turns: [
      {
        id: 'cafe-1',
        speaker: 'Signer A',
        english: 'Hello, please give me one bottle of water.',
        islGloss: 'NAMASTE, PLEASE WATER ONE GIVE.',
        nonManualMarker: 'Polite expression, slight head tilt on "PLEASE".',
        learningNote:
          'The object ("WATER ONE") precedes the action ("GIVE").',
        keySigns: ['NAMASTE', 'PLEASE', 'WATER', 'ONE', 'GIVE'],
      },
      {
        id: 'cafe-2',
        speaker: 'Signer B',
        english: 'Sure. Do you want anything to eat?',
        islGloss: 'YES. FOOD EAT WANT?',
        nonManualMarker: 'Raised eyebrows throughout "FOOD EAT WANT?" to signal a Yes/No question.',
        learningNote:
          'In ISL, raising your eyebrows turns a statement into a Yes/No question without adding "Do".',
        keySigns: ['YES', 'FOOD', 'EAT', 'WANT'],
      },
      {
        id: 'cafe-3',
        speaker: 'Signer A',
        english: 'No, thank you. Only water.',
        islGloss: 'NO, THANK-YOU. WATER ONLY.',
        nonManualMarker: 'Gentle side-to-side headshake on "NO", followed by a polite smile.',
        learningNote:
          'Pair the manual sign NO with a headshake for clear grammatical negation.',
        keySigns: ['NO', 'THANK-YOU', 'WATER'],
      },
    ],
  },
  {
    id: 'conv-directions',
    title: 'Asking for Directions',
    context: 'Finding a nearby bus stop or metro station',
    difficulty: 'Intermediate',
    estimatedMinutes: 4,
    culturalNote:
      'Spatial referencing in ISL maps physical locations in the signing space in front of you—point toward actual directions whenever visible.',
    turns: [
      {
        id: 'dir-1',
        speaker: 'Signer A',
        english: 'Excuse me, where is the metro station?',
        islGloss: 'EXCUSE-ME, METRO STATION WHERE?',
        nonManualMarker: 'Eyebrows furrowed and chin slightly tilted forward on "WHERE?".',
        learningNote:
          'WH-questions ("WHERE", "WHO", "WHAT", "WHEN") always occur clause-finally in standard ISL.',
        keySigns: ['EXCUSE-ME', 'STATION', 'WHERE'],
      },
      {
        id: 'dir-2',
        speaker: 'Signer B',
        english: 'Go straight, then turn left. Walk five minutes.',
        islGloss: 'STRAIGHT GO, LEFT TURN. WALK MINUTE FIVE.',
        nonManualMarker: 'Eye gaze shifts toward the direction being indicated.',
        learningNote:
          'Eye gaze reinforces spatial directions (straight ahead, left, right).',
        keySigns: ['STRAIGHT', 'LEFT', 'FIVE'],
      },
      {
        id: 'dir-3',
        speaker: 'Signer A',
        english: 'Got it, thank you so much!',
        islGloss: 'UNDERSTAND, THANK-YOU!',
        nonManualMarker: 'Clear affirmative nod and appreciative smile.',
        learningNote:
          'Confirmation with UNDERSTAND reassures the signer that directions were clear.',
        keySigns: ['UNDERSTAND', 'THANK-YOU'],
      },
    ],
  },
  {
    id: 'conv-pharmacy',
    title: 'At the Pharmacy / Clinic',
    context: 'Asking for basic medical help clearly',
    difficulty: 'Intermediate',
    estimatedMinutes: 4,
    culturalNote:
      'In medical settings, keeping signs clear, unhurried, and paired with written notes or fingerspelling ensures zero ambiguity.',
    turns: [
      {
        id: 'med-1',
        speaker: 'Signer A',
        english: 'Please help me. Where is the doctor?',
        islGloss: 'PLEASE ME HELP. DOCTOR WHERE?',
        nonManualMarker: 'Concerned expression; furrowed brows on "WHERE?".',
        learningNote:
          'HELP is signed toward the signer to indicate "help me".',
        keySigns: ['PLEASE', 'HELP', 'DOCTOR', 'WHERE'],
      },
      {
        id: 'med-2',
        speaker: 'Signer B',
        english: 'The hospital is near here. Do you need medicine?',
        islGloss: 'HOSPITAL NEAR HERE. MEDICINE NEED?',
        nonManualMarker: 'Reassuring nod on first sentence; raised eyebrows on "MEDICINE NEED?".',
        learningNote:
          'Notice the clean contrast between neutral statement and raised-eyebrow question.',
        keySigns: ['HOSPITAL', 'MEDICINE', 'NEED'],
      },
      {
        id: 'med-3',
        speaker: 'Signer A',
        english: 'Yes, I need medicine and water.',
        islGloss: 'YES, MEDICINE WATER NEED.',
        nonManualMarker: 'Affirmative head nod.',
        learningNote:
          'Clear listing of essentials helps communicate quickly in urgent moments.',
        keySigns: ['YES', 'MEDICINE', 'WATER'],
      },
    ],
  },
];

export const ISL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'Alphabet',
    question: 'How is the Indian Sign Language (ISL) manual alphabet (A–Z) primarily articulated?',
    options: [
      'Using a two-handed manual alphabet system',
      'Exclusively with the left hand only',
      'Using identical handshapes to American Sign Language (ASL)',
      'Using foot and shoulder taps',
    ],
    correctIndex: 0,
    explanation:
      'Unlike ASL (which is one-handed), Indian Sign Language uses a two-handed manual alphabet system standardized by ISLRTC.',
    exampleGloss: 'MY NAME P-R-I-Y-A',
    facialExpressionCue: 'attentive',
    facialExpressionLabel: 'Attentive Eye Contact & Relaxed Brow',
    facialExpressionDetail:
      'Maintain steady eye contact and a calm, neutral expression while fingerspelling names or places clearly.',
    handGestureMode: 'Two-Handed',
    handGestureExample:
      'Verified Two-Handed Fingerspelling Placeholder: Non-dominant hand serves as the base while the dominant hand articulates letters in chest-level signing space (refer to ISLRTC A–Z chart).',
  },
  {
    id: 'q2',
    category: 'Alphabet',
    question: 'In verified two-handed ISL fingerspelling, which fingertip on the non-dominant hand represents the vowel "A"?',
    options: [
      'The index fingertip',
      'The thumb tip',
      'The middle fingertip',
      'The pinky (little) fingertip',
    ],
    correctIndex: 1,
    explanation:
      'The five vowels follow the five fingertips in order: Thumb = A, Index = E, Middle = I, Ring = O, Little/Pinky = U.',
    exampleGloss: 'VOWEL A (FINGERSPELL)',
    facialExpressionCue: 'attentive',
    facialExpressionLabel: 'Focused Gaze Toward Signing Space',
    facialExpressionDetail:
      'Keep your face relaxed and glance naturally toward your listener—mouthing the vowel sound gently is common.',
    handGestureMode: 'Two-Handed',
    handGestureExample:
      'Verified Vowel Palm Map: Hold your non-dominant hand open and point with your dominant index finger to one of the five fingertips.',
    vowelHighlight: 'thumb',
    vowelQuizMode: 'unlabeled-palm',
  },
  {
    id: 'q3',
    category: 'Alphabet',
    question: 'Touching the tip of the middle finger on the non-dominant open hand represents which ISL vowel?',
    options: ['A', 'E', 'I', 'O'],
    correctIndex: 2,
    explanation:
      'Following the sequence Thumb (A), Index (E), Middle (I), Ring (O), Pinky (U), the middle fingertip represents "I".',
    exampleGloss: 'I-N-D-I-A',
    facialExpressionCue: 'attentive',
    facialExpressionLabel: 'Calm Neutral Expression',
    facialExpressionDetail:
      'Clear mouthing and relaxed posture help the listener track rapid vowel transitions inside fingerspelled words.',
    handGestureMode: 'Two-Handed',
    handGestureExample:
      'Verified Vowel Palm Map: The dominant index finger touches the highlighted middle fingertip on the open non-dominant hand.',
    vowelHighlight: 'middle',
    vowelQuizMode: 'mystery-middle',
  },
  {
    id: 'q4',
    category: 'Alphabet',
    question: 'Which fingertip represents the vowel "U" in the verified ISL five-finger vowel map?',
    options: [
      'Thumb',
      'Ring finger',
      'Little (pinky) finger',
      'Index finger',
    ],
    correctIndex: 2,
    explanation:
      '"U" is the fifth vowel and corresponds to the fifth digit—the little (pinky) fingertip.',
    exampleGloss: 'U-M-A (NAME)',
    facialExpressionCue: 'attentive',
    facialExpressionLabel: 'Direct Eye Contact',
    facialExpressionDetail:
      'Keep shoulders relaxed and maintain eye contact with your conversation partner between words.',
    handGestureMode: 'Two-Handed',
    handGestureExample:
      'Verified Vowel Palm Map: Count across the five fingertips in alphabetical vowel order (A → E → I → O → U).',
    vowelHighlight: 'pinky',
    vowelQuizMode: 'unlabeled-palm',
  },
  {
    id: 'q5',
    category: 'ISL Grammar',
    question: 'Where do WH-question words (such as WHAT, WHERE, WHO) typically appear in an ISL sentence?',
    options: [
      'At the very beginning of the sentence',
      'At the end of the clause',
      'Only after fingerspelling a name',
      'ISL does not use WH-question signs',
    ],
    correctIndex: 1,
    explanation:
      'Standard ISL syntax places WH-question words clause-finally (e.g., "YOUR NAME WHAT?" or "DOCTOR WHERE?").',
    exampleGloss: 'YOUR NAME WHAT?',
    facialExpressionCue: 'furrowed-brows',
    facialExpressionLabel: 'Furrowed Eyebrows + Slight Chin Tilt',
    facialExpressionDetail:
      'Draw eyebrows slightly together (furrowed) and lean slightly forward on the WH-question sign.',
    handGestureMode: 'Manual + Facial (NMM)',
    handGestureExample:
      'Verified ISL Practice Placeholder: Sign YOUR → NAME → WHAT while holding the furrowed-brow WH expression at the end (consult ISLRTC WH-Questions module).',
  },
  {
    id: 'q6',
    category: 'ISL Grammar',
    question: 'Which Non-Manual Marker (NMM) typically accompanies a Yes/No question in Indian Sign Language?',
    options: [
      'Closing both eyes tightly',
      'Raising the eyebrows',
      'Looking away from the signer',
      'Shaking the head side-to-side',
    ],
    correctIndex: 1,
    explanation:
      'Raised eyebrows signal a Yes/No question in ISL (whereas furrowed eyebrows signal WH-questions and headshakes mark negation).',
    exampleGloss: 'FOOD EAT WANT?',
    facialExpressionCue: 'raised-brows',
    facialExpressionLabel: 'Raised Eyebrows + Open Gaze',
    facialExpressionDetail:
      'Lift both eyebrows across the question clause so the listener immediately knows you are asking a Yes/No question.',
    hideFacialCueUntilAnswered: true,
    handGestureMode: 'Manual + Facial (NMM)',
    handGestureExample:
      'Verified ISL Practice Placeholder: Combine manual signs FOOD + EAT + WANT with the grammatical facial marker (refer to ISLRTC Conversation examples).',
  },
  {
    id: 'q7',
    category: 'ISL Grammar',
    question: 'What basic word order does Indian Sign Language most commonly follow?',
    options: [
      'Subject – Object – Verb (SOV) / Topic – Comment',
      'Verb – Subject – Object (VSO)',
      'Object – Verb – Subject (OVS)',
      'Random word order with no grammar rules',
    ],
    correctIndex: 0,
    explanation:
      'ISL follows a structured Subject–Object–Verb (SOV) and Topic–Comment grammatical structure, independent of English syntax.',
    exampleGloss: 'WATER DRINK WANT (or: I ISL LEARN)',
    facialExpressionCue: 'warm-nod',
    facialExpressionLabel: 'Clear Topic Pause & Affirmative Nod',
    facialExpressionDetail:
      'Use a brief, natural head nod at the end of a declarative statement to close the thought clearly.',
    handGestureMode: 'Two-Handed',
    handGestureExample:
      'Verified ISL Practice Placeholder: Sign the topic/object first ("WATER" / "ISL") before the action verb ("DRINK" / "LEARN"). Consult ISLRTC Grammar guide.',
  },
  {
    id: 'q8',
    category: 'Deaf Culture & ISLRTC',
    question: 'Which national institute in India is responsible for standardizing and publishing the official ISL Dictionary?',
    options: [
      'ISLRTC (Indian Sign Language Research and Training Centre)',
      'ISRO',
      'AICTE',
      'CBSE Sports Council',
    ],
    correctIndex: 0,
    explanation:
      'ISLRTC (under the Ministry of Social Justice & Empowerment, Government of India) develops and maintains the official Indian Sign Language Dictionary.',
    exampleGloss: 'ISL BOOK LEARN',
    facialExpressionCue: 'warm-nod',
    facialExpressionLabel: 'Respectful Greeting & Attentive Nod',
    facialExpressionDetail:
      'In Indian Deaf culture, maintaining visual attention and greeting warmly before signing shows respect.',
    handGestureMode: 'Two-Handed',
    handGestureExample:
      'Verified ISL Practice Placeholder: Iconic two-handed BOOK sign opens both palms like pages; refer to islrtc.nic.in for official video entries.',
  },
  {
    id: 'q9',
    category: 'Conversations',
    question: 'How would you naturally gloss "Where is the hospital?" in standard ISL word order?',
    options: [
      'WHERE IS THE HOSPITAL?',
      'HOSPITAL WHERE?',
      'IS HOSPITAL WHERE?',
      'THE WHERE HOSPITAL?',
    ],
    correctIndex: 1,
    explanation:
      'ISL omits spoken linking verbs ("is", "the") and places the WH-word at the end: HOSPITAL WHERE? with furrowed brows.',
    exampleGloss: 'EXCUSE-ME, HOSPITAL WHERE?',
    facialExpressionCue: 'furrowed-brows',
    facialExpressionLabel: 'Furrowed Brows on Final WH-Word',
    facialExpressionDetail:
      'Furrow your eyebrows specifically as you sign the location question at the end of the phrase.',
    handGestureMode: 'Manual + Facial (NMM)',
    handGestureExample:
      'Verified ISL Practice Placeholder: Sign HOSPITAL first, then follow with WHERE while leaning slightly forward (consult ISLRTC Health & Medical dictionary).',
  },
  {
    id: 'q10',
    category: 'Vocabulary',
    question: 'Which non-manual action must accompany the manual sign NO for proper grammatical negation in ISL?',
    options: [
      'A rapid upward nod',
      'A side-to-side headshake',
      'Waving both hands overhead',
      'Raising both eyebrows high',
    ],
    correctIndex: 1,
    explanation:
      'A side-to-side headshake is an obligatory Non-Manual Marker for negation in ISL.',
    exampleGloss: 'NO, PROBLEM NOTHING',
    facialExpressionCue: 'headshake',
    facialExpressionLabel: 'Side-to-Side Headshake',
    facialExpressionDetail:
      'Perform a clear, steady side-to-side headshake simultaneously with the manual negation sign.',
    hideFacialCueUntilAnswered: true,
    handGestureMode: 'Manual + Facial (NMM)',
    handGestureExample:
      'Verified ISL Practice Placeholder: Pair the manual NO sign cleanly with the negative head movement (refer to ISLRTC Common Responses module).',
  },
];
