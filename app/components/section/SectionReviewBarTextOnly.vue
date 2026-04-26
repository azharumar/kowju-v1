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
  variant?: "dark" | "light" | "gold";
}>();

const platformLabelMap: Record<ReviewScore["platform"], string> = {
  google: "Google",
  tripadvisor: "Tripadvisor",
  booking: "Booking.com",
};

const reviewScores = computed(() =>
  props.scores?.length ? props.scores : defaultScores,
);

const variant = computed(() => props.variant ?? "dark");
const isLightVariant = computed(() => variant.value === "light");
const isGoldVariant = computed(() => variant.value === "gold");
const sectionClass = computed(() =>
  isLightVariant.value
    ? "py-7 bg-surface-muted border-y border-border"
    : isGoldVariant.value
      ? "py-7 bg-gold-50 border-y border-gold-200"
      : "py-7 bg-brand-900",
);
</script>

<template>
  <BaseSection rhythm="none" :reveal="false" :class="sectionClass">
    <BaseContainer>
      <div
        :class="[
          'mx-auto grid max-w-4xl grid-cols-3 divide-x',
          isLightVariant
            ? 'divide-border'
            : isGoldVariant
              ? 'divide-gold-200'
              : 'divide-text-inverse/15',
        ]"
      >
        <template v-for="item in reviewScores" :key="item.platform">
          <div
            class="flex items-center justify-center gap-x-4 px-6 py-1 md:px-8 md:py-2"
          >
            <span
              :class="[
                'text-caption uppercase tracking-overline whitespace-nowrap',
                isLightVariant
                  ? 'text-text'
                  : isGoldVariant
                    ? 'text-warm-800'
                    : 'text-text-inverse',
              ]"
            >
              {{ platformLabelMap[item.platform] }}
            </span>
            <div class="flex flex-col justify-center">
              <span
                :class="[
                  'text-h2 font-extrabold leading-none',
                  isLightVariant
                    ? 'text-brand-700'
                    : isGoldVariant
                      ? 'text-gold-700'
                      : 'text-brand-400',
                ]"
              >
                {{ item.score
                }}<span
                  :class="[
                    'text-caption',
                    isLightVariant
                      ? 'text-muted'
                      : isGoldVariant
                        ? 'text-warm-600'
                        : 'text-text-inverse/80',
                  ]"
                >
                  /{{ item.outOf }}</span
                >
              </span>
              <span
                :class="[
                  'text-caption uppercase tracking-overline whitespace-nowrap',
                  isLightVariant
                    ? 'text-muted'
                    : isGoldVariant
                      ? 'text-warm-700'
                      : 'text-text-inverse/60',
                ]"
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
