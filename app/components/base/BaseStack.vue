<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string;
    variant?: "tight" | "default" | "loose" | "comfortable";
    reveal?: boolean;
    class?: string;
  }>(),
  {
    as: "div",
    variant: "comfortable",
    reveal: true,
  },
);

const { rootRef, isVisible } = useScrollReveal();

const variantClass = computed(() => {
  const map = {
    tight: "gap-4",
    default: "gap-6",
    loose: "gap-8",
    comfortable: "gap-8 md:gap-10",
  } as const;
  return map[props.variant];
});
</script>

<template>
  <component
    ref="rootRef"
    :is="props.as"
    :data-visible="props.reveal ? isVisible : undefined"
    :class="[
      'flex flex-col',
      variantClass,
      props.reveal ? 'motion-premium-sequence' : '',
      props.class,
    ]"
  >
    <slot />
  </component>
</template>
