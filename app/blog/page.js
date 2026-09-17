import Link from "next/link";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BlogSidebar from "@/components/BlogSidebar";
import BlogThumbSlider from "@/components/BlogThumbSlider";
import BlogPrevNext from "@/components/BlogPrevNext";
import VideoPopup from "@/components/VideoPopup";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Marketing insight from the Arigo team - digital marketing trends, social campaigns that convert, content strategy and creative ideas that get noticed.",
  path: "/blog",
});

// Body content of blog-standard.html, between </header> and <footer>. This is
// the source for /blog; blog.html is permanently out of scope (see AGENTS.md).
//
// The four cards differ in how their media is presented, so each is written out
// rather than driven from one shape: a plain linked thumbnail, a slider, a video
// popup, and a plain linked thumbnail again.
const excerpt =
  "Quisque volutpat non nisl idele tincidunt praesent at eros vitae the pulvinar ornare. Nuncion eleifen the interdum velit, ac accumsan dui fermentum et. In the imperdiet ...";

function DateBox({ className = "date-box m-xxl-4 m-lg-3 m-2" }) {
  return (
    <div className={className}>
      <span className="month">Jun</span>
      <span className="date">16</span>
    </div>
  );
}

function CardBody({ category, title }) {
  return (
    <div className="conts">
      <div className="d-flex mb-2 align-items-center gap-md-4 gap-3">
        <p className="fs-six fw-medium">{category}</p>
        <p className="pra-clr">-</p>
        <p className="fs-six fw-medium">0 Comments</p>
      </div>
      <h2 className="mb-3">
        <Link href="/blog-details">{title}</Link>
      </h2>
      <p className="fw-medium mb-4">{excerpt}</p>
      <div className="pt-xl-2">
        <Link
          href="/blog-details"
          className="common_btn common_btn-blacktheme d-inline-flex text-nowrap"
        >
          VIEW DETAILS
          <span className="icon_wrapper">
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <>
      <BreadcrumbBanner title="Blog list" />

      {/* blog Section Start */}
      <section className="blog-event-section section-padding fix">
        <div className="container container1370">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog-standard-details pe-xxl-5">
                <div className="row g-4">
                  <div className="col-12">
                    <div
                      className="blog-list-item position-relative border rounded-5 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <DateBox />
                      <Link href="/blog-details" className="thumb w-100 d-block">
                        <img
                          src="/assets/img/blog/blog-standard1.png"
                          alt="img"
                          className="w-100"
                        />
                      </Link>
                      <CardBody
                        category="Learn & Grow"
                        title="Digital Marketing Trends to Watch This Year"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="blog-list-item position-relative border rounded-5 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <DateBox className="date-box m-xxl-4 m-lg-3 m-2 z-2" />
                      <div className="position-relative">
                        {/* Only one slide in the template, so Swiper 14 logs its
                            loop warning here - see the note in the report. With a
                            single slide there is nothing to advance to either
                            way, so nothing is visibly different from v8. */}
                        <BlogThumbSlider
                          slides={["/assets/img/blog/blog-standard2.png"]}
                          href="/blog-details"
                          linkClassName="thumb w-100 d-block"
                        />
                      </div>
                      <CardBody
                        category="Digital Growth"
                        title="Social Media Campaigns That Convert"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="blog-list-item position-relative border rounded-5 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <DateBox />
                      <div className="thumb position-relative w-100 d-center">
                        <img
                          src="/assets/img/blog/blog-standard3.png"
                          alt="img"
                          className="w-100"
                        />
                        <VideoPopup
                          href="https://www.youtube.com/watch?v=w6uX9jamcwQ"
                          className="video-blog video-popup position-absolute"
                        >
                          <i className="fas fa-play"></i>
                        </VideoPopup>
                      </div>
                      <CardBody
                        category="Growth Strategies"
                        title="Content Marketing Tips for Brand Growth"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="blog-list-item position-relative border rounded-5 wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <DateBox />
                      <Link href="/blog-details" className="thumb w-100 d-block">
                        <img
                          src="/assets/img/blog/blog-standard4.png"
                          alt="img"
                          className="w-100"
                        />
                      </Link>
                      <CardBody
                        category="Brand & Marketing"
                        title="Creative Campaign Ideas That Get Noticed"
                      />
                    </div>
                  </div>
                </div>
                <BlogPrevNext />
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <VisibleSlowlyBottom />
    </>
  );
}
