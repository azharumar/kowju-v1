<template>
  <div class="bg-brand-900">
    <BaseContainer>
      <BaseSection rhythm="compact" :reveal="false">
        <div class="grid gap-6 md:grid-cols-2 md:gap-8">
          <div class="overflow-hidden rounded-lg border border-text-inverse/10">
            <img
              src="/images/home_page_07_events_meetings.png"
              alt="Banquet hall setup for meetings and events"
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              width="1200"
              height="760"
            />
          </div>

          <div class="flex flex-col justify-center gap-5 text-text-inverse">
            <BaseSectionHeader
              overline="Host with us"
              overline-class="text-gold-300"
              dividers
            >
              <span class="text-text-inverse">
                Meetings, banquets and events in Kondotty
              </span>
              <template #lead>
                <span class="text-body text-text-inverse/85">
                  Two purpose-built event spaces, full A/V support and a planning
                  team on the ground, minutes from Calicut International Airport.
                </span>
              </template>
            </BaseSectionHeader>

            <div
              class="grid grid-cols-3 gap-4 border-y border-text-inverse/15 py-4 md:gap-6"
              aria-label="Meetings and events highlights"
            >
              <div class="flex flex-col gap-0.5">
                <span class="text-h3 text-gold-300">200</span>
                <span class="text-caption uppercase tracking-overline text-text-inverse/70">
                  Guest Capacity
                </span>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-h3 text-gold-300">2</span>
                <span class="text-caption uppercase tracking-overline text-text-inverse/70">
                  Event Spaces
                </span>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-h3 text-gold-300">10 min</span>
                <span class="text-caption uppercase tracking-overline text-text-inverse/70">
                  From CCJ Airport
                </span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4">
              <BaseLinkText
                to="/meetings-events"
                label="View event spaces"
                tone="inverse"
              />
              <NuxtLink to="/contact" custom v-slot="{ href, navigate }">
                <BaseButtonOnBrandPrimary
                  label="Request a proposal"
                  as="a"
                  :href="href"
                  @click="navigate"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </BaseSection>
    </BaseContainer>
  </div>
</template>
