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
    showFooter?: boolean;
    headingLevel?: 2 | 3 | 4;
    headingAlign?: "left" | "center" | "right";
    multiple?: boolean;
    expandFirst?: boolean;
    class?: string;
  }>(),
  {
    headingLevel: 2,
    headingAlign: "center",
    showFooter: true,
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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatAnswer(answer: string) {
  const escaped = escapeHtml(answer);
  const withUrls = escaped.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-brand-600 underline">$1</a>',
  );
  const withEmails = withUrls.replace(
    /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g,
    '<a href="mailto:$1" class="text-brand-600 underline">$1</a>',
  );
  return withEmails.replace(
    /(\+?\d[\d\s-]{7,}\d)/g,
    '<a href="tel:$1" class="text-brand-600 underline">$1</a>',
  );
}
</script>

<template>
  <section aria-label="Frequently asked questions" :class="props.class">
    <BaseContainer>
      <BaseSection rhythm="comfortable">
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
                <p class="text-body text-muted" v-html="formatAnswer(item.answer)" />
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          <BaseStack
            v-if="showFooter"
            class="items-center text-center"
            rhythm="tight"
          >
            <p class="text-body text-muted">
              If you have more questions, please feel free to check out our FAQ
              section. Still curious? Feel free to reach out by email or simply
              give reception a call.
            </p>
            <BaseLinkText to="/faq" label="Go to FAQ Section" />
          </BaseStack>
        </BaseStack>
      </BaseSection>
    </BaseContainer>
  </section>
</template>
