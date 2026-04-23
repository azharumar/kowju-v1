<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: "content" | "wide" | "full";
    gutter?: "default" | "compact" | "comfortable" | "none";
    class?: string;
  }>(),
  {
    width: "content",
    gutter: "default",
  },
);

const widthClass = computed(() => {
  const map = {
    content: "max-w-5xl",
    wide: "max-w-6xl",
    full: "max-w-none",
  } as const;
  return map[props.width];
});

const gutterClass = computed(() => {
  const map = {
    default: "px-4 sm:px-6 lg:px-8",
    compact: "px-4 sm:px-5 lg:px-6",
    comfortable: "px-5 sm:px-7 lg:px-10",
    none: "",
  } as const;
  return map[props.gutter];
});
</script>

<template>
  <div :class="['mx-auto', widthClass, gutterClass, props.class]">
    <slot />
  </div>
</template>
