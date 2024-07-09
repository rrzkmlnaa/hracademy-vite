import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SEO_Types } from './types'

const SEO: React.FC<SEO_Types> = ({
  pageTitle,
  metaDescription,
  urlCanonical,
  themeColor = '#81d742',
  metaTags = [],
  openGraphTags = [],
  twitterTags = [],
  favicons = [],
  tileImage
}) => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={urlCanonical} />

      {/* Dynamic meta tags */}
      <meta name="theme-color" content={themeColor} />
      {metaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}

      {/* Open Graph tags */}
      {openGraphTags.map((tag, index) => (
        <meta key={index} property={tag.property} content={tag.content} />
      ))}

      {/* Twitter tags */}
      {twitterTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}

      {/* Favicons */}
      {favicons.map((icon, index) => (
        <link key={index} rel="icon" href={icon.href} sizes={icon.sizes} />
      ))}

      {/* Tile image */}
      {tileImage && <meta name="msapplication-TileImage" content={tileImage} />}

      <meta
        name="robots"
        content="follow, index, max-snippet:250, max-video-preview:15, max-image-preview:large"
      />
    </Helmet>
  )
}

export default SEO
