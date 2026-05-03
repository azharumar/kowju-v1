<script setup lang="ts">
import { footerJourneysContent } from "~/data/footer-journeys";
import { footerNearbyLocations, mapsSearchUrl } from "~/data/locations";

const hotel = useHotel();

const hotelMapsHref = computed(() => {
  const fromSameAs = hotel.sameAs.find((u) =>
    /maps\.(app\.goo\.gl|google\.)/i.test(u),
  );
  if (fromSameAs) return fromSameAs;
  const q = `${hotel.name} ${hotel.address.streetAddress} ${hotel.address.addressLocality} ${hotel.address.postalCode}`;
  return mapsSearchUrl(q);
});

const locationLine = computed(() => {
  const locality = hotel.address.addressLocality.toUpperCase();
  const lat = hotel.geo.latitude.toFixed(4);
  const lng = hotel.geo.longitude.toFixed(4);
  return `${locality} · ${lat} °N, ${lng} °E`;
});

const pinDisplay = computed(() => {
  const pc = hotel.address.postalCode.replace(/\s/g, "");
  if (pc.length === 6) return `${pc.slice(0, 3)} ${pc.slice(3)}`;
  return pc;
});

const boxTag = computed(
  () =>
    `From Kowju · ${hotel.address.addressLocality}`,
);

const stampAlt = computed(
  () =>
    `Postal stamp: ${footerJourneysContent.stampTop}. PIN ${pinDisplay.value}. ${footerJourneysContent.stampBottom}.`,
);
</script>

<template>
  <section
    id="footer-location"
    class="border-b border-warm-200 bg-gold-50"
    aria-labelledby="footer-location-heading"
  >
    <BaseContainer class="py-12 md:py-16">
      <div class="flex flex-col gap-8 md:gap-10">
        <header
          class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8"
        >
          <div class="flex min-w-0 flex-1 flex-col gap-4">
            <BaseOverline dividers>{{ footerJourneysContent.overline }}</BaseOverline>
            <h2
              id="footer-location-heading"
              class="max-w-4xl text-h2 font-medium text-text md:text-h1 font-serif"
            >
              {{ footerJourneysContent.headline }}
            </h2>
          </div>
          <p
            class="shrink-0 text-caption font-semibold uppercase tracking-overline text-gold-600 md:pt-1 md:text-right"
          >
            {{ locationLine }}
          </p>
        </header>

        <div
          class="rounded-2xl border-2 border-dashed border-warm-300 p-6 md:p-10"
        >
          <div
            class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
          >
            <div class="flex min-w-0 flex-1 flex-col gap-6">
              <p
                class="inline-flex w-fit rounded-sm bg-gold-200 px-3 py-2 text-caption font-semibold uppercase tracking-overline text-warm-800"
              >
                {{ boxTag }}
              </p>
              <p class="max-w-2xl text-body-lg text-text font-serif">
                {{ footerJourneysContent.intro }}
              </p>
              <div
                class="flex flex-wrap items-center gap-x-6 gap-y-3"
                role="group"
                aria-label="Hotel map and location guide"
              >
                <BaseButtonPrimary
                  label="Open in Maps"
                  as="a"
                  :href="hotelMapsHref"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="motion-interactive"
                />
                <BaseLinkText to="/location" label="Explore location" />
              </div>
            </div>

            <img
              src="/images/kondotty-stamp.png"
              :alt="stampAlt"
              width="240"
              height="240"
              class="mx-auto h-40 w-40 shrink-0 object-contain lg:mx-0"
              loading="lazy"
              decoding="async"
            />
          </div>

          <ul
            class="mt-10 grid list-none grid-cols-1 gap-0 border-t border-warm-200 pt-8 pl-0 sm:grid-cols-2 md:pt-10"
            role="list"
          >
            <li
              v-for="loc in footerNearbyLocations"
              :key="loc.slug"
              class="min-w-0 border-b border-warm-200 px-4 py-8 last:border-b-0 sm:border-b-0 sm:px-6 sm:py-8 sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(2n+1)]:border-r"
            >
              <article
                class="flex min-w-0 flex-col gap-3"
                :aria-labelledby="`footer-location-${loc.slug}-title`"
              >
                <h3
                  :id="`footer-location-${loc.slug}-title`"
                  class="text-h4 font-medium font-serif text-text"
                >
                  {{ loc.listTitle }}
                </h3>
                <p
                  class="text-caption font-semibold uppercase tracking-overline text-gold-600"
                >
                  {{ loc.listMeta }}
                </p>
                <p class="text-body text-muted">
                  {{ loc.listDescription }}
                </p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
