# Quick Start

Get the app running locally in about 5 minutes.

## Prerequisites

- Node.js 18+
- npm
- Anthropic API key (optional unless you want AI features)

## Install and Run

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure backend environment

```bash
cp backend/.env.example backend/.env
```

Set at least:

```env
ANTHROPIC_API_KEY=sk-ant-api03-...
CORS_ORIGIN=http://localhost:5173
```

### 3. Start both servers

```bash
npm run dev
```

Default local URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## Verify

### Backend health

```bash
curl http://localhost:3000/api/health
```

Expected shape:

```json
{"status":"ok","service":"eppp-study-api","timestamp":"..."}
```

### AI checks

- Open the app and use Dr. EPPP chat, or
- Complete a quiz question and click the AI explanation action

## Common Commands

```bash
npm run dev            # frontend + backend
npm run dev:frontend   # frontend only
npm run dev:backend    # backend only
npm run lint
npm run build
```

## Troubleshooting

### Backend fails to start

- Confirm `backend/.env` exists
- Confirm `ANTHROPIC_API_KEY` is set
- Confirm port `3000` is free

### CORS errors

- Match backend `CORS_ORIGIN` to the frontend URL in your terminal
- Restart backend after env changes

### Port conflict on frontend

- Vite will move to `5174+`
- Update `CORS_ORIGIN` accordingly

## Next

- Architecture and development patterns: [CLAUDE.md](CLAUDE.md)
- Backend-specific docs: [backend/README.md](backend/README.md)
