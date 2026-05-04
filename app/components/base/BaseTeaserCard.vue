<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to: string;
    title: string;
    titleSuffix?: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    linkLabel?: string;
    /** Image + centered CTA only; hides title and description. */
    compact?: boolean;
    /** When compact, use portrait crop only if true (e.g. three-column grid). */
    portraitImage?: boolean;
    /** Below md, portrait crop; at md+ matches `portraitImage` when compact, else landscape teaser. */
    portraitOnMobile?: boolean;
  }>(),
  {
    titleSuffix: "",
    linkLabel: "Learn more",
    compact: false,
    portraitImage: false,
    portraitOnMobile: false,
  },
);

const imageAspectClass = computed(() => {
  if (props.portraitOnMobile && !props.compact) return "aspect-portrait md:aspect-teaser";
  if (!props.compact) return "aspect-teaser";
  if (props.portraitOnMobile && !props.portraitImage) {
    return "aspect-portrait md:aspect-teaser";
  }
  return props.portraitImage ? "aspect-portrait" : "aspect-teaser";
});

const imageWidth = computed(() => {
  if (!props.compact) return 800;
  if (props.portraitImage || props.portraitOnMobile) return 600;
  return 800;
});
const imageHeight = computed(() => {
  if (!props.compact) return 500;
  if (props.portraitImage || props.portraitOnMobile) return 800;
  return 500;
});
</script>

<template>
  <article class="overflow-hidden rounded-2xl">
    <NuxtLink :to="to" class="group block rounded-2xl">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="w-full rounded-2xl object-cover"
        :class="imageAspectClass"
        :width="imageWidth"
        :height="imageHeight"
        loading="lazy"
        decoding="async"
      />
      <BaseStack
        variant="tight"
        class="px-4 pb-4 pt-5 md:px-0"
        :class="compact ? 'items-center text-center' : ''"
      >
        <template v-if="!compact">
          <h3 class="text-h5 font-semibold text-text">{{ title }}{{ titleSuffix }}</h3>
          <p class="line-clamp-2 text-body leading-relaxed text-muted">
            {{ description }}
          </p>
        </template>
        <BaseLinkText
          :label="linkLabel"
          as="text"
          :class="compact ? 'w-full justify-center' : ''"
        />
      </BaseStack>
    </NuxtLink>
  </article>
</template>
