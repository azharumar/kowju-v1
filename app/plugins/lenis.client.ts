import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

type ScrollDirection = 'up' | 'down'

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const direction = useState<ScrollDirection>('scroll-direction', () => 'up')
  const isLenisReady = useState('lenis-ready', () => false)
  const previousY = useState('lenis-previous-y', () => 0)

  const lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.06,
    wheelMultiplier: 0.5,
    touchMultiplier: 1,
    syncTouch: true,
  })

  window.__lenis = lenis
  isLenisReady.value = true
  document.documentElement.classList.add('lenis-enabled')

  lenis.on('scroll', ({ animatedScroll }) => {
    const nextDirection: ScrollDirection =
      animatedScroll > previousY.value ? 'down' : 'up'
    direction.value = nextDirection
    previousY.value = animatedScroll
  })

  let rafId = 0
  const raf = (time: number) => {
    lenis.raf(time)
    rafId = window.requestAnimationFrame(raf)
  }
  rafId = window.requestAnimationFrame(raf)

  const cleanup = () => {
    if (rafId) window.cancelAnimationFrame(rafId)
    document.documentElement.classList.remove('lenis-enabled')
    isLenisReady.value = false
    delete window.__lenis
    lenis.destroy()
  }

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cleanup()
    })
  }

  nuxtApp.provide('lenis', lenis)
})
