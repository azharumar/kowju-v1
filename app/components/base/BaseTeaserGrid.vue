<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    columns?: 2 | 3;
  }>(),
  { columns: 2 },
);

const colsClass = computed(() =>
  props.columns === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2",
);
</script>

<template>
  <BaseGrid gap="default" :class="colsClass">
    <slot />
  </BaseGrid>
</template>
