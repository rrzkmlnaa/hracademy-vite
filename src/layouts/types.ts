export interface SEO_Types {
  pageTitle: string
  metaDescription: string
  urlCanonical: string
  themeColor?: string
  metaTags?: { name: string; content: string }[]
  openGraphTags?: { property: string; content: string }[]
  twitterTags?: { name: string; content: string }[]
  favicons?: { href: string; sizes?: string }[]
  tileImage?: string
}
