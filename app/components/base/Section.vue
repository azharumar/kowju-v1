<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string
    title?: string
    enter?: boolean
  }>(),
  { enter: false },
)
</script>

<template>
  <section :id="id" class="scroll-mt-24" :class="enter ? 'motion-enter-scroll' : undefined">
    <h2
      v-if="title"
      class="mb-6 text-h4 font-semibold text-text"
    >
      {{ title }}
    </h2>
    <slot name="intro" />
    <slot />
  </section>
</template>
