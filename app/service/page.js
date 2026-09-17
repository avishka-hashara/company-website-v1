import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import DriveGrowthSection from "@/components/DriveGrowthSection";
import FounderSection from "@/components/FounderSection";
import TestimonialEventSection from "@/components/TestimonialEventSection";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Marketing services built to drive growth - digital strategy, brand positioning, SEO and performance marketing, and social campaigns that convert well.",
  path: "/service",
});

// Body content of service.html, between </header> and <footer>. Every section
// on this page also appears on another converted page, so all four come from
// shared components; the page itself only orders them.
export default function Service() {
  return (
    <>
      <BreadcrumbBanner title="services" />
      <DriveGrowthSection />
      <FounderSection />
      <TestimonialEventSection />

      <VisibleSlowlyBottom />
    </>
  );
}
