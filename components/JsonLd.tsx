import React from "react";

export interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export function OrganizationJsonLd({
  name = "StratoTechCorp",
  url = "https://stratotechcorp.in",
  logo = "https://stratotechcorp.in/favicon.ico",
  description = "Strategic Clarity. Sustainable Growth. Digital product engineering and AI systems consultancy.",
  email = "tharun.hs@startotechcorp.in",
  address = {
    streetAddress: "Queens Road, Shivajinagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560051",
    addressCountry: "IN",
  },
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name,
        url,
        logo: {
          "@type": "ImageObject",
          url: logo,
        },
        description,
        email,
        address: {
          "@type": "PostalAddress",
          ...address,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email,
          contactType: "customer support",
          availableLanguage: ["English", "Hindi", "Kannada"],
        },
        sameAs: [
          "https://github.com/stratotechcorp",
          "https://linkedin.com/company/stratotechcorp",
          "https://twitter.com/stratotechcorp",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name,
        publisher: {
          "@id": `${url}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${url}/projects?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface SoftwareAppSchemaProps {
  name: string;
  applicationCategory: string;
  operatingSystem?: string;
  description: string;
  url: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
  features?: string[];
}

export function SoftwareAppJsonLd({
  name,
  applicationCategory,
  operatingSystem = "Web, Cloud, Cross-Platform",
  description,
  url,
  offers = {
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating = {
    ratingValue: "4.9",
    reviewCount: "48",
  },
  features,
}: SoftwareAppSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory,
    operatingSystem,
    description,
    url,
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    },
    ...(features && features.length > 0 ? { featureList: features.join(", ") } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
