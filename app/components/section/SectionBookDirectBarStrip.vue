<script setup lang="ts">
defineProps<{
  stripLabel: string;
  benefits: { label: string; icon?: string }[];
}>();
</script>

<template>
  <div class="flex items-center py-0.5 text-body-sm md:py-1">
    <span
      class="whitespace-nowrap font-semibold uppercase tracking-overline text-brand-600"
    >
      {{ stripLabel }}
    </span>
    <span aria-hidden="true" class="mx-3 text-body text-brand-600/60">•</span>
    <template v-for="(benefit, index) in benefits" :key="benefit.label">
      <span
        class="whitespace-nowrap font-semibold uppercase tracking-overline text-brand-600"
        >{{ benefit.label }}</span
      >
      <span
        v-if="index < benefits.length - 1"
        aria-hidden="true"
        class="mx-3 text-brand-600"
      >
        •
      </span>
    </template>
  </div>
</template>
