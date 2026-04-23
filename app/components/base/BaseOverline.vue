<script setup lang="ts">
withDefaults(
  defineProps<{
    dividers?: boolean;
  }>(),
  { dividers: false },
);
</script>

<template>
  <p
    class="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-overline text-brand-600"
  >
    <svg
      v-if="dividers"
      class="h-px w-6 shrink-0"
      viewBox="0 0 24 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="24" height="1" fill="currentColor" />
    </svg>
    <slot />
    <svg
      v-if="dividers"
      class="h-px w-6 shrink-0"
      viewBox="0 0 24 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="24" height="1" fill="currentColor" />
    </svg>
  </p>
</template>
