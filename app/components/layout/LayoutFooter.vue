<script setup lang="ts">
const hotel = useHotel();

const footerPrimaryLinks = [
  { label: "Rooms & Suites", to: "/rooms" },
  { label: "Meetings & Events", to: "/meetings-events" },
  { label: "Dining", to: "/dining" },
  { label: "Amenities", to: "/amenities" },
];

const footerSecondaryLinks = [
  { label: "Contact", to: "/contact" },
  { label: "Hotel Policies", to: "/hotel-policies" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Sitemap", to: "/sitemap.xml" },
];

const socialLinks = [
  { label: "Instagram", to: hotel.sameAs[0], icon: "pi pi-instagram" },
  { label: "Facebook", to: hotel.sameAs[1], icon: "pi pi-facebook" },
  { label: "YouTube", to: hotel.sameAs[2], icon: "pi pi-youtube" },
  { label: "LinkedIn", to: hotel.sameAs[3], icon: "pi pi-linkedin" },
];
</script>

<template>
  <footer class="site-chrome bg-brand-800 pt-10 text-text-inverse md:pt-12">
    <BaseContainer>
      <div class="grid gap-8 md:grid-cols-3 md:gap-10">
        <div class="flex flex-col items-start gap-4">
          <img
            src="/kowju-airport-hotel-calicut-logo.svg"
            alt="Kowju Airport Hotel Calicut"
            class="h-12 w-auto self-start brightness-0 invert"
            decoding="async"
          />
          <p class="text-body text-text-inverse/90">
            Comfortable rooms, practical amenities, and seamless airport access.
          </p>
          <div class="flex flex-col gap-1 text-body">
            <a class="hover:text-gold-200" :href="`tel:${hotel.telephone}`">
              {{ hotel.telephoneDisplay }}
            </a>
            <a class="hover:text-gold-200" :href="`mailto:${hotel.email}`">
              {{ hotel.email }}
            </a>
          </div>
          <div class="flex flex-wrap gap-3 text-body">
            <NuxtLink
              v-for="item in socialLinks"
              :key="item.label"
              :to="item.to"
              external
              :aria-label="item.label"
              class="inline-flex items-center justify-center text-body text-text-inverse transition-colors hover:text-gold-200"
            >
              <i :class="[item.icon, 'text-xl']" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <p class="text-body font-semibold">Explore</p>
          <NuxtLink
            v-for="item in footerPrimaryLinks"
            :key="item.to"
            :to="item.to"
            class="text-body text-text-inverse/90 hover:text-gold-200"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-3">
          <p class="text-body font-semibold">Guest Information</p>
          <NuxtLink
            v-for="item in footerSecondaryLinks"
            :key="item.to"
            :to="item.to"
            class="text-body text-text-inverse/90 hover:text-gold-200"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="border-t border-white/10 md:col-span-3 py-3 md:py-4">
          <div
            class="flex flex-col gap-1 text-body-sm text-text-inverse/70 md:flex-row md:items-center md:justify-between"
          >
            <p>
              &copy; {{ new Date().getFullYear() }} {{ hotel.name }}. All rights
              reserved.
            </p>
            <p>Developed and maintained by Portico Webworks.</p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>
