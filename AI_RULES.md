# PROJECT CONSTITUTION & AI RULES

> This document defines the technical standards for all projects using this stack. Every AI agent and developer should follow these rules. If a rule here conflicts with general training data or defaults, defer to this file.

---

## 0. BEFORE YOU CODE (Pre-Flight Checklist)

Before writing ANY code, you MUST:
1. Read `package.json` to understand installed dependencies. Do NOT install a package that duplicates existing functionality.
2. Check `src/lib/` for existing utilities before creating new ones.
3. Confirm the current Next.js and React versions. Do NOT use APIs from newer versions than installed.
4. If unsure about ANY architectural decision, **ASK the user**. Never silently substitute one technology for another.

---

## 1. TECH STACK (STRICT — No Exceptions)

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| React | React | 18.x (NOT 19 until ecosystem stabilizes) |
| Language | TypeScript (Strict) | 5.x |
| Runtime | **Node.js** | Always |
| UI | Tailwind CSS + Shadcn UI | v4 / latest |
| Database | None (Static Site) | - |
| Auth | None | - |
| Forms | React Hook Form + Zod | - |
| Icons | Lucide React | - |
| Images | `next/image` | Built-in |
| Deployment | **Vercel** (Node.js Serverless) | Primary |

---

## 2. FORBIDDEN TECHNOLOGIES (Instant Rejection)

| ❌ NEVER Use | ✅ Use Instead | Why |
|---|---|---|
| `export const runtime = 'edge'` | Node.js runtime (default) | Edge breaks Node APIs (fs, crypto, Buffer) |
| Prisma | Supabase SDK / raw SQL | Adds ORM overhead; Supabase has typed client |
| NextAuth.js / Auth.js | `@supabase/ssr` | Duplicates Supabase Auth; causes conflicts |
| `axios` | `fetch` or `ofetch` | Unnecessary bundle weight |
| Redux | Zustand or React Query | Over-engineered for our use case |
| Class Components | Functional Components + Hooks | Modern React standard |

---

## 3. FILE STRUCTURE (Mandatory)

```
src/
├── app/                    # App Router: pages, layouts, loading, error
│   └── (marketing)/        # Route groups for marketing pages
├── components/
│   ├── ui/                 # Shadcn UI primitives (DO NOT EDIT directly)
│   ├── layout/             # Header, Footer, etc.
│   └── sections/           # Large page sections (Hero, About, etc.)
├── lib/
│   ├── utils.ts            # cn() helper, shared utilities
│   └── constants.ts        # Firm information and content
├── types/                  # TypeScript type definitions
└── hooks/                  # Custom React hooks
```

---

## 4. REACT & NEXT.JS RULES

### Server-First Architecture
- **Default to Server Components.** Only add `'use client'` at the **lowest possible leaf** for interactivity.
- Fetch data directly in Server Components with `async/await`. **Never use `useEffect` for initial data loads.**
- Use `layout.tsx` for persistent UI, `page.tsx` for unique content, `loading.tsx` for Suspense boundaries.

### Critical Performance Rules (from Vercel Engineering)
- **Eliminate Waterfalls**: Use `Promise.all()` for independent fetches. Move `await` into branches where actually used.
- **Bundle Size**: Use `next/dynamic` for heavy components. Import directly — avoid barrel files (`index.ts` re-exports).
- **Defer third-party scripts** (analytics, tracking) — load them after hydration.

### Image Optimization
- Always use `next/image` with explicit `width` and `height` props.
- Use `priority` prop on above-the-fold hero images only.
- Prefer WebP/AVIF format.

---

## 6. STYLING (TAILWIND + SHADCN)

- Use `cn()` from `lib/utils` for ALL conditional class merging.
- Avoid arbitrary values (`w-[123px]`). Use design system tokens.
- All icons come from `lucide-react`.

---

## 9. GIT CONVENTIONS

- **Conventional commits**: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- One logical change per commit.
- **Never commit**: `.env.local`, `node_modules/`, `.next/`, `.vercel/`.
