<script setup lang="ts">
export interface HotelPolicyItem {
  id?: string;
  label: string;
  value: string;
}

const defaultHotelPolicies: HotelPolicyItem[] = [
  {
    label: "Check in/out",
    value: "Check in is from 2.00 PM and check out is until 12.00 PM (noon).",
  },
  {
    label: "Early Check in & Late Check out Policy",
    value:
      "Early check in and late check out can be arranged based on availability, subject to room availability and additional charges may apply.",
  },
  {
    label: "Cancellation Policy",
    value: "Free cancellation until 24 hrs before arrival.",
  },
  { label: "Pet Policy", value: "Pets are not allowed." },
  { label: "Smoking Policy", value: "All rooms are non-smoking rooms." },
  {
    label: "Child Policy",
    value:
      "Children under 12 years stay free when using existing bedding. For breakfast, children aged 7-12 are charged 50% of the adult rate, while children 6 and under eat breakfast free.",
  },
  {
    label: "Payment Methods",
    value:
      "All major credit cards, UPI payments, and cash are accepted. For corporate bookings, bank transfers can be arranged with prior notice.",
  },
];

const props = withDefaults(
  defineProps<{
    items?: HotelPolicyItem[];
    overline?: string;
    title?: string;
    headingLevel?: 2 | 3 | 4;
    headingAlign?: "left" | "center" | "right";
    class?: string;
  }>(),
  {
    overline: "Hotel Policies",
    title: "Everything you should know",
    headingLevel: 2,
    headingAlign: "center",
  },
);

const policyItems = computed(() =>
  props.items?.length ? props.items : defaultHotelPolicies,
);

function policyKey(item: HotelPolicyItem, index: number) {
  return item.id ?? `policy-${index}`;
}
</script>

<template>
  <section aria-label="Hotel policies" :class="props.class">
    <BaseContainer>
      <BaseScrollReveal>
        <BaseSection rhythm="comfortable">
        <BaseStack>
          <BaseSectionHeader
            :overline="overline"
            :title="title"
            :heading-level="headingLevel"
            :align="headingAlign"
            dividers
          />
          <dl class="divide-y divide-border border-y border-border">
            <div
              v-for="(item, index) in policyItems"
              :key="policyKey(item, index)"
              class="grid gap-2 py-4 text-body md:grid-cols-3 md:gap-8"
            >
              <dt class="font-semibold text-text md:col-span-1">
                {{ item.label }}
              </dt>
              <dd class="text-muted md:col-span-2">{{ item.value }}</dd>
            </div>
          </dl>
        </BaseStack>
        </BaseSection>
      </BaseScrollReveal>
    </BaseContainer>
  </section>
</template>
