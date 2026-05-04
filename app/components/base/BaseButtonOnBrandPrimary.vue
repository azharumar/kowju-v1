<script setup lang="ts">
import { buttonOnBrandPrimaryRootClass } from "~/utils/button-on-brand-classes";

defineProps<{
  label?: string | null;
}>();
</script>

<template>
  <Button
    unstyled
    :label="label"
    :pt="{ root: { class: buttonOnBrandPrimaryRootClass } }"
  >
    <template v-if="$slots.default" #default>
      <slot />
    </template>
  </Button>
</template>
