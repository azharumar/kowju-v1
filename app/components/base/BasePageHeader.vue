<script setup lang="ts">
export type PageHeaderAlign = "left" | "center" | "right";

const props = withDefaults(
  defineProps<{
    title?: string;
    lead?: string;
    align?: PageHeaderAlign;
    headingLevel?: 1 | 2;
  }>(),
  {
    align: "left",
    headingLevel: 1,
  },
);

const alignClass = computed(() => {
  const map = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } as const;
  return map[props.align];
});

const heading = computed(() => ({
  tag: `h${props.headingLevel}` as "h1" | "h2",
  class: `text-h${props.headingLevel}`,
}));
</script>

<template>
  <div :class="['flex flex-col', alignClass]">
    <component
      :is="heading.tag"
      v-if="title || $slots.default"
      :class="[heading.class, 'font-sans font-bold text-balance text-text']"
    >
      <slot>{{ title }}</slot>
    </component>
    <p
      v-if="lead"
      :class="[
        'mt-3 line-clamp-2 text-lead text-text-lead',
        { 'mx-auto': align === 'center', 'ml-auto': align === 'right' },
      ]"
    >
      {{ lead }}
    </p>
  </div>
</template>
