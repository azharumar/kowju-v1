<script setup lang="ts">
import SectionBookDirectBar from "~/components/section/SectionBookDirectBar.vue"
import SectionReviewBarTextOnly from "~/components/section/SectionReviewBarTextOnly.vue"

const homeFaqItems = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is from 2:00 PM and check-out is by 12:00 noon. Early check-in and late check-out are subject to availability — please contact us in advance.',
  },
  {
    question: 'How far is the hotel from Calicut International Airport?',
    answer: 'We are located just minutes from Calicut International Airport (CCJ), making us the most convenient option for travellers flying in or out of Kozhikode.',
  },
  {
    question: 'Is parking available at the hotel?',
    answer: 'Yes, complimentary parking is available on-site for all guests.',
  },
  {
    question: 'Is Wi-Fi available?',
    answer: 'Yes, high-speed Wi-Fi is available throughout the hotel and in all guest rooms, complimentary for all guests.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'We do not currently accommodate pets. Please contact us if you have specific requirements and we will do our best to assist.',
  },
]

const homeAmenitiesItems = [
  { src: "/icons/samples/air-purifier.svg", alt: "Air Purifier", label: "Air Purifier" },
  { src: "/icons/samples/restroom.svg", alt: "Smart Toilet", label: "Smart Toilet" },
  { src: "/icons/samples/bathtub.svg", alt: "Swimming Pool", label: "Swimming Pool" },
  { src: "/icons/samples/tv.svg", alt: "55 inch LED TV", label: "55 inch LED TV" },
  { src: "/icons/samples/air-conditioning.svg", alt: "Air Conditioning", label: "Air Conditioning" },
  { src: "/icons/samples/mattress.svg", alt: "Orthopedic Mattress", label: "Orthopedic Mattress" },
  { src: "/icons/samples/safe-locker.svg", alt: "Electronic Locker", label: "Electronic Locker" },
  { src: "/icons/samples/wifi.svg", alt: "Wi-Fi", label: "Wi-Fi" },
]

useSeoPage({
  title: 'Convenient stay near Calicut Airport',
  description:
    'Comfortable rooms, practical amenities, and easy airport access at Kowju Airport Hotel Calicut.',
  path: '/',
  image: '/images/home_page_01.png',
  imageAlt: 'Kowju Airport Hotel Calicut exterior',
})
</script>

<template>
  <BaseContainer>
    <BaseSection rhythm="default" class="text-center">
      <BaseStack
        class="min-h-section-hero items-center justify-center"
      >
        <BasePageHeader
          title="Convenient stay near Calicut Airport"
          lead="Comfortable rooms, practical amenities, and easy airport access in one place."
          align="left"
        />
        <p class="text-body text-muted">Kowju Airport Hotel Calicut</p>
        <NuxtLink to="/design-system" custom v-slot="{ href, navigate }">
          <BaseButtonPrimary
            label="Open design system"
            as="a"
            :href="href"
            class="motion-interactive"
            @click="navigate"
          />
        </NuxtLink>
      </BaseStack>
    </BaseSection>
  </BaseContainer>
  <SectionBookDirectBar />
  <SectionReviewBarTextOnly variant="dark" />
  <LazySectionTwoColumnMediaText
    image-src="/images/dining_experience_01.png"
    image-alt="Skipol Diner restaurant interior with seating and arched doorway"
    overline="Dining experience"
    title="Flavors that tell stories"
    description="Skipol Diner, our lobby level restaurant with seating for 40 guests, offers a comfortable place to dine throughout the day. Begin your day with a wholesome breakfast buffet, or enjoy freshly prepared dishes served any time you wish."
    cta-to="/dining"
    cta-label="Learn more"
  />
  <LazySectionTwoColumnMediaText
    reversed
    image-src="/images/dining_experience_02.png"
    image-alt="Hotel dining area with tables and warm lighting"
    overline="Dining"
    title="All-day dining at the hotel"
    description="From early breakfast through late evening, our culinary team focuses on fresh ingredients and regional touches. Whether you want a quick coffee, a working lunch, or a relaxed dinner, you will find something to suit your schedule and appetite."
    cta-to="/dining"
    cta-label="Explore dining"
  />
  <LazySectionTwoColumnMediaText
    image-src="/images/amenities_facilities_01.png"
    image-alt="Rooftop swimming pool at the hotel"
    overline="Amenities & Facilities"
    title="Everything You'll Need Here"
    description=""
    cta-to="/amenities"
    cta-label="View all"
  >
    <template #details>
      <ul class="grid grid-cols-2 gap-x-6 gap-y-4" role="list" aria-label="Amenities and facilities highlights">
        <li
          v-for="(item, index) in homeAmenitiesItems"
          :key="`${item.label}-${index}`"
          class="inline-flex items-center gap-2 text-body text-text"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="size-5 object-contain"
            width="20"
            height="20"
            loading="lazy"
            decoding="async"
          />
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </template>
  </LazySectionTwoColumnMediaText>
  <LazySectionRoomsSuites />
  <LazySectionThingsToDo />
  <LazySectionHotelPolicies />
  <LazySectionFaq
    overline="Frequently Asked Questions"
    title="Answers to common questions about your stay"
    :items="homeFaqItems"
  />
</template>
