<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string
    class?: string
  }>(),
  {
    tag: 'div',
  },
)

const root = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const shouldRender = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shouldRender.value = true
    isVisible.value = true
    return
  }

  if (!root.value) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        shouldRender.value = true
        requestAnimationFrame(() => {
          isVisible.value = true
        })
        observer?.disconnect()
        observer = null
      }
    },
    {
      threshold: 0.24,
      rootMargin: '0px 0px -5% 0px',
    },
  )

  observer.observe(root.value)
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <component
    :is="props.tag"
    ref="root"
    :class="['motion-scroll-reveal', { 'is-visible': isVisible }, props.class]"
  >
    <slot :is-visible="isVisible" :should-render="shouldRender" />
  </component>
</template>
