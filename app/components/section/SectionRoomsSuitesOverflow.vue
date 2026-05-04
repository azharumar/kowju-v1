<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import Button from "primevue/button";
import { rooms } from "~/data/rooms";

const orderedRooms = computed(() =>
  [...rooms].sort((a, b) => a.order - b.order),
);
const sliderRef = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
const totalPages = computed(() => orderedRooms.value.length);
const navDisabled = computed(() => totalPages.value === 0);
const currentPageLabel = computed(() =>
  String(
    totalPages.value === 0
      ? 0
      : Math.min(activeIndex.value + 1, totalPages.value),
  ).padStart(2, "0"),
);
const totalPagesLabel = computed(() =>
  String(totalPages.value).padStart(2, "0"),
);

function scrollTrack(direction: "prev" | "next") {
  const track = sliderRef.value;
  if (!track) return;
  if (!totalPages.value) return;

  const firstCard = track.querySelector<HTMLElement>("[data-room-card]");
  if (!firstCard) return;

  const gap = Number.parseFloat(
    window.getComputedStyle(track).columnGap || "0",
  );
  const step = firstCard.offsetWidth + gap;
  if (!step) return;

  const maxIndex = totalPages.value - 1;
  const targetIndex =
    direction === "next"
      ? activeIndex.value >= maxIndex
        ? 0
        : activeIndex.value + 1
      : activeIndex.value <= 0
        ? maxIndex
        : activeIndex.value - 1;

  track.scrollTo({ left: targetIndex * step, behavior: "smooth" });
}

function updateActiveIndex() {
  const track = sliderRef.value;
  if (!track) return;

  const firstCard = track.querySelector<HTMLElement>("[data-room-card]");
  if (!firstCard) return;

  const gap = Number.parseFloat(
    window.getComputedStyle(track).columnGap || "0",
  );
  const step = firstCard.offsetWidth + gap;
  if (!step) return;

  activeIndex.value = Math.round(track.scrollLeft / step);
}

onMounted(() => {
  sliderRef.value?.addEventListener("scroll", updateActiveIndex, {
    passive: true,
  });
  updateActiveIndex();
});

onUnmounted(() => {
  sliderRef.value?.removeEventListener("scroll", updateActiveIndex);
});
</script>

<template>
  <section class="bg-surface-muted">
    <BaseContainer>
      <BaseSection rhythm="default" stack="comfortable" :reveal="false">
        <BaseSectionHeader
          overline="Rooms & suites"
          title="Comfortable rooms, easy stays"
          align="left"
          dividers
        />

        <BaseStack variant="default" :reveal="false">
          <div
            ref="sliderRef"
            class="rooms-overflow-track flex snap-x snap-mandatory gap-4 overflow-x-auto"
            aria-label="Rooms carousel"
          >
            <div
              v-for="room in orderedRooms"
              :key="room.slug"
              data-room-card
              class="rooms-overflow-card shrink-0 snap-start"
            >
              <BaseTeaserCard
                class="motion-card-hover h-full"
                :to="`/rooms/${room.slug}`"
                :title="room.title"
                :description="room.description"
                :image-src="room.imageSrc"
                :image-alt="room.imageAlt"
                link-label="View room"
                portrait-on-mobile
              />
            </div>
            <div class="rooms-overflow-filler shrink-0" aria-hidden="true" />
          </div>

          <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <Button
                label="Previous"
                icon="pi pi-angle-left"
                icon-pos="left"
                variant="text"
                size="small"
                aria-label="Previous rooms"
                :disabled="navDisabled"
                @click="scrollTrack('prev')"
              />
              <span class="text-body-sm font-medium text-muted">
                {{ currentPageLabel }} / {{ totalPagesLabel }}
              </span>
              <Button
                label="Next"
                icon="pi pi-angle-right"
                icon-pos="right"
                variant="text"
                size="small"
                aria-label="Next rooms"
                :disabled="navDisabled"
                @click="scrollTrack('next')"
              />
            </div>
            <BaseLinkText to="/rooms" label="View all" class="shrink-0" />
          </div>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>

<style scoped>
.rooms-overflow-track {
  scrollbar-width: none;
}

.rooms-overflow-track::-webkit-scrollbar {
  display: none;
}

.rooms-overflow-card {
  width: 80%;
}

.rooms-overflow-filler {
  width: 15%;
}
</style>
