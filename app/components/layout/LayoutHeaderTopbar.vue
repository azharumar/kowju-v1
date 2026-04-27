<template>
  <div
    class="bg-brand-900 text-body-sm text-text-inverse font-semibold tracking-label"
  >
    <BaseContainer>
      <div
        class="flex flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
          <div class="relative flex shrink-0 items-center">
            <label class="sr-only" for="header-locale">{{ localeLabel }}</label>
            <select
              id="header-locale"
              class="motion-interactive cursor-pointer appearance-none bg-transparent py-1 pl-0 pr-6 uppercase tracking-label text-text-inverse focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              :value="locale"
              @change="
                $emit(
                  'update:locale',
                  ($event.target as HTMLSelectElement).value,
                )
              "
            >
              <option
                v-for="opt in locales"
                :key="opt.code"
                class="bg-brand-900 text-text"
                :value="opt.code"
              >
                {{ opt.shortLabel ?? opt.label }}
              </option>
            </select>
            <i
              class="pi pi-angle-down pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-body-sm opacity-90"
              aria-hidden="true"
            />
          </div>
          <span
            class="hidden h-3 w-px shrink-0 bg-white/35 sm:block"
            aria-hidden="true"
          />
          <NuxtLink
            class="motion-interactive flex min-w-0 items-center gap-2 underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            :to="phoneTel"
            external
          >
            <i class="pi pi-phone shrink-0 text-body-sm" />
            <span class="truncate">{{ phoneDisplay }}</span>
          </NuxtLink>
        </div>
        <div
          class="hidden items-start gap-2 sm:flex sm:max-w-md sm:items-center sm:justify-end"
        >
          <i
            class="pi pi-map-marker mt-1 shrink-0 text-body-sm sm:mt-0"
            aria-hidden="true"
          />
          <p class="text-body-sm text-left text-text-inverse sm:text-right">
            {{ airportNote }}
          </p>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import type { HotelLocaleOption } from "~/types/hotel";

withDefaults(
  defineProps<{
    phoneDisplay: string;
    phoneTel: string;
    airportNote: string;
    locales: HotelLocaleOption[];
    locale: string;
    localeLabel?: string;
  }>(),
  { localeLabel: "Language" },
);

defineEmits<{
  "update:locale": [code: string];
}>();
</script>
