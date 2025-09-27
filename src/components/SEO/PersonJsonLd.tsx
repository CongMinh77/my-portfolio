import React from 'react';
import JsonLd from './JsonLd';

interface PersonJsonLdProps {
  name: string;
  jobTitle?: string;
  email?: string;
  telephone?: string;
  url?: string;
  image?: string;
  sameAs?: string[];
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}

/**
 * PersonJsonLd component for adding structured data about a person
 * @param {PersonJsonLdProps} props - Person data
 * @returns {JSX.Element} - JsonLd component with person data
 */
const PersonJsonLd: React.FC<PersonJsonLdProps> = ({
  name,
  jobTitle,
  email,
  telephone,
  url,
  image,
  sameAs = [],
  address,
}) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    ...(jobTitle && { jobTitle }),
    ...(email && { email }),
    ...(telephone && { telephone }),
    ...(url && { url }),
    ...(image && { image }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
  };

  return <JsonLd data={data} />;
};

export default PersonJsonLd;
