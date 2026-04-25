<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

type IconGridItem = {
  src: string;
  alt: string;
  label?: string;
};

withDefaults(
  defineProps<{
    title: string;
    items: IconGridItem[];
    overline?: string;
    headingLevel?: 2 | 3 | 4;
    linkTo?: RouteLocationRaw;
    linkLabel?: string;
  }>(),
  {
    overline: undefined,
    headingLevel: 2,
    linkTo: undefined,
    linkLabel: "View all",
  },
);
</script>

<template>
  <section class="bg-surface">
    <BaseContainer>
      <BaseSection rhythm="compact" stack="comfortable">
        <BaseStack class="items-center text-center">
          <BaseSectionHeader
            :overline="overline"
            :title="title"
            :heading-level="headingLevel"
            align="center"
            dividers
          />
          <ul
            class="grid w-full grid-cols-3 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-8 md:gap-y-12"
            role="list"
            :aria-label="title"
          >
            <li
              v-for="item in items"
              :key="item.label"
              class="flex flex-col items-center gap-3 text-center"
            >
              <img
                :src="item.src"
                :alt="item.alt"
                class="size-10 object-contain"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              />
              <p class="text-body text-muted">{{ item.label ?? item.alt }}</p>
            </li>
          </ul>
          <BaseLinkText
            v-if="linkTo"
            :to="linkTo"
            :label="linkLabel"
          />
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
