# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EPPP Study Companion is a browser-based study tool for the Examination for Professional Practice in Psychology (EPPP). Built with React 19 + Vite 7 frontend and Node.js/Express backend with Anthropic AI integration for Dr. EPPP tutor feature.

## Development Commands

```bash
# Install all dependencies (frontend + backend)
npm run install:all

# Development (runs both frontend and backend)
npm run dev              # Frontend: http://localhost:5173, Backend: http://localhost:3000
npm run dev:frontend     # Frontend only
npm run dev:backend      # Backend only (cd backend && npm run dev)

# Build
npm run build            # Production frontend build (output: dist/)
npm run build:backend    # Backend production dependencies only

# Quality
npm run lint             # Run ESLint
npm run preview          # Preview production build

# Backend-specific (from backend/ directory)
npm run start            # Production server (requires .env)
npm run dev              # Development server with --watch
```

## Environment Setup

Backend requires `.env` file:
```bash
cp backend/.env.example backend/.env
# Set ANTHROPIC_API_KEY, CORS_ORIGIN, LOG_LEVEL, PORT
```

## Architecture Overview

### Monorepo Structure
```
eppp-study/
├── src/                    # React frontend
│   ├── App.jsx            # Root component with ALL application state
│   ├── components/        # View components (Dashboard, Quiz, Results, Chat, etc.)
│   ├── data/domains.js    # Central data: 8 EPPP domains with questions/flashcards
│   └── utils/             # Helper functions
├── backend/               # Express API server
│   └── src/
│       ├── routes/        # API endpoints (/api/chat, /api/health)
│       ├── services/      # Anthropic API client
│       ├── middleware/    # CORS, rate limiting, error handling, logging
│       └── utils/         # Logger (Pino), system prompts
└── dist/                  # Production frontend build output
```

### Frontend State Management

**All state lives in `src/App.jsx`** using React hooks - no Redux/Context/external state library. Key state variables:

- `view`: Current screen ('dashboard', 'quiz', 'results', 'flashcards', 'study', 'chat')
- `selectedDomain`: Active domain object from DOMAINS array
- `quizState`: { questions, currentIndex, answers, score, finished, userAnswers }
- `flashcardState`: { cards, currentIndex, flipped }
- `progress`: Per-domain stats { correct, total, flashcardsReviewed } stored in localStorage
- `quizMode`: 'domain' (single domain) or 'mixed' (cross-domain random questions)

State flows down through props; events bubble up through callbacks. LocalStorage sync happens on progress updates.

### Data Structure (`src/data/domains.js`)

Central `DOMAINS` array containing all 8 EPPP domains. Each domain:
```javascript
{
  id: string,              // Unique identifier
  name: string,            // Display name
  weight: number,          // EPPP exam percentage (8-15%)
  color: string,           // Brand color for UI theming
  icon: string,            // Emoji icon
  description: string,     // Brief description
  topics: string[],        // Topic checklist for StudyView
  questions: [{
    q: string,
    options: string[4],    // Always 4 options
    correct: number,       // Index 0-3
    explanation: string    // Detailed explanation with references
  }],
  flashcards: [{
    front: string,
    back: string
  }]
}
```

Domain files are split into `src/data/domains/domain1-assessment.js` through `domain8-treatment.js`. Questions are shuffled at quiz start; source order doesn't matter.

### Component Architecture

Components use **CSS Modules** (`.module.css` files) for scoped styling:

- **Header**: Global stats, logo (clickable to dashboard)
- **Dashboard**: Domain cards, mixed practice launcher, stats overview
- **Quiz**: Multiple choice questions with immediate feedback and explanations
- **Results**: Score summary with review mode showing all questions/answers
- **Flashcards**: Tap-to-flip cards with progress indicator
- **StudyView**: Domain-specific topic checklist + quick-launch flashcards/quiz
- **Chat**: Streaming AI tutor (Dr. EPPP) with markdown rendering
- **DomainIcon**: Reusable domain icon component with color theming
- **MarkdownText**: Markdown rendering for chat/explanations

Global CSS variables in `src/index.css` define the design system (fonts, colors, spacing). Inline styles are used sparingly for dynamic domain colors.

### Backend Architecture

Express 5 server with modular structure:

**Entry point**: `backend/src/index.js` - Server startup with graceful shutdown handlers

**Routes** (`backend/src/routes/`):
- `POST /api/chat`: Streaming chat with Anthropic API (SSE or JSON response)
- `GET /api/health`: Health check endpoint

**Services** (`backend/src/services/anthropic.js`):
- `createChatCompletion()`: Anthropic API client with streaming support
- Uses Claude Sonnet 4.5 model
- System prompts from `utils/prompts.js` define Dr. EPPP personality

**Middleware** (`backend/src/middleware/`):
- `cors.js`: CORS configuration (restricted to CORS_ORIGIN env var)
- `rateLimiter.js`: IP-based rate limiting (50 req/15min default)
- `requestLogger.js`: Pino HTTP logging
- `errorHandler.js`: Centralized error handling with client-safe messages

**Request Flow**:
1. Request → CORS → Rate Limiter → Request Logger → Route Handler
2. Route calls service (e.g., Anthropic API)
3. Streaming: SSE chunks sent as `data: {"type":"content","text":"..."}`
4. Non-streaming: JSON response with content + usage stats
5. Errors → Error Handler → Sanitized JSON error response

### Production Deployment

Backend runs with **PM2** in cluster mode (see `backend/ecosystem.config.js`):
- 2 instances for load balancing
- Auto-restart on crashes
- Log rotation
- Memory limits (500MB per instance)

Typical deployment flow:
1. `npm run build` → Frontend static files to `dist/`
2. Upload `dist/` and `backend/` to server
3. `cd backend && npm ci --production`
4. Configure backend `.env` with production values
5. `pm2 start ecosystem.config.js`
6. Nginx serves `dist/` and proxies `/api/*` to backend with `proxy_buffering off` for SSE

## Key Development Patterns

### Adding Questions/Flashcards
Edit domain files in `src/data/domains/` directly. No migration needed; changes are immediate. Keep explanations detailed with references to DSM-5, APA guidelines, or research citations where appropriate.

### Adding New Views
1. Add new view name to `view` state cases in App.jsx
2. Create component in `src/components/` with matching `.module.css`
3. Add navigation logic (usually from Dashboard or Header)
4. Follow existing patterns for state passing via props

### Extending Progress Tracking
Progress object in App.jsx syncs to localStorage. Extend schema and update save/load logic in useEffect. Current keys: `correct`, `total`, `flashcardsReviewed` per domain, plus global `streak`, `totalAnswered`, `totalCorrect`.

### Backend API Changes
- New routes: Add to `backend/src/routes/index.js` and create route file
- Middleware: Add to `backend/src/middleware/` and import in `server.js`
- Services: Add to `backend/src/services/` for business logic
- All errors should use centralized error handler for consistent responses

### Styling Changes
Check `src/index.css` CSS variables first before adding component-specific styles. Design is intentionally minimal and print-friendly. Use CSS Modules for component scoping. Dynamic colors use inline styles with domain.color.

## Common Pitfalls

- Don't add external state management - App.jsx owns all state
- Don't import domains individually - use `DOMAINS` array from `data/domains.js`
- Backend: Always validate env vars through `config/env.js`
- Backend: Rate limits are per-IP, not per-user (no auth system exists)
- Streaming requires `proxy_buffering off` in Nginx - easy to miss in production
- Questions must have exactly 4 options; correct index must be 0-3

## Documentation References

- Full setup: `/QUICKSTART.md`
- Backend details: `/backend/README.md`
