<script setup lang="ts">
import type { RoomCardAmenityIcon } from "~/components/base/BaseRoomCard.vue";
import { ROOM_CARD_PRICE_CURRENCIES } from "~/components/base/room-card-price-currencies";
import type { RoomCardPriceCurrency } from "~/components/base/room-card-price-currencies";
import SectionBookDirectBar from "~/components/section/SectionBookDirectBar.vue";
import SectionReviewBarTextOnly from "~/components/section/SectionReviewBarTextOnly.vue";
import { rooms } from "~/data/rooms";
import { formatRoomNightlyBand } from "~/utils/room-price-format";

const roomsFaqItems = [
  {
    question: "What amenities are included in every room?",
    answer:
      'All rooms include high-speed Wi-Fi, air conditioning, an air purifier, a 55" Smart TV, an orthopedic mattress, tea and coffee facilities, a refrigerator, and an electronic safe.',
  },
  {
    question: "Is room service available?",
    answer:
      "Yes, room service is available. Please check with the front desk for operating hours and the current menu.",
  },
  {
    question: "Can extra beds or cribs be arranged?",
    answer:
      "Extra beds and cribs can be arranged on request, subject to room type and availability. Additional charges may apply.",
  },
  {
    question: "Is early check-in or late check-out available?",
    answer:
      "Early check-in and late check-out can be arranged subject to availability. Please contact us in advance so we can do our best to accommodate your request.",
  },
  {
    question: "Are the rooms non-smoking?",
    answer:
      "All guest rooms are strictly non-smoking. Designated smoking areas are available on the property.",
  },
];

useSeoPage({
  title: "Rooms & Suites",
  description:
    "Choose from well-appointed rooms and suites designed for restful stays near Calicut airport.",
  path: "/rooms",
  image: "/images/rooms_suites_01.png",
  imageAlt: "Hotel rooms and suites interior",
});

const commonAmenities: RoomCardAmenityIcon[] = [
  {
    src: "/icons/samples/wifi.svg",
    alt: "Wi-Fi internet access",
    label: "Wi-Fi",
    subtitle: "High-speed internet in all rooms",
  },
  {
    src: "/icons/samples/air-conditioning.svg",
    alt: "Air conditioning with room controls",
    label: "Air conditioning",
    subtitle: "Individual climate control in every room",
  },
  {
    src: "/icons/samples/air-purifier.svg",
    alt: "In-room air purifier",
    label: "Air purifier",
    subtitle: "Fresher air for a more restful night",
  },
  {
    src: "/icons/samples/tv.svg",
    alt: "55 inch Full-HD LED Smart TV",
    label: '55" Smart TV',
    subtitle: "Stream, cast, and unwind in sharp HD",
  },
  {
    src: "/icons/samples/mattress.svg",
    alt: "10 inch orthopedic mattress",
    label: "Orthopedic mattress",
    subtitle: "Supportive sleep after travel or long days",
  },
  {
    src: "/icons/samples/hot-beverage.svg",
    alt: "Tea and coffee making facilities",
    label: "Tea & coffee",
    subtitle: "Welcome tray with replenished supplies",
  },
  {
    src: "/icons/samples/refrigerator.svg",
    alt: "In-room refrigerator",
    label: "Refrigerator",
    subtitle: "Keep drinks and snacks chilled on your schedule",
  },
  {
    src: "/icons/samples/safe-locker.svg",
    alt: "Electronic safe locker",
    label: "Safe",
    subtitle: "Peace of mind for passports and valuables",
  },
];

const roomFacilities = commonAmenities;
const orderedRooms = computed(() =>
  [...rooms].sort((a, b) => a.order - b.order),
);

const listingCurrency = ref<RoomCardPriceCurrency>("INR");

function roomPriceLabel(room: (typeof rooms)[number]) {
  return formatRoomNightlyBand(
    room.priceNightlyInr.min,
    room.priceNightlyInr.max,
    listingCurrency.value,
  );
}

const roomsAboutParagraphs = [
  "Our rooms and suites are designed for travelers who need comfort, calm, and practical convenience near the airport.",
  "Each space combines modern essentials, restful interiors, and flexible layouts to support short stopovers, business trips, and family stays.",
];
</script>

<template>
  <div>
    <SectionPageHero
      title="Rooms & Suites"
      lead="Choose from well-appointed rooms and suites designed for restful stays."
      image-src="/images/rooms_suites_01.png"
      image-alt="Hotel rooms and suites interior"
    />
    <SectionBookDirectBar />
    <SectionReviewBarTextOnly variant="dark" />
    <SectionTwoColumnAbout
      overline="About rooms & suites"
      title="Comfortable stays built around what matters most"
      :paragraphs="roomsAboutParagraphs"
    />
    <BaseIconGrid
      title="Room facilities and amenities"
      :heading-level="3"
      :items="roomFacilities"
      link-to="/rooms"
      link-label="View all"
    />
    <BaseContainer>
      <BaseSection
        rhythm="compact"
        stack="comfortable"
        class="motion-page-intro"
      >
        <BaseStack>
          <div
            class="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <p class="text-body-sm text-muted">
              Indicative nightly rates (before taxes and fees)
            </p>
            <fieldset class="min-w-0">
              <legend class="sr-only">Display currency</legend>
              <div
                class="flex flex-wrap gap-2"
                role="radiogroup"
                aria-label="Display currency"
              >
                <button
                  v-for="code in ROOM_CARD_PRICE_CURRENCIES"
                  :key="code"
                  type="button"
                  role="radio"
                  :aria-checked="listingCurrency === code"
                  class="rounded-md border px-3 py-2 text-body-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  :class="
                    listingCurrency === code
                      ? 'border-brand-600 bg-brand-50 font-semibold text-brand-700'
                      : 'border-border bg-surface text-muted hover:border-warm-300 hover:text-text'
                  "
                  @click="listingCurrency = code"
                >
                  {{ code }}
                </button>
              </div>
            </fieldset>
          </div>
          <BaseScrollReveal
            v-for="(room, index) in orderedRooms"
            :id="room.slug"
            :key="room.slug"
            class="scroll-mt-24"
            tag="div"
          >
            <template #default="{ shouldRender }">
              <BaseRoomCard
                v-if="index < 2 || shouldRender"
                :title="room.title"
                :description="room.description"
                :price-band-label="roomPriceLabel(room)"
                :image-src="room.imageSrc"
                :image-alt="room.imageAlt"
                :details="room.details"
              >
                <template #actions>
                  <div
                    class="flex w-full flex-wrap items-center gap-4"
                  >
                    <BaseLinkText
                      :to="`/rooms/${room.slug}`"
                      label="More Details"
                    />
                    <div class="ms-auto shrink-0">
                      <NuxtLink
                        to="/contact"
                        custom
                        v-slot="{ href, navigate }"
                      >
                        <BaseButtonPrimary
                          label="Check availability"
                          as="a"
                          :href="href"
                          class="motion-interactive"
                          @click="navigate"
                        />
                      </NuxtLink>
                    </div>
                  </div>
                </template>
              </BaseRoomCard>
            </template>
          </BaseScrollReveal>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
    <LazySectionRoomOffers />
    <LazySectionHotelPolicies />
    <LazySectionFaq
      overline="Frequently Asked Questions"
      title="Common questions about our rooms and suites"
      :items="roomsFaqItems"
    />
  </div>
</template>
