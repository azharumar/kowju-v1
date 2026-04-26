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

const colsClass = computed(() =>
  props.columns === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2",
);
</script>

<template>
  <BaseGrid :reveal="reveal" gap="default" :class="colsClass">
    <slot />
  </BaseGrid>
</template>
