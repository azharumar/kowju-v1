<script setup lang="ts">
type GalleryPreviewImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const props = defineProps<{
  images: GalleryPreviewImage[];
}>();

const galleryDrawerId = "kowju-gallery-lightbox";
const galleryOpen = ref(false);

const mobilePrimaryImage = computed(() => props.images[0]);
const mobileSecondaryImages = computed(() => props.images.slice(1, 3));
const primaryImage = computed(() => props.images[0]);
const secondaryImages = computed(() => props.images.slice(1, 5));
</script>

<template>
  <section v-if="props.images.length">
    <BaseContainer>
      <BaseSection rhythm="compact" stack="tight">
        <BaseStack>
          <div class="overflow-hidden rounded-2xl md:hidden">
            <div class="grid grid-cols-2 gap-2">
              <figure
                v-if="mobilePrimaryImage"
                class="col-span-2 overflow-hidden"
              >
                <img
                  :src="mobilePrimaryImage.src"
                  :alt="mobilePrimaryImage.alt"
                  :width="mobilePrimaryImage.width"
                  :height="mobilePrimaryImage.height"
                  class="aspect-video w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </figure>
              <figure
                v-for="(image, index) in mobileSecondaryImages"
                :key="`${image.src}-${index}`"
                class="overflow-hidden"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  :width="image.width"
                  :height="image.height"
                  class="aspect-photo w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>

          <div class="hidden w-full overflow-hidden rounded-2xl md:grid md:grid-cols-2 md:gap-2 md:aspect-video md:aspect-hero">
            <figure
              v-if="primaryImage"
              class="h-full overflow-hidden"
            >
              <img
                :src="primaryImage.src"
                :alt="primaryImage.alt"
                :width="primaryImage.width"
                :height="primaryImage.height"
                class="h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </figure>
            <div class="grid h-full grid-cols-2 auto-rows-fr gap-2">
              <figure
                v-for="(image, index) in secondaryImages"
                :key="`${image.src}-${index}`"
                class="h-full overflow-hidden"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  :width="image.width"
                  :height="image.height"
                  class="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
          <div
            v-if="props.images.length > 1"
            class="flex justify-end"
          >
            <BaseButtonOutlined
              label="See more images"
              type="button"
              :aria-controls="galleryDrawerId"
              :aria-expanded="galleryOpen"
              @click="galleryOpen = true"
            />
          </div>
        </BaseStack>
      </BaseSection>
      <BaseGalleryLightbox
        v-if="props.images.length > 1"
        v-model:visible="galleryOpen"
        :drawer-id="galleryDrawerId"
        :images="props.images"
      />
    </BaseContainer>
  </section>
</template>
