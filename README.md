# 🚀 Gazi Mahmudur — Engineering Portfolio & Architecture Showcase

A responsive, high-performance professional portfolio website designed and built to **Google's Technical & UX Standards**. Engineered with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen)
![Accessibility](https://img.shields.io/badge/WCAG-AAA%20Compliant-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Type%20Safe-blue)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black)

---

## ⚡ Quick Start & Configuration

All portfolio content is separated into a dedicated, thoroughly annotated configuration file so you can update your entire portfolio **without touching UI code**:

### 📝 The Dedicated Configuration File:
👉 **[`src/data/portfolioData.ts`](src/data/portfolioData.ts)** (or shortcut **[`portfolio.config.ts`](portfolio.config.ts)**)

```typescript
// Open src/data/portfolioData.ts in any code editor (VS Code, Cursor, etc.)
export const initialPortfolioData: PortfolioData = {
  personalInfo: {
    name: "Gazi Mahmudur",
    roles: ["Full-Stack Developer", "Product Architect"],
    headline: "...",
    subHeadline: "...",
    // Toggle profile image anytime!
    profileImage: {
      showProfileImage: false, // Set to true when ready
      imageUrl: "/profile.jpg"
    }
  },
  // Metrics, Projects, Experience, Skills, Testimonials, Social Links...
};
```

### 🛠️ In-Browser Visual Config Editor
You can also edit your data directly in the browser!
1. Start the dev server (`npm run dev`)
2. Click the **"⚡ Edit Data"** button in the navbar or bottom-left pill
3. Update fields visually or edit JSON directly
4. Click **"Apply to Live Site"** or **"Download .ts File"** to export.

---

## 🏛️ Page Structure (1-Page Multi-Section)

1. **Section 1: Hero Section (First 3 Seconds of Impact)**
   - High-impact Google-standard headline: Role + Value Proposition.
   - 1-line tech stack & experience sub-headline.
   - Dual Call to Actions: *"View Work"* & *"Get in Touch"* / *"Resume / CV"*.
   - Live availability badge (`● Available for select roles & high-impact projects`).
2. **Section 2: Proof / Metrics / Brands (Social Proof)**
   - Quantifiable engineering metrics: 50,000+ Users Reached, 42% Performance Optimization, 99.98% Cloud Uptime.
   - Verified brand & ecosystem badges (StreamsTech, FieldPulse, CookSmart, Quantum EduERP).
3. **Section 3: Selected Works / Case Studies (The Most Important Part)**
   - 4 curated showcase projects with high-resolution thumbnails, category, problem statement, impact metrics, and tech tags.
   - **Interactive Deep-Dive Case Study Modal**: Follows Google's process framework:
     $$\text{Problem} \longrightarrow \text{Solution} \longrightarrow \text{Architecture} \longrightarrow \text{Measurable Impact}$$
4. **Section 4: About Me & Experience Overview**
   - Core engineering philosophy & first-principles problem-solving methodology.
   - Interactive career timeline view with company, tenure, role, and key achievements.
5. **Section 5: Skills & Tooling (Categorized Architecture)**
   - Frontend / UI (React, TypeScript, Next.js, Tailwind CSS, WCAG AAA).
   - Backend / Systems (Node.js, PostgreSQL, REST APIs, WebSockets, Prisma, Redis).
   - DevOps & Cloud (Vercel Edge, GitHub Actions, Docker, CI/CD).
   - Design & Systems (Design Systems, Google Stitch MCP, Figma, System Design).
6. **Section 6: Testimonials / Endorsements**
   - Verified feedback from VP of Engineering, Lead Architect, and Senior Engineering Manager.
7. **Section 7: Footer / Contact CTA**
   - Closing message: *"Let's build something exceptional together"*.
   - Direct 1-click email copy button with toast notification.
   - Verified links to GitHub (`@GaziMahmudur`), LinkedIn, and X.
8. **Interactive Resume / CV Viewer**
   - Clean, printable & exportable CV modal with one-click `window.print()` / PDF export.

---

## 🎨 Visual System & Themes

- **Subtle Light / Dark Mode**: Toggled via the navbar sun/moon icon, persisted in `localStorage`.
- **Color Palette (3 Core Tones)**:
  - **Background**: Clean Pure White (`#FFFFFF`) / Subtle Gray (`#F8F9FA`) / Dark Mode (`#0F172A`).
  - **Typography**: Dark Charcoal (`#1E293B`) in light mode; Slate (`#F1F5F9`) in dark mode. Pure black is intentionally avoided for optimal reading ergonomics.
  - **Accent**: Electric Indigo / Blue (`#2563EB` / `#3B82F6`).
- **Typography**: Inter & Plus Jakarta Sans with tabular figures for numbers.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production (Type-checked & minified)
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deployment to Vercel & GitHub

### GitHub
```bash
git add .
git commit -m "feat: complete Google-standard portfolio with dedicated config editor"
gh repo create GaziMahmudur/portfolio --public --source=. --remote=origin --push
```

### Vercel
```bash
# Instant deployment to Vercel
vercel --prod
```
