<script setup lang="ts">
/**
 * Inline styles on this page are limited to live token demos (swatches, spacing width, radius/shadow samples).
 * Exception: design-system-token-enforcement rule.
 */
import {
  colors,
  container,
  font,
  radius,
  shadow,
  spacing,
} from "~~/design-system/tokens";
import type { FaqItem } from "~/components/section/SectionFaq.vue";
import type {
  RoomCardAmenityIcon,
  RoomCardDetail,
} from "~/components/base/BaseRoomCard.vue";
import { ROOM_CARD_PRICE_CURRENCIES } from "~/components/base/room-card-price-currencies";
import type { RoomCardPriceCurrency } from "~/components/base/room-card-price-currencies";
import { formatRoomNightlyBand } from "~/utils/room-price-format";
import iconSamplesManifest from "~~/design-system/icon-samples.json";

const faqSamples: FaqItem[] = [
  {
    question: "How far is the hotel from the airport?",
    answer:
      "We are a short drive from Calicut International Airport. Ask reception for shuttle timings and pickup details.",
  },
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in is from 2:00 p.m. and check-out is by 12:00 noon. Early check-in or late check-out may be arranged subject to availability.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. On-site parking is available for guests. Please confirm capacity and any fees when you book or at arrival.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Cancellation and change rules depend on the rate you booked. Review the policy in your confirmation or contact us before you travel.",
  },
];

const shadeKeys = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

const palettes = [
  { id: "brand", label: "Brand (primary)", map: colors.brand },
  { id: "gold", label: "Gold (accent)", map: colors.gold },
  { id: "warm", label: "Warm (surface / text)", map: colors.warm },
] as const;

const spacingSamples = [
  0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96,
];

const radiusEntries = Object.entries(radius) as [keyof typeof radius, string][];

const shadowEntries = [
  { key: "sm", value: shadow.sm },
  { key: "md", value: shadow.md },
  { key: "lg", value: shadow.lg },
] as const;

const containerEntries = Object.entries(container) as [
  keyof typeof container,
  string,
][];

const iconSampleItems = iconSamplesManifest.items;

const amenitiesFeatureItems = [
  { icon: "pi pi-filter", label: "Air purifier" },
  { icon: "pi pi-cog", label: "Smart toilet" },
  { icon: "pi pi-circle", label: "Swimming pool" },
  { icon: "pi pi-desktop", label: "55 inch LED TV" },
  { icon: "pi pi-snowflake", label: "Air conditioning" },
  { icon: "pi pi-home", label: "Orthopedic mattress" },
  { icon: "pi pi-lock", label: "Electronic locker" },
  { icon: "pi pi-wifi", label: "Wi-Fi" },
] as const;

const roomCardDemoDetails: RoomCardDetail[] = [
  { iconSrc: "/icons/samples/king-bed.svg", label: "1 King Bed" },
  {
    iconSrc: "/icons/samples/check-in-door.svg",
    label: "Bedroom · Vestibule · Bathroom",
  },
  { iconSrc: "/icons/samples/floor-area.svg", label: "215 sq ft" },
  { iconSrc: "/icons/samples/people-group.svg", label: "2 Adults + 2 Child" },
];

const roomCardDemoListingCurrency = ref<RoomCardPriceCurrency>("INR");
const roomCardDemoPriceInr = { min: 4500, max: 6000 };
const roomCardDemoPriceLabel = computed(() =>
  formatRoomNightlyBand(
    roomCardDemoPriceInr.min,
    roomCardDemoPriceInr.max,
    roomCardDemoListingCurrency.value,
  ),
);

