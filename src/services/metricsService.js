// ARGUS Demo System Metrics Service
const startTime = Date.now();

function getSystemMetrics() {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
  const memoryUsage = process.memoryUsage();

  return {
    status: 'ONLINE',
    uptimeSeconds,
    activeModel: 'Groq llama-3.3-70b-versatile',
    activeProvider: 'Groq Cloud / Native Gemini',
    pipelineStatus: '3-Stage Active (Atlas, Athena, Hermes)',
    memory: {
      heapUsedMB: Math.round(memoryUsage.heapUsed / 1024 / 1024),
      heapTotalMB: Math.round(memoryUsage.heapTotal / 1024 / 1024),
    },
    organization: 'Crystal Studio Labs',
  };
}

module.exports = {
  getSystemMetrics,
};
