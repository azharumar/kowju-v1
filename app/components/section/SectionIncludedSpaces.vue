<script setup lang="ts">
type IncludedSpaceItem = {
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  overline?: string;
  title: string;
  description: string;
  details?: string[];
  imageSrc: string;
  imageAlt: string;
  ctaTo: string;
  ctaLabel: string;
};

const props = withDefaults(
  defineProps<{
    overline?: string;
    title?: string;
    lead?: string;
    items: IncludedSpaceItem[];
  }>(),
  {
    overline: "While you stay",
    title: "Three spaces, included with every stay",
    lead: "",
  },
);

const activeIndex = ref(0);
function handleTabSelect(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <section class="bg-bg">
    <BaseContainer>
      <BaseSection rhythm="default" stack="comfortable">
        <BaseStack variant="comfortable">
          <BaseSectionHeader
            :title="props.title"
            :lead="props.lead"
            align="left"
            :dividers="false"
          />

          <div
            class="included-spaces-tabs flex flex-wrap gap-2 border-b border-border"
            role="tablist"
            aria-label="Included spaces"
          >
            <button
              v-for="(item, index) in props.items"
              :key="`${item.label}-${index}`"
              type="button"
              role="tab"
              class="tab-button px-6 py-3 text-body-lg font-semibold text-muted"
              :class="{ 'is-active': activeIndex === index }"
              :aria-selected="activeIndex === index"
              :aria-controls="`included-space-panel-${index}`"
              @click="handleTabSelect(index)"
            >
              <span class="inline-flex items-center gap-2">
                <img
                  v-if="item.iconSrc"
                  :src="item.iconSrc"
                  :alt="item.iconAlt ?? ''"
                  class="h-6 w-6 icon-tint-accent"
                  width="24"
                  height="24"
                  loading="lazy"
                  decoding="async"
                />
                <span>{{ item.label }}</span>
              </span>
            </button>
          </div>

          <Transition name="tab-panel" mode="out-in">
            <article
              v-if="props.items[activeIndex]"
              :key="`panel-${activeIndex}`"
              :id="`included-space-panel-${activeIndex}`"
              role="tabpanel"
            >
              <BaseGrid class="grid-cols-1 items-center md:grid-cols-2" gap="default">
                <BaseStack variant="default">
                  <BaseSectionHeader
                    :title="props.items[activeIndex].title"
                    :heading-level="3"
                    align="left"
                    dividers
                  />
                  <p class="text-body text-muted">
                    {{ props.items[activeIndex].description }}
                  </p>
                  <ul
                    v-if="props.items[activeIndex].details?.length"
                    class="list-disc space-y-2 pl-5 text-body text-muted marker:text-gold-500"
                  >
                    <li
                      v-for="
                        (detail, detailIndex) in props.items[activeIndex].details
                      "
                      :key="`${detail}-${detailIndex}`"
                    >
                      {{ detail }}
                    </li>
                  </ul>
                  <BaseLinkText
                    :to="props.items[activeIndex].ctaTo"
                    :label="props.items[activeIndex].ctaLabel"
                  />
                </BaseStack>
                <div class="overflow-hidden rounded-2xl">
                  <img
                    :src="props.items[activeIndex].imageSrc"
                    :alt="props.items[activeIndex].imageAlt"
                    class="aspect-photo w-full object-cover"
                    width="1200"
                    height="900"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </BaseGrid>
            </article>
          </Transition>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>

<style scoped>
.included-spaces-tabs {
  scrollbar-width: none;
}

.included-spaces-tabs::-webkit-scrollbar {
  display: none;
}

.tab-button {
  border-bottom: 0.125rem solid transparent;
  transition:
    border-bottom-color 200ms ease-out,
    color 200ms ease-out;
}

.tab-button.is-active {
  border-bottom-color: var(--p-brand-700);
  color: var(--p-text-color);
}

.tab-panel-enter-active,
.tab-panel-leave-active {
  transition: opacity 260ms ease-out, transform 260ms ease-out;
}

.tab-panel-enter-from,
.tab-panel-leave-to {
  opacity: 0;
  transform: translateY(0.625rem);
}
</style>
