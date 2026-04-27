<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    overline?: string;
    title: string;
    paragraphs: string[];
  }>(),
  {
    overline: "About",
  },
);
</script>

<template>
  <section class="bg-surface">
    <BaseContainer>
      <BaseSection rhythm="default" stack="tight">
        <BaseGrid
          class="grid-cols-1 items-start md:grid-cols-2"
          gap="comfortable"
        >
          <BaseSectionHeader
            :overline="overline"
            :title="title"
            :heading-level="2"
          />

          <BaseStack variant="tight" class="text-muted">
            <p
              v-for="(paragraph, index) in paragraphs"
              :key="`about-paragraph-${index}`"
              class="text-body"
            >
              {{ paragraph }}
            </p>
          </BaseStack>
        </BaseGrid>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
