import pinoHttp from 'pino-http';
import { logger } from '../utils/logger.js';

/**
 * HTTP request logger middleware
 * Excludes message content from logs for privacy
 */
export const requestLogger = pinoHttp({
  logger,
  customLogLevel: (req, res, err) => {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return 'warn';
    } else if (res.statusCode >= 500 || err) {
      return 'error';
    }
    return 'info';
  },
  serializers: {
    req: (req) => ({
      id: req.id,
      method: req.method,
      url: req.url,
      // Hash IP for privacy
      ip: req.ip ? hashIP(req.ip) : undefined
    }),
    res: (res) => ({
      statusCode: res.statusCode
    })
  }
});

/**
 * Simple IP hashing for privacy in logs
 */
function hashIP(ip) {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `ip_${Math.abs(hash).toString(16)}`;
}
