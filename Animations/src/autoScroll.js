let rafId = null

export function startAutoScroll(speed = .1) {
  if (rafId !== null) return

  function step() {
    window.scrollBy(0, speed)
    rafId = requestAnimationFrame(step)
  }

  rafId = requestAnimationFrame(step)
}

export function stopAutoScroll() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}
