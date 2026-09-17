<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project rules

Migrating an Envato HTML template ("Arigo") in /template to Next.js App Router. JavaScript, not TypeScript. The design must not change.

## Scope for v1

Nav pages: Home (`/`, from index-3.html), About, Service, Project, Team, Blog, Contact.
Detail pages, not in the nav, reached by clicking a listing item: `/service-details`,
`/project-details`, `/team-details`, `/blog-details`. Plus not-found.

`/blog` comes from **blog-standard.html**, not blog.html.

Permanently out of scope: index.html, indexo.html, index-2.html, blog.html, testimonial.html.

### Template file -> route

| Template file | Route |
| --- | --- |
| index-3.html | `/` |
| about.html | `/about` |
| service.html | `/service` |
| service-details.html | `/service-details` |
| project.html | `/project` |
| project-details.html | `/project-details` |
| team.html | `/team` |
| team-details.html | `/team-details` |
| blog-standard.html | `/blog` |
| blog.html | `/blog` (links only - the page itself is not converted) |
| blog-details.html | `/blog-details` |
| contact.html | `/contact` |
| error.html | `app/not-found.js` (no addressable route - link targets stay `href="#"`) |
| index.html, indexo.html, index-2.html, testimonial.html | out of scope - `href="#"` |

Links to an out-of-scope page become a plain `<a href="#">`. Links that were
`href="javascript:void(0)"` in the template use `<InertLink>`, which keeps them
inert (React 19 blocks literal `javascript:` hrefs).

## Rules
- Never modify the template's visual design. Output must match the original pixel for pixel.
- Keep original class names and DOM structure. Convert `class` → `className`, inline styles → JSX objects, self-close void tags.
- Do not add Tailwind or any CSS framework. Bootstrap CSS stays; Bootstrap JS does not.
- No jQuery. If a port needs jQuery, rewrite it in React instead.
- GSAP is fully free including SplitText and ScrollSmoother. Never suggest Club GreenSock membership, a private npm registry, or an .npmrc auth token.
- Use `useGSAP()` from @gsap/react for all GSAP work, never raw useEffect.
- Use `swiper/react` components, never the jQuery Swiper init.
- Static assets live in public/assets. Reference as `/assets/img/foo.png`.
- Shared UI goes in /components.
- Every effect must clean up on unmount. No leaked listeners or observers.
- Ask before deleting anything not explicitly listed as dead in the audit.