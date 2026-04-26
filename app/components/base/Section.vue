<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id?: string;
    title?: string;
    rhythm?: "none" | "hero" | "compact" | "default" | "comfortable";
    stack?: "tight" | "default" | "loose" | "comfortable";
    reveal?: boolean;
    class?: string;
  }>(),
  {
    rhythm: "default",
    stack: "default",
    reveal: true,
  },
);

const { rootRef, isVisible } = useScrollReveal();

const rhythmClass = computed(() => {
  const map = {
    none: "",
    hero: "pb-10 pt-12 md:pb-12 md:pt-16",
    compact: "py-12 md:py-16",
    default: "py-16 md:py-20",
    comfortable: "py-20 md:py-24",
  } as const;
  return map[props.rhythm];
});

const stackClass = computed(() => {
  const map = {
    tight: "gap-4",
    default: "gap-6",
    loose: "gap-8",
    comfortable: "gap-8 md:gap-10",
  } as const;
  return map[props.stack];
});
</script>

<template>
  <section
    :id="id"
    ref="rootRef"
    :class="['scroll-mt-24', rhythmClass, props.class]"
  >
    <div
      :class="['flex flex-col', stackClass, props.reveal ? 'motion-premium-sequence' : '']"
      :data-visible="props.reveal ? isVisible : undefined"
    >
      <h2
        v-if="props.title"
        class="text-h4 font-semibold text-text"
      >
        {{ props.title }}
      </h2>
      <slot name="intro" />
      <slot />
    </div>
  </section>
</template>
