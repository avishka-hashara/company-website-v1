// Central SEO config. Every page builds its metadata through pageMetadata() so
// the OG/Twitter blocks are always complete: Next merges metadata *shallowly*,
// so a page that declares `openGraph` replaces the layout's entirely - sharing
// a builder is what stops a page silently losing its image or site name.

export const SITE_NAME = "Arigo";
export const SITE_TITLE = "Arigo - Creative Agency & Digital Marketing Studio";

// Set NEXT_PUBLIC_SITE_URL in the environment for production; the fallback keeps
// local builds working and only affects absolute URLs in OG tags and sitemap.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

// 1921x1080 hero image - the largest on-brand landscape asset in the template.
// See the note in the handover about commissioning a proper 1200x630 card.
export const OG_IMAGE = {
  url: "/assets/img/banner/hero-thumb-big.png",
  width: 1921,
  height: 1080,
  alt: "Arigo - creative agency and digital marketing studio",
};

export function pageMetadata({ title, description, path = "/" }) {
  const url = path === "/" ? "/" : path;

  // Omit `title` entirely when a page has none: metadata merges shallowly, so
  // `title: undefined` would wipe the layout's title.default instead of
  // inheriting it. The homepage relies on this.
  const socialTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      // The layout's title.template only applies to the document <title>, not
      // to og:title, so the brand suffix is applied here explicitly.
      title: socialTitle,
      description,
      url,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Breadcrumb trails for the BreadcrumbList JSON-LD, keyed by route. Home is
// prepended by breadcrumbSchema(), so each trail starts one level below it and
// ends with the page itself. The listing pages the detail pages hang off are
// the ones their template links come from - a visitor reaches /blog-details by
// clicking an item on /blog - which is the hierarchy Google wants described.
//
// Names are the page titles from pageMetadata() rather than the breadcrumb
// banner's own wording, which is stylised in the template ("TEAM MUMBER" is
// the template's typo, kept in the visible design per AGENTS.md).
//
// The homepage is deliberately absent: its trail would be the single item
// "Home", which describes no hierarchy at all.
const BREADCRUMB_TRAILS = {
  "/about": [{ name: "About Us", path: "/about" }],
  "/service": [{ name: "Services", path: "/service" }],
  "/service-details": [
    { name: "Services", path: "/service" },
    { name: "Web Development", path: "/service-details" },
  ],
  "/project": [{ name: "Portfolio", path: "/project" }],
  "/project-details": [
    { name: "Portfolio", path: "/project" },
    { name: "Brand Identity & Positioning", path: "/project-details" },
  ],
  "/team": [{ name: "Our Team", path: "/team" }],
  "/team-details": [
    { name: "Our Team", path: "/team" },
    { name: "Sarah Johnson", path: "/team-details" },
  ],
  "/blog": [{ name: "Blog", path: "/blog" }],
  "/blog-details": [
    { name: "Blog", path: "/blog" },
    { name: "Digital Marketing Trends to Watch This Year", path: "/blog-details" },
  ],
  "/contact": [{ name: "Contact Us", path: "/contact" }],
};

// Returns the BreadcrumbList for a route, or null where there is nothing worth
// describing - the homepage, and any path with no trail (the 404 renders inside
// the same shell and can be reached on any URL at all).
export function breadcrumbSchema(pathname) {
  const trail = BREADCRUMB_TRAILS[pathname];
  if (!trail) return null;

  const crumbs = [{ name: "Home", path: "/" }, ...trail];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      // The last crumb is the current page, and Google's reference example
      // leaves its URL off - the page it points at is the one being read.
      ...(index === crumbs.length - 1
        ? {}
        : { item: `${SITE_URL}${crumb.path}` }),
    })),
  };
}
