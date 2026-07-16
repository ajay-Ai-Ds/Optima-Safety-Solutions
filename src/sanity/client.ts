import { servicesData, ServiceDetail } from "@/utils/servicesData";
import { areasData, AreaDetail } from "@/utils/areasData";
import { projectsData, ProjectDetail } from "@/utils/projectsData";
import { blogData, BlogArticle } from "@/utils/blogData";

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const API_VERSION = "2026-07-10";

// Standard client wrapper
export const sanityConfig = {
  projectId: PROJECT_ID || "mock-project-id",
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
};

/**
 * Reusable dynamic data fetching client.
 * Automatically toggles between local static dictionaries and live Sanity CMS API
 * depending on whether the NEXT_PUBLIC_SANITY_PROJECT_ID key is populated.
 */
export async function fetchContent(type: "services", slug: string): Promise<ServiceDetail | null>;
export async function fetchContent(type: "services"): Promise<ServiceDetail[]>;
export async function fetchContent(type: "areas", slug: string): Promise<AreaDetail | null>;
export async function fetchContent(type: "areas"): Promise<AreaDetail[]>;
export async function fetchContent(type: "projects", slug: string): Promise<ProjectDetail | null>;
export async function fetchContent(type: "projects"): Promise<ProjectDetail[]>;
export async function fetchContent(type: "blogs", slug: string): Promise<BlogArticle | null>;
export async function fetchContent(type: "blogs"): Promise<BlogArticle[]>;
export async function fetchContent(
  type: "services" | "areas" | "projects" | "blogs",
  slug?: string
): Promise<unknown> {
  const isMock = !PROJECT_ID || PROJECT_ID === "mock-project-id";

  if (isMock) {
    // ----------------------------------------------------
    // FALLBACK SOURCE: Retrieve from local typescript registries
    // ----------------------------------------------------
    if (slug) {
      if (type === "services") return servicesData[slug] || null;
      if (type === "areas") return areasData[slug] || null;
      if (type === "projects") return projectsData[slug] || null;
      if (type === "blogs") return blogData[slug] || null;
    } else {
      if (type === "services") return Object.values(servicesData);
      if (type === "areas") return Object.values(areasData);
      if (type === "projects") return Object.values(projectsData);
      if (type === "blogs") return Object.values(blogData);
    }
    return null;
  }

  // ----------------------------------------------------
  // LIVE SOURCE: Fetch from Sanity CMS via REST API
  // ----------------------------------------------------
  const cdnUrl = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
  
  // Custom Groq Query
  let query = "";
  if (slug) {
    query = `*[_type == "${type === "blogs" ? "post" : type.slice(0, -1)}" && slug.current == "${slug}"][0]`;
  } else {
    query = `*[_type == "${type === "blogs" ? "post" : type.slice(0, -1)}"]`;
  }

  try {
    const response = await fetch(`${cdnUrl}?query=${encodeURIComponent(query)}`, {
      next: { revalidate: 3600 }, // Incremental Static Regeneration (ISR) 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Sanity API error: ${response.statusText}`);
    }

    const json = await response.json();
    return json.result;
  } catch (error) {
    console.error(`Failed to fetch from live Sanity CMS (${type}):`, error);
    // Graceful fallback to local mock data in case of cloud API outage
    if (slug) {
      if (type === "services") return servicesData[slug] || null;
      if (type === "areas") return areasData[slug] || null;
      if (type === "projects") return projectsData[slug] || null;
      if (type === "blogs") return blogData[slug] || null;
    } else {
      if (type === "services") return Object.values(servicesData);
      if (type === "areas") return Object.values(areasData);
      if (type === "projects") return Object.values(projectsData);
      if (type === "blogs") return Object.values(blogData);
    }
    return null;
  }
}

/**
 * siteSettings fetching helper
 */
export async function fetchSiteSettings() {
  const isMock = !PROJECT_ID || PROJECT_ID === "mock-project-id";

  if (isMock) {
    return {
      businessName: "Optima Safety Solutions",
      phone: "+91 78937 60933",
      email: "optimasafetysolutions77@gmail.com",
      showNewsletter: true,
      socialLinks: {
        facebook: "https://facebook.com/optimasafetysolutions",
        instagram: "https://instagram.com/optimasafetysolutions",
        linkedin: "https://linkedin.com/company/optimasafetysolutions",
        youtube: "https://youtube.com/optimasafetysolutions",
      },
    };
  }

  const cdnUrl = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
  const query = `*[_type == "siteSettings"][0]`;

  try {
    const response = await fetch(`${cdnUrl}?query=${encodeURIComponent(query)}`);
    const json = await response.json();
    return json.result;
  } catch {
    return {
      businessName: "Optima Safety Solutions",
      phone: "+91 78937 60933",
      email: "optimasafetysolutions77@gmail.com",
      showNewsletter: true,
      socialLinks: {
        facebook: "https://facebook.com/optimasafetysolutions",
        instagram: "https://instagram.com/optimasafetysolutions",
        linkedin: "https://linkedin.com/company/optimasafetysolutions",
        youtube: "https://youtube.com/optimasafetysolutions",
      },
    };
  }
}
