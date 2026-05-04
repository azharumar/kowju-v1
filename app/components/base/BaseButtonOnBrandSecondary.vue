<script setup lang="ts">
import { buttonOnBrandSecondaryRootClass } from "~/utils/button-on-brand-classes";

defineProps<{
  label?: string | null;
}>();
</script>

<template>
  <Button
    unstyled
    :label="label"
    :pt="{ root: { class: buttonOnBrandSecondaryRootClass } }"
  >
    <template v-if="$slots.default" #default>
      <slot />
    </template>
  </Button>
</template>
