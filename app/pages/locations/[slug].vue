<script setup lang="ts">
import { getLocationBySlug, mapsSearchUrl } from "~/data/locations";

const route = useRoute();
const raw = route.params.slug;
const slug = typeof raw === "string" ? raw : (raw?.[0] ?? "");

const location = getLocationBySlug(slug);
if (!location) {
  throw createError({ statusCode: 404, statusMessage: "Location not found" });
}

const hotel = useHotel();

useSeoPage({
  title: location.pageTitle,
  description: location.pageDescription,
  path: `/locations/${location.slug}`,
});

const mapsHref = mapsSearchUrl(location.mapsQuery);
</script>

<template>
  <div>
    <section class="bg-surface-muted">
      <BaseContainer>
        <BaseSection rhythm="default" stack="loose" :reveal="false">
          <nav aria-label="Breadcrumb" class="text-body-sm text-muted">
            <NuxtLink class="text-brand-600 hover:underline" to="/">Home</NuxtLink>
            <span aria-hidden="true" class="px-1">/</span>
            <span class="text-text">{{ location.pageTitle }}</span>
          </nav>
          <BasePageHeader
            :title="location.pageTitle"
            :lead="location.intro"
            heading-level="1"
          />
          <div class="flex flex-wrap gap-4">
            <BaseButtonPrimary
              label="Open in Maps"
              as="a"
              :href="mapsHref"
              target="_blank"
              rel="noopener noreferrer"
              class="motion-interactive"
            />
            <NuxtLink to="/contact" custom v-slot="{ href, navigate }">
              <BaseButtonOutlined
                label="Contact the desk"
                as="a"
                :href="href"
                class="motion-interactive"
                @click="navigate"
              />
            </NuxtLink>
          </div>
          <p class="max-w-3xl text-body text-text">
            {{ location.body }}
          </p>
          <p class="text-body-sm text-muted">
            {{ hotel.name }} · {{ hotel.address.addressLocality }},
            {{ hotel.address.addressRegion }}
          </p>
        </BaseSection>
      </BaseContainer>
    </section>
  </div>
</template>
