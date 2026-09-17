import Link from "next/link";

// <section class="banner-breadcrumb-section"> - shared by every inner page.
// Three shapes appear in the template:
//   about / service / project / team  -> <ul class="bread-link"> Home // Title
//   service-details / project-details -> <ul class="development-link"> tag list
//   team-details                      -> heading only, no list
export default function BreadcrumbBanner({
  title,
  headingClassName = "text-center sub-font2 visible-slowly-bottom",
  tags,
  showCrumbs = true,
}) {
  return (
    <section className="banner-breadcrumb-section fix position-relative">
      <div className="container">
        <div className="breadcrumb-content">
          <h1 className={headingClassName}>{title}</h1>
          {tags ? (
            <div className="text-center">
              <ul className="development-link justify-content-center">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          ) : showCrumbs ? (
            <div className="text-center">
              <ul className="bread-link">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{"//"}</li>
                <li>{title}</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <img
        src="/assets/img/element/circle-opacity.png"
        alt="img"
        className="breadcrumb-cirlce cir36"
      />
    </section>
  );
}
