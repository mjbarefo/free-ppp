import express from 'express';
import { streamChat, nonStreamingChat } from '../services/anthropic.js';
import { buildSystemPrompt } from '../utils/prompts.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

/**
 * POST /api/chat
 * Main AI chat endpoint with streaming support
 */
router.post('/', async (req, res, next) => {
  try {
    const { messages, mode, context, stream = true } = req.body;

    // Validate request
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      const error = new Error('Messages array is required and must not be empty');
      error.name = 'ValidationError';
      throw error;
    }

    // Validate message format
    for (const msg of messages) {
      if (!msg.role || !msg.content) {
        const error = new Error('Each message must have role and content properties');
        error.name = 'ValidationError';
        throw error;
      }
      if (!['user', 'assistant'].includes(msg.role)) {
        const error = new Error('Message role must be either "user" or "assistant"');
        error.name = 'ValidationError';
        throw error;
      }
    }

    // Build system prompt with context
    const systemPrompt = buildSystemPrompt(context);

    logger.debug({
      messageCount: messages.length,
      mode,
      hasContext: !!context,
      stream
    }, 'Processing chat request');

    // Route to appropriate handler
    if (stream) {
      await streamChat(messages, systemPrompt, res);
    } else {
      const result = await nonStreamingChat(messages, systemPrompt);
      res.json({
        content: result.content,
        usage: result.usage
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
