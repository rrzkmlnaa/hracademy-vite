/* eslint-disable @typescript-eslint/no-explicit-any */
export type Block = {
  type: 'h1' | 'ul' | 'p' | 'li'
  text?: string
  children?: Block[]
}

export interface Article {
  id: string
  title: string
  publishedAt: string
  authors: string[]
  hero: Hero
  layout: Layout[]
  slug: string
  meta: any
  _status: string
  createdAt: string
  updatedAt: string
  populatedAuthors: Author[]
  premiumContent: any[]
}

export interface Hero {
  type: string
  richText: Block[]
  links: any[]
  media: Media
}

export interface Media {
  id: string
  alt: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  focalX: number
  focalY: number
  createdAt: string
  updatedAt: string
  url: string
}

export interface Layout {
  columns: Column[]
  id: string
  blockType: string
}

export interface Column {
  size: string
  richText: Block[]
  link: Link
  id: string
}

export interface Link {
  type: string
  appearance: string
}

export interface Author {
  id: string
  name: string
}
