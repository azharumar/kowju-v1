<script setup lang="ts">
type RhythmSize = "compact" | "default" | "comfortable";

const props = withDefaults(
  defineProps<{
    as?: string;
    gap?: RhythmSize;
    gapX?: RhythmSize;
    gapY?: RhythmSize;
    reveal?: boolean;
    class?: string;
  }>(),
  {
    as: "div",
    gap: "default",
    reveal: true,
  },
);

const { rootRef, isVisible } = useScrollReveal();

const gapClass = computed(() => {
  if (props.gapX || props.gapY) return "";
  const map = {
    compact: "gap-4 md:gap-6",
    default: "gap-6 md:gap-8",
    comfortable: "gap-8 md:gap-10",
  } as const;
  return map[props.gap];
});

const gapXClass = computed(() => {
  if (!props.gapX) return "";
  const map = {
    compact: "gap-x-4 md:gap-x-6",
    default: "gap-x-6 md:gap-x-8",
    comfortable: "gap-x-8 md:gap-x-10",
  } as const;
  return map[props.gapX];
});

const gapYClass = computed(() => {
  if (!props.gapY) return "";
  const map = {
    compact: "gap-y-4 md:gap-y-6",
    default: "gap-y-6 md:gap-y-8",
    comfortable: "gap-y-8 md:gap-y-10",
  } as const;
  return map[props.gapY];
});
</script>

<template>
  <component
    ref="rootRef"
    :is="props.as"
    :data-visible="props.reveal ? isVisible : undefined"
    :class="[
      'grid',
      gapClass,
      gapXClass,
      gapYClass,
      props.reveal ? 'motion-premium-sequence' : '',
      props.class,
    ]"
  >
    <slot />
  </component>
</template>
