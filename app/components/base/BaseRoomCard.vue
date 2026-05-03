<script lang="ts">
export type { RoomCardPriceCurrency } from "./room-card-price-currencies";
export { ROOM_CARD_PRICE_CURRENCIES } from "./room-card-price-currencies";
</script>

<script setup lang="ts">
export type RoomCardDetail = {
  label: string;
  /** PrimeIcons class (e.g. pi pi-users); omit when using `iconSrc`. */
  icon?: string;
  /** Design-system SVG under `public/icons/samples/` (see design-system/icon-samples.json). */
  iconSrc?: string;
};

export type RoomCardAmenityIcon = {
  src: string;
  alt: string;
  /** Visible label; defaults to `alt` when set. */
  label?: string;
  /** Optional supporting line (e.g. icon grids); not shown on compact room cards. */
  subtitle?: string;
};

export type RoomCardAmenityLabelVariant = "caption" | "inline" | "tooltip";

const CURRENCY_ICON = "/icons/samples/currency.svg";

withDefaults(
  defineProps<{
    title: string;
    description: string;
    /** Indicative nightly band, formatted for the listing currency (parent owns conversion). */
    priceBandLabel?: string;
    imageSrc: string;
    imageAlt: string;
    details: RoomCardDetail[];
    amenityIcons?: RoomCardAmenityIcon[];
    /** How amenity text is shown beside icons. */
    amenityLabelVariant?: RoomCardAmenityLabelVariant;
  }>(),
  {
    priceBandLabel: undefined,
    amenityIcons: () => [],
    amenityLabelVariant: "caption",
  },
);

function amenityLabel(item: RoomCardAmenityIcon) {
  return item.label ?? item.alt;
}
</script>

<template>
  <article
    class="motion-card-hover flex flex-col overflow-hidden rounded-2xl border border-border bg-surface md:flex-row md:items-stretch"
  >
    <div class="relative aspect-photo w-full shrink-0 md:w-3/5 md:self-start">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="absolute inset-0 size-full object-cover"
        width="800"
        height="560"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div
      class="flex min-h-0 min-w-0 flex-1 flex-col gap-4 p-6 md:w-2/5 md:flex-none md:gap-5 md:p-8"
    >
      <h3 class="text-h5 font-semibold leading-snug text-text">
        {{ title }}
      </h3>
      <p
        class="text-body leading-snug text-muted line-clamp-3"
        :title="description"
      >
        {{ description }}
      </p>
      <ul class="flex flex-col gap-4" role="list">
        <li
          v-for="(row, index) in details"
          :key="index"
          class="flex items-center gap-2 text-body-sm text-muted"
        >
          <img
            v-if="row.iconSrc"
            :src="row.iconSrc"
            alt=""
            class="icon-tint-accent size-5 shrink-0 object-contain"
            width="20"
            height="20"
            loading="lazy"
            decoding="async"
            role="presentation"
          />
          <span
            v-else-if="row.icon"
            class="shrink-0 text-lg leading-none"
            :class="row.icon"
            aria-hidden="true"
          />
          <span>{{ row.label }}</span>
        </li>
        <li
          v-if="priceBandLabel"
          class="flex items-center gap-2 text-body-sm text-muted"
        >
          <img
            :src="CURRENCY_ICON"
            alt=""
            class="icon-tint-accent size-5 shrink-0 object-contain"
            width="20"
            height="20"
            loading="lazy"
            decoding="async"
            role="presentation"
          />
          <span class="font-semibold tabular-nums">{{ priceBandLabel }}</span>
        </li>
      </ul>
      <template v-if="amenityIcons.length">
        <hr class="border-0 border-t border-border" />
        <ul
          class="flex flex-wrap gap-x-3 gap-y-4"
          role="list"
          aria-label="Room amenities"
        >
          <li
            v-for="(item, index) in amenityIcons"
            :key="index"
            class="text-muted"
            :class="{
              'flex w-18 flex-col items-center gap-2 text-center':
                amenityLabelVariant === 'caption',
              'flex max-w-44 items-center gap-2 text-left':
                amenityLabelVariant === 'inline',
              'flex flex-col items-center': amenityLabelVariant === 'tooltip',
            }"
          >
            <span
              v-if="amenityLabelVariant === 'tooltip'"
              class="relative inline-flex"
              :title="amenityLabel(item)"
            >
              <img
                :src="item.src"
                alt=""
                role="presentation"
                class="icon-tint-accent size-9 object-contain"
                width="36"
                height="36"
                loading="lazy"
                decoding="async"
              />
              <span class="sr-only">{{ amenityLabel(item) }}</span>
            </span>
            <template v-else>
              <img
                :src="item.src"
                alt=""
                role="presentation"
                class="icon-tint-accent size-9 shrink-0 object-contain"
                width="36"
                height="36"
                loading="lazy"
                decoding="async"
              />
              <span
                class="text-caption leading-tight text-muted line-clamp-2"
                :class="
                  amenityLabelVariant === 'inline' ? 'min-w-0 flex-1' : ''
                "
                >{{ amenityLabel(item) }}</span
              >
            </template>
          </li>
        </ul>
      </template>
      <div v-if="$slots.actions" class="mt-auto flex flex-wrap gap-3 pt-2">
        <slot name="actions" />
      </div>
    </div>
  </article>
</template>
