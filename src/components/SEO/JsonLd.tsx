import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

/**
 * JsonLd component for adding structured data to the page
 * @param {JsonLdProps} props - JSON-LD data
 * @returns {JSX.Element} - Script element with JSON-LD data
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
