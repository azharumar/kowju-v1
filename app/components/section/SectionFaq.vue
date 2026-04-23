<script setup lang="ts">
export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

const props = withDefaults(
  defineProps<{
    items: FaqItem[];
    overline?: string;
    title?: string;
    headingLevel?: 2 | 3 | 4;
    headingAlign?: "left" | "center" | "right";
    multiple?: boolean;
    expandFirst?: boolean;
    class?: string;
  }>(),
  {
    headingLevel: 2,
    headingAlign: "center",
    multiple: false,
    expandFirst: true,
  },
);

function initialValue(): string | string[] | null {
  if (!props.items.length || !props.expandFirst) return null;
  return props.multiple ? ["0"] : "0";
}

const activeValue = ref<string | string[] | null>(initialValue());

function panelKey(item: FaqItem, index: number) {
  return item.id ?? `faq-${index}`;
}

function panelValue(index: number) {
  return String(index);
}
</script>

<template>
  <section aria-label="Frequently asked questions" :class="props.class">
    <BaseContainer>
      <BaseSection rhythm="default">
        <BaseStack class="mx-auto w-full max-w-md">
          <BaseSectionHeader
            v-if="overline || title"
            :overline="overline"
            :title="title"
            :heading-level="headingLevel"
            :align="headingAlign"
          />
          <Accordion
            v-if="items.length"
            v-model:value="activeValue"
            :multiple="multiple"
            class="w-full"
          >
            <AccordionPanel
              v-for="(item, index) in items"
              :key="panelKey(item, index)"
              :value="panelValue(index)"
            >
              <AccordionHeader
                class="text-left text-body font-semibold text-text"
              >
                {{ item.question }}
              </AccordionHeader>
              <AccordionContent>
                <p class="text-body text-muted">
                  {{ item.answer }}
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
