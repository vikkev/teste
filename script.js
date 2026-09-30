// Helper function to log events to UI and send to Google Analytics
function trackCustomEvent(eventName, params = {}) {
  // Send event to GA4
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }

  // Display in visual console
  const consoleBox = document.getElementById('consoleLogs');
  if (consoleBox) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    const now = new Date().toLocaleTimeString();
    entry.innerHTML = `<span class="log-time">[${now}]</span> <span class="log-msg">gtag('event', '${eventName}', ${JSON.stringify(params)})</span>`;
    consoleBox.appendChild(entry);
    consoleBox.scrollTop = consoleBox.scrollHeight;
  }
}

// Clear visual logs
function clearLogs() {
  const consoleBox = document.getElementById('consoleLogs');
  if (consoleBox) {
    consoleBox.innerHTML = '<div class="log-entry"><span class="log-time">[' + new Date().toLocaleTimeString() + ']</span> <span class="log-msg">Logs limpos. Aguardando novos eventos...</span></div>';
  }
}
