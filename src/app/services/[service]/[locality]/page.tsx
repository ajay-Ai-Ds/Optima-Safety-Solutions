import { notFound } from "next/navigation";
import Link from "next/link";
import { Home, MapPin } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import { getLocalityContent, localitiesList, categoriesList } from "@/utils/localityContent";
import { ServiceHero, ServiceStickyBar, ServiceTrustBar } from "@/components/sections/service-page/ServiceHero";
import { ServiceBenefits, ServiceSpecs } from "@/components/sections/service-page/ServiceContent";
import { ServiceTimeline, ServiceWhyChoose, ServiceFAQs } from "@/components/sections/service-page/ServiceProcess";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import LightboxGallery from "@/components/ui/lightbox-gallery";
import ContactForm from "@/components/sections/ContactForm";

// Helper to map category/service slugs to servicesData entries
function getServiceDetail(categorySlug: string) {
  if (categorySlug === "safety-nets") return servicesData["balcony-safety-nets"];
  if (categorySlug === "invisible-grills") return servicesData["window-invisible-grills"];
  if (categorySlug === "cloth-hangers") return servicesData["pulley-cloth-hangers"];
  if (categorySlug === "sports-nets") return servicesData["sports-nets"];
  if (categorySlug === "cricket-nets") return servicesData["cricket-practice-nets"];
  return null;
}

interface PageProps {
  params: Promise<{ service: string; locality: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  try {
    const content = getLocalityContent(resolvedParams.service, resolvedParams.locality);
    return {
      title: content.title,
      description: content.metaDescription,
      alternates: {
        canonical: `/services/${resolvedParams.service}/${resolvedParams.locality}`,
      },
      openGraph: {
        title: content.title,
        description: content.metaDescription,
        url: `https://www.optimasafetysolutions.com/services/${resolvedParams.service}/${resolvedParams.locality}`,
        type: "website",
        images: [
          {
            url: "/images/og-image.webp",
            width: 1200,
            height: 630,
            alt: content.h1,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: content.title,
        description: content.metaDescription,
        images: ["/images/og-image.webp"],
      }
    };
  } catch {
    return {
      title: "Page Not Found | Optima Safety Solutions",
    };
  }
}

export async function generateStaticParams() {
  const params: { service: string; locality: string }[] = [];
  categoriesList.forEach((category) => {
    localitiesList.forEach((locality) => {
      params.push({ service: category, locality });
    });
  });
  return params;
}

export default async function LocalityServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  let content;
  try {
    content = getLocalityContent(resolvedParams.service, resolvedParams.locality);
  } catch {
    notFound();
  }

  const serviceDetail = getServiceDetail(resolvedParams.service);
  if (!serviceDetail) {
    notFound();
  }

  const localityFormatted = resolvedParams.locality
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Breadcrumb List Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.optimasafetysolutions.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.optimasafetysolutions.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": serviceDetail.categoryName,
        "item": `https://www.optimasafetysolutions.com/services/${serviceDetail.category}`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": content.h1,
        "item": `https://www.optimasafetysolutions.com/services/${resolvedParams.service}/${resolvedParams.locality}`,
      },
    ],
  };

  // LocalBusiness Schema Variation
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Optima Safety Solutions",
    "telephone": "+91 78937 60933",
    "email": "optimasafetysolutions77@gmail.com",
    "url": `https://www.optimasafetysolutions.com/services/${resolvedParams.service}/${resolvedParams.locality}`,
    "image": "https://www.optimasafetysolutions.com/images/og-image.webp",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": localityFormatted,
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": `${localityFormatted}, Chennai, Tamil Nadu`
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceDetail.name} in ${localityFormatted}`,
    "serviceType": serviceDetail.categoryName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Optima Safety Solutions",
      "telephone": "+91 78937 60933",
      "email": "optimasafetysolutions77@gmail.com",
    },
    "description": content.metaDescription,
    "areaServed": {
      "@type": "Place",
      "name": `${localityFormatted}, Chennai, Tamil Nadu`,
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Schema scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Contact Bar */}
      <ServiceStickyBar name={`${serviceDetail.name} in ${localityFormatted}`} />

      {/* Hero Section */}
      <ServiceHero
        name={`${serviceDetail.name} in ${localityFormatted}`}
        categoryName={serviceDetail.categoryName}
        title={content.h1}
        subtitle={`Customized installation of ${serviceDetail.name.toLowerCase()} for residential and commercial properties in ${localityFormatted}, Chennai.`}
        aiOverview={serviceDetail.aiOverview.replace(/Optima/g, "Optima")}
        image={serviceDetail.image}
      />

      <ServiceTrustBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Localized Breadcrumb UI */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-accent-orange">
            Services
          </Link>
          <span>/</span>
          <Link href={`/services#${serviceDetail.category}`} className="hover:text-accent-orange">
            {serviceDetail.categoryName}
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold truncate max-w-[250px]">
            {localityFormatted}
          </span>
        </nav>
      </div>

      {/* Custom Locality Description Section */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl shrink-0 self-center md:self-start">
              <MapPin className="w-8 h-8 text-accent-orange animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-orange bg-orange-50 px-2.5 py-1 rounded">
                  Locality Specifics
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Hyperlocal Service Area
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-6">
                Why Professional {serviceDetail.name} Matters in {localityFormatted}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Card Grid */}
      <ServiceBenefits benefits={serviceDetail.benefits} />

      {/* Timeline */}
      <ServiceTimeline />

      {/* Specs Table */}
      <ServiceSpecs specsTable={serviceDetail.specsTable} />

      {/* Why Choose Section */}
      <ServiceWhyChoose />

      {/* Slider */}
      <section className="bg-white py-20 scroll-mt-12" id="comparison-slider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
              Visual Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Interactive Before & After Demonstration
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Drag the central divider bar to see the direct aesthetic difference between unprotected spaces and a secure Optima setup.
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage={serviceDetail.beforeImage}
            afterImage={serviceDetail.afterImage}
          />
        </div>
      </section>

      {/* Lightbox Gallery */}
      <section className="bg-slate-50 py-20 scroll-mt-12" id="lightbox-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-center">
              Installation Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Photo Gallery & Close-Ups
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Click on any thumbnail below to expand the image in high-resolution, navigate through options, or toggle escape.
            </p>
          </div>
          <LightboxGallery images={serviceDetail.gallery} serviceName={serviceDetail.name} />
        </div>
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={serviceDetail.faqs.map(faq => ({
          question: faq.question.replace(/Chennai/g, localityFormatted),
          answer: faq.answer.replace(/Optima Safety Solutions/g, "Optima Safety Solutions").replace(/\+91 78937 60933/g, "+91 78937 60933")
        }))}
        serviceName={serviceDetail.name}
      />

      {/* Inquiry Form */}
      <ContactForm />
    </div>
  );
}
