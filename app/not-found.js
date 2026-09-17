import Link from "next/link";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";

// error.html, converted. not-found.js renders inside the root layout, so it
// picks up the shared shell. Unlike a page.js, it has no documented `metadata`
// export (only the experimental global-not-found.js does), so the title comes
// from the root layout.
export default function NotFound() {
  return (
    <>
      {/* error Section Start */}
      <section className="error-section fix">
        <div className="container">
          <div className="error-thumb wow fadeInUp" data-wow-delay="0.4s">
            <img src="/assets/img/element/error.png" alt="img" />
          </div>
          <div className="error-content">
            {/* the template really does repeat "wow fadeInUp" here.
                error.html had no h1 at all, so its <h2> is promoted here - the
                sizing that came with the h2 element is restated for the h1 in
                nextjs-fixes.css, so it renders identically. */}
            <h1
              className="mb-sm-3 black-clr mb-2 wow fadeInUp wow fadeInUp"
              data-wow-delay="0.5s"
            >
              Oops! This Page Went <br /> Off Strategy
            </h1>
            <p className="mb-48 wow fadeInUp" data-wow-delay="0.6s">
              Looks like the page you’re looking for doesn’t exist or has been
              moved. But <br /> don’t worry—our team is still here. Let’s get you
              back on track.
            </p>
            <Link
              href="/"
              className="common_btn text-nowrap wow fadeInUp"
              data-wow-delay="0.7s"
            >
              Go Back Home
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <VisibleSlowlyBottom />
    </>
  );
}
