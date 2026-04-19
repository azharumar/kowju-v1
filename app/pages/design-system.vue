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

const navLinks = [
  { href: "#foundations-typography", label: "Typography" },
  { href: "#foundations-colors", label: "Colors" },
  { href: "#foundations-spacing", label: "Spacing" },
  { href: "#foundations-radius-shadow", label: "Radius & shadow" },
  { href: "#foundations-layout", label: "Layout" },
  { href: "#components", label: "Components" },
  { href: "#patterns", label: "Patterns" },
  { href: "#patterns-two-column", label: "Two-column" },
] as const;

useHead({
  title: "Design system — Kowju Airport Hotel",
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
        <NuxtLink to="/" custom v-slot="{ href, navigate }">
          <a
            :href="href"
            class="text-body-sm font-medium text-brand-600 motion-interactive"
            @click="navigate"
            >Home</a
          >
        </NuxtLink>
      </div>
    </header>

    <nav
      class="sticky top-0 z-10 border-b border-border bg-bg/95 backdrop-blur-sm"
    >
      <div class="mx-auto max-w-5xl px-4 py-3 sm:px-6 lg:px-8">
        <ul class="flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-muted">
          <li v-for="item in navLinks" :key="item.href">
            <a
              :href="item.href"
              class="text-body-sm text-brand-600 motion-interactive"
              >{{ item.label }}</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <BaseContainer>
        <div class="space-y-16">
          <section id="foundations" class="scroll-mt-24">
            <h2 class="mb-8 text-h4 font-semibold text-text">Foundations</h2>
            <p class="mb-10 max-w-3xl text-body text-muted">
              Design tokens (Tailwind). Use these scales for typography, color,
              spacing, and layout—not ad hoc values.
            </p>

            <div class="space-y-16">
              <BaseSection id="foundations-typography" title="Typography" enter>
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
                    >.
                  </p>
                </template>
                <BaseCard>
                  <div class="space-y-6">
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
                    <BaseOverline>Section label</BaseOverline>
                    <p class="text-body-lg">
                      Body large — The quick brown fox jumps over the lazy dog.
                    </p>
                    <p class="text-body">
                      Body — The quick brown fox jumps over the lazy dog.
                    </p>
                    <p class="text-body-sm">
                      Body small — The quick brown fox jumps over the lazy dog.
                    </p>
                    <p class="text-caption text-muted">
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
            </div>
          </section>

          <section id="components" class="motion-enter-scroll scroll-mt-24">
            <h2 class="mb-6 text-h4 font-semibold text-text">Components</h2>
            <p class="mb-8 max-w-3xl text-body text-muted">
              PrimeVue controls (Aura preset in
              <code class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                >app/themes/kowju.preset.ts</code
              >). Demos sit in
              <code class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                >BaseCard</code
              >
              shells.
            </p>
            <div class="space-y-8">
              <BaseCard>
                <h3 class="mb-4 text-h5 font-semibold text-text">Buttons</h3>
                <div class="flex flex-wrap gap-3">
                  <BaseButton label="Primary" />
                  <BaseButton label="Secondary" severity="secondary" />
                  <BaseButton label="Outlined" outlined />
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

          <section id="patterns" class="motion-enter-scroll scroll-mt-24">
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
                    <BaseButton label="Book your stay" />
                  </div>
                </div>
              </BaseCard>

              <BaseCard>
                <h3 class="mb-4 text-h5 font-semibold text-text">Room card</h3>
                <div class="max-w-sm">
                  <Card>
                    <template #header>
                      <img
                        src="https://placehold.co/640x360/e8e4df/5c5348?text=Room"
                        alt="Deluxe king guest room with king bed"
                        class="aspect-video w-full object-cover"
                        width="640"
                        height="360"
                        loading="lazy"
                      />
                    </template>
                    <template #title> Deluxe King </template>
                    <template #subtitle> Up to 2 guests · King bed </template>
                    <template #content>
                      <BaseButton label="View room" fluid />
                    </template>
                  </Card>
                </div>
              </BaseCard>

              <BaseCard>
                <h3 class="mb-4 text-h5 font-semibold text-text">CTA band</h3>
                <div
                  class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p class="max-w-xl text-body text-muted">
                    Ready to book? Secure your dates in a few clicks—free
                    cancellation on select rates.
                  </p>
                  <BaseButton label="Check availability" />
                </div>
              </BaseCard>

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
                      >BaseOverline</code
                    >, CTA via PrimeVue
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >Button</code
                    >
                    (<code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >ctaVariant</code
                    >
                    /
                    <code
                      class="rounded-sm bg-warm-100 px-1.5 py-0.5 text-body-sm"
                      >#cta</code
                    >
                    slot). Typography: Montserrat only. Images:
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
                      <LayoutFeatureSplit
                        image-position="left"
                        :heading-level="2"
                        :image="{
                          url: '/images/home_page_06_dining_experience.png',
                          alt: 'Dining experience at the hotel',
                          width: 1200,
                          height: 900,
                        }"
                        overline="Section label"
                        title="Short headline for this column"
                        body="Supporting paragraph from CMS or local content. Keep one clear idea; optional second sentence for context."
                        cta-label="Learn more"
                        cta-href="#"
                      />
                    </div>
                    <div>
                      <p class="mb-6 text-body-sm font-medium text-muted">
                        Image right — text left
                      </p>
                      <LayoutFeatureSplit
                        image-position="right"
                        :heading-level="2"
                        :image="{
                          url: '/images/events_meetings_06_mehmaan_hall.png',
                          alt: 'Mehmaan Hall meetings and events space',
                          width: 1200,
                          height: 900,
                        }"
                        overline="Section label"
                        title="Short headline for this column"
                        body="Supporting paragraph from CMS or local content. Keep one clear idea; optional second sentence for context."
                        cta-label="Learn more"
                        cta-href="#"
                      />
                    </div>
                  </div>
                </BaseCard>
              </div>
            </div>
          </section>
        </div>
      </BaseContainer>
    </main>
  </div>
</template>
