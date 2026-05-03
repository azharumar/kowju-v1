<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import type { DiningDetailRow } from "~/data/dining-overview";

const props = withDefaults(
  defineProps<{
    id?: string;
    overline?: string;
    title: string;
    introParagraphs: string[];
    detailRows: DiningDetailRow[];
    ctaPrimary: { label: string; to: RouteLocationRaw };
    ctaSecondary: { label: string; to: RouteLocationRaw };
  }>(),
  {
    overline: "Restaurant",
  },
);

const headingId = computed(
  () => `${props.id ?? "dining-overview"}-heading`,
);
</script>

<template>
  <div class="bg-surface">
    <BaseContainer>
      <BaseSection
        :id="id"
        rhythm="default"
        stack="default"
        :reveal="false"
        :aria-labelledby="headingId"
      >
        <BaseSectionHeader
          :overline="overline"
          :title="title"
          :title-id="headingId"
          :heading-level="2"
        />
        <BaseGrid
          class="grid-cols-1 items-start md:grid-cols-2"
          gap="comfortable"
        >
          <BaseStack variant="default" class="max-w-prose">
            <BaseStack variant="tight" class="text-muted">
              <p
                v-for="(paragraph, index) in introParagraphs"
                :key="`dining-intro-${index}`"
                class="text-body"
              >
                {{ paragraph }}
              </p>
            </BaseStack>
            <div class="flex flex-wrap gap-3">
              <NuxtLink
                :to="ctaPrimary.to"
                external
                custom
                v-slot="{ href, navigate }"
              >
                <BaseButtonPrimary
                  :label="ctaPrimary.label"
                  as="a"
                  :href="href"
                  class="motion-interactive"
                  @click="navigate"
                />
              </NuxtLink>
              <NuxtLink
                :to="ctaSecondary.to"
                external
                custom
                v-slot="{ href, navigate }"
              >
                <BaseButtonSecondary
                  :label="ctaSecondary.label"
                  as="a"
                  :href="href"
                  class="motion-interactive"
                  @click="navigate"
                />
              </NuxtLink>
            </div>
          </BaseStack>

          <dl
            class="m-0 divide-y divide-border border-y border-border p-0 md:border-l md:border-border md:pl-10 lg:pl-12"
          >
            <div
              v-for="(row, rowIndex) in detailRows"
              :key="`detail-${row.term}-${rowIndex}`"
              class="grid gap-1 py-6 first:pt-0 last:pb-0"
            >
              <dt class="text-body font-semibold text-text">
                {{ row.term }}
              </dt>
              <dd class="m-0 text-body text-muted">
                {{ row.value }}
              </dd>
            </div>
          </dl>
        </BaseGrid>
      </BaseSection>
    </BaseContainer>
  </div>
</template>
