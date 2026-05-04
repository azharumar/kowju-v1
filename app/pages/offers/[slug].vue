<script setup lang="ts">
import { getOfferBySlug } from "~/data/offers"

const route = useRoute()
const raw = route.params.slug
const slug = typeof raw === "string" ? raw : raw?.[0] ?? ""
const hotel = useHotel()

const offer = getOfferBySlug(slug)
if (!offer) {
  throw createError({ statusCode: 404, statusMessage: "Offer not found" })
}

useSeoPage({
  title: offer.title,
  description: offer.description,
  path: `/offers/${offer.slug}`,
  image: offer.imageSrc,
  imageAlt: offer.imageAlt,
})

const offerUrl = new URL(`/offers/${offer.slug}`, hotel.url).toString()
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Offer",
        name: offer.title,
        description: offer.description,
        url: offerUrl,
        image: new URL(offer.imageSrc, hotel.url).toString(),
        seller: {
          "@type": "Hotel",
          name: hotel.name,
          url: hotel.url,
        },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <SectionPageHero
      :title="offer.title"
      :lead="offer.description"
      :image-src="offer.imageSrc"
      :image-alt="offer.imageAlt"
    />
  </div>
</template>
