<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    label?: string;
    as?: "link" | "text";
  }>(),
  {
    label: "Learn more",
    as: "link",
  },
);

const textClass =
  "text-body-sm font-semibold uppercase tracking-label";
const iconClass = "text-body-sm leading-none";
</script>

<template>
  <NuxtLink
    v-if="as === 'link'"
    :to="to"
    class="motion-interactive inline-flex items-center gap-2 text-brand-600 underline-offset-2 hover:underline group-hover:underline"
    :class="textClass"
  >
    <span>{{ label }}</span>
    <span :class="['pi pi-arrow-right', iconClass]" aria-hidden="true" />
  </NuxtLink>
  <span
    v-else
    class="motion-interactive inline-flex items-center gap-2 text-brand-600 underline-offset-2 group-hover:underline"
    :class="textClass"
  >
    <span>{{ label }}</span>
    <span :class="['pi pi-arrow-right', iconClass]" aria-hidden="true" />
  </span>
</template>
