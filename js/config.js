/**
 * CardioAI - Frontend API Configuration
 * Manages communication with the Render Flask backend.
 */

(function () {
  // Production Render Backend URL default
  const PRODUCTION_BACKEND_URL = 'https://ecg-based-arrhythmia-detection-backend.onrender.com';
  const LOCAL_BACKEND_URL = 'http://127.0.0.1:5000';

  // Determine default based on current hostname
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const savedUrl = localStorage.getItem('CARDIOAI_BACKEND_URL');

  window.API_BASE_URL = (savedUrl || (isLocal ? LOCAL_BACKEND_URL : PRODUCTION_BACKEND_URL)).replace(/\/+$/, '');

  window.setApiBaseUrl = function (url) {
    if (!url) {
      localStorage.removeItem('CARDIOAI_BACKEND_URL');
      window.API_BASE_URL = isLocal ? LOCAL_BACKEND_URL : PRODUCTION_BACKEND_URL;
    } else {
      url = url.trim().replace(/\/+$/, '');
      localStorage.setItem('CARDIOAI_BACKEND_URL', url);
      window.API_BASE_URL = url;
    }
    window.updateBackendStatusBadge();
  };

  window.getApiUrl = function (path) {
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    return window.API_BASE_URL + cleanPath;
  };

  // Setup Backend Connection Indicator Pill
  window.updateBackendStatusBadge = async function () {
    const badge = document.getElementById('backend-status-badge');
    const badgeDot = document.getElementById('backend-status-dot');
    const badgeText = document.getElementById('backend-status-text');

    if (!badge || !badgeDot || !badgeText) return;

    badgeDot.style.background = '#f59e0b'; // Amber connecting
    badgeText.textContent = 'Connecting...';

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(window.getApiUrl('/health'), { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        badgeDot.style.background = '#10b981'; // Green online
        badgeText.textContent = 'API Connected';
        badge.title = 'Backend is online: ' + window.API_BASE_URL;
      } else {
        throw new Error('Health check returned ' + res.status);
      }
    } catch (err) {
      badgeDot.style.background = '#d04841'; // Red offline
      badgeText.textContent = 'Backend Sleeping / Offline';
      badge.title = 'Click to configure Backend URL (Render free-tier instances may take 30-50s to wake up)';
    }
  };

  // Add click handler to status badge to prompt URL update
  document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('backend-status-badge');
    if (badge) {
      badge.style.cursor = 'pointer';
      badge.addEventListener('click', () => {
        const current = window.API_BASE_URL;
        const newUrl = prompt(
          'Configure Backend API URL:\n(Enter your Render deployment URL or leave blank to reset)',
          current
        );
        if (newUrl !== null) {
          window.setApiBaseUrl(newUrl);
          alert('Backend URL updated to: ' + window.API_BASE_URL);
          window.location.reload();
        }
      });
      window.updateBackendStatusBadge();
    }
  });
})();
