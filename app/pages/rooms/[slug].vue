<script setup lang="ts">
import SectionBookDirectBar from "~/components/section/SectionBookDirectBar.vue";
import SectionReviewBarTextOnly from "~/components/section/SectionReviewBarTextOnly.vue";
import { getAdjacentRoomsBySlug, getRoomBySlug } from "~/data/rooms";

const route = useRoute();
const raw = route.params.slug;
const slug = typeof raw === "string" ? raw : (raw?.[0] ?? "");
const hotel = useHotel();

const room = getRoomBySlug(slug);
if (!room) {
  throw createError({ statusCode: 404, statusMessage: "Room not found" });
}
const adjacentRooms = getAdjacentRoomsBySlug(slug);
if (!adjacentRooms) {
  throw createError({
    statusCode: 404,
    statusMessage: "Adjacent rooms not found",
  });
}

useSeoPage({
  title: room.title,
  description: room.description,
  path: `/rooms/${room.slug}`,
  image: room.imageSrc,
  imageAlt: room.imageAlt,
});

const roomUrl = new URL(`/rooms/${room.slug}`, hotel.url).toString();
useHead({
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HotelRoom",
        name: room.title,
        description: room.description,
        url: roomUrl,
        image: new URL(room.imageSrc, hotel.url).toString(),
        containedInPlace: {
          "@type": "Hotel",
          name: hotel.name,
          url: hotel.url,
        },
      }),
    },
  ],
});
</script>

<template>
  <div>
    <SectionPageHero
      :title="room.title"
      :lead="room.description"
      :image-src="room.imageSrc"
      :image-alt="room.imageAlt"
    />
    <SectionBookDirectBar />
    <SectionReviewBarTextOnly variant="dark" />
    <LazySectionRoomAbout
      v-if="room.about"
      :room-title="room.title"
      :room-slug="room.slug"
      :about="room.about"
    />
    <LazySectionRoomGallery :images="room.gallery" />
    <LazySectionRoomOffers />
    <LazySectionRoomAdjacent
      :previous-room="adjacentRooms.previous"
      :next-room="adjacentRooms.next"
    />
  </div>
</template>
