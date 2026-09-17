import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import RecentWordItems from "@/components/RecentWordItems";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Selected Arigo projects - brand identity and positioning, social media growth campaigns, and full brand refreshes delivered for clients through to 2026.",
  path: "/project",
});

// Body content of project.html, between </header> and <footer>. Unlike the
// homepage's version, this recent-word section has no circle element, no
// bordered container and no section header - just the three items, whose
// .thumb-small links point at project-details here.
export default function Project() {
  return (
    <>
      <BreadcrumbBanner
        title="PORTFOLIO"
        headingClassName="text-center heading-font visible-slowly-bottom"
      />

      {/* recent word Section Start */}
      <section className="recent-word-section fix">
        <div className="container">
          <div className="section-padding">
            <RecentWordItems
              thumbSmallHref="/project-details"
              thumbSmallInternal
            />
          </div>
        </div>
      </section>

      <VisibleSlowlyBottom />
    </>
  );
}
