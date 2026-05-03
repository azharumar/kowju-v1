<script setup lang="ts">
useSeoPage({
  title: "Location guide",
  description:
    "Getting Here, Nearby, and Things to Do for guests planning a stay at Kowju Airport Hotel Calicut.",
  path: "/location",
});
</script>

<template>
  <div>
    <BaseContainer>
      <BaseSection rhythm="default" stack="loose" :reveal="false">
        <BasePageHeader
          title="Location guide"
          lead="Pre-arrival logistics, nearby context, and leisure planning. Editorial copy will replace these placeholders when the CMS block is wired."
          heading-level="1"
        />
        <div class="flex flex-col gap-10">
          <section
            id="getting-here"
            class="flex flex-col gap-3"
            aria-labelledby="getting-here-title"
          >
            <h2 id="getting-here-title" class="text-h3 font-semibold text-text">
              Getting Here
            </h2>
            <p class="text-body text-muted">
              Practical, findable-first directions and transfer notes for guests
              before arrival.
            </p>
          </section>
          <section
            id="nearby"
            class="flex flex-col gap-3"
            aria-labelledby="nearby-title"
          >
            <h2 id="nearby-title" class="text-h3 font-semibold text-text">
              Nearby
            </h2>
            <p class="text-body text-muted">
              Regional context for longer stays and medical travel, including
              Kottakkal and Arya Vaidya Sala as a genuine draw.
            </p>
          </section>
          <section
            id="things-to-do"
            class="flex flex-col gap-3"
            aria-labelledby="things-to-do-title"
          >
            <h2 id="things-to-do-title" class="text-h3 font-semibold text-text">
              Things to Do
            </h2>
            <p class="text-body text-muted">
              Leisure-oriented ideas that support guests comparing options and
              confirming dates.
            </p>
          </section>
        </div>
      </BaseSection>
    </BaseContainer>
  </div>
</template>
