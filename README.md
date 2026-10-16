# SkillProof — AI-Powered Evidence-Based Skill Verification & Talent Matching

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnotgarv01%2FskillProof&env=VITE_GEMINI_API_KEY,VITE_APP_ENV&project-name=skillproof)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/notgarv01/skillProof)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vite 6](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React 18](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)

> **"Don't just claim your skills. Prove them."**  
> SkillProof is an explainable evidence layer connecting GitHub repositories, practical code challenges, and portfolio artifacts for verifiable, bias-resistant hiring.

---

## 🌟 Key Features

1. **Evidence-Backed Skill Radar**
   - Dynamic radar visualizer mapping candidate claims against real-world evidence scores (Strong, Moderate, Needs Verification).
   - Drilldown modal explaining the exact source of confidence for every single skill.

2. **Automated Evidence Ingestion & Parsing**
   - Ingests GitHub repositories, commit velocity, PR history, and project artifacts.
   - Extracts verifiable proof points and flags unverified claims.

3. **Practical Challenge Arena & Code Sandbox**
   - Live browser-based challenge evaluator with instant test case execution.
   - Automatically upgrades a candidate's verified skill tier upon successful completion.

4. **Recruiter Semantic Matching Engine**
   - Multi-candidate ranking against real job descriptions.
   - Transparent fit scores with breakdown across requirements, verified evidence, and missing signals.

5. **SkillProof AI Assistant (Powered by Google Gemini)**
   - Interactive AI chat drawer providing explainability for recruiters and candidates alike.
   - Automatic graceful fallback mode with built-in heuristics if no API key is provided.

---

## 🚀 Live Deployment

SkillProof is fully configured for zero-configuration, continuous deployment on **Vercel** and **Render**:

| Platform | Deployment Type | Config File | Status |
| :--- | :--- | :--- | :--- |
| **Vercel** | Single Page Application (Edge CDN) | [`vercel.json`](./vercel.json) | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnotgarv01%2FskillProof&env=VITE_GEMINI_API_KEY,VITE_APP_ENV&project-name=skillproof) |
| **Render** | Static Site (Global CDN Blueprint) | [`render.yaml`](./render.yaml) | [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/notgarv01/skillProof) |

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Vanilla CSS Design System (Growleads-inspired high-contrast theme, glassmorphism, micro-animations)
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API (`@google/genai` REST integration with local heuristic fallback)
- **Deployment**: Vercel & Render Static Site Blueprints

---

## 💻 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/notgarv01/skillProof.git
cd skillProof
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your optional Gemini API key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_APP_ENV=development
```
*(Note: If no API key is provided, SkillProof seamlessly uses its rich built-in verification heuristics and simulation engines.)*

### 4. Start local development server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 5. Production build
```bash
npm run build
npm run preview
```

---

## 🌐 Deploying Manually

### Option A: Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Import the Git repository: `https://github.com/notgarv01/skillProof`.
3. Vercel automatically detects the Vite framework using `vercel.json`.
4. (Optional) Set `VITE_GEMINI_API_KEY` under Environment Variables.
5. Click **Deploy**.

### Option B: Deploy to Render
1. Go to [Render Dashboard](https://dashboard.render.com/blueprints).
2. Click **New** > **Blueprint** (or **Static Site**).
3. Connect `https://github.com/notgarv01/skillProof`.
4. Render automatically parses `render.yaml` with build command `npm run build` and publish directory `./dist`.
5. Click **Apply Blueprint** / **Create Static Site**.

---

## 📄 License
This project is open-source under the MIT License.
