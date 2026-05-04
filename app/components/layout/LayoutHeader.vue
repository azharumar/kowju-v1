<template>
  <header class="site-chrome relative z-raised">
    <LayoutHeaderTopbar
      :phone-display="hotel.telephoneDisplay"
      :phone-tel="phoneTel"
      :airport-note="hotel.airportProximityNote"
      :locales="hotel.locales"
      :locale="selectedLocale"
      @update:locale="selectedLocale = $event"
    />
  </header>
  <div
    :class="[
      'motion-interactive sticky top-0 z-raised bg-gold-50/30 backdrop-blur-lg hover:bg-gold-50/80',
      { 'header-scroll-down': isScrollingDown },
    ]"
  >
    <BaseContainer>
      <div class="flex items-center justify-between gap-4 py-3 md:py-4">
        <NuxtLink
          to="/"
          class="motion-interactive flex shrink-0 items-center"
          aria-label="Kowju Airport Hotel Calicut home"
        >
          <img
            src="/kowju-airport-hotel-calicut-logo.svg"
            alt="Kowju Airport Hotel Calicut"
            class="h-10 w-auto md:h-12"
            decoding="async"
          />
        </NuxtLink>

        <nav
          aria-label="Main navigation"
          class="hidden items-center gap-6 self-stretch lg:flex"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="motion-interactive relative inline-flex items-end border-b-[2.5px] border-transparent px-0 text-body font-semibold tracking-nav text-warm-800 hover:border-gold-300/80 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60"
            active-class="!border-gold-500 !text-brand-800"
            exact-active-class="!border-gold-500 !text-brand-800"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3 md:gap-4">
          <NuxtLink to="/contact" custom v-slot="{ href, navigate }">
            <BaseButtonPrimary
              label="Book Now"
              as="a"
              :href="href"
              class="inline-flex"
              @click="navigate"
            />
          </NuxtLink>

          <div class="lg:hidden">
            <Button
              text
              rounded
              aria-label="Open navigation menu"
              :aria-controls="isMobileMenuOpen ? mobileDrawerId : undefined"
              :aria-expanded="isMobileMenuOpen"
              @click="isMobileMenuOpen = true"
            >
              <i class="pi pi-bars text-body" />
            </Button>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>

  <Drawer
    :id="mobileDrawerId"
    v-model:visible="isMobileMenuOpen"
    position="right"
    modal
    dismissable
    class="h-dvh w-screen max-w-none"
    role="dialog"
  >
    <template #header>
      <div class="site-chrome flex w-full items-start justify-between gap-3">
        <div class="flex min-w-0 items-center gap-3">
          <img
            src="/kowju-airport-hotel-calicut-logo.svg"
            alt="Kowju Airport Hotel Calicut"
            class="h-9 w-auto"
            decoding="async"
          />
          <div class="min-w-0">
            <p class="truncate text-body font-semibold text-text">
              {{ hotel.name }}
            </p>
            <p class="text-body-sm text-muted">
              {{ hotel.address.addressLocality }}
            </p>
          </div>
        </div>
        <Button
          text
          rounded
          aria-label="Close navigation menu"
          @click="isMobileMenuOpen = false"
        >
          <i class="pi pi-times text-body" />
        </Button>
      </div>
    </template>

    <div class="site-chrome flex h-full flex-col">
      <nav
        aria-label="Mobile main navigation"
        class="flex-1 space-y-2 overflow-y-auto py-2"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="`mobile-${item.to}`"
          :to="item.to"
          class="motion-interactive block rounded-md border border-transparent px-4 py-4 text-body font-semibold tracking-nav text-warm-800 hover:border-border hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60"
          active-class="!border-gold-300 !bg-gold-50 !text-brand-800"
          exact-active-class="!border-gold-300 !bg-gold-50 !text-brand-800"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div
        class="sticky bottom-0 border-t border-border bg-surface px-1 pb-1 pt-3"
      >
        <NuxtLink to="/contact" custom v-slot="{ href, navigate }">
          <BaseButtonPrimary
            label="Book Now"
            as="a"
            :href="href"
            class="w-full justify-center"
            @click="
              navigate();
              isMobileMenuOpen = false;
            "
          />
        </NuxtLink>
      </div>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const hotel = useHotel();

const selectedLocale = ref(hotel.locales[0]?.code ?? "en");

const phoneTel = computed(() => `tel:${hotel.telephone}`);
const scrollDirection = useState<"up" | "down">("scroll-direction", () => "up");
const isScrollingDown = computed(() => scrollDirection.value === "down");

const isMobileMenuOpen = ref(false);
const mobileDrawerId = "site-mobile-nav";

const navItems = [
  { label: "Rooms", to: "/rooms" },
  { label: "Offers", to: "/offers" },
  { label: "Events", to: "/meetings-events" },
  { label: "Dining", to: "/dining" },
  { label: "Amenities", to: "/amenities" },
];
</script>
