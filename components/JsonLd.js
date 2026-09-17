// Renders a JSON-LD block. Nothing here is a client hook, so it renders into
// the server HTML where crawlers see it without executing anything - whether it
// is used from a server page or from BreadcrumbJsonLd on the client.
//
// `<` is escaped on the way out: JSON.stringify does not escape it, so a "</"
// anywhere in the data would close the script tag early. Everything passed in
// today is authored in this repo, but the guard is what Next's JSON-LD guide
// asks for and costs nothing.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
