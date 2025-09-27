import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

/**
 * SEO component for managing meta tags
 * @param {SEOProps} props - SEO properties
 * @returns {JSX.Element} - SEO component with meta tags
 */
const SEO: React.FC<SEOProps> = ({
  title = 'Minh Nguyen - Portfolio',
  description = 'Minh Nguyen Cong - Personal portfolio showcasing my skills, projects, and experience as a developer.',
  keywords = ['developer', 'portfolio', 'web development', 'frontend', 'react', 'typescript'],
  ogImage = '/og-image.jpg',
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
}) => {
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl || currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* No Index if specified */}
      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Helmet>
  );
};

export default SEO;
