import cors from 'cors';
import { config } from '../config/env.js';

/**
 * CORS middleware configuration
 * In development, allow any localhost port
 * In production, use configured origin
 */
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) {
      return callback(null, true);
    }

    // In development, allow any localhost port
    if (config.nodeEnv === 'development' && origin.match(/^http:\/\/localhost:\d+$/)) {
      return callback(null, true);
    }

    // Otherwise check against configured origin
    if (origin === config.corsOrigin) {
      return callback(null, true);
    }

    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

export const corsMiddleware = cors(corsOptions);
