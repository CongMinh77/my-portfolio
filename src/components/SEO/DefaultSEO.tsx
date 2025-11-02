import React from 'react'
import { Helmet } from 'react-helmet-async'
import PersonJsonLd from './PersonJsonLd'
import WebsiteJsonLd from './WebsiteJsonLd'

/**
 * DefaultSEO component for setting default meta tags across the site
 * @returns {JSX.Element} - DefaultSEO component with meta tags
 */
const DefaultSEO: React.FC = () => {
  const siteUrl = 'https://cmse7en.is-a.dev'

  return (
    <>
      <Helmet>
        {/* Default Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Default Open Graph / Facebook */}
        <meta property="og:site_name" content="Minh Nguyen Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Default Twitter */}
        <meta name="twitter:creator" content="@minhnguyen" />

        {/* Favicon */}
        <link rel="icon" href="/logo-white.ico" />
        <link rel="apple-touch-icon" href="/logo-white.ico" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Default Title */}
        <title>Minh Nguyen - Portfolio</title>
        <meta
          name="description"
          content="Minh Nguyen Cong - Personal portfolio showcasing my skills, projects, and experience as a developer."
        />
        <meta
          name="keywords"
          content="developer, portfolio, web development, frontend, react, typescript"
        />
      </Helmet>

      {/* Structured Data */}
      <PersonJsonLd
        name="Minh Nguyen Cong"
        jobTitle="Full Stack Developer"
        email="congminh.se7en@gmail.com"
        telephone="+84 949 389 572"
        url={siteUrl}
        image={`${siteUrl}/og-image.svg`}
        sameAs={[
          'https://github.com/CongMinh77',
          'https://www.linkedin.com/in/minh-nguyen-cong'
        ]}
        address={{
          streetAddress: 'Lien Hiep',
          addressLocality: 'Phuc Tho',
          addressRegion: 'Ha Noi',
          addressCountry: 'Vietnam'
        }}
      />

      <WebsiteJsonLd
        name="Minh Nguyen - Portfolio"
        url={siteUrl}
        description="Minh Nguyen Cong - Personal portfolio showcasing my skills, projects, and experience as a developer."
        author={{
          name: 'Minh Nguyen Cong',
          url: siteUrl
        }}
        inLanguage={['en', 'vi']}
      />
    </>
  )
}

export default DefaultSEO
