<script setup lang="ts">
const hotel = useHotel()

useSeoMeta({
  ogSiteName: hotel.name,
  ogLocale: 'en_IN',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebSite({
    '@id': `${hotel.url}#website`,
    name: hotel.name,
    url: hotel.url,
    inLanguage: 'en-IN',
  }),
  defineOrganization({
    '@id': `${hotel.url}#organization`,
    name: hotel.name,
    legalName: hotel.legalName,
    url: hotel.url,
    telephone: hotel.telephone,
    email: hotel.email,
    logo: new URL('/kowju-airport-hotel-calicut-logo.svg', hotel.url).toString(),
    sameAs: hotel.sameAs,
  }),
  defineLocalBusiness({
    '@id': `${hotel.url}#hotel`,
    '@type': 'Hotel',
    name: hotel.name,
    url: hotel.url,
    telephone: hotel.telephone,
    email: hotel.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: hotel.address.streetAddress,
      addressLocality: hotel.address.addressLocality,
      addressRegion: hotel.address.addressRegion,
      postalCode: hotel.address.postalCode,
      addressCountry: hotel.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: hotel.geo.latitude,
      longitude: hotel.geo.longitude,
    },
  }),
])
</script>

<template>
  <div class="min-h-screen">
    <NuxtRouteAnnouncer />
    <LayoutHeader />
    <NuxtPage />
    <ScrollTop />
  </div>
</template>
