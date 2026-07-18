import type { Metadata } from "next";
import NotFoundClient from "./not-found-client";

// Metadata cannot be exported from client components,
// so we wrap the client UI in this server component.
export const metadata: Metadata = {
  title: "404 – Page Not Found | Optima Safety Solutions",
  description: "The page you are looking for does not exist. Return to Optima Safety Solutions to explore our safety nets and invisible grills services in Chennai.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
