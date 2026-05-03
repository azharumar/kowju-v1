<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    label?: string;
    as?: "link" | "text";
    trailingIcon?: "arrow" | "download";
    external?: boolean;
  }>(),
  {
    label: "Learn more",
    as: "link",
    trailingIcon: "arrow",
    external: false,
  },
);

const textClass =
  "text-body-sm font-semibold uppercase tracking-label";
const iconClass = "text-body-sm leading-none text-brand-600";

const trailingIconClass = computed(() =>
  props.trailingIcon === "download" ? "pi pi-download" : "pi pi-arrow-right",
);
</script>

<template>
  <NuxtLink
    v-if="as === 'link'"
    :to="to"
    :external="external"
    class="motion-interactive inline-flex items-center gap-2 text-brand-600 underline-offset-2 hover:underline group-hover:underline"
    :class="textClass"
  >
    <span>{{ label }}</span>
    <span :class="[trailingIconClass, iconClass]" aria-hidden="true" />
  </NuxtLink>
  <span
    v-else
    class="motion-interactive inline-flex items-center gap-2 text-brand-600 underline-offset-2 group-hover:underline"
    :class="textClass"
  >
    <span>{{ label }}</span>
    <span :class="[trailingIconClass, iconClass]" aria-hidden="true" />
  </span>
</template>
