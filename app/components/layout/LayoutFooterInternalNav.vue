<script setup lang="ts">
import {
  exploreSiteTeasers,
  type ExploreSiteTeaserId,
} from "~/data/explore-site-teasers";

const route = useRoute();

function teaserExcludeForPath(path: string): ExploreSiteTeaserId | undefined {
  if (path === "/dining" || path.startsWith("/dining/")) return "dining";
  if (path === "/meetings-events" || path.startsWith("/meetings-events/"))
    return "venues";
  if (path === "/rooms" || path.startsWith("/rooms/")) return "rooms";
  return undefined;
}

const exclude = computed(() => teaserExcludeForPath(route.path));

const items = computed(() =>
  exploreSiteTeasers.filter((t) => t.id !== exclude.value),
);

const gridColumns = computed<2 | 3>(() => (items.value.length >= 3 ? 3 : 2));
</script>

<template>
  <section class="bg-surface-100" aria-label="Explore the hotel">
    <BaseContainer>
      <BaseSection rhythm="compact" stack="comfortable">
        <BaseStack class="items-center text-center">
          <BaseSectionHeader
            overline="Comfort elevated"
            title="Experience ultimate comfort and convenience"
            align="center"
            dividers
            lead="Explore our rooms, dining spaces, and venues designed for comfort and convenience. Whether you’re here for a short stopover or a longer visit, each space is crafted to support your stay with ease and care."
          />
        </BaseStack>
        <BaseTeaserGrid :columns="gridColumns" :reveal="false">
          <BaseTeaserCard
            v-for="t in items"
            :key="t.id"
            :to="t.to"
            :title="t.title"
            :title-suffix="t.titleSuffix"
            :description="t.description"
            :image-src="t.imageSrc"
            :image-alt="t.imageAlt"
            :link-label="t.linkLabel"
            compact
            portrait-on-mobile
            :portrait-image="gridColumns === 3"
          />
        </BaseTeaserGrid>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
