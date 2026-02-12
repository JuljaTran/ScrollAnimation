let rafId = null;
let timeoutId = null;

/**
 * Startet Auto-Scroll für eine feste Dauer.
 * @param {number} speed Scrollgeschwindigkeit in px pro Frame
 * @param {number} duration Dauer in ms, nach der gestoppt wird
 */
export function startAutoScroll(speed = 1, duration = 10000) {
  if (rafId !== null || timeoutId !== null) return;

  function step() {
    window.scrollBy(0, speed);
    rafId = requestAnimationFrame(step);
  }

  // Start nach minimaler Verzögerung
  timeoutId = setTimeout(() => {
    timeoutId = null;
    rafId = requestAnimationFrame(step);
  }, 100);

  // Stop nach duration
  setTimeout(stopAutoScroll, duration);
}

export function stopAutoScroll() {
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}