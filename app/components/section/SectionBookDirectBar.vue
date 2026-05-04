<script setup lang="ts">
import SectionBookDirectBarStrip from "./SectionBookDirectBarStrip.vue";

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
  }>(),
  {
    stripLabel: "BOOK DIRECT. GET MORE.",
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
    <div
      class="book-direct-mobile-marquee md:hidden overflow-hidden py-1 motion-reduce:hidden"
    >
      <div class="book-direct-marquee-track">
        <template v-for="dup in [0, 1]" :key="dup">
          <div
            class="flex shrink-0 items-center pr-12 pl-4"
            :aria-hidden="dup === 1 ? true : undefined"
          >
            <SectionBookDirectBarStrip
              :strip-label="stripLabel"
              :benefits="benefits"
            />
          </div>
        </template>
      </div>
    </div>

    <div
      class="hidden overflow-x-auto py-1 motion-reduce:block md:hidden"
      tabindex="0"
    >
      <div class="mx-auto w-max px-4">
        <SectionBookDirectBarStrip
          :strip-label="stripLabel"
          :benefits="benefits"
        />
      </div>
    </div>

    <BaseContainer class="hidden md:block">
      <BaseSection
        rhythm="none"
        :reveal="false"
        class="motion-page-intro py-1 md:py-2"
      >
        <div
          class="mx-auto flex items-center justify-between py-0.5 text-body-sm md:py-1"
        >
          <SectionBookDirectBarStrip
            :strip-label="stripLabel"
            :benefits="benefits"
          />
        </div>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
