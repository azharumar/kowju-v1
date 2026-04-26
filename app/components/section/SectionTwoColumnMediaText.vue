<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    id?: string;
    imageSrc: string;
    imageAlt: string;
    overline: string;
    title: string;
    description: string;
    ctaTo?: RouteLocationRaw;
    ctaLabel?: string;
    /** When true, media column is on the right and text on the left at `md` and up. */
    reversed?: boolean;
    headingLevel?: 2 | 3 | 4;
    imageLoading?: "lazy" | "eager";
    class?: string;
  }>(),
  {
    reversed: false,
    headingLevel: 2,
    imageLoading: "lazy",
  },
);

const { rootRef: sectionRoot, isVisible } = useScrollReveal();
</script>

<template>
  <section
    :id="id"
    ref="sectionRoot"
    :class="['bg-surface scroll-mt-24', props.class]"
  >
    <BaseContainer>
      <BaseSection rhythm="default" stack="loose">
        <BaseGrid
          :reveal="false"
          class="grid-cols-1 items-center md:grid-cols-5"
          gap="comfortable"
        >
          <div
            class="motion-section-enter motion-section-enter-image overflow-hidden rounded-2xl md:col-span-3"
            :data-visible="isVisible"
            :class="{ 'md:order-2': reversed }"
          >
            <img
              :src="imageSrc"
              :alt="imageAlt"
              class="aspect-photo w-full object-cover"
              width="1200"
              height="900"
              :loading="imageLoading"
              decoding="async"
            />
          </div>
          <div
            class="motion-section-enter motion-section-enter-copy flex flex-col gap-6 md:col-span-2"
            :data-visible="isVisible"
            :class="{ 'md:order-1': reversed }"
          >
            <BaseSectionHeader
              :overline="overline"
              :title="title"
              :heading-level="headingLevel"
              dividers
            />
            <p
              v-if="description"
              class="max-w-prose text-balance text-body text-muted"
            >
              {{ description }}
            </p>
            <div
              v-if="$slots.details"
              class="motion-section-enter motion-section-enter-details flex flex-col gap-2 text-body text-text"
              :data-visible="isVisible"
            >
              <slot name="details" />
            </div>
            <BaseLinkText
              v-if="ctaTo"
              class="motion-section-enter motion-section-enter-cta"
              :data-visible="isVisible"
              :to="ctaTo"
              :label="ctaLabel ?? 'Learn more'"
            />
          </div>
        </BaseGrid>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
