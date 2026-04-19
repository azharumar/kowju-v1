import Lenis from "lenis";

export default defineNuxtPlugin(() => {
  if (typeof window === "undefined") return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,

    // 🔑 Duration-based smoothing (better for "luxury feel")
    duration: 1.4, // increase for slower scroll (1.2–1.8 sweet spot)

    // Custom easing = soft glide, no harsh stop
    easing: (t) => 1 - Math.pow(1 - t, 3),

    wheelMultiplier: 0.8, // slightly slower input, not dead
    touchMultiplier: 1.2,

    anchors: true,
    stopInertiaOnNavigate: true,
  });

  const nuxtApp = useNuxtApp();

  nuxtApp.hook("page:finish", () => {
    lenis.resize();
  });
});
