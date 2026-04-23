<script setup lang="ts">
import Button from "primevue/button";
import Carousel from "primevue/carousel";
import { rooms } from "~/data/rooms";

const carouselRooms = computed(() =>
  [...rooms].sort((a, b) => a.order - b.order),
);

const responsiveOptions = [
  { breakpoint: "991px", numVisible: 1, numScroll: 1 },
];

const carouselRef = shallowRef<InstanceType<typeof Carousel> | null>(null);
const page = ref(0);
const narrow = ref(false);

function updateNarrow() {
  narrow.value = window.matchMedia("(max-width: 991px)").matches;
}

onMounted(() => {
  updateNarrow();
  window.addEventListener("resize", updateNarrow);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateNarrow);
});

const visibleCount = computed(() => (narrow.value ? 1 : 2));

const totalPages = computed(() => {
  const len = carouselRooms.value.length;
  const v = visibleCount.value;
  if (!len) return 0;
  return Math.max(Math.ceil((len - v) / 1) + 1, 0);
});

const navDisabled = computed(() => totalPages.value === 0);
const currentPageLabel = computed(() =>
  String(totalPages.value === 0 ? 0 : page.value + 1).padStart(2, "0"),
);
const totalPagesLabel = computed(() =>
  String(totalPages.value).padStart(2, "0"),
);

watch(totalPages, (tp) => {
  const max = Math.max(0, tp - 1);
  if (page.value > max) page.value = max;
});

function onPrev(e: MouseEvent) {
  const c = carouselRef.value as unknown as {
    navBackward?: (ev: MouseEvent) => void;
  } | null;
  c?.navBackward?.(e);
}

function onNext(e: MouseEvent) {
  const c = carouselRef.value as unknown as {
    navForward?: (ev: MouseEvent) => void;
  } | null;
  c?.navForward?.(e);
}

const carouselPt = {
  root: {
    class: "w-full",
    "aria-label": "Rooms and suites carousel",
  },
  contentContainer: { class: "w-full" },
  content: { class: "flex w-full gap-2 md:gap-4" },
  viewport: { class: "w-full min-w-0" },
  itemList: { class: "-mx-2 md:-mx-3" },
  item: { class: "px-2 md:px-3" },
};
</script>

<template>
  <section id="rooms-suites" class="scroll-mt-24 bg-warm-100">
    <BaseContainer>
      <BaseSection rhythm="default" stack="default">
        <BaseStack size="comfortable" class="min-w-0 w-full">
          <BaseSectionHeader
            overline="Rooms & suites"
            title="Comfortable rooms, easy stays"
            align="left"
            dividers
          />
          <Carousel
            ref="carouselRef"
            v-model:page="page"
            :value="carouselRooms"
            :num-visible="2"
            :num-scroll="1"
            circular
            :responsive-options="responsiveOptions"
            :show-indicators="false"
            :show-navigators="false"
            :pt="carouselPt"
          >
            <template #item="{ data: room }">
              <div class="h-full">
                <BaseTeaserCard
                  class="motion-card-hover h-full"
                  :to="`/rooms/${room.slug}`"
                  :title="room.title"
                  :description="room.description"
                  :image-src="room.imageSrc"
                  :image-alt="room.imageAlt"
                  link-label="View room"
                />
              </div>
            </template>
          </Carousel>
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
                @click="onPrev"
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
                @click="onNext"
              />
            </div>
            <BaseLinkText to="/rooms" label="View all" class="shrink-0" />
          </div>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
