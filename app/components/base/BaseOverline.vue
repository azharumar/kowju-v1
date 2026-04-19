<script setup lang="ts">
withDefaults(
  defineProps<{
    dividers?: boolean
  }>(),
  { dividers: true },
)
</script>

<template>
  <p class="text-body font-semibold uppercase tracking-overline text-brand-600">
    <span v-if="dividers" aria-hidden="true">— </span><slot /><span v-if="dividers" aria-hidden="true"> —</span>
  </p>
</template>
