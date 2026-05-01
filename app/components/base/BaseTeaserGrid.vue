<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    columns?: 2 | 3;
    reveal?: boolean;
  }>(),
  {
    columns: 2,
    reveal: true,
  },
);

const { rootRef, isVisible } = useScrollReveal();

const colsClass = computed(() =>
  props.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
);
</script>

<template>
  <div
    ref="rootRef"
    :data-visible="reveal ? isVisible : undefined"
    :class="[
      'teaser-grid flex w-full snap-x snap-mandatory gap-4 overflow-x-auto md:grid md:gap-8 md:overflow-visible',
      colsClass,
      reveal ? 'motion-premium-sequence' : '',
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.teaser-grid {
  scrollbar-width: none;
}

.teaser-grid::-webkit-scrollbar {
  display: none;
}

.teaser-grid > :deep(*) {
  flex: 0 0 80%;
  scroll-snap-align: start;
}

@media (min-width: 768px) {
  .teaser-grid > :deep(*) {
    flex: initial;
    scroll-snap-align: none;
  }
}
</style>
