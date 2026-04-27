<script setup lang="ts">
export type SectionHeaderAlign = "left" | "center" | "right";

const props = withDefaults(
  defineProps<{
    overline?: string;
    overlineClass?: string;
    title?: string;
    lead?: string;
    align?: SectionHeaderAlign;
    dividers?: boolean;
    headingLevel?: 2 | 3 | 4;
  }>(),
  {
    align: "left",
    dividers: false,
    headingLevel: 2,
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

const itemsAlignClass = computed(() => {
  const map = {
    left: "items-stretch",
    center: "items-center",
    right: "items-end",
  } as const;
  return map[props.align];
});

const heading = computed(() => ({
  tag: `h${props.headingLevel}` as "h2" | "h3" | "h4",
  class: `text-h${props.headingLevel}`,
}));

const slots = useSlots();
const showOverline = computed(
  () => Boolean(props.overline) || Boolean(slots.overline),
);
const showLead = computed(() => Boolean(props.lead) || Boolean(slots.lead));
</script>

<template>
  <div :class="['flex flex-col gap-1', alignClass, itemsAlignClass]">
    <BaseOverline v-if="showOverline" :dividers="dividers" :class="overlineClass">
      <slot name="overline">{{ overline }}</slot>
    </BaseOverline>
    <component
      :is="heading.tag"
      v-if="title || $slots.default"
      :class="[heading.class, 'font-sans font-bold text-balance text-text']"
    >
      <slot>{{ title }}</slot>
    </component>
    <p
      v-if="showLead"
      :class="[
        'mt-3 max-w-prose text-balance text-lead text-text-lead line-clamp-2',
        { 'mx-auto': align === 'center', 'ml-auto': align === 'right' },
      ]"
    >
      <slot name="lead">{{ lead }}</slot>
    </p>
  </div>
</template>
