import React from 'react'
import SEO from './SEO'
import BreadcrumbJsonLd from './BreadcrumbJsonLd'

interface PageSEOProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
}

/**
 * PageSEO component for individual pages
 * @param {PageSEOProps} props - Page SEO properties
 * @returns {JSX.Element} - SEO component with page-specific meta tags
 */
const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  path,
  keywords,
  ogImage = '/og-image.svg'
}) => {
  const siteUrl = 'https://cmse7en.is-a.dev'
  const url = `${siteUrl}${path}`

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
        ogUrl={url}
        canonicalUrl={url}
      />

      <BreadcrumbJsonLd
        items={[
          {
            name: 'Home',
            item: siteUrl
          },
          {
            name: title.split(' - ')[0].trim(),
            item: url
          }
        ]}
      />
    </>
  )
}

export default PageSEO
