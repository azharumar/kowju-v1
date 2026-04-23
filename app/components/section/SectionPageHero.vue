<script setup lang="ts">
import type { PageHeaderAlign } from "~/components/base/BasePageHeader.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    lead?: string;
    imageSrc: string;
    imageAlt: string;
    align?: PageHeaderAlign;
    headingLevel?: 1 | 2;
    class?: string;
  }>(),
  {
    align: "left",
    headingLevel: 1,
  },
);
</script>

<template>
  <section :class="[props.class]">
    <BaseContainer>
      <BaseSection rhythm="hero" stack="loose">
        <BasePageHeader
          :title="title"
          :lead="lead"
          :align="align"
          :heading-level="headingLevel"
        />
        <div class="overflow-hidden rounded-2xl">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="aspect-video w-full object-cover sm:aspect-hero"
            width="1920"
            height="823"
            loading="eager"
            decoding="async"
          />
        </div>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
