import React from 'react';
import JsonLd from './JsonLd';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbJsonLd component for adding structured breadcrumb data
 * @param {BreadcrumbJsonLdProps} props - Breadcrumb data
 * @returns {JSX.Element} - JsonLd component with breadcrumb data
 */
const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ items }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return <JsonLd data={data} />;
};

export default BreadcrumbJsonLd;
