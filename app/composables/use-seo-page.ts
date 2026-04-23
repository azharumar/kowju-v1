type SeoPageInput = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

function withLeadingSlash(path: string) {
  return path.startsWith('/') ? path : `/${path}`
}

export function useSeoPage(input: SeoPageInput) {
  const hotel = useHotel()
  const canonicalPath = withLeadingSlash(input.path)
  const canonicalUrl = new URL(canonicalPath, hotel.url).toString()
  const imagePath = input.image ? withLeadingSlash(input.image) : '/images/home_page_01.png'
  const ogImageUrl = new URL(imagePath, hotel.url).toString()
  const titleTemplate = `%s | ${hotel.name}`

  useHead({
    titleTemplate,
    link: [{ rel: 'canonical', href: canonicalUrl }],
  })

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogUrl: canonicalUrl,
    ogSiteName: hotel.name,
    ogType: input.type ?? 'website',
    ogImage: ogImageUrl,
    ogImageAlt: input.imageAlt ?? input.title,
    twitterCard: 'summary_large_image',
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: ogImageUrl,
    robots: input.noindex ? 'noindex, nofollow' : 'index, follow',
  })

  useSchemaOrg([
    defineWebPage({
      '@id': `${canonicalUrl}#webpage`,
      name: input.title,
      description: input.description,
      url: canonicalUrl,
    }),
  ])
}