const roomCardDemoAmenities: RoomCardAmenityIcon[] = [
  { src: "/icons/samples/wifi.svg", alt: "Wi-Fi internet access", label: "Wi-Fi" },
  {
    src: "/icons/samples/air-conditioning.svg",
    alt: "Air conditioning with room controls",
    label: "Air conditioning",
  },
  { src: "/icons/samples/air-purifier.svg", alt: "In-room air purifier", label: "Air purifier" },
  { src: "/icons/samples/tv.svg", alt: "55 inch Full-HD LED Smart TV", label: '55" Smart TV' },
  { src: "/icons/samples/mattress.svg", alt: "10 inch orthopedic mattress", label: "Orthopedic mattress" },
  {
    src: "/icons/samples/hot-beverage.svg",
    alt: "Tea and coffee making facilities",
    label: "Tea & coffee",
  },
  { src: "/icons/samples/refrigerator.svg", alt: "In-room refrigerator", label: "Refrigerator" },
  { src: "/icons/samples/safe-locker.svg", alt: "Electronic safe locker", label: "Safe" },
];

const navLinks = [
  { href: "#foundations-typography", label: "Typography" },
  { href: "#foundations-colors", label: "Colors" },
  { href: "#foundations-spacing", label: "Spacing" },
  { href: "#foundations-radius-shadow", label: "Radius & shadow" },
  { href: "#foundations-layout", label: "Layout" },
  { href: "#foundations-icons", label: "Icons" },
  { href: "#components", label: "Components" },
  { href: "#patterns", label: "Patterns" },
  { href: "#patterns-room-card", label: "Room card" },
  { href: "#patterns-two-column", label: "Two-column" },
  { href: "#patterns-amenities-card", label: "Amenities card" },
  { href: "#patterns-faq", label: "FAQ" },
] as const;

useSeoPage({
  title: "Design system",
  description: "Internal component and token catalog for Kowju site implementation.",
  path: "/design-system",
  noindex: true,
});
</script>

