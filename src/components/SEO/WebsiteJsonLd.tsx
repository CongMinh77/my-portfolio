import React from 'react';
import JsonLd from './JsonLd';

interface WebsiteJsonLdProps {
  name: string;
  url: string;
  description?: string;
  author?: {
    name: string;
    url?: string;
  };
  inLanguage?: string[];
}

/**
 * WebsiteJsonLd component for adding structured data about the website
 * @param {WebsiteJsonLdProps} props - Website data
 * @returns {JSX.Element} - JsonLd component with website data
 */
const WebsiteJsonLd: React.FC<WebsiteJsonLdProps> = ({
  name,
  url,
  description,
  author,
  inLanguage = ['en', 'vi'],
}) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    ...(description && { description }),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author.name,
        ...(author.url && { url: author.url }),
      },
    }),
    inLanguage,
  };

  return <JsonLd data={data} />;
};

export default WebsiteJsonLd;
