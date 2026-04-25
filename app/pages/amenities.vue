<script setup lang="ts">
const amenitiesFaqItems = [
  {
    question: 'Is Wi-Fi available throughout the hotel?',
    answer: 'Yes, complimentary high-speed Wi-Fi is available in all guest rooms and throughout the hotel, including common areas.',
  },
  {
    question: 'Is there a gym or fitness facility?',
    answer: 'Please contact the front desk for information on available fitness facilities during your stay.',
  },
  {
    question: 'Is airport transfer available?',
    answer: 'We can arrange airport transfers on request. Please contact us in advance with your flight details so we can coordinate pick-up or drop-off.',
  },
  {
    question: 'Is there 24-hour front desk service?',
    answer: 'Yes, our front desk is available 24 hours a day to assist guests with any requirements during their stay.',
  },
  {
    question: 'Are laundry services available?',
    answer: 'Yes, laundry and dry-cleaning services are available. Please check with the front desk for timings and charges.',
  },
]

useSeoPage({
  title: 'Amenities',
  description: 'Thoughtful facilities and essentials designed for a comfortable stay near Calicut airport.',
  path: '/amenities',
  image: '/images/amenities_facilities_01.png',
  imageAlt: 'Hotel amenities and facilities',
})
</script>

<template>
  <div>
    <SectionPageHero
      title="Amenities"
      lead="Thoughtful facilities and essentials designed for a comfortable stay."
      image-src="/images/amenities_facilities_01.png"
      image-alt="Hotel amenities and facilities"
    />
    <LazySectionFaq
      overline="Frequently Asked Questions"
    title="Common questions about our facilities"
    :items="amenitiesFaqItems"
    />
    <LazySectionExploreSite />
  </div>
</template>
