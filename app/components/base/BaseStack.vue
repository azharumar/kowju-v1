<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string;
    reveal?: boolean;
    class?: string;
  }>(),
  {
    as: "div",
    reveal: true,
  },
);

const { rootRef, isVisible } = useScrollReveal();
</script>

<template>
  <component
    ref="rootRef"
    :is="props.as"
    :data-visible="props.reveal ? isVisible : undefined"
    :class="[
      'flex flex-col gap-8 md:gap-10',
      props.reveal ? 'motion-premium-sequence' : '',
      props.class,
    ]"
  >
    <slot />
  </component>
</template>
