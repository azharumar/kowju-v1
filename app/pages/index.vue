<template>
  <div
    class="motion-enter-scroll flex min-h-section-hero flex-col items-center justify-center gap-6 px-4 py-16 text-center"
  >
    <p class="text-body text-muted">
      Kowju Airport Hotel Calicut
    </p>
    <NuxtLink
      to="/design-system"
      custom
      v-slot="{ href, navigate }"
    >
      <BaseButton
        label="Open design system"
        as="a"
        :href="href"
        class="motion-interactive"
        @click="navigate"
      />
    </NuxtLink>
  </div>
</template>
