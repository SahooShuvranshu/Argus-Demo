const express = require('express');
const router = express.Router();
const metricsService = require('../services/metricsService');

// GET /api/dashboard/status
router.get('/status', (req, res) => {
  try {
    const metrics = metricsService.getSystemMetrics();
    res.json(metrics);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve metrics' });
  }
});

module.exports = router;
