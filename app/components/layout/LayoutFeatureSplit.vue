<script setup lang="ts">
export type FeatureSplitMedia = {
  url: string
  alt: string
  width?: number
  height?: number
}

export type FeatureSplitCtaVariant = 'link' | 'text' | 'outlined' | 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    imagePosition?: 'left' | 'right'
    image: FeatureSplitMedia
    overline: string
    title: string
    body: string
    ctaLabel: string
    ctaHref?: string
    /** Section title level. Default 2 — use h2 for standalone sections (SEO / outline). */
    headingLevel?: 2 | 3 | 4
    /** Maps to PrimeVue Button: link (default), text, outlined, primary, secondary. */
    ctaVariant?: FeatureSplitCtaVariant
  }>(),
  {
    imagePosition: 'left',
    ctaHref: '#',
    headingLevel: 2,
    ctaVariant: 'link',
  },
)

const headingTag = computed(() => {
  const map = { 2: 'h2', 3: 'h3', 4: 'h4' } as const
  return map[props.headingLevel]
})

const titleSizeClass = computed(() => {
  const map = {
    2: 'text-h2',
    3: 'text-h3',
    4: 'text-h4',
  } as const
  return map[props.headingLevel]
})

const ctaButtonBindings = computed(() => {
  const v = props.ctaVariant
  if (v === 'link') return { link: true as const }
  if (v === 'text') return { text: true as const }
  if (v === 'outlined') return { outlined: true as const }
  if (v === 'secondary') return { severity: 'secondary' as const }
  return {}
})

const imageOrder = computed(() =>
  props.imagePosition === 'left'
    ? 'md:order-none'
    : 'md:order-2',
)

const textOrder = computed(() =>
  props.imagePosition === 'left'
    ? 'md:order-none'
    : 'md:order-1',
)
</script>

<template>
  <div class="bg-bg">
    <div
      class="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
    >
      <div :class="['min-w-0', imageOrder]">
        <img
          :src="image.url"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          class="aspect-photo w-full rounded-2xl object-cover"
          loading="lazy"
          decoding="async"
        >
      </div>
      <div :class="['flex min-w-0 flex-col justify-center gap-4 md:gap-5', textOrder]">
        <BaseOverline>{{ overline }}</BaseOverline>
        <component
          :is="headingTag"
          :class="[titleSizeClass, 'font-sans font-bold text-balance text-text']"
        >
          {{ title }}
        </component>
        <p class="max-w-xl text-body text-muted">
          {{ body }}
        </p>
        <div class="pt-1">
          <slot name="cta">
            <NuxtLink
              :to="ctaHref"
              custom
              v-slot="{ href, navigate }"
            >
              <BaseButton
                v-bind="ctaButtonBindings"
                as="a"
                :href="href"
                @click="navigate"
              >
                <span class="text-body font-bold uppercase tracking-label">{{ ctaLabel }} →</span>
              </BaseButton>
            </NuxtLink>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
