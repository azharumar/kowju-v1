export function useScrollReveal() {
  const rootRef = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      isVisible.value = true;
      return;
    }

    const node = rootRef.value;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        isVisible.value = true;
        observer.disconnect();
      },
      { threshold: 0, rootMargin: "0px 0px -50% 0px" },
    );

    observer.observe(node);
    onBeforeUnmount(() => observer.disconnect());
  });

  return { rootRef, isVisible };
}
