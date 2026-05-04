<script setup lang="ts">
import type { RoomRecord } from "~/data/rooms";

const props = defineProps<{
  roomTitle: string;
  roomSlug: string;
  about: NonNullable<RoomRecord["about"]>;
}>();
</script>

<template>
  <section class="bg-surface">
    <BaseContainer>
      <BaseSection rhythm="compact" stack="comfortable">
        <div class="flex flex-col gap-8">
          <BaseSectionHeader
            title="About the room"
            :heading-level="2"
          />

          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-6">
            <div class="flex flex-col gap-1">
              <dt>
                <BaseOverline>Occupancy</BaseOverline>
              </dt>
              <dd class="text-body text-muted">{{ about.facts.occupancy }}</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt>
                <BaseOverline>Bedding</BaseOverline>
              </dt>
              <dd class="text-body text-muted">{{ about.facts.bedding }}</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt>
                <BaseOverline>Size</BaseOverline>
              </dt>
              <dd class="text-body text-muted">{{ about.facts.size }}</dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt>
                <BaseOverline>Layout</BaseOverline>
              </dt>
              <dd class="text-body text-muted">{{ about.facts.layout }}</dd>
            </div>
          </dl>

          <div class="flex flex-col gap-5">
            <p
              v-for="(paragraph, index) in about.paragraphs"
              :key="`paragraph-${index}`"
              class="text-body leading-relaxed text-muted"
            >
              {{ paragraph }}
            </p>
          </div>

          <hr class="border-0 border-t border-border" />

          <BaseRoomFacilitiesList :facilities="about.facilities" />
        </div>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
