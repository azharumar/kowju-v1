<template>
  <Button outlined>
    <template v-if="$slots.default" #default>
      <slot />
    </template>
  </Button>
</template>
