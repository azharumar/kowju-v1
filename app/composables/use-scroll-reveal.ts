import { onBeforeUnmount, onMounted, ref } from "vue";

export function useScrollReveal() {
  const rootRef = ref<HTMLElement | null>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      isVisible.value = true;
      return;
    }

    const node = rootRef.value;
    if (!node) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        isVisible.value = true;
        observer?.disconnect();
        observer = null;
      },
      { threshold: 0, rootMargin: "0px 0px -25% 0px" },
    );

    observer.observe(node);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });

  return { rootRef, isVisible };
}
