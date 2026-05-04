<script setup lang="ts">
import {
  bookDirectBenefits,
  bookDirectPageIntroParagraphs,
} from "~/data/book-direct";

useSeoPage({
  title: "Book direct benefits",
  description:
    "Why guests choose official Kowju channels: competitive rates, coordinated airport transfers where applicable, flexible support, and GST-ready invoicing.",
  path: "/book-direct",
  image: "/images/home_page_02_about_us.png",
  imageAlt: "Hotel lounge seating area with warm lighting",
});
</script>

<template>
  <div>
    <SectionPageHero
      title="Book direct for more value and clearer communication"
      lead="Official reservations put you straight in touch with the hotel—better rates than many aggregators, structured perks, and a single team owning your stay."
      image-src="/images/home_page_02_about_us.png"
      image-alt="Hotel lounge seating area with warm lighting"
    />

    <BaseContainer>
      <BaseSection rhythm="default" stack="comfortable" :reveal="false">
        <BaseStack variant="default" :reveal="false">
          <div class="max-w-prose space-y-4">
            <p
              v-for="(paragraph, index) in bookDirectPageIntroParagraphs"
              :key="index"
              class="text-body text-text-lead"
            >
              {{ paragraph }}
            </p>
          </div>

          <BaseSectionHeader
            title="What you can expect when you book direct"
            heading-level="2"
            lead="Each point reflects how we typically treat official reservations. If your rate sheet says otherwise, that package wins—ask us any time for clarity."
          />

          <BaseGrid
            class="md:grid-cols-2 lg:grid-cols-3"
            :reveal="false"
            gap="default"
          >
            <BaseCard
              v-for="benefit in bookDirectBenefits"
              :key="benefit.id"
            >
              <div class="flex flex-col gap-4">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-50 text-brand-700"
                  aria-hidden="true"
                >
                  <i :class="[benefit.iconClass, 'text-xl']" />
                </span>
                <h3 class="text-h3 text-text">
                  {{ benefit.title }}
                </h3>
                <p class="text-body text-text-lead">
                  {{ benefit.summary }}
                </p>
              </div>
            </BaseCard>
          </BaseGrid>

          <div
            class="flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between"
          >
            <p class="text-body font-semibold text-text">
              Ready to lock in dates on our best available terms?
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/rooms" custom v-slot="{ href, navigate }">
                <BaseButtonSecondary
                  label="Browse rooms"
                  as="a"
                  :href="href"
                  class="motion-interactive"
                  @click="navigate"
                />
              </NuxtLink>
              <NuxtLink to="/contact" custom v-slot="{ href, navigate }">
                <BaseButtonPrimary
                  label="Book your stay"
                  as="a"
                  :href="href"
                  class="motion-interactive"
                  @click="navigate"
                />
              </NuxtLink>
            </div>
          </div>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </div>
</template>
