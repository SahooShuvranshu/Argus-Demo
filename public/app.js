// ARGUS Demo Dashboard Client Logic
document.addEventListener('DOMContentLoaded', () => {
  console.log('ARGUS Demo Dashboard initialized.');

  async function fetchStatus() {
    try {
      const res = await fetch('/api/dashboard/status');
      if (!res.ok) return;
      const data = await res.json();
      
      const modelEl = document.getElementById('val-model');
      if (modelEl && data.activeModel) {
        modelEl.textContent = data.activeModel;
      }

      const uptimeEl = document.getElementById('val-uptime');
      if (uptimeEl && data.uptimeSeconds) {
        const mins = Math.floor(data.uptimeSeconds / 60);
        uptimeEl.textContent = `Online (${mins}m)`;
      }
    } catch (err) {
      console.warn('Dashboard live telemetry polling active.');
    }
  }

  fetchStatus();
  setInterval(fetchStatus, 10000);
});
