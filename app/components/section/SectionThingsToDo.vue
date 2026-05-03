<script setup lang="ts">
/**
 * Retired: not mounted on the homepage. File kept for reuse or reference.
 * Was: local attractions grid from `~/data/local-attractions`.
 */
import { localAttractions } from "~/data/local-attractions";
</script>

<template>
  <section
    id="things-to-do"
    class="bg-surface-muted"
    aria-label="Things to do near the hotel"
  >
    <BaseContainer>
      <BaseSection rhythm="default" stack="default">
        <BaseStack class="items-center text-center">
          <BaseSectionHeader
            overline="Things to do"
            title="Discover local attractions nearby"
            align="center"
            dividers
          />
          <BaseTeaserGrid :columns="3" :reveal="false">
            <article
              v-for="item in localAttractions"
              :key="item.id"
              class="flex flex-col overflow-hidden rounded-2xl bg-warm-100"
            >
              <img
                :src="item.imageSrc"
                :alt="item.imageAlt"
                class="aspect-[4/3] w-full object-cover"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
              <BaseStack :reveal="false" class="flex min-w-0 flex-1 flex-col p-5">
                <h3
                  class="min-w-0 text-left text-h5 font-semibold leading-snug text-text line-clamp-1"
                >
                  {{ item.title }}
                </h3>
                <p
                  class="min-w-0 text-left text-body leading-relaxed text-text line-clamp-4"
                >
                  {{ item.description }}
                </p>
                <p
                  class="mt-auto flex items-center gap-2 pt-4 text-left text-body-sm font-medium text-muted"
                >
                  <span
                    class="pi pi-map-marker shrink-0 text-lg leading-none text-brand-600"
                    aria-hidden="true"
                  />
                  <span>{{ item.distanceLabel }}</span>
                </p>
              </BaseStack>
            </article>
          </BaseTeaserGrid>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
