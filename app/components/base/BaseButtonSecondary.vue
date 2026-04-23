<template>
  <Button severity="secondary">
    <template v-if="$slots.default" #default>
      <slot />
    </template>
  </Button>
</template>
