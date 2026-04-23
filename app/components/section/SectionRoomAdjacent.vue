<script setup lang="ts">
import type { RoomRecord } from "~/data/rooms";

defineProps<{
  previousRoom: RoomRecord;
  nextRoom: RoomRecord;
}>();
</script>

<template>
  <section class="bg-surface-100">
    <BaseContainer>
      <BaseSection rhythm="compact" stack="comfortable">
        <BaseSectionHeader
          overline="Our Rooms"
          title="Other rooms you may like"
          align="center"
          dividers
        />
        <BaseTeaserGrid>
          <BaseTeaserCard
            :to="`/rooms/${previousRoom.slug}`"
            :title="previousRoom.title"
            title-suffix=" Room"
            :description="previousRoom.description"
            :image-src="previousRoom.imageSrc"
            :image-alt="previousRoom.imageAlt"
          />
          <BaseTeaserCard
            :to="`/rooms/${nextRoom.slug}`"
            :title="nextRoom.title"
            title-suffix=" Room"
            :description="nextRoom.description"
            :image-src="nextRoom.imageSrc"
            :image-alt="nextRoom.imageAlt"
          />
        </BaseTeaserGrid>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
