let rafId = null
let timeoutId = null

export function startAutoScroll(speed = 0.1, delay = 1000) {
  if (rafId !== null || timeoutId !== null) return

  function step() {
    window.scrollBy(0, speed)
    rafId = requestAnimationFrame(step)
  }

  timeoutId = setTimeout(() => {
    timeoutId = null
    rafId = requestAnimationFrame(step)
  }, delay)
}

export function stopAutoScroll() {
  if (timeoutId !== null) {
    clearTimeout(timeoutId)
    timeoutId = null
  }

  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}