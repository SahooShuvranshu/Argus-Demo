// ARGUS Telemetry Export & Report Generation Service
const metricsService = require('./metricsService');

function generateJSONReport() {
  const metrics = metricsService.getSystemMetrics();
  return JSON.stringify({
    exportedAt: new Date().toISOString(),
    metrics,
  }, null, 2);
}

function generateCSVReport() {
  const metrics = metricsService.getSystemMetrics();
  const headers = "Status,UptimeSeconds,ActiveModel,ActiveProvider,HeapUsedMB\n";
  const row = `"${metrics.status}",${metrics.uptimeSeconds},"${metrics.activeModel}","${metrics.activeProvider}",${metrics.memory.heapUsedMB}\n`;
  return headers + row;
}

module.exports = {
  generateJSONReport,
  generateCSVReport,
};
