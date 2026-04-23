<script setup lang="ts">
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
        size="default"
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
  <SectionRoomsSuites />
  <SectionThingsToDo />
  <SectionFaq
    overline="Frequently Asked Questions"
    title="Answers to common questions about your stay"
    :items="homeFaqItems"
  />
</template>
