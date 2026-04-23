<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
  }
}>()

const is404 = computed(() => props.error.statusCode === 404)

async function goHome() {
  await clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen">
    <LayoutHeader />

    <main>
      <BaseContainer>
        <BaseSection rhythm="default">
          <BaseStack
            size="default"
            class="min-h-section-hero items-center justify-center text-center"
          >
            <p
              class="font-sans font-bold leading-none select-none text-gold-200/60"
              style="font-size: clamp(6rem, 20vw, 16rem); letter-spacing: -0.04em"
            >
              {{ error.statusCode }}
            </p>

            <BasePageHeader
              :title="is404 ? 'Page not found' : 'Something went wrong'"
              :lead="
                is404
                  ? 'The page you\'re looking for doesn\'t exist or has been moved.'
                  : 'An unexpected error occurred. Please try again later.'
              "
              align="center"
            />

            <BaseButtonPrimary
              label="Back to home"
              @click="goHome"
            />
          </BaseStack>
        </BaseSection>
      </BaseContainer>

      <SectionExploreSite />
    </main>
  </div>
</template>
