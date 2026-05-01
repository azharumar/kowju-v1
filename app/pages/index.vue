<script setup lang="ts">
import SectionBookDirectBar from "~/components/section/SectionBookDirectBar.vue";
import SectionReviewBarTextOnly from "~/components/section/SectionReviewBarTextOnly.vue";

const homeFaqItems = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is from 2:00 PM and check-out is by 12:00 noon. Early check-in and late check-out are subject to availability — please contact us in advance.",
  },
  {
    question: "How far is the hotel from Calicut International Airport?",
    answer:
      "We are located just minutes from Calicut International Airport (CCJ), making us the most convenient option for travellers flying in or out of Kozhikode.",
  },
  {
    question: "Is parking available at the hotel?",
    answer: "Yes, complimentary parking is available on-site for all guests.",
  },
  {
    question: "Is Wi-Fi available?",
    answer:
      "Yes, high-speed Wi-Fi is available throughout the hotel and in all guest rooms, complimentary for all guests.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "We do not currently accommodate pets. Please contact us if you have specific requirements and we will do our best to assist.",
  },
];

const homeAboutParagraphs = [
  "Just 10 minutes from Calicut International Airport, our hotel is built for families, business travelers, and quick stopovers looking for a quiet, reliable place to stay. Practical amenities and attentive service keep everything easy, from late arrivals to early departures.",
  "Our rooms are set up for comfort and convenience, with comfortable beds, smart TVs, and advanced air purification systems. Each space offers complimentary high speed Wi-Fi, elegant bathrooms, and a work desk supporting both focused work and proper rest.",
];

const homeAboutHighlights = [
  {
    src: "/icons/samples/clock.svg",
    alt: "10 minutes from the airport",
    label: "10 minutes from the airport",
  },
  {
    src: "/icons/samples/bathtub.svg",
    alt: "Gym, swimming pool and kids games room",
    label: "Gym, swimming pool and kids' games room",
  },
  {
    src: "/icons/samples/shuttle.svg",
    alt: "Complimentary airport shuttle",
    label: "Complimentary airport shuttle",
  },
  {
    src: "/icons/samples/air-purifier.svg",
    alt: "Smart in-room amenities",
    label: "Smart in-room amenities",
  },
];

const homeIncludedSpacesItems = [
  {
    label: "Rooftop pool",
    iconSrc: "/icons/samples/swimming-pool.svg",
    iconAlt: "Pool",
    overline: "Rooftop pool",
    title: "Rooftop swimming pool",
    description:
      "A glass-walled rooftop pool with a separate kids' pool, shaded loungers and rooftop views over Kondotty - open to all guests, free of charge.",
    details: ["Adult & kids' pool", "Sun loungers", "Towel service"],
    imageSrc: "/images/amenities_facilities_01.png",
    imageAlt: "Rooftop swimming pool with deck chairs",
    ctaTo: "/amenities",
    ctaLabel: "View pool",
  },
  {
    label: "Skipol diner",
    iconSrc: "/icons/samples/dining-room.svg",
    iconAlt: "Dining",
    overline: "Skipol diner",
    title: "Skipol Diner",
    description:
      "Forty-seat lobby restaurant serving breakfast buffet, regional Kerala plates and a la carte through the day. 24/7 in-room dining when you'd rather not move.",
    details: [
      "Breakfast buffet",
      "Kerala and continental options",
      "24/7 room dining",
    ],
    imageSrc: "/images/dining_experience_01.png",
    imageAlt: "Skipol Diner dining area with table seating",
    ctaTo: "/dining",
    ctaLabel: "Explore dining",
  },
  {
    label: "Kids' games room",
    iconSrc: "/icons/samples/games-room.svg",
    iconAlt: "Games room",
    overline: "Kids' games room",
    title: "Kids' games room",
    description:
      "An interactive games room to keep younger guests occupied - perfect for layovers, late check-outs, or a quiet hour while parents wind down.",
    details: [
      "Indoor games setup",
      "Family-friendly area",
      "All-day guest access",
    ],
    imageSrc: "/images/amenities_facilities_02.png",
    imageAlt: "Kids' games room at the hotel",
    ctaTo: "/amenities",
    ctaLabel: "About amenities",
  },
  {
    label: "Gym",
    iconSrc: "/icons/samples/fitness-center.svg",
    iconAlt: "Gym",
    overline: "Gym",
    title: "Modern fitness studio",
    description:
      "A compact gym with essential cardio and strength equipment so guests can keep routines consistent during short stays and long layovers.",
    details: [
      "Cardio and free-weight equipment",
      "Air-conditioned indoor setup",
      "Complimentary for guests",
    ],
    imageSrc: "/images/meeting_event_01.png",
    imageAlt: "Hotel gym equipment area",
    ctaTo: "/amenities",
    ctaLabel: "View gym",
  },
];

