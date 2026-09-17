import Link from "next/link";
import InertLink from "@/components/InertLink";

// <section class="drive-growth-section"> - byte-identical in index-3.html and
// service.html (the sources differ only in where a sentence wraps).
const driveTags = ["ART DIRECTION", "LOGO DESIGN", "BRANDING IDENTITY"];

// Only the first card links its two thumbnails; the rest are plain divs.
const driveItems = [
  { title: "Digital Marketing Strategy", delay: "0.6s", linkedThumbs: true },
  { title: "Brand Strategy & Positioning", delay: "0.7s" },
  { title: "SEO & Performance Marketing", delay: "0.8s" },
  { title: "Social Media Marketing", delay: "0.9s" },
];

export default function DriveGrowthSection() {
  return (
    <section className="drive-growth-section recent-word-section section-padding fix">
      <img
        src="/assets/img/blog/blog-circle.png"
        alt="img"
        className="circle-ele cir36"
      />
      <div className="container">
        <div className="d-flex flex-md-nowrap gap-2 border-bottom pb-xl-5 pb-4 flex-wrap align-items-end justify-content-center gap-4 mb-48">
          <div className="section-header-unique d-flex justify-content-start gap-2">
            <div>
              <div
                className="head-one d-flex mb-2 mb-md-0 align-items-center gap-2 flex-sm-nowrap flex-wrap mb-0 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <span>Services Designed to</span>
              </div>
              <div
                className="head-two d-flex align-items-center gap-xxl-3 gap-lg-2 gap-1 flex-md-nowrap flex-wrap wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <span className="ab text-nowrap">Drive Growth</span>
                <img
                  src="/assets/img/element/text-snak.png"
                  alt="img"
                  className="pt-4 d-lg-block d-none mt-4"
                />
                <p className="text-start">
                  We deliver strategic, creative, and performance-driven
                  marketing services focused on scaling brands, increasing
                  visibility,
                </p>
                <div>
                  <Link
                    href="/service"
                    className="common_btn common_btn-blacktheme mt-md-0 mt-2 text-nowrap"
                  >
                    VIEW ALL SERVICES
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container1370 pt-5">
        <div className="drive-growth-wrap">
          {driveItems.map((item) => (
            <div
              className="drive-growth-items wow fadeInUp"
              data-wow-delay={item.delay}
              key={item.title}
            >
              <div className="cont position-relative z-1">
                <h2 className="text-center mb-3">
                  <Link href="/service-details">{item.title}</Link>
                </h2>
                <div className="drive-tags d-flex flex-wrap align-items-center gap-xxl-4 gap-xl-3 gap-2 justify-content-center">
                  {driveTags.map((tag) => (
                    <InertLink key={tag}>{tag}</InertLink>
                  ))}
                </div>
              </div>
              <div className="drive-thumb-wrap gap-2 d-flex align-items-center justify-content-between w-100">
                {item.linkedThumbs ? (
                  <>
                    <Link href="/service-details" className="thumb1 d-block">
                      <img
                        src="/assets/img/thumbnail/drive-thumb1.png"
                        alt="img"
                      />
                    </Link>
                    <Link href="/service-details" className="thumb2 d-block">
                      <img
                        src="/assets/img/thumbnail/drive-thumb2.png"
                        alt="img"
                      />
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="thumb1">
                      <img
                        src="/assets/img/thumbnail/drive-thumb1.png"
                        alt="img"
                      />
                    </div>
                    <div className="thumb2">
                      <img
                        src="/assets/img/thumbnail/drive-thumb2.png"
                        alt="img"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
