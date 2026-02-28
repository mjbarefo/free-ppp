import Anthropic from '@anthropic-ai/sdk';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';

const client = new Anthropic({
  apiKey: config.anthropicApiKey
});

const MODEL = 'claude-sonnet-4-5-20250929';

/**
 * Stream chat responses via SSE
 */
export async function streamChat(messages, systemPrompt, res) {
  try {
    // Set SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no'); // Disable nginx buffering

    const stream = await client.messages.stream({
      model: MODEL,
      max_tokens: 4096,
      system: systemPrompt,
      messages
    });

    // Forward stream chunks to client
    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        const data = JSON.stringify({ type: 'content', text: chunk.delta.text });
        res.write(`data: ${data}\n\n`);
      } else if (chunk.type === 'message_stop') {
        res.write('data: [DONE]\n\n');
      }
    }

    res.end();
    logger.debug('Stream completed successfully');
  } catch (error) {
    logger.error({ error }, 'Streaming error');

    // Send error event if headers not sent
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'text/event-stream');
    }

    const errorData = JSON.stringify({
      type: 'error',
      error: {
        code: error.status || 500,
        message: error.message || 'Stream error'
      }
    });
    res.write(`data: ${errorData}\n\n`);
    res.end();

    throw error;
  }
}

/**
 * Non-streaming chat for simple requests
 */
export async function nonStreamingChat(messages, systemPrompt) {
  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 4096,
      system: systemPrompt,
      messages
    });

    logger.debug({ usage: response.usage }, 'Non-streaming request completed');

    return {
      content: response.content[0].text,
      usage: response.usage
    };
  } catch (error) {
    logger.error({ error }, 'Non-streaming error');
    throw error;
  }
}
