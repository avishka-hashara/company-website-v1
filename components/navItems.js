// Nav tree from index-3.html, shared by the desktop nav (Header) and the
// meanMenu clone (MobileMenu) so both render byte-identical markup.
//
// The template's two dropdowns have been removed by request, so every entry
// here is a direct top-level link:
//   - "Pages" was an inert javascript:void(0) handle over Service, Team and
//     Contact. Those three are top-level items now.
//   - Home carried the demo picker, a grid of theme thumbnails that is a
//     template showcase feature rather than site navigation - and its "Home 01"
//     tile pointed at index.html, which is permanently out of scope.
// Nothing in the nav is inert or non-internal any more, which is why there is
// no submenu, caret, or href="#" left below.
//
// Entries dropped from the template's nav, structure and classes otherwise
// unchanged: the permanently out-of-scope pages (index-2, testimonial, error)
// and the four detail pages, which are reached by clicking a listing item
// rather than from the menu. See the scope table in AGENTS.md.

export const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about" },
  { key: "service", label: "Service", href: "/service" },
  { key: "projects", label: "Projects", href: "/project" },
  { key: "team", label: "Team", href: "/team" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "contact", label: "Contact Us", href: "/contact" },
];

// The four detail pages are reached from a listing rather than the menu, so
// they have no nav entry of their own. Each one keeps its listing lit while you
// are on it - the same hierarchy the breadcrumb trails in lib/seo.js describe.
const OWNED_ROUTES = {
  "/service": ["/service-details"],
  "/project": ["/project-details"],
  "/team": ["/team-details"],
  "/blog": ["/blog-details"],
};

// "active" is the template's current-page marker; index-3.html hardcoded it on
// Home, and it now follows the route. Matching is exact rather than by prefix,
// so Home lights up on "/" alone instead of on every page.
//
// Worth knowing before relying on it: no stylesheet in the port targets
// `li.active` - not main.css, meanmenu.css or bootstrap - so this marks the
// current page in the markup without changing how anything looks.
export function isActiveNavItem(item, pathname) {
  if (pathname === item.href) return true;

  return (OWNED_ROUTES[item.href] ?? []).includes(pathname);
}

// meanMenu tags the last <li> in document order inside .mean-nav with
// "mean-last" (jQuery: $(".mean-nav ul li").last()), which drops its bottom
// border. With a flat nav that is simply the last entry.
export function lastMenuKey(items) {
  return items[items.length - 1]?.key ?? null;
}
