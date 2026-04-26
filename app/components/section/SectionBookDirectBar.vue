<script setup lang="ts">
type BookDirectBenefit = {
  label: string;
  icon?: string;
};

const defaultBenefits: BookDirectBenefit[] = [
  {
    label: "Best Rate Guarantee",
    icon: "pi pi-tags",
  },
  {
    label: "Flexible Check-in/out",
    icon: "pi pi-clock",
  },
  {
    label: "Free Airport Transfers",
    icon: "pi pi-car",
  },
];

const props = withDefaults(
  defineProps<{
    benefits?: BookDirectBenefit[];
    stripLabel?: string;
    offersHref?: string;
  }>(),
  {
    stripLabel: "BOOK DIRECT. GET MORE.",
    offersHref: "#",
  },
);

const benefits = computed(() =>
  props.benefits?.length ? props.benefits : defaultBenefits,
);
</script>

<template>
  <section
    aria-label="Why book direct benefits"
    class="border-y border-gold-200 bg-gold-50"
  >
    <BaseContainer>
      <BaseSection
        rhythm="none"
        :reveal="false"
        class="motion-page-intro py-1 md:py-2"
      >
        <div
          class="flex items-center justify-between py-0.5 md:py-1 text-body-sm mx-auto"
          aria-label="Book direct benefits"
        >
          <div class="flex items-center">
            <span
              class="font-semibold uppercase tracking-overline text-brand-600"
            >
              {{ stripLabel }}
            </span>
            <span aria-hidden="true" class="mx-3 text-body text-brand-600/60"
              >•</span
            >
            <template v-for="(benefit, index) in benefits" :key="benefit.label">
              <span
                class="whitespace-nowrap font-semibold uppercase tracking-overline text-brand-600"
                >{{ benefit.label }}</span
              >
              <span
                v-if="index < benefits.length - 1"
                aria-hidden="true"
                class="mx-3 text-brand-600"
              >
                •
              </span>
            </template>
          </div>
        </div>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
