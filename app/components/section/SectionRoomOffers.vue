<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import Button from "primevue/button";
import { bookDirectStrip } from "~/data/book-direct";
import { offers } from "~/data/offers";

const sliderRef = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
const totalPages = computed(() => offers.length);
const navDisabled = computed(() => totalPages.value === 0);
const currentPageLabel = computed(() =>
  String(
    totalPages.value === 0
      ? 0
      : Math.min(activeIndex.value + 1, totalPages.value),
  ).padStart(2, "0"),
);
const totalPagesLabel = computed(() =>
  String(totalPages.value).padStart(2, "0"),
);

function scrollTrack(direction: "prev" | "next") {
  const track = sliderRef.value;
  if (!track || !totalPages.value) return;

  const firstSlide = track.querySelector<HTMLElement>("[data-offer-slide]");
  if (!firstSlide) return;

  const gap = Number.parseFloat(
    window.getComputedStyle(track).columnGap || "0",
  );
  const step = firstSlide.offsetWidth + gap;
  if (!step) return;

  const maxIndex = totalPages.value - 1;
  const targetIndex =
    direction === "next"
      ? activeIndex.value >= maxIndex
        ? 0
        : activeIndex.value + 1
      : activeIndex.value <= 0
        ? maxIndex
        : activeIndex.value - 1;

  track.scrollTo({ left: targetIndex * step, behavior: "smooth" });
}

function updateActiveIndex() {
  const track = sliderRef.value;
  if (!track) return;

  const firstSlide = track.querySelector<HTMLElement>("[data-offer-slide]");
  if (!firstSlide) return;

  const gap = Number.parseFloat(
    window.getComputedStyle(track).columnGap || "0",
  );
  const step = firstSlide.offsetWidth + gap;
  if (!step) return;

  activeIndex.value = Math.round(track.scrollLeft / step);
}

onMounted(() => {
  sliderRef.value?.addEventListener("scroll", updateActiveIndex, {
    passive: true,
  });
  updateActiveIndex();
});

onUnmounted(() => {
  sliderRef.value?.removeEventListener("scroll", updateActiveIndex);
});
</script>

<template>
  <section
    class="py-12 md:py-16"
    aria-label="Book direct with the hotel and offers"
  >
    <BaseContainer>
      <BaseStack variant="loose" :reveal="false">
        <div
          class="mx-auto flex w-full max-w-xl flex-col gap-4 rounded-2xl bg-brand-900 px-5 py-5 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-6 md:py-6"
        >
          <div class="min-w-0 space-y-1">
            <p
              class="text-body-sm font-semibold uppercase tracking-overline text-gold-300"
            >
              {{ bookDirectStrip.overline }}
            </p>
            <p class="text-body text-text-inverse/90">
              {{ bookDirectStrip.message }}
            </p>
          </div>
          <div
            class="flex shrink-0 flex-wrap items-center gap-4 sm:justify-end"
          >
            <BaseLinkText
              :to="bookDirectStrip.benefitsHref"
              :label="bookDirectStrip.benefitsLabel"
              tone="inverse"
            />
            <NuxtLink to="/contact" custom v-slot="{ href, navigate }">
              <BaseButtonOnBrandPrimary
                label="Book now"
                as="a"
                :href="href"
                @click="navigate"
              />
            </NuxtLink>
          </div>
        </div>

        <BaseStack variant="default" :reveal="false">
          <div
            ref="sliderRef"
            class="offer-carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto"
            aria-label="Offers carousel"
          >
            <article
              v-for="item in offers"
              :key="item.slug"
              data-offer-slide
              class="offer-carousel-slide shrink-0 snap-start"
            >
              <div
                class="grid min-h-0 rounded-2xl border border-gold-200 bg-gold-100 p-6 md:grid-cols-12 md:items-stretch md:gap-8 md:p-8"
              >
                <div
                  class="order-2 flex min-h-0 flex-col md:order-1 md:col-span-7 md:h-full md:min-h-0"
                >
                  <div class="flex flex-col gap-4 md:gap-6">
                    <h3 class="text-h5 font-semibold text-text">
                      {{ item.title }}
                    </h3>
                    <p class="text-body leading-relaxed text-muted">
                      {{ item.description }}
                    </p>
                  </div>
                  <div class="mt-auto shrink-0 pt-6 md:pt-8">
                    <BaseLinkText
                      :to="`/offers/${item.slug}`"
                      label="Learn more"
                    />
                  </div>
                </div>
                <div
                  class="order-1 min-h-0 w-full overflow-hidden rounded-2xl md:order-2 md:col-span-5 md:self-start"
                >
                  <img
                    :src="item.imageSrc"
                    :alt="item.imageAlt"
                    class="aspect-portrait w-full object-cover"
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </article>
            <div
              class="offer-carousel-filler shrink-0"
              aria-hidden="true"
            />
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <Button
                label="Previous"
                icon="pi pi-angle-left"
                icon-pos="left"
                variant="text"
                size="small"
                aria-label="Previous offer"
                :disabled="navDisabled"
                @click="scrollTrack('prev')"
              />
              <span class="text-body-sm font-medium text-muted">
                {{ currentPageLabel }} / {{ totalPagesLabel }}
              </span>
              <Button
                label="Next"
                icon="pi pi-angle-right"
                icon-pos="right"
                variant="text"
                size="small"
                aria-label="Next offer"
                :disabled="navDisabled"
                @click="scrollTrack('next')"
              />
            </div>
            <BaseLinkText to="/offers" label="View all" class="shrink-0" />
          </div>
        </BaseStack>
      </BaseStack>
    </BaseContainer>
  </section>
</template>

<style scoped>
.offer-carousel-track {
  scrollbar-width: none;
}

.offer-carousel-track::-webkit-scrollbar {
  display: none;
}

.offer-carousel-slide {
  width: 80%;
}

.offer-carousel-filler {
  width: 20%;
}
</style>
