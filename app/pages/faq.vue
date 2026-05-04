<script setup lang="ts">
import { faqCategories } from "~/data/faqs";
import type { FaqCategory } from "~/data/faqs";

const fallbackCategory: FaqCategory = {
  id: "general",
  title: "Frequently Asked Questions",
  items: [],
};

const selectedCategoryId = ref(faqCategories[0]?.id ?? "");
const activeQuestion = ref<string | string[] | null>("0");

const selectedCategory = computed<FaqCategory>(() => {
  return (
    faqCategories.find((category) => category.id === selectedCategoryId.value) ??
    faqCategories[0] ??
    fallbackCategory
  );
});

function selectCategory(categoryId: string) {
  selectedCategoryId.value = categoryId;
  activeQuestion.value = "0";
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

useSeoPage({
  title: "Frequently Asked Questions",
  description:
    "Check out the answers to our most frequently asked questions for planning your stay at Kowju Airport Hotel.",
  path: "/faq",
  image: "/images/home_page_12_cta_image.png",
  imageAlt: "Frequently asked questions at Kowju Airport Hotel",
});
</script>

<template>
  <div>
    <BaseContainer>
      <BaseSection rhythm="hero" stack="default">
        <BasePageHeader
          title="Frequently Asked Questions"
          lead="Check out the answers to our most frequently asked questions. Still curious? Feel free to reach out by email or simply give reception a call."
        />
      </BaseSection>
      <BaseSection rhythm="comfortable">
        <div class="overflow-hidden rounded-lg border border-gold-200">
          <BaseGrid class="items-stretch lg:grid-cols-12">
            <aside class="border-gold-200 lg:col-span-4 lg:border-r">
              <nav aria-label="FAQ category tabs">
                <ul role="tablist" aria-orientation="vertical">
                  <li
                    v-for="category in faqCategories"
                    :key="category.id"
                    class="border-b border-gold-200 last:border-b-0"
                  >
                    <button
                      :id="`tab-${category.id}`"
                      type="button"
                      role="tab"
                      :aria-selected="selectedCategoryId === category.id"
                      :aria-controls="`panel-${category.id}`"
                      class="motion-interactive flex w-full items-center justify-between px-4 py-3 text-left text-body-sm uppercase tracking-label"
                      :class="
                        selectedCategoryId === category.id
                          ? 'text-brand-600'
                          : 'text-text'
                      "
                      @click="selectCategory(category.id)"
                    >
                      <span>{{ category.title }}</span>
                      <span
                        class="pi pi-arrow-right text-gold-600"
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>
            <div class="lg:col-span-8">
              <div
                :id="`panel-${selectedCategory.id}`"
                role="tabpanel"
                :aria-labelledby="`tab-${selectedCategory.id}`"
                class="p-6 md:p-8"
              >
                <BaseStack rhythm="default">
                  <h2 class="text-h2 text-text">
                    {{ selectedCategory.title }}
                  </h2>
                  <Accordion
                    v-if="selectedCategory.items.length"
                    v-model:value="activeQuestion"
                    class="w-full"
                  >
                    <AccordionPanel
                      v-for="(item, index) in selectedCategory.items"
                      :key="`${selectedCategory.id}-${index}`"
                      :value="String(index)"
                    >
                      <AccordionHeader class="text-left text-body text-text">
                        {{ item.question }}
                      </AccordionHeader>
                      <AccordionContent>
                        <p
                          class="text-body text-muted"
                          v-html="formatAnswer(item.answer)"
                        />
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>
                </BaseStack>
              </div>
            </div>
          </BaseGrid>
        </div>
      </BaseSection>
    </BaseContainer>
  </div>
</template>
