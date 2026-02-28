# EPPP Study Backend API

Node.js/Express backend for the EPPP Study Companion application.

## Features

- **AI Chat Proxy**: Proxies requests to Anthropic API with SSE streaming
- **Rate Limiting**: IP-based rate limiting (50 requests per 15 minutes)
- **Security**: Helmet security headers, CORS configuration
- **Logging**: Structured logging with Pino
- **Health Check**: `/api/health` endpoint for monitoring
- **Production Ready**: PM2 cluster mode configuration

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Anthropic API key

### Installation

```bash
# From project root
npm run install:all

# Or just backend
cd backend
npm install
```

### Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Anthropic API key to `.env`:
   ```env
   NODE_ENV=development
   PORT=3000
   ANTHROPIC_API_KEY=sk-ant-api03-...
   LOG_LEVEL=debug
   CORS_ORIGIN=http://localhost:5173
   ```

### Running Development Server

```bash
# From project root (runs both frontend and backend)
npm run dev

# Or just backend
cd backend
npm run dev
```

The backend will start on `http://localhost:3000`.

## API Endpoints

### POST /api/chat

Main chat endpoint with SSE streaming support.

**Request Body:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Explain classical conditioning"
    }
  ],
  "mode": "chat",
  "context": {
    "domain": "Biological Bases",
    "question": {
      "q": "Which of the following...",
      "options": ["A", "B", "C", "D"],
      "correct": 0,
      "explanation": "..."
    },
    "progress": {
      "correct": 10,
      "total": 20
    }
  },
  "stream": true
}
```

**Parameters:**
- `messages` (required): Array of message objects with `role` and `content`
- `mode` (optional): "chat" or "quiz"
- `context` (optional): Additional context for AI responses
- `stream` (optional): Boolean, defaults to true

**Streaming Response (SSE):**
```
data: {"type":"content","text":"Classical"}
data: {"type":"content","text":" conditioning"}
data: [DONE]
```

**Non-Streaming Response:**
```json
{
  "content": "Classical conditioning is...",
  "usage": {
    "input_tokens": 50,
    "output_tokens": 100
  }
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "service": "eppp-study-api",
  "timestamp": "2026-02-26T12:00:00.000Z"
}
```

## Production Deployment

### DigitalOcean Setup

1. **Build and Upload**
   ```bash
   # Build frontend
   npm run build

   # Upload files to server
   scp -r dist/ user@server:/var/www/eppp-study/frontend/
   scp -r backend/ user@server:/var/www/eppp-study/
   ```

2. **Install Dependencies**
   ```bash
   cd /var/www/eppp-study/backend
   npm ci --production
   ```

3. **Configure Environment**
   ```bash
   # Create production .env
   cat > .env << EOF
   NODE_ENV=production
   PORT=3000
   ANTHROPIC_API_KEY=sk-ant-prod-...
   LOG_LEVEL=info
   CORS_ORIGIN=https://yourdomain.com
   EOF
   ```

4. **Start with PM2**
   ```bash
   # Install PM2 globally
   npm install -g pm2

   # Start application
   pm2 start ecosystem.config.js

   # Configure auto-start
   pm2 startup
   pm2 save
   ```

5. **Configure Nginx**

   See `../nginx.conf.production` for full configuration. Key points:
   - Serve frontend static files from `/var/www/eppp-study/frontend/dist`
   - Proxy `/api/*` to backend on `localhost:3000`
   - Enable SSE streaming with `proxy_buffering off`

### PM2 Commands

```bash
pm2 status              # Check status
pm2 logs eppp-api       # View logs
pm2 restart eppp-api    # Restart
pm2 stop eppp-api       # Stop
pm2 delete eppp-api     # Remove from PM2
```

### Monitoring

Check health endpoint:
```bash
curl https://yourdomain.com/api/health
```

View logs:
```bash
pm2 logs eppp-api
# or
tail -f backend/logs/*.log
```

## Architecture

```
backend/
├── src/
│   ├── index.js              # Entry point & server startup
│   ├── server.js             # Express app configuration
│   ├── config/
│   │   └── env.js           # Environment validation
│   ├── middleware/
│   │   ├── cors.js          # CORS configuration
│   │   ├── errorHandler.js # Centralized error handling
│   │   ├── rateLimiter.js  # IP-based rate limiting
│   │   └── requestLogger.js # HTTP request logging
│   ├── routes/
│   │   ├── index.js         # Route aggregator
│   │   ├── chat.js          # POST /api/chat
│   │   └── health.js        # GET /api/health
│   ├── services/
│   │   └── anthropic.js     # Anthropic API client
│   └── utils/
│       ├── logger.js        # Pino logger setup
│       └── prompts.js       # Dr. EPPP system prompts
├── package.json
├── .env.example
└── ecosystem.config.js      # PM2 configuration
```

## Security

- ✅ API key stored server-side only
- ✅ Rate limiting (50 req/15min per IP)
- ✅ CORS restricted to configured origin
- ✅ Helmet security headers
- ✅ Request logging (with IP hashing)
- ✅ Sensitive error messages hidden from clients

## Troubleshooting

**Backend won't start:**
- Check `.env` file exists and has valid `ANTHROPIC_API_KEY`
- Verify port 3000 is not in use: `lsof -i :3000` (macOS/Linux) or `netstat -ano | findstr :3000` (Windows)

**CORS errors:**
- Verify `CORS_ORIGIN` in `.env` matches frontend URL
- Check frontend is making requests to correct port

**Streaming not working:**
- Ensure nginx configuration has `proxy_buffering off`
- Check `X-Accel-Buffering: no` header is set

**Rate limit errors:**
- Current limit: 50 requests per 15 minutes per IP
- Adjust in `src/middleware/rateLimiter.js` if needed

## Future Enhancements

- [ ] User authentication (JWT)
- [ ] SQLite database for progress sync
- [ ] User-based rate limiting
- [ ] Chat history persistence
- [ ] Admin dashboard
