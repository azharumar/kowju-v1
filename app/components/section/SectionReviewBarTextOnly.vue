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
  <div class="bg-brand-900">
    <BaseContainer>
      <BaseSection rhythm="none" :reveal="false" :class="sectionClass">
        <div
          :class="[
            '-mx-4 grid min-w-0 w-auto grid-cols-3 divide-x sm:mx-0 sm:w-full',
            isLightVariant
              ? 'divide-border'
              : isGoldVariant
                ? 'divide-gold-200'
                : 'divide-text-inverse/15',
          ]"
        >
          <template v-for="item in reviewScores" :key="item.platform">
            <div
              class="flex min-w-0 flex-col items-center gap-1 px-2 py-3 text-center sm:items-start sm:gap-2 sm:px-3 sm:text-left md:flex-row md:items-center md:justify-center md:gap-x-4 md:px-8 md:py-2"
            >
              <span
                :class="[
                  'text-caption uppercase tracking-overline',
                  isLightVariant
                    ? 'text-text'
                    : isGoldVariant
                      ? 'text-warm-800'
                      : 'text-text-inverse',
                ]"
              >
                {{ platformLabelMap[item.platform] }}
              </span>
              <div class="flex min-w-0 flex-col items-center sm:items-start">
                <span
                  :class="[
                    'text-h3 font-extrabold leading-none sm:text-h2',
                    isLightVariant
                      ? 'text-brand-700'
                      : isGoldVariant
                        ? 'text-gold-700'
                        : 'text-gold-300',
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
                          : 'text-gold-400',
                    ]"
                  >
                    /{{ item.outOf }}</span
                  >
                </span>
                <span
                  :class="[
                    'text-caption uppercase tracking-overline',
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
      </BaseSection>
    </BaseContainer>
  </div>
</template>
