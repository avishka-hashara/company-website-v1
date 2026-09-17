"use client";

import { usePathname } from "next/navigation";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

// Site-wide BreadcrumbList, mounted once in the root layout. The trail has to
// be picked by route and the current route is only readable from a client
// component, so this is one - it still renders into the prerendered HTML, which
// is all a crawler ever sees. Every route here is static and free of dynamic
// params, so the pathname resolves at build time and no Suspense boundary is
// needed around it.
//
// Routes with nothing to describe (the homepage, the 404 on any URL) get null
// back from breadcrumbSchema() and emit no script at all.
export default function BreadcrumbJsonLd() {
  const data = breadcrumbSchema(usePathname());

  if (!data) return null;

  return <JsonLd data={data} />;
}
