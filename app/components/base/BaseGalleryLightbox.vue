<script setup lang="ts">
type GalleryLightboxImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const props = withDefaults(
  defineProps<{
    images: GalleryLightboxImage[];
    drawerId?: string;
    startIndex?: number;
  }>(),
  {
    drawerId: "kowju-gallery-lightbox",
    startIndex: 0,
  },
);

const visible = defineModel<boolean>("visible", { default: false });

const activeIndex = ref(0);

const galleriaItems = computed(() =>
  props.images.map((img) => ({
    itemImageSrc: img.src,
    thumbnailImageSrc: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  })),
);

const responsiveOptions = [
  { breakpoint: "1280px", numVisible: 5 },
  { breakpoint: "960px", numVisible: 4 },
  { breakpoint: "640px", numVisible: 3 },
];

const galleriaPt = {
  root: {
    class: [
      "flex",
      "h-full",
      "min-h-0",
      "flex-1",
      "flex-col",
      "border-0",
      "bg-transparent",
      "shadow-none",
    ],
  },
  content: {
    class: ["relative", "flex", "min-h-0", "flex-1", "flex-col"],
  },
  itemsContainer: {
    class: ["flex", "min-h-0", "flex-1", "items-center", "justify-center"],
  },
  item: {
    class: ["flex", "h-full", "w-full", "items-center", "justify-center"],
  },
  thumbnails: {
    class: [
      "shrink-0",
      "border-t",
      "border-border",
      "bg-surface-muted",
      "pt-3",
    ],
  },
};

watch(
  () => visible.value,
  (isOpen) => {
    if (!isOpen) return;
    const max = Math.max(props.images.length - 1, 0);
    const start = Math.min(Math.max(props.startIndex, 0), max);
    activeIndex.value = start;
  },
);
</script>

<template>
  <Drawer
    :id="props.drawerId"
    v-model:visible="visible"
    position="full"
    modal
    dismissable
    block-scroll
    :header="null"
  >
    <div
      class="flex h-full min-h-0 flex-col bg-surface px-4 pb-6 pt-2 md:px-6 md:pb-8"
    >
      <Galleria
        v-model:active-index="activeIndex"
        :value="galleriaItems"
        :num-visible="5"
        :responsive-options="responsiveOptions"
        :show-thumbnails="true"
        thumbnails-position="bottom"
        :show-item-navigators="true"
        :show-thumbnail-navigators="true"
        :circular="true"
        aria-roledescription="carousel"
        aria-label="Image gallery"
        :pt="galleriaPt"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            :width="slotProps.item.width"
            :height="slotProps.item.height"
            class="max-h-full w-full max-w-full object-contain"
            decoding="async"
          />
        </template>
        <template #thumbnail="slotProps">
          <img
            :src="slotProps.item.thumbnailImageSrc"
            :alt="slotProps.item.alt"
            class="aspect-photo h-20 w-full object-cover"
          />
        </template>
      </Galleria>
    </div>
  </Drawer>
</template>