const homeGuestReviews = [
  {
    title: "A proper rest before our flight",
    review:
      "We had a long layover at CCJ and Kowju turned what could have been a tiring evening into a proper break. Dinner at Skipol was warm and the room was spotless.",
    reviewerName: "Anjali R.",
    reviewerMeta: "Bengaluru · Family stay",
    rating: 5,
  },
  {
    title: "Smooth check-in, quiet room",
    review:
      "Stayed two nights for work. Reception had me in the room in minutes, the boardroom was set up as requested, and the room service was fast throughout.",
    reviewerName: "Mohammed F.",
    reviewerMeta: "Dubai · Business",
    rating: 5,
  },
  {
    title: "Beautiful event setup",
    review:
      "We attended a reception in Mehmaan Hall. The team handled everything from floor plan to dietary requests, and the elderly guests could access the hall easily.",
    reviewerName: "Priya & Sajan",
    reviewerMeta: "Kochi · Wedding guests",
    rating: 5,
  },
  {
    title: "Perfect for an overnight transit",
    review:
      "Ten minutes from the airport made our late arrival stress-free. The shuttle timing was reliable and breakfast was ready before our early departure.",
    reviewerName: "Nidhin K.",
    reviewerMeta: "Doha · Transit stay",
    rating: 5,
  },
  {
    title: "Great for kids during layover",
    review:
      "The games room and rooftop pool kept our children busy for hours. Staff were patient and helped us with an early dinner for the family.",
    reviewerName: "Farah M.",
    reviewerMeta: "Abu Dhabi · Family",
    rating: 5,
  },
  {
    title: "Comfortable work trip base",
    review:
      "Wi-Fi was stable for calls, the desk setup worked well, and housekeeping kept the room fresh every day. Ideal for a short business run.",
    reviewerName: "Rahul P.",
    reviewerMeta: "Mumbai · Business",
    rating: 5,
  },
  {
    title: "Helpful staff at every step",
    review:
      "From luggage support to arranging local transport, the team stayed responsive. Service felt consistent across reception, dining and housekeeping.",
    reviewerName: "Shameema T.",
    reviewerMeta: "Malappuram · Leisure",
    rating: 5,
  },
  {
    title: "Clean rooms and calm nights",
    review:
      "Despite being close to the airport, our room stayed quiet through the night. Linen quality and bathroom upkeep were excellent.",
    reviewerName: "Arun V.",
    reviewerMeta: "Chennai · Couple stay",
    rating: 5,
  },
  {
    title: "Reliable airport hotel option",
    review:
      "This was our second stay and the experience remained consistent: quick check-in, prompt room dining, and courteous staff throughout.",
    reviewerName: "Safa N.",
    reviewerMeta: "Muscat · Return guest",
    rating: 5,
  },
  {
    title: "Good food and easy access",
    review:
      "Skipol Diner had solid Kerala options and the property was easy to navigate for elders in our group. Parking access was smooth too.",
    reviewerName: "Joseph M.",
    reviewerMeta: "Thrissur · Family",
    rating: 5,
  },
  {
    title: "Efficient meeting support",
    review:
      "Our half-day workshop ran without delays. AV setup was ready in advance and the tea service intervals were exactly on schedule.",
    reviewerName: "Noora A.",
    reviewerMeta: "Riyadh · Corporate event",
    rating: 5,
  },
  {
    title: "Value and comfort together",
    review:
      "For an airport-side property, the rooms were spacious and thoughtfully arranged. We checked out feeling rested and ready for the onward journey.",
    reviewerName: "Biju S.",
    reviewerMeta: "Kozhikode · Weekend stay",
    rating: 5,
  },
];

useSeoPage({
  title: "Convenient stay near Calicut Airport",
  description:
    "Comfortable rooms, practical amenities, and easy airport access at Kowju Airport Hotel Calicut.",
  path: "/",
  image: "/images/rooms_suites_01.png",
  imageAlt: "Convenient stay near Calicut Airport",
});
</script>

<template>
  <SectionPageHero
    title="Convineint stay near Calicut Airport."
    image-src="/images/home_page_01.png"
    image-alt="Convineint stay near Calicut Airport"
  />
  <SectionBookDirectBar />
  <SectionReviewBarTextOnly variant="dark" />
  <LazySectionTwoColumnFeatureList
    image-src="/images/home_page_02_about_us.png"
    image-alt="Hotel lounge seating area with warm lighting"
    overline="About us"
    title="Built to support business travel and family stays"
    image-aspect="portrait"
    :paragraphs="homeAboutParagraphs"
    :features="homeAboutHighlights"
  />
  <LazySectionRoomsSuites />
  <LazySectionRoomsSuitesOverflow />
  <LazySectionIncludedSpaces
    title="On-property amenties exclusive for guests"
    :items="homeIncludedSpacesItems"
  />
  <LazySectionGuestReviewsCarousel :reviews="homeGuestReviews" />
  <LazySectionHotelPolicies />
  <LazySectionThingsToDo />
  <LazySectionMeetingsEventsPromo />
  <LazySectionFaq
    overline="Frequently Asked Questions"
    title="Answers to common questions about your stay"
    :items="homeFaqItems"
  />
  <LazySectionExploreSite />
</template>
