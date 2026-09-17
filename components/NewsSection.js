import Link from "next/link";

// <section class="news-section news-section03 ..."> - identical in index-3.html
// and about.html apart from about.html's extra bg-FFEEE9 on the section.
const newsItems = [
  {
    img: "/assets/img/blog/blog3-v1.png",
    tag: "Creative Minds",
    title: "Social Media Trends Every Marketer Should Know",
    delay: ".5s",
  },
  {
    img: "/assets/img/blog/blog3-v2.png",
    tag: "Knowledge Hub",
    title: "Leveraging Analytics for Smarter Marketing Decisions",
    delay: ".7s",
  },
  {
    img: "/assets/img/blog/blog3-v3.png",
    tag: "Creative Minds",
    title: "The Role of Influencer Marketing in Modern Campaigns",
    delay: ".9s",
  },
];

export default function NewsSection({
  sectionClassName = "news-section news-section03 section-padding fix",
}) {
  return (
    <section className={sectionClassName}>
      <img
        src="/assets/img/blog/blog-circle.png"
        alt="img"
        className="circle-ele cir36"
      />
      <div className="container">
        <div className="d-flex flex-md-nowrap gap-2 flex-wrap align-items-end justify-content-center gap-4 mb-48">
          <div className="section-header-unique d-flex justify-content-start gap-2">
            <div>
              <div
                className="head-two mb-sm-0 mb-3 d-flex align-items-center gap-xxl-3 gap-lg-2 gap-1 flex-sm-nowrap flex-wrap wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <p className="text-sm-end">
                  We deliver strategic, creative, and performance-driven
                  marketing services focused on scaling brands, increasing
                  visibility,
                </p>
                <span className="ab text-nowrap">Blog &amp;</span>
              </div>
              <div
                className="head-one d-flex align-items-center gap-sm-4 gap-3 flex-sm-nowrap flex-wrap mb-0 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Link
                  href="/blog"
                  className="common_btn common_btn-blacktheme text-nowrap"
                >
                  VIEW ALL project
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
                <span className="text-theme">resources</span>
              </div>
            </div>
          </div>
        </div>
        <div className="news-wrapper">
          <div className="row justify-content-center g-4">
            {newsItems.map((item) => (
              <div
                className="col-xxl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item.img}
              >
                <div className="news-single-items news-single-items3 bg-white p-3 rounded-4 overflow-hidden">
                  <div className="news-thumb-area d-flex gap-xl-4 gap-3 overflow-hidden">
                    <Link
                      href="/blog-details"
                      className="news-image w-100 image-box-effect d-flex position-relative overflow-hidden rounded-4"
                    >
                      <img
                        src={item.img}
                        alt="img"
                        className="w-100 img rounded-4"
                      />
                      <img
                        src={item.img}
                        alt="img"
                        className="w-100 img rounded-4"
                      />
                      <img src={item.img} alt="img" className="w-100 rounded-4" />
                    </Link>
                    <div className="rotated-text">
                      <span className="tags-blog text-dark bg-FFEEE9 d-inline-block rounded-pill py-3 px-2 fw-medium">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="news-content d-flex flex-column justify-content-between pb-xl-3 pb-2 pt-lg-4 pt-3 news-content1 bg-transparent px-xxl-2 px-0 border-0">
                    <span className="text-dark d-block mb-2 fw-medium opacity-75 fs-seven">
                      By Tushar On July 10, 2025
                    </span>
                    <div className="new-cont-title mb-lg-4 mb-3">
                      <Link
                        href="/blog-details"
                        className="text-dark fw-bold fs-24px text-uppercase fw-semibold visible-slowly-bottom"
                      >
                        {item.title}
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/blog-details"
                        className="read-more text-dark fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2"
                      >
                        VIEW Blog
                        <div className="bg-theme w-32 min-w-32 h-32 p1-bg rounded-circle d-center">
                          <img src="/assets/img/icon/right-arrow.svg" alt="img" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
