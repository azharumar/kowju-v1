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
const meetingFacilityItems = [
  {
    src: '/icons/samples/tv.svg',
    alt: 'LED TV display',
    label: 'LED TV',
    subtitle: 'Presentations, signage, and playback on demand',
  },
  {
    src: '/icons/samples/speaker.svg',
    alt: 'Audio visual setup',
    label: 'AV equipment',
    subtitle: 'Clear sound for speeches, panels, and entertainment',
  },
  {
    src: '/icons/samples/wifi.svg',
    alt: 'High-speed Wi-Fi access',
    label: 'Wi-Fi',
    subtitle: 'Reliable connectivity for delegates and streaming',
  },
  {
    src: '/icons/samples/utensils-dining.svg',
    alt: 'Catering options',
    label: 'Catering',
    subtitle: 'Menus tailored from coffee breaks to banquets',
  },
  {
    src: '/icons/samples/parking.svg',
    alt: 'Parking area',
    label: 'Parking',
    subtitle: 'Dedicated spaces for hosts, vendors, and guests',
  },
  {
    src: '/icons/samples/chair.svg',
    alt: 'Flexible event seating',
    label: 'Seating',
    subtitle: 'Layouts matched to theatre, banquet, or boardroom style',
  },
  {
    src: '/icons/samples/electricity.svg',
    alt: 'Power backup and climate control',
    label: 'Power & climate',
    subtitle: 'Backup power and comfortable room conditions throughout',
  },
  {
    src: '/icons/samples/conference.svg',
    alt: 'On-site guest accommodation',
    label: 'Guest rooms',
    subtitle: 'Stay on site before or after your programme',
  },
]

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
    <LazySectionTwoColumnMediaText
      image-src="/images/events_meetings_06_mehmaan_hall.png"
      image-alt="Mehmaan Hall seating arrangement for events"
      overline="Mehmaan Hall"
      title="Where Every Event Shines"
      description="Mehmaan Hall is designed to host memorable occasions. Ideal for weddings, conventions, banquets, and special gatherings, the space offers a seamless, spacious setting for every event."
    >
      <template #details>
        <p class="inline-flex items-center gap-2 font-semibold text-text">
          <span class="pi pi-users text-body" aria-hidden="true" />
          200 Guests
        </p>
        <p class="text-body text-muted">Ideal for : Conferences , Weddings , Receptions</p>
        <p class="text-body text-muted">Note : Pre function area available</p>
      </template>
    </LazySectionTwoColumnMediaText>
    <LazySectionTwoColumnMediaText
      reversed
      image-src="/images/events_meetings_03.png"
      image-alt="Executive board room meeting setup"
      overline="Executive Board Rooms"
      title="Private Space for Meetings"
      description="Our Executive Board Rooms are designed for focused discussions and high level decision making. Ideal for leadership meetings, strategy sessions, and confidential conversations, the boardrooms support clarity, collaboration, and productive outcomes."
    >
      <template #details>
        <p class="inline-flex items-center gap-2 font-semibold text-text">
          <span class="pi pi-users text-body" aria-hidden="true" />
          15 Guests
        </p>
        <p class="text-body text-muted">Ideal for : Board meetings , Strategy sessions</p>
        <p class="text-body text-muted">Private &amp; business focused</p>
      </template>
    </LazySectionTwoColumnMediaText>
    <BaseIconGrid
      title="Amenities for meetings and events"
      :heading-level="3"
      :items="meetingFacilityItems"
    />
    <LazySectionRoomGallery
      :images="meetingsGalleryImages"
    />
    <LazySectionFaq
      overline="Frequently Asked Questions"
    title="Common questions about our meeting and event spaces"
    :items="meetingsFaqItems"
    />
  </div>
</template>