<template>
  <div class="bg-bg pb-24 text-text">
    <header class="border-b border-border bg-surface-muted/80 backdrop-blur-sm">
      <div
        class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8"
      >
        <div class="motion-page-intro">
          <p
            class="text-caption font-medium uppercase tracking-label text-muted"
          >
            Foundations · Components · Patterns
          </p>
          <h1 class="text-h3 font-bold text-text">Design system</h1>
        </div>
        <NuxtLink to="/" class="text-body-sm font-medium text-brand-600 motion-interactive">
          Home
        </NuxtLink>
      </div>
    </header>

    <nav
      aria-label="Design system section navigation"
      class="sticky top-0 z-raised border-b border-border bg-bg/95 backdrop-blur-sm"
    >
      <div class="mx-auto max-w-5xl px-4 py-3 sm:px-6 lg:px-8">
        <ul class="flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-muted">
          <li v-for="item in navLinks" :key="item.href">
            <NuxtLink
              :to="item.href"
              class="text-body-sm text-brand-600 motion-interactive"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <BaseContainer>
        <div class="space-y-16">
          <section id="foundations" class="scroll-mt-24">
            <h2 class="mb-8 text-h4 font-semibold text-text">Foundations</h2>
            <p class="mb-10 max-w-3xl text-body text-muted">
              Design tokens (Tailwind). Use these scales for typography, color,
              spacing, and layout—not ad hoc values.
            </p>

            <div class="space-y-16">
              <BaseSection id="foundations-typography" title="Typography">
                <template #intro>
                  <p class="mb-6 max-w-3xl text-body text-muted">
                    Major Third scale (1.25). Utilities:
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >text-h1</code
                    >
                    …
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >text-caption</code
                    >. Section titles are the same heading scale (
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >text-h2</code
                    >
                    –
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >text-h4</code
                    >); use
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >BaseSectionHeader</code
                    >
                    for optional overline + heading.
                  </p>
                </template>
                <BaseCard>
                  <div class="space-y-6 text-text">
                    <p class="text-h1 font-bold">
                      Heading 1 — The quick brown fox
                    </p>
                    <p class="text-h2 font-bold">
                      Heading 2 — The quick brown fox
                    </p>
                    <p class="text-h3 font-bold">
                      Heading 3 — The quick brown fox
                    </p>
                    <p class="text-h4 font-bold">
                      Heading 4 — The quick brown fox
                    </p>
                    <p class="text-h5 font-semibold">
                      Heading 5 — The quick brown fox
                    </p>
                    <p class="text-h6 font-semibold">
                      Heading 6 — The quick brown fox
                    </p>
                    <p class="text-body-lg">
                      Body large — The quick brown fox jumps over the lazy dog.
                    </p>
                    <p class="text-body">
                      Body — The quick brown fox jumps over the lazy dog.
                    </p>
                    <p class="text-body-sm">
                      Body small — The quick brown fox jumps over the lazy dog.
                    </p>
                    <p class="text-caption">
                      Caption — The quick brown fox jumps over the lazy dog.
                    </p>
                    <p class="text-body">
                      Weights: regular {{ font.weight.regular }}, medium
                      {{ font.weight.medium }}, semibold
                      {{ font.weight.semibold }}, bold {{ font.weight.bold }}.
                    </p>
                  </div>
                </BaseCard>
              </BaseSection>

              <BaseSection id="foundations-colors" title="Colors">
                <div class="space-y-12">
                  <BaseCard v-for="pal in palettes" :key="pal.id">
                    <h3 class="mb-4 text-h5 font-semibold text-text">
                      {{ pal.label }}
                    </h3>
                    <div
                      class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6"
                    >
                      <div
                        v-for="step in shadeKeys"
                        :key="`${pal.id}-${step}`"
                        class="overflow-hidden rounded-lg border border-border"
                      >
                        <div
                          class="aspect-photo w-full"
                          :style="{ backgroundColor: pal.map[step] }"
                        />
                        <div
                          class="border-t border-border bg-surface-muted px-2 py-2"
                        >
                          <p class="text-caption font-medium text-text">
                            {{ step }}
                          </p>
                          <p class="truncate font-mono text-caption text-muted">
                            {{ pal.map[step] }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </BaseCard>

                  <BaseCard>
                    <h3 class="mb-4 text-h5 font-semibold text-text">
                      Semantic (Tailwind)
                    </h3>
                    <div class="flex flex-wrap gap-4">
                      <div
                        class="rounded-lg border border-border bg-bg px-4 py-3 text-body-sm"
                      >
                        bg-bg
                      </div>
                      <div
                        class="rounded-lg border border-border bg-surface px-4 py-3 text-body-sm shadow-sm"
                      >
                        bg-surface
                      </div>
                      <div
                        class="rounded-lg border border-border bg-surface-muted px-4 py-3 text-body-sm"
                      >
                        bg-surface-muted
                      </div>
                      <div
                        class="rounded-lg border border-border bg-brand-500 px-4 py-3 text-body-sm text-inverse"
                      >
                        text-inverse on brand
                      </div>
                      <div
                        class="rounded-lg border border-border px-4 py-3 text-body-sm text-text"
                      >
                        text-text
                      </div>
                      <div
                        class="rounded-lg border border-border px-4 py-3 text-body-sm text-muted"
                      >
                        text-muted
                      </div>
                      <div
                        class="rounded-lg border border-border px-4 py-3 text-body-sm text-gold-600"
                      >
                        accent text
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </BaseSection>

              <BaseSection id="foundations-spacing" title="Spacing">
                <template #intro>
                  <p class="mb-6 max-w-3xl text-body text-muted">
                    Base step
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >0.25rem</code
                    >
                    (4px). Token
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >spacing[n] = n × 0.25rem</code
                    >.
                  </p>
                </template>
                <BaseCard>
                  <div class="space-y-3">
                    <div
                      v-for="n in spacingSamples"
                      :key="n"
                      class="flex items-center gap-4"
                    >
                      <span
                        class="w-14 shrink-0 font-mono text-caption text-muted"
                      >
                        {{ n }}
                      </span>
                      <span
                        class="w-20 shrink-0 font-mono text-caption text-muted"
                      >
                        {{ spacing[String(n)] }}
                      </span>
                      <div class="h-8 min-w-0 flex-1 rounded bg-brand-100">
                        <div
                          class="h-full rounded bg-brand-500"
                          :style="{ width: spacing[String(n)] }"
                        />
                      </div>
                    </div>
                  </div>
                </BaseCard>
              </BaseSection>

              <BaseSection
                id="foundations-radius-shadow"
                title="Radius & shadow"
              >
                <div class="grid gap-8 md:grid-cols-2">
                  <BaseCard>
                    <h3 class="mb-4 text-h5 font-semibold">Border radius</h3>
                    <div class="flex flex-wrap gap-4">
                      <div
                        v-for="[key, val] in radiusEntries"
                        :key="key"
                        class="flex flex-col items-center gap-2"
                      >
                        <div
                          class="size-16 border-2 border-brand-400 bg-brand-50"
                          :style="{ borderRadius: val }"
                        />
                        <span class="text-caption text-muted">{{ key }}</span>
                        <span class="font-mono text-caption text-muted">{{
                          val
                        }}</span>
                      </div>
                    </div>
                  </BaseCard>
                  <BaseCard>
                    <h3 class="mb-4 text-h5 font-semibold">Shadow</h3>
                    <div class="space-y-6">
                      <div
                        v-for="s in shadowEntries"
                        :key="s.key"
                        class="rounded-lg border border-border bg-bg p-4"
                        :style="{ boxShadow: s.value }"
                      >
                        <p class="text-body-sm font-medium">
                          shadow-{{ s.key }}
                        </p>
                        <p
                          class="mt-1 font-mono text-caption text-muted break-all"
                        >
                          {{ s.value }}
                        </p>
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </BaseSection>

              <BaseSection id="foundations-layout" title="Layout">
                <template #intro>
                  <p class="mb-6 text-body text-muted">
                    Container max-width tokens (<code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >max-w-sm</code
                    >
                    …
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >max-w-2xl</code
                    >). This page uses
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >max-w-5xl</code
                    >
                    via
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >BaseContainer</code
                    >.
                  </p>
                </template>
                <BaseCard>
                  <div class="space-y-4">
                    <div
                      v-for="[key, val] in containerEntries"
                      :key="key"
                      class="flex flex-wrap items-baseline justify-between gap-2 border-b border-border py-2 last:border-0"
                    >
                      <span class="font-medium text-text">max-w-{{ key }}</span>
                      <span class="font-mono text-body-sm text-muted">{{
                        val
                      }}</span>
                    </div>
                  </div>
                </BaseCard>
              </BaseSection>

              <BaseSection id="foundations-icons" title="Icons">
                <template #intro>
                  <p class="mb-6 max-w-3xl text-body text-muted">
                    Amenity and UI icons ship as static SVGs (Lucide-derived,
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >24×24</code
                    >,
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >stroke 1</code
                    >) under
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >public/icons/samples/</code
                    >. Manifest:
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >design-system/icon-samples.json</code
                    >. Regenerate assets and
                    <NuxtLink
                      class="text-text underline decoration-border underline-offset-2 hover:decoration-text"
                      to="/icons/icons-preview.html"
                    >
                      static preview
                    </NuxtLink>
                    ·
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >node scripts/build-icons-preview.mjs</code
                    >.
                  </p>
                </template>
                <BaseCard>
                  <ul
                    class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                    aria-label="Lucide icon samples"
                  >
                    <li
                      v-for="item in iconSampleItems"
                      :key="item.file"
                      class="flex flex-col items-center gap-3 rounded-lg border border-border bg-surface-muted/50 p-4 text-center"
                    >
                      <img
                        :src="`/icons/samples/${item.file}`"
                        :alt="item.label"
                        class="icon-tint-accent size-10 shrink-0 object-contain"
                        width="40"
                        height="40"
                        loading="lazy"
                        decoding="async"
                      >
                      <div class="min-w-0 space-y-1">
                        <p class="text-body-sm font-medium text-text">
                          {{ item.label }}
                        </p>
                        <p class="break-all font-mono text-caption text-muted">
                          /icons/samples/{{ item.file }}
                        </p>
                        <p class="font-mono text-caption text-muted/80">
                          Lucide · {{ item.icon }}
                        </p>
                      </div>
                    </li>
                  </ul>
                </BaseCard>
              </BaseSection>
            </div>
          </section>

          <section id="components" class="scroll-mt-24">
            <h2 class="mb-6 text-h4 font-semibold text-text">Components</h2>
            <p class="mb-8 max-w-3xl text-body text-muted">
              PrimeVue controls (Aura preset in
              <code class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                >app/themes/kowju.preset.ts</code
              >). Demos use
              <code class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                >BaseButtonPrimary</code
              >,
              <code class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                >BaseButtonSecondary</code
              >,
              <code class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                >BaseButtonOutlined</code
              >
              and
              <code class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                >BaseCard</code
              >
              shells.
            </p>
            <div class="space-y-8">
              <BaseCard>
                <h3 class="mb-4 text-h5 font-semibold text-text">Buttons</h3>
                <div class="flex flex-wrap gap-4">
                  <BaseButtonSecondary label="Secondary" />
                  <BaseButtonOutlined label="Outlined" />
                  <BaseButtonPrimary label="Primary" />
                </div>
              </BaseCard>
              <BaseCard>
                <h3 class="mb-4 text-h5 font-semibold text-text">Input</h3>
                <div class="flex max-w-md flex-col">
                  <FloatLabel variant="on">
                    <InputText id="ds-input" class="w-full" placeholder=" " />
                    <label for="ds-input">Label</label>
                  </FloatLabel>
                </div>
              </BaseCard>
              <BaseCard class="max-w-lg">
                <Card>
                  <template #title> Card title </template>
                  <template #subtitle>
                    Subtitle uses muted text from theme
                  </template>
                  <template #content>
                    <p class="text-body text-muted">
                      Card body padding and title sizes come from component
                      tokens. Use cards for grouped content and secondary
                      actions.
                    </p>
                  </template>
                </Card>
              </BaseCard>
            </div>
          </section>

          <section id="patterns" class="scroll-mt-24">
            <h2 class="mb-6 text-h4 font-semibold text-text">Patterns</h2>
            <p class="mb-8 max-w-3xl text-body text-muted">
              Composition: tokens +
              <code class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                >BaseCard</code
              >
              + PrimeVue. Use these as references for sections and cards—not as
              CMS-driven blocks.
            </p>
            <div class="space-y-8">
              <BaseCard>
                <h3 class="mb-4 text-h5 font-semibold text-text">Hero</h3>
                <div class="flex max-w-2xl flex-col gap-4">
                  <p class="text-h3 font-bold text-text">
                    Stay steps from your gate
                  </p>
                  <p class="text-body text-muted">
                    Quiet rooms, early flights, and airport convenience—book
                    direct for the best rate.
                  </p>
                  <div>
                    <BaseButtonPrimary label="Book your stay" />
                  </div>
                </div>
              </BaseCard>

              <div id="patterns-room-card" class="scroll-mt-24">
                <BaseCard>
                  <h3 class="mb-4 text-h5 font-semibold text-text">
                    Room card
                  </h3>
                  <div
                    class="mb-6 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p class="text-body-sm text-muted">
                      Listing currency (same pattern as /rooms)
                    </p>
                    <fieldset>
                      <legend class="sr-only">Demo currency</legend>
                      <div class="flex flex-wrap gap-2" role="radiogroup">
                        <button
                          v-for="code in ROOM_CARD_PRICE_CURRENCIES"
                          :key="code"
                          type="button"
                          role="radio"
                          :aria-checked="roomCardDemoListingCurrency === code"
                          class="rounded-md border px-3 py-2 text-body-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                          :class="
                            roomCardDemoListingCurrency === code
                              ? 'border-brand-600 bg-brand-50 font-semibold text-brand-700'
                              : 'border-border bg-surface text-muted hover:border-warm-300 hover:text-text'
                          "
                          @click="roomCardDemoListingCurrency = code"
                        >
                          {{ code }}
                        </button>
                      </div>
                    </fieldset>
                  </div>
                  <BaseRoomCard
                    title="Deluxe King Room"
                    description="This 215 square feet Deluxe King Room features a comfortable king bed. It can accommodate two adults and two children."
                    :price-band-label="roomCardDemoPriceLabel"
                    image-src="/images/deluxe_king_room_01.png"
                    image-alt="Deluxe king guest room with king bed and seating area"
                    :details="roomCardDemoDetails"
                    :amenity-icons="roomCardDemoAmenities"
                  >
                    <template #actions>
                      <NuxtLink
                        to="/rooms/deluxe-king-room"
                        custom
                        v-slot="{ href, navigate }"
                      >
                        <BaseButtonOutlined
                          label="View more"
                          as="a"
                          :href="href"
                          class="motion-interactive"
                          @click="navigate"
                        />
                      </NuxtLink>
                      <NuxtLink to="/contact" custom v-slot="{ href, navigate }">
                        <BaseButtonPrimary
                          label="Book now"
                          as="a"
                          :href="href"
                          class="motion-interactive"
                          @click="navigate"
                        />
                      </NuxtLink>
                    </template>
                  </BaseRoomCard>
                </BaseCard>
              </div>

              <BaseCard>
                <h3 class="mb-4 text-h5 font-semibold text-text">CTA band</h3>
                <div
                  class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p class="max-w-xl text-body text-muted">
                    Ready to book? Secure your dates in a few clicks—free
                    cancellation on select rates.
                  </p>
                  <BaseButtonPrimary label="Check availability" />
                </div>
              </BaseCard>

              <div id="patterns-faq" class="scroll-mt-24">
                <BaseCard>
                  <h3 class="mb-2 text-h5 font-semibold text-text">
                    FAQ section
                  </h3>
                  <p class="mb-8 max-w-3xl text-body text-muted">
                    Questions and answers in an accordion. Uses
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >SectionFaq</code
                    >
                    with PrimeVue
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >Accordion</code
                    >,
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >AccordionPanel</code
                    >,
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >AccordionHeader</code
                    >, and
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >AccordionContent</code
                    >. Pass
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >items</code
                    >
                    (question + answer strings); optional
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >BaseSectionHeader</code
                    >
                    via
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >overline</code
                    >
                    /
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >title</code
                    >.
                  </p>
                  <SectionFaq
                    overline="Guest information"
                    title="Frequently asked questions"
                    :heading-level="4"
                    :items="faqSamples"
                    expand-first
                  />
                </BaseCard>
              </div>

              <div id="patterns-amenities-card" class="scroll-mt-24">
                <BaseCard class="overflow-hidden bg-surface p-0">
                  <div class="border-b border-border px-6 py-5 sm:px-8">
                    <h3 class="text-h5 font-semibold text-text">
                      Amenities feature card
                    </h3>
                    <p class="mt-2 max-w-3xl text-body-sm text-muted">
                      Image + heading, two-column amenity grid (icon + label),
                      uppercase accent link. Uses
                      <code
                        class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                        >BaseSectionHeader</code
                      >,
                      <code
                        class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                        >PrimeIcons</code
                      >, brand/muted text.
                    </p>
                  </div>
                  <div
                    class="grid items-stretch gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10"
                  >
                    <div class="min-w-0">
                      <img
                        src="/images/amenities_facilities_01.png"
                        alt="Outdoor pool and deck at the hotel"
                        width="1200"
                        height="900"
                        class="aspect-photo w-full rounded-2xl object-cover"
                        loading="lazy"
                        decoding="async"
                      >
                    </div>
                    <div
                      class="flex min-w-0 flex-col justify-center gap-6 lg:gap-8"
                    >
                      <BaseSectionHeader
                        overline="Amenities & facilities"
                        title="Everything you'll need here"
                        :heading-level="2"
                        align="left"
                      />
                      <ul
                        class="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
                        aria-label="Highlighted amenities"
                      >
                        <li
                          v-for="item in amenitiesFeatureItems"
                          :key="item.label"
                          class="flex items-center gap-3 text-body-sm text-muted"
                        >
                          <span
                            :class="[
                              item.icon,
                              'shrink-0 text-base leading-none text-brand-600',
                            ]"
                            aria-hidden="true"
                          />
                          <span>{{ item.label }}</span>
                        </li>
                      </ul>
                      <div>
                        <NuxtLink
                          to="#"
                          class="motion-interactive inline-flex items-center gap-2 text-body-sm font-bold uppercase tracking-label text-brand-600"
                        >
                          <span>View all</span>
                          <span
                            class="pi pi-arrow-right text-xs leading-none text-brand-600"
                            aria-hidden="true"
                          />
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </BaseCard>
              </div>

              <div id="patterns-two-column" class="scroll-mt-24">
                <BaseCard>
                  <h3 class="mb-2 text-h5 font-semibold text-text">
                    Two-column feature split
                  </h3>
                  <p class="mb-10 max-w-3xl text-body text-muted">
                    50/50 grid, vertically centered columns, rounded image
                    (<code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >rounded-2xl</code
                    >),
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >BaseSectionHeader</code
                    >,                     CTA via
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >BaseLinkText</code
                    >
                    (<code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >NuxtLink</code
                    >
                    · sentence case · underline · arrow icon). Typography:
                    Montserrat only. Images:
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >public/images/</code
                    >.
                  </p>
                  <div class="space-y-16 border-t border-border pt-10">
                    <div>
                      <p class="mb-6 text-body-sm font-medium text-muted">
                        Image left — text right
                      </p>
                      <div
                        class="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
                      >
                        <div class="min-w-0 md:order-none">
                          <img
                            src="/images/home_page_06_dining_experience.png"
                            alt="Dining experience at the hotel"
                            width="1200"
                            height="900"
                            class="aspect-photo w-full rounded-2xl object-cover"
                            loading="lazy"
                            decoding="async"
                          >
                        </div>
                        <div
                          class="flex min-w-0 flex-col justify-center gap-4 md:gap-5 md:order-none"
                        >
                          <BaseSectionHeader
                            overline="Section label"
                            title="Welcome to the world of hospitality"
                            :heading-level="2"
                            align="left"
                          />
                          <p class="max-w-xl text-body text-muted">
                            Supporting paragraph from CMS or local content. Keep
                            one clear idea; optional second sentence for context.
                          </p>
                          <div class="pt-1">
                            <BaseLinkText to="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p class="mb-6 text-body-sm font-medium text-muted">
                        Image right — text left
                      </p>
                      <div
                        class="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
                      >
                        <div class="min-w-0 md:order-2">
                          <img
                            src="/images/events_meetings_06_mehmaan_hall.png"
                            alt="Mehmaan Hall meetings and events space"
                            width="1200"
                            height="900"
                            class="aspect-photo w-full rounded-2xl object-cover"
                            loading="lazy"
                            decoding="async"
                          >
                        </div>
                        <div
                          class="flex min-w-0 flex-col justify-center gap-4 md:gap-5 md:order-1"
                        >
                          <BaseSectionHeader
                            overline="Section label"
                            title="Welcome to the world of hospitality"
                            :heading-level="2"
                            align="left"
                          />
                          <p class="max-w-xl text-body text-muted">
                            Supporting paragraph from CMS or local content. Keep
                            one clear idea; optional second sentence for context.
                          </p>
                          <div class="pt-1">
                            <BaseLinkText to="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BaseCard>
              </div>
            </div>
          </section>
        </div>
      </BaseContainer>
    </div>
  </div>
</template>
