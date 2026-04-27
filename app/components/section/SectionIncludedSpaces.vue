<script setup lang="ts">
type IncludedSpaceItem = {
  label: string;
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
const TAB_AUTO_ROTATE_MS = 5000;
let tabTimer: ReturnType<typeof setInterval> | null = null;

function startTabTimer() {
  if (props.items.length < 2) return;
  stopTabTimer();
  tabTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.items.length;
  }, TAB_AUTO_ROTATE_MS);
}

function stopTabTimer() {
  if (!tabTimer) return;
  clearInterval(tabTimer);
  tabTimer = null;
}

function handleTabSelect(index: number) {
  activeIndex.value = index;
  startTabTimer();
}

onMounted(() => {
  startTabTimer();
});

onUnmounted(() => {
  stopTabTimer();
});
</script>

<template>
  <section class="bg-bg">
    <BaseContainer>
      <BaseSection rhythm="default" stack="comfortable">
        <BaseStack variant="comfortable">
          <BaseSectionHeader
            :overline="props.overline"
            :title="props.title"
            :lead="props.lead"
            align="left"
            :dividers="false"
          />

          <div
            class="included-spaces-tabs grid gap-0 border-t border-border md:grid-cols-4"
            role="tablist"
            aria-label="Included spaces"
          >
            <button
              v-for="(item, index) in props.items"
              :key="`${item.label}-${index}`"
              type="button"
              role="tab"
              class="tab-button flex flex-col items-start gap-2 px-5 py-4 text-left text-body-lg text-muted"
              :class="{ 'is-active text-text': activeIndex === index }"
              :aria-selected="activeIndex === index"
              :aria-controls="`included-space-panel-${index}`"
              @click="handleTabSelect(index)"
            >
              <BaseOverline>0{{ index + 1 }}</BaseOverline>
              <span class="text-body-lg">{{ item.label }}</span>
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
                    :overline="
                      props.items[activeIndex].overline ??
                      props.items[activeIndex].label
                    "
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
  border-top: 0.1875rem solid transparent;
  border-right: 0.0625rem solid var(--p-warm-200);
  transition:
    border-top-color 200ms ease-out,
    color 200ms ease-out,
    background-color 200ms ease-out;
}

.tab-button.is-active {
  border-top-color: var(--p-brand-700);
  background-color: var(--p-surface);
}

.tab-button:last-child {
  border-right: none;
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
