<script setup lang="ts">
import type { RoomCardAmenityIcon } from "~/components/base/BaseRoomCard.vue"
import { rooms } from "~/data/rooms"

const roomsFaqItems = [
  {
    question: 'What amenities are included in every room?',
    answer: 'All rooms include high-speed Wi-Fi, air conditioning, an air purifier, a 55" Smart TV, an orthopedic mattress, tea and coffee facilities, a refrigerator, and an electronic safe.',
  },
  {
    question: 'Is room service available?',
    answer: 'Yes, room service is available. Please check with the front desk for operating hours and the current menu.',
  },
  {
    question: 'Can extra beds or cribs be arranged?',
    answer: 'Extra beds and cribs can be arranged on request, subject to room type and availability. Additional charges may apply.',
  },
  {
    question: 'Is early check-in or late check-out available?',
    answer: 'Early check-in and late check-out can be arranged subject to availability. Please contact us in advance so we can do our best to accommodate your request.',
  },
  {
    question: 'Are the rooms non-smoking?',
    answer: 'All guest rooms are strictly non-smoking. Designated smoking areas are available on the property.',
  },
]

useSeoPage({
  title: 'Rooms & Suites',
  description:
    'Choose from well-appointed rooms and suites designed for restful stays near Calicut airport.',
  path: '/rooms',
  image: '/images/rooms_suites_01.png',
  imageAlt: 'Hotel rooms and suites interior',
})

const commonAmenities: RoomCardAmenityIcon[] = [
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
]

const roomFacilities = commonAmenities
</script>

<template>
  <div>
    <SectionPageHero
      title="Rooms & Suites"
      lead="Choose from well-appointed rooms and suites designed for restful stays."
      image-src="/images/rooms_suites_01.png"
      image-alt="Hotel rooms and suites interior"
    />
    <BaseIconGrid
      overline="Facilities"
      title="Room facilities and amenities"
      :items="roomFacilities"
      link-to="/rooms"
      link-label="View all"
    />
    <BaseContainer>
      <BaseSection rhythm="compact" stack="comfortable" class="motion-page-intro">
        <BaseStack>
          <BaseScrollReveal
            v-for="(room, index) in rooms"
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
                :price-range="room.priceRange"
                :image-src="room.imageSrc"
                :image-alt="room.imageAlt"
                :details="room.details"
                :amenity-icons="commonAmenities"
              >
                <template #actions>
                  <NuxtLink
                    :to="`/rooms/${room.slug}`"
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
            </template>
          </BaseScrollReveal>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
    <LazySectionHotelPolicies />
    <LazySectionFaq
      overline="Frequently Asked Questions"
    title="Common questions about our rooms and suites"
    :items="roomsFaqItems"
    />
    <LazySectionExploreSite exclude="rooms" />
  </div>
</template>
