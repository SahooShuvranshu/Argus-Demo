const express = require('express');
const router = express.Router();
const exportService = require('../services/exportService');

// GET /api/export/json
router.get('/json', (req, res) => {
  try {
    const report = exportService.generateJSONReport();
    res.setHeader('Content-Type', 'application/json');
    res.send(report);
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate JSON report' });
  }
});

// GET /api/export/csv
router.get('/csv', (req, res) => {
  try {
    const report = exportService.generateCSVReport();
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=telemetry-report.csv');
    res.send(report);
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate CSV report' });
  }
});

module.exports = router;
