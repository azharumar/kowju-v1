<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string;
    class?: string;
  }>(),
  {
    as: "div",
  },
);
</script>

<template>
  <component :is="props.as" :class="['flex flex-col gap-8 md:gap-10', props.class]">
    <slot />
  </component>
</template>
