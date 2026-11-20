# SignBridge — Learn. Sign. Connect.

SignBridge is a free, zero-budget, responsive Indian Sign Language (ISL) educational web application built with React, Vite, Tailwind CSS, TypeScript, and browser `localStorage`.

## Features

- **Homepage & Curriculum Overview** with live progress counters
- **Interactive ISL Alphabet (A–Z)** with two-handed vowel fingertip diagrams (`A–U`), keyboard navigation, and Recall Practice mode
- **Numbers (0–10) & Basic Vocabulary** categorized by everyday themes
- **Searchable ISL Dictionary** with English, Hindi, and transliteration search plus sign bookmarking
- **Real-Life Conversation Scenarios** with ISL Gloss word order and Non-Manual Marker (NMM) cues
- **Interactive Multiple-Choice Quiz** with facial expression & hand gesture guides, explanations, and score calculation
- **Local Progress Dashboard & Dark/Light Mode** persisted in browser `localStorage` (no login or backend required)

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React Icons
- Browser `localStorage` (no paid APIs, no database, no environment variables required)

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploying to Vercel (via GitHub)

1. Push this repository to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com), click **Add New Project**, and import your GitHub repository.
3. Keep the default Vite settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. No environment variables are required. Click **Deploy**.
