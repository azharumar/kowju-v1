<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string;
    size?: "tight" | "default" | "loose" | "comfortable";
    class?: string;
  }>(),
  {
    as: "div",
    size: "default",
  },
);

const sizeClass = computed(() => {
  const map = {
    tight: "gap-4",
    default: "gap-6",
    loose: "gap-8",
    comfortable: "gap-8 md:gap-10",
  } as const;
  return map[props.size];
});
</script>

<template>
  <component :is="props.as" :class="['flex flex-col', sizeClass, props.class]">
    <slot />
  </component>
</template>
