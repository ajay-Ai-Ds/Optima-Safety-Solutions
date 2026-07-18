export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Optima Safety Solutions",
    "url": "https://www.optimasafetysolutions.in",
    "logo": "https://www.optimasafetysolutions.in/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/optimasafetysolutions",
      "https://www.instagram.com/optimasafetysolutions",
      "https://www.linkedin.com/company/optimasafetysolutions"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-78937-60933",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"],
    },
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.optimasafetysolutions.in/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": `Optima Safety Solutions${areaName ? ` - ${areaName}` : ""}`,
    "url": `https://www.optimasafetysolutions.in${areaName ? `/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "telephone": "+91 78937 60933",
    "email": "optimasafetysolutions77@gmail.com",
    "image": "https://www.optimasafetysolutions.in/images/og-image.webp",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "17/7, Rajeswari St, Kamarajar Nagar, NGO Colony, Choolaimedu",
      "addressLocality": areaName || "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600094",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.optimasafetysolutions.in",
    "name": "Optima Safety Solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.optimasafetysolutions.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(links: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": links.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.name,
      "item": link.item.startsWith("http") ? link.item : `https://www.optimasafetysolutions.in${link.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": categoryName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Optima Safety Solutions",
      "telephone": "+91 78937 60933",
      "email": "optimasafetysolutions77@gmail.com",
    },
    "description": description,
    "areaServed": {
      "@type": "State",
      "name": "Chennai, Tamil Nadu",
    },
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(title: string, description: string, image: string, datePublished: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": "Optima Safety Solutions",
      "url": "https://www.optimasafetysolutions.in",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Optima Safety Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.optimasafetysolutions.in/images/logo.png",
      },
    },
  };
}
