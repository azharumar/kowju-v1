<script setup lang="ts">
import Button from "primevue/button";

export interface GuestReviewItem {
  id?: string;
  title: string;
  review: string;
  reviewerName: string;
  reviewerMeta: string;
  rating?: number;
}

const props = withDefaults(
  defineProps<{
    reviews: GuestReviewItem[];
    overline?: string;
    title?: string;
    summary?: string;
  }>(),
  {
    overline: "What guests say",
    title: "Rated 4.8 by guests across India and the Gulf",
    summary: "Based on 1,200+ verified stays",
  },
);

const sliderTrack = ref<HTMLElement | null>(null);
const slideIndex = ref(0);
const visibleSlides = ref(3);
const maxIndex = computed(() =>
  Math.max(props.reviews.length - visibleSlides.value, 0),
);

function recomputeVisibleSlides() {
  const element = sliderTrack.value;
  if (!element) return;
  const card = element.querySelector<HTMLElement>("[data-review-slide]");
  if (!card) return;
  const gap = Number.parseFloat(
    window.getComputedStyle(element).columnGap || "0",
  );
  const step = card.offsetWidth + gap;
  if (!step) return;
  visibleSlides.value = Math.max(1, Math.round(element.clientWidth / step));
  if (slideIndex.value > maxIndex.value) {
    slideIndex.value = maxIndex.value;
  }
}

onMounted(() => {
  recomputeVisibleSlides();
  window.addEventListener("resize", recomputeVisibleSlides);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", recomputeVisibleSlides);
});
const navDisabled = computed(() => props.reviews.length === 0);
const currentPageLabel = computed(() =>
  String(
    props.reviews.length === 0
      ? 0
      : Math.min(slideIndex.value + 1, maxIndex.value + 1),
  ).padStart(2, "0"),
);
const totalPagesLabel = computed(() =>
  String(maxIndex.value + 1).padStart(2, "0"),
);

function panelKey(item: GuestReviewItem, index: number) {
  return item.id ?? `review-${index}`;
}

function reviewerInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function starLabel(rating?: number) {
  const safeRating = Math.max(1, Math.min(rating ?? 5, 5));
  return "★".repeat(safeRating);
}

function syncFromScroll() {
  const element = sliderTrack.value;
  if (!element) return;
  const card = element.querySelector<HTMLElement>("[data-review-slide]");
  if (!card) return;
  const gap = Number.parseFloat(
    window.getComputedStyle(element).columnGap || "0",
  );
  const step = card.offsetWidth + gap;
  if (!step) return;
  const nextIndex = Math.round(element.scrollLeft / step);
  slideIndex.value = Math.max(0, Math.min(nextIndex, maxIndex.value));
}

function scrollToIndex(index: number) {
  const element = sliderTrack.value;
  if (!element) return;
  const card = element.querySelector<HTMLElement>("[data-review-slide]");
  if (!card) return;
  const safeIndex = Math.max(0, Math.min(index, maxIndex.value));
  const gap = Number.parseFloat(
    window.getComputedStyle(element).columnGap || "0",
  );
  const step = card.offsetWidth + gap;
  element.scrollTo({
    left: step * safeIndex,
    behavior: "smooth",
  });
  slideIndex.value = safeIndex;
}

function previousSlide() {
  if (maxIndex.value <= 0) {
    scrollToIndex(0);
    return;
  }
  const nextIndex = slideIndex.value <= 0 ? maxIndex.value : slideIndex.value - 1;
  scrollToIndex(nextIndex);
}

function nextSlide() {
  if (maxIndex.value <= 0) {
    scrollToIndex(0);
    return;
  }
  const nextIndex = slideIndex.value >= maxIndex.value ? 0 : slideIndex.value + 1;
  scrollToIndex(nextIndex);
}

watch(() => props.reviews.length, () => {
  scrollToIndex(Math.min(slideIndex.value, maxIndex.value));
});
</script>

<template>
  <section aria-label="Guest reviews">
    <BaseContainer>
      <BaseSection rhythm="comfortable">
        <BaseStack class="mx-auto w-full max-w-lg">
          <BaseSectionHeader :overline="overline" :title="title" align="center" />

          <div class="flex items-center justify-center gap-3 text-center">
            <span class="text-body text-gold-500">{{ starLabel(5) }}</span>
            <span class="text-body text-muted">{{ summary }}</span>
          </div>

          <div
            ref="sliderTrack"
            class="review-carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
            @scroll.passive="syncFromScroll"
          >
            <article
              v-for="(item, index) in reviews"
              :key="panelKey(item, index)"
              data-review-slide
              class="review-carousel-slide flex min-h-4xs snap-start flex-col rounded-lg border border-border bg-surface p-5"
            >
              <div class="mb-4 text-caption text-gold-500">{{ starLabel(item.rating) }}</div>
              <h3 class="text-h4 text-text">{{ item.title }}</h3>
              <p class="mt-3 flex-1 text-body text-muted">{{ item.review }}</p>
              <div class="mt-5 border-t border-border pt-4">
                <div class="flex items-center gap-3">
                  <span
                    class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-caption text-text-inverse"
                  >
                    {{ reviewerInitials(item.reviewerName) }}
                  </span>
                  <div class="flex flex-col">
                    <span class="text-body text-text">{{ item.reviewerName }}</span>
                    <span class="text-caption text-muted">{{ item.reviewerMeta }}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="flex items-center justify-center gap-3">
            <Button
              label="Previous"
              icon="pi pi-angle-left"
              icon-pos="left"
              variant="text"
              size="small"
              aria-label="Previous reviews"
              :disabled="navDisabled"
              @click="previousSlide"
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
              aria-label="Next reviews"
              :disabled="navDisabled"
              @click="nextSlide"
            />
          </div>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>

<style scoped>
.review-carousel-track {
  scrollbar-width: none;
}

.review-carousel-track::-webkit-scrollbar {
  display: none;
}

.review-carousel-slide {
  flex: 0 0 70%;
}

@media (min-width: 768px) {
  .review-carousel-slide {
    flex: 0 0 calc((100% - 2rem) / 3);
  }
}
</style>
