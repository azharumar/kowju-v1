<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

type IconGridItem = {
  src: string;
  alt: string;
  label?: string;
  subtitle?: string;
};

const props = withDefaults(
  defineProps<{
    title?: string;
    items: IconGridItem[];
    overline?: string;
    headingLevel?: 2 | 3 | 4;
    cardLayout?: boolean;
    linkTo?: RouteLocationRaw;
    linkLabel?: string;
  }>(),
  {
    title: undefined,
    overline: undefined,
    headingLevel: 2,
    cardLayout: false,
    linkTo: undefined,
    linkLabel: "View all",
  },
);

const showHeader = computed(
  () => Boolean(props.title?.trim()) || Boolean(props.overline?.trim()),
);

const listAriaLabel = computed(() => {
  const t = props.title?.trim();
  const o = props.overline?.trim();
  return t || o || "Amenity icons";
});
</script>

<template>
  <section class="bg-surface">
    <BaseContainer>
      <BaseSection rhythm="compact" stack="comfortable">
        <BaseStack class="items-center text-center">
          <div
            :class="[
              'flex w-full flex-col gap-8',
              cardLayout
                ? 'rounded-2xl border border-gold-200 bg-gold-50 p-6 md:p-10'
                : '',
            ]"
          >
            <div class="flex w-full flex-col gap-10 md:gap-12">
              <BaseSectionHeader
                v-if="showHeader"
                :overline="overline"
                :title="title"
                :heading-level="headingLevel"
                align="center"
                dividers
              />
              <ul
                class="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6"
                role="list"
                :aria-label="listAriaLabel"
              >
                <li
                  v-for="(item, index) in items"
                  :key="`${item.src}-${item.label ?? item.alt}-${index}`"
                  class="flex flex-col items-center gap-3 py-2 text-center md:gap-4 md:py-3"
                >
                  <img
                    :src="item.src"
                    :alt="item.alt"
                    class="icon-tint-accent size-12 object-contain md:size-14"
                    width="56"
                    height="56"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    class="mx-auto flex max-w-xs flex-col gap-1 text-balance"
                  >
                    <p class="text-body text-muted">
                      {{ item.label ?? item.alt }}
                    </p>
                    <p
                      v-if="item.subtitle?.trim()"
                      class="text-caption text-muted"
                    >
                      {{ item.subtitle.trim() }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div v-if="linkTo" class="flex w-full justify-center">
              <BaseLinkText :to="linkTo" :label="linkLabel" />
            </div>
          </div>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
