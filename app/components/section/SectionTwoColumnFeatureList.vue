<script setup lang="ts">
type FeatureItem = {
  src: string;
  alt: string;
  label: string;
};

const props = withDefaults(
  defineProps<{
    imageSrc: string;
    imageAlt: string;
    overline: string;
    title: string;
    paragraphs?: string[];
    features?: FeatureItem[];
    headingLevel?: 2 | 3 | 4;
    imageAspect?: "photo" | "portrait" | "hero" | "video" | "teaser";
  }>(),
  {
    paragraphs: () => [],
    features: () => [],
    headingLevel: 2,
    imageAspect: "photo",
  },
);

const imageAspectClass = computed(() => {
  const map = {
    photo: "aspect-photo",
    portrait: "aspect-portrait",
    hero: "aspect-hero",
    video: "aspect-video",
    teaser: "aspect-teaser",
  } as const;
  return map[props.imageAspect];
});
</script>

<template>
  <section class="bg-surface">
    <BaseContainer>
      <BaseSection rhythm="default" stack="default" :reveal="false">
        <BaseGrid class="grid-cols-1 items-center md:grid-cols-2" gap="comfortable">
          <div class="overflow-hidden rounded-2xl">
            <img
              :src="imageSrc"
              :alt="imageAlt"
              :class="[imageAspectClass, 'w-full object-cover']"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </div>

          <BaseStack variant="tight" class="text-muted">
            <BaseSectionHeader
              :overline="overline"
              :title="title"
              :heading-level="headingLevel"
              dividers
            />

            <slot name="copy">
              <p
                v-for="(paragraph, paragraphIndex) in paragraphs"
                :key="`feature-copy-${paragraphIndex}`"
                class="text-body"
              >
                {{ paragraph }}
              </p>
            </slot>

            <slot name="details">
              <ul
                v-if="features.length"
                class="grid grid-cols-1 gap-4 pt-2"
                role="list"
                aria-label="Feature highlights"
              >
                <li
                  v-for="(item, itemIndex) in features"
                  :key="`${item.label}-${itemIndex}`"
                  class="inline-flex items-center gap-3 text-body text-text"
                >
                  <img
                    :src="item.src"
                    :alt="item.alt"
                    class="icon-tint-accent size-5 object-contain"
                    width="20"
                    height="20"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{{ item.label }}</span>
                </li>
              </ul>
            </slot>
          </BaseStack>
        </BaseGrid>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
