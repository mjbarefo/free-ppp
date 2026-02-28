import { logger } from '../utils/logger.js';

/**
 * Centralized error handling middleware
 */
export function errorHandler(err, req, res, next) {
  // Log error with stack trace
  logger.error({
    err,
    method: req.method,
    url: req.url,
    body: req.body
  }, 'Request error');

  // Map Anthropic API errors to HTTP status codes
  let statusCode = 500;
  let errorCode = 'INTERNAL_SERVER_ERROR';
  let message = 'An internal server error occurred';

  if (err.status) {
    // Anthropic SDK errors
    switch (err.status) {
      case 400:
        statusCode = 400;
        errorCode = 'BAD_REQUEST';
        message = 'Invalid request format';
        break;
      case 401:
        // Don't expose API key issues to client
        statusCode = 500;
        errorCode = 'INTERNAL_SERVER_ERROR';
        message = 'Authentication error with AI service';
        break;
      case 429:
        statusCode = 429;
        errorCode = 'RATE_LIMIT_EXCEEDED';
        message = 'AI service rate limit exceeded, please try again later';
        break;
      case 500:
      case 502:
      case 503:
        statusCode = 502;
        errorCode = 'BAD_GATEWAY';
        message = 'AI service temporarily unavailable';
        break;
      default:
        statusCode = err.status;
    }
  } else if (err.name === 'ValidationError') {
    statusCode = 400;
    errorCode = 'VALIDATION_ERROR';
    message = err.message;
  }

  // Send error response
  res.status(statusCode).json({
    error: {
      code: errorCode,
      message
    }
  });
}
