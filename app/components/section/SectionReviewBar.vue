<script setup lang="ts">
import { computed } from "vue";

type ReviewScore = {
  platform: "google" | "tripadvisor" | "booking";
  score: string;
  outOf: string;
  descriptor: string;
};

const defaultScores: ReviewScore[] = [
  { platform: "google", score: "4.6", outOf: "5", descriptor: "Excellent" },
  {
    platform: "tripadvisor",
    score: "4.5",
    outOf: "5",
    descriptor: "Very Good",
  },
  { platform: "booking", score: "8.9", outOf: "10", descriptor: "Superb" },
];

const props = defineProps<{
  scores?: ReviewScore[];
}>();

const platformAltMap: Record<ReviewScore["platform"], string> = {
  google: "Google",
  tripadvisor: "TripAdvisor",
  booking: "Booking.com",
};

const platformIconMap: Record<ReviewScore["platform"], string> = {
  google: "/icons/brands/google-wordmark.svg",
  tripadvisor: "/icons/brands/tripadvisor-wordmark.svg",
  booking: "/icons/brands/bookingcom-wordmark.svg",
};

const reviewScores = computed(() =>
  props.scores?.length ? props.scores : defaultScores,
);
</script>

<template>
  <BaseSection rhythm="none" :reveal="false" class="bg-brand-900 py-7">
    <BaseContainer>
      <div class="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-text-inverse/15">
        <template v-for="item in reviewScores" :key="item.platform">
          <div class="flex items-center justify-center gap-x-4 px-6 py-1 md:px-8 md:py-2">
            <img
              :src="platformIconMap[item.platform]"
              :alt="platformAltMap[item.platform]"
              class="review-score-logo h-8 w-auto max-w-[120px] md:h-10"
              width="112"
              height="32"
              loading="lazy"
              decoding="async"
            />
            <div class="flex flex-col justify-center">
              <span class="text-h2 font-extrabold leading-none text-brand-400">
                {{ item.score
                }}<span class="text-caption text-text-inverse/80"
                  >/{{ item.outOf }}</span
                >
              </span>
              <span
                class="text-caption uppercase tracking-overline text-text-inverse/60 whitespace-nowrap"
              >
                {{ item.descriptor }}
              </span>
            </div>
          </div>
        </template>
      </div>
    </BaseContainer>
  </BaseSection>
</template>

<style scoped>
.review-score-logo {
  filter: brightness(0) invert(1);
}
</style>
