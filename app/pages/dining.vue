<script setup lang="ts">
const diningFaqItems = [
  {
    question: 'What are the restaurant opening hours?',
    answer: 'Our restaurant is open for breakfast, lunch, and dinner. Please check with the front desk for the current daily timings.',
  },
  {
    question: 'Is in-room dining available?',
    answer: 'Yes, in-room dining is available for guests. Please refer to the in-room dining menu or call the front desk to place an order.',
  },
  {
    question: 'Can dietary requirements be accommodated?',
    answer: 'Yes, we cater to a range of dietary needs including vegetarian, vegan, and gluten-free options. Please inform us of your requirements when ordering or at the time of booking.',
  },
  {
    question: 'Do I need to make a reservation for the restaurant?',
    answer: 'Reservations are recommended during peak hours. Walk-ins are welcome subject to availability. Contact the front desk to make a reservation.',
  },
  {
    question: 'Is breakfast included with the room?',
    answer: 'Breakfast inclusion depends on your booking package. Please check your booking confirmation or contact us for details.',
  },
]

const diningGalleryImages = [
  { src: "/images/dining_experience_01.png", alt: "Dining space overview" },
  { src: "/images/dining_experience_02.png", alt: "Restaurant seating area" },
  {
    src: "/images/dining_experience_03.png",
    alt: "Dining interior with ambient lighting",
  },
  { src: "/images/dining_experience_04.png", alt: "Casual dining table setup" },
  { src: "/images/dining_experience_05.png", alt: "Buffet and serving area" },
  { src: "/images/dining_experience_06_in_room_dining.png", alt: "In-room dining setup" },
  { src: "/images/dining_experience_07_cta_image.png", alt: "Featured dining service image" },
]
const heroImage = diningGalleryImages[0]

useSeoPage({
  title: 'Dining',
  description:
    'Fresh flavors and all-day options from quick bites to relaxed dining experiences.',
  path: '/dining',
  image: heroImage?.src ?? '/images/dining_experience_01.png',
  imageAlt: heroImage?.alt ?? 'Dining experience at the hotel',
})
</script>

<template>
  <div>
    <SectionPageHero
      title="Dining"
      lead="Fresh flavors and all-day options, from quick bites to relaxed meals."
      :image-src="heroImage?.src ?? '/images/dining_experience_01.png'"
      :image-alt="heroImage?.alt ?? 'Dining experience at the hotel'"
    />
    <SectionRoomGallery
      :images="diningGalleryImages"
    />
    <SectionFaq
      overline="Frequently Asked Questions"
    title="Common questions about dining at the hotel"
    :items="diningFaqItems"
    />
    <SectionExploreSite exclude="dining" />
  </div>
</template>
