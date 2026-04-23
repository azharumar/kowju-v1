<script setup lang="ts">
const meetingsFaqItems = [
  {
    question: 'What is the capacity of the event venue?',
    answer: 'Our venues accommodate various group sizes. Please contact us with your expected attendance and preferred setup style so we can recommend the right space.',
  },
  {
    question: 'Is audio-visual equipment available?',
    answer: 'Yes, AV equipment including projectors, screens, microphones, and PA systems are available. Please inform us of your requirements when booking.',
  },
  {
    question: 'Can catering be arranged for events?',
    answer: 'Yes, we offer in-house catering services for meetings and events, from refreshment breaks to full banquet arrangements. Custom menus are available on request.',
  },
  {
    question: 'What is the setup and breakdown time for the venue?',
    answer: 'Setup and breakdown time is included in your booking window. For large setups or special arrangements, please discuss your timeline with our events team in advance.',
  },
  {
    question: 'How do I book a venue for my event?',
    answer: 'You can reach our events team by phone or email to discuss your requirements, check availability, and confirm a booking. We recommend booking as early as possible for large events.',
  },
]

const meetingsGalleryImages = [
  { src: "/images/events_meetings_01.png", alt: "Events and meetings venue overview" },
  { src: "/images/events_meetings_02.png", alt: "Meeting hall interior setup" },
  { src: "/images/events_meetings_03.png", alt: "Events venue stage and seating" },
  { src: "/images/events_meetings_04.png", alt: "Corporate meeting arrangement" },
  { src: "/images/events_meetings_05.png", alt: "Banquet-style event setup" },
  { src: "/images/events_meetings_06_mehmaan_hall.png", alt: "Mehmaan Hall event space" },
  { src: "/images/events_meetings_07_cta_image.png", alt: "Featured meetings and events image" },
]
const heroImage = meetingsGalleryImages[0]

useSeoPage({
  title: 'Meetings & Events',
  description:
    'Flexible venues and reliable service for business gatherings and celebrations.',
  path: '/meetings-events',
  image: heroImage?.src ?? '/images/events_meetings_01.png',
  imageAlt: heroImage?.alt ?? 'Meetings and events space at the hotel',
})
</script>

<template>
  <div>
    <SectionPageHero
      title="Meetings & Events"
      lead="Flexible venues and dependable service for business gatherings and celebrations."
      :image-src="heroImage?.src ?? '/images/events_meetings_01.png'"
      :image-alt="heroImage?.alt ?? 'Meetings and events space at the hotel'"
    />
    <SectionRoomGallery
      :images="meetingsGalleryImages"
    />
    <SectionFaq
      overline="Frequently Asked Questions"
    title="Common questions about our meeting and event spaces"
    :items="meetingsFaqItems"
    />
    <SectionExploreSite exclude="venues" />
  </div>
</template>
