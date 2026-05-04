<script setup lang="ts">
import { computed } from "vue";
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    label?: string;
    as?: "link" | "text";
    trailingIcon?: "arrow" | "download";
    external?: boolean;
    /** Gold / ivory link for `bg-brand-900` surfaces (e.g. meetings, room offers). */
    tone?: "default" | "inverse";
  }>(),
  {
    label: "Learn more",
    as: "link",
    trailingIcon: "arrow",
    external: false,
    tone: "default",
  },
);

const textClass =
  "text-body-sm font-semibold uppercase tracking-label";

const linkToneClass = computed(() =>
  props.tone === "inverse"
    ? "text-gold-200 hover:text-gold-100"
    : "text-brand-600",
);

const iconToneClass = computed(() =>
  props.tone === "inverse" ? "text-gold-300" : "text-brand-600",
);

const iconClass = computed(
  () => `text-body-sm leading-none ${iconToneClass.value}`,
);

const trailingIconClass = computed(() =>
  props.trailingIcon === "download" ? "pi pi-download" : "pi pi-arrow-right",
);
</script>

<template>
  <NuxtLink
    v-if="as === 'link'"
    :to="to"
    :external="external"
    class="motion-interactive inline-flex items-center gap-2 underline-offset-2 hover:underline group-hover:underline"
    :class="[textClass, linkToneClass]"
  >
    <span>{{ label }}</span>
    <span :class="[trailingIconClass, iconClass]" aria-hidden="true" />
  </NuxtLink>
  <span
    v-else
    class="motion-interactive inline-flex items-center gap-2 underline-offset-2 group-hover:underline"
    :class="[textClass, linkToneClass]"
  >
    <span>{{ label }}</span>
    <span :class="[trailingIconClass, iconClass]" aria-hidden="true" />
  </span>
</template>
