import express from 'express';

const router = express.Router();

/**
 * GET /api/health
 * Health check endpoint for monitoring
 */
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'eppp-study-api',
    timestamp: new Date().toISOString()
  });
});

export default router;
