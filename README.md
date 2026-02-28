# EPPP Study Companion

A browser-based study tool for the Examination for Professional Practice in Psychology (EPPP), built with React + Vite and an optional Node/Express AI backend.

## What It Includes

- All 8 EPPP domains with ASPPB-aligned weights
- 618 practice questions with explanations
- 279 flashcards for high-yield review
- Domain and mixed quiz modes
- Study view topic drills
- Optional AI explanation expansion in quiz mode
- Dr. EPPP streaming chat tutor
- Local progress tracking (localStorage)

## Question Coverage

| Domain | Questions |
|---|---:|
| Assessment and Diagnosis | 89 |
| Biological Bases of Behavior | 61 |
| Cognitive-Affective Bases | 87 |
| Ethical/Legal/Professional | 76 |
| Growth and Lifespan Development | 82 |
| Research Methods and Statistics | 45 |
| Social and Multicultural Bases | 75 |
| Treatment and Intervention | 103 |
| **Total** | **618** |

## Tech Stack

- Frontend: React 19, Vite 7, CSS Modules
- Backend: Node.js 18+, Express 5, Anthropic SDK, Pino
- Production process management: PM2

## Getting Started

For step-by-step setup, see [QUICKSTART.md](QUICKSTART.md).

Fast path:

```bash
npm run install:all
cp backend/.env.example backend/.env
# set ANTHROPIC_API_KEY in backend/.env
npm run dev
```

Frontend runs at `http://localhost:5173` and backend at `http://localhost:3000`.

## API Surface

- `POST /api/chat`: streaming/non-streaming chat for Dr. EPPP
- `GET /api/health`: backend health endpoint

## Build and Quality

```bash
npm run lint
npm run build
npm run preview
```

## Project Structure

```text
eppp-study/
  src/                    # Frontend app
  backend/                # Express API server
  netlify/functions/      # Serverless functions (legacy/alternate deploy path)
  dist/                   # Production frontend build output
```

## Deployment

Primary production shape:

1. Build frontend (`npm run build`)
2. Deploy backend and frontend artifacts
3. Configure backend env vars (`ANTHROPIC_API_KEY`, `CORS_ORIGIN`, etc.)
4. Run backend with PM2
5. Front with Nginx and optional TLS

Operational details and historical deployment notes were moved to `local-docs/`.

## Documentation

- [Quick Start](QUICKSTART.md)
- Backend-specific docs: [backend/README.md](backend/README.md)
- Claude Code guidance: [CLAUDE.md](CLAUDE.md)

## License

MIT
