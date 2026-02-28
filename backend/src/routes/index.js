import express from 'express';
import chatRouter from './chat.js';
import healthRouter from './health.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Apply rate limiter to chat endpoint only
router.use('/chat', rateLimiter, chatRouter);
router.use('/health', healthRouter);

export default router;
