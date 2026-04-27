<script setup lang="ts">
const hotel = useHotel()
const route = useRoute()
let handleAnchorClick: ((event: MouseEvent) => void) | null = null

function scrollToRoutePosition() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const hash = route.hash

  if (hash) {
    const target = document.querySelector(hash)
    if (!(target instanceof HTMLElement)) return

    if (prefersReducedMotion || !window.__lenis) {
      target.scrollIntoView({ block: 'start' })
      return
    }

    window.__lenis.scrollTo(target, { duration: 1.2, offset: -12 })
    return
  }

  if (prefersReducedMotion || !window.__lenis) {
    window.scrollTo({ top: 0, behavior: 'auto' })
    return
  }

  window.__lenis.scrollTo(0, { duration: 1.2 })
}

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

onMounted(() => {
  handleAnchorClick = (event: MouseEvent) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const trigger = (event.target as HTMLElement | null)?.closest('a[href]')
    if (!(trigger instanceof HTMLAnchorElement)) return
    if (trigger.target && trigger.target !== '_self') return
    if (trigger.hasAttribute('download')) return

    const href = trigger.getAttribute('href')
    if (!href?.startsWith('#')) return
    if (href.length <= 1) return

    const target = document.getElementById(href.slice(1))
    if (!target) return

    event.preventDefault()
    window.__lenis?.scrollTo(target, {
      duration: 1.2,
      offset: -12,
    })
    if (target instanceof HTMLElement) target.focus({ preventScroll: true })
  }

  document.addEventListener('click', handleAnchorClick)

  requestAnimationFrame(() => {
    scrollToRoutePosition()
  })
})

watch(
  () => route.fullPath,
  () => {
    requestAnimationFrame(() => {
      scrollToRoutePosition()
    })
  },
)

onUnmounted(() => {
  if (!handleAnchorClick) return
  document.removeEventListener('click', handleAnchorClick)
})
</script>

<template>
  <div class="min-h-screen">
    <NuxtRouteAnnouncer />
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-overlay focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-body focus:text-text focus:shadow"
    >
      Skip to main content
    </a>
    <LayoutHeader />
    <main id="main" tabindex="-1">
      <NuxtPage />
    </main>
    <LayoutFooter />
    <ScrollTop />
  </div>
</template>
