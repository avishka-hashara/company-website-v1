import InertLink from "@/components/InertLink";
import BlogSidebar from "@/components/BlogSidebar";
import BlogPrevNext from "@/components/BlogPrevNext";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

// The post's own title and summary: the <title>/OG tags and the BlogPosting
// headline below have to agree, so both read them from here.
const POST_TITLE = "Digital Marketing Trends to Watch This Year";
const POST_DESCRIPTION =
  "AI-driven automation, personalised experiences and data-led decisions - the digital marketing trends reshaping how brands plan, execute and measure work.";

export const metadata = pageMetadata({
  title: POST_TITLE,
  description: POST_DESCRIPTION,
  path: "/blog-details",
});

// Body content of blog-details.html, between </header> and <footer>. The
// comments and reply markup are converted as static markup, no functionality -
// the Reply buttons and the comment form are inert in the template too.
const socials = [
  "fa-brands fa-facebook",
  "fa-brands fa-dribbble",
  "fa-brands fa-instagram",
  "fa-brands fa-twitter",
  "fa-brands fa-vimeo-v",
];

const tags = ["Email Marketing", "SEO Tips", "Brand Identity"];

const comments = [
  {
    img: "/assets/img/blog/reply-user1.png",
    name: "Frank Flores",
    date: "July 20, 2023 at 7:22 pm",
    text: "Best theme I've ever worked with — it's basically 50+ Themes in one, super easy to customize, beautiful starting layouts/templates for a variety of website needs.",
    className: "replay-area-item align-items-start mb-4 pb-xl-2",
  },
  {
    img: "/assets/img/blog/reply-user2.png",
    name: "ARIGO",
    date: "July 21, 2023 at 7:22 pm",
    text: "The only thing I LOVE more than this theme and it's incredible options is the support team! Th are freakin AMAZEBALLS!",
    className: "replay-area-item align-items-start middle mb-4",
  },
];

// Structured data for the article. Every value is something the page itself
// shows - Google expects the two to agree - so the author, the date and the
// comment count are the template's, and they move when that copy does.
// datePublished is the visible "Apr 21, 2020"; there is no revision date
// anywhere on the page, so dateModified matches it.
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog-details`,
  },
  headline: POST_TITLE,
  description: POST_DESCRIPTION,
  image: `${SITE_URL}/assets/img/blog/blog-details-big1.png`,
  datePublished: "2020-04-21",
  dateModified: "2020-04-21",
  author: {
    "@type": "Person",
    name: "Polina Viola",
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/img/logo/logo.png`,
    },
  },
  keywords: tags,
  commentCount: comments.length,
};

export default function BlogDetails() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Banner Section Start */}
      <section className="banner-breadcrumb-section fix position-relative">
        <div className="container container1285">
          <div className="breadcrumb-content breadcrumb-content2">
            <p className="head-blog-pra">
              Blog <i className="fas fa-chevron-right fs-6"></i>
              Digital Marketing Trends to Watch This Year
            </p>
            <h1 className="text-start mb-4 pb-lg-2 heading-font visible-slowly-bottom">
              Digital Marketing Trends to Watch This Year
            </h1>
            <div className="text-start flex-wrap d-flex align-items-center gap-lg-4 gap-3">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="/assets/img/blog/reply-user2.png"
                  alt="img"
                  className="w-36 h-36 object-fit-cover rounded-circle"
                />
                <div className="fs-six fw-bold heading-font opacity-75 text-white">
                  Polina Viola
                </div>
              </div>
              <p className="text-white opacity-75">Apr 21, 2020</p>
              <div className="opacity-75 text-white">/</div>
              <p className="text-white opacity-75">2 Comments</p>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/element/circle-opacity.png"
          alt="img"
          className="breadcrumb-cirlce cir36"
        />
      </section>
      {/* Banner Section Start */}

      {/* blog Section Start */}
      <section className="blog-event-section section-padding fix">
        <div className="container container1370">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="blog-big-head-thumb rounded-4 w-100 position-relative">
                <img
                  src="/assets/img/blog/blog-details-big1.png"
                  alt="img"
                  className="w-100 rounded-4"
                />
                <div className="social-gray gap-xl-3 gap-2 d-flex align-items-center">
                  {socials.map((icon) => (
                    <a href="#" className="icon" key={icon}>
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog-standard-details">
                <div className="row g-4">
                  <div className="col-12">
                    <div
                      className="blog-standard-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <p className="mb-xl-3 mb-2 fw-medium">
                        Digital marketing continues to evolve as technology and
                        consumer behavior change rapidly. This year, brands are
                        focusing more on AI-driven automation, personalized
                        customer experiences, and data-led decision-making.
                        Short-form video content remains a powerful tool for
                        engagement,
                      </p>
                      <p className="fw-medium md-xl-3 mb-2">
                        while voice search and conversational marketing are
                        reshaping SEO strategies. Social commerce is growing
                        fast, allowing users to shop directly through social
                        platforms.
                      </p>
                      <p className="fw-medium">
                        At the same time, authentic branding and purpose-driven
                        marketing are becoming essential for building trust and
                        long-term relationships. Businesses that adapt to these
                        trends will gain stronger visibility, higher engagement,
                        and sustainable growth in an increasingly competitive
                        digital landscape.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pb-xxl-2 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="fs-two text-uppercase heading-font mb-2 fw-bold">
                        Introduction
                      </div>
                      <p className="fw-medium">
                        Digital marketing is evolving faster than ever as
                        technology, platforms, and consumer behavior continue to
                        shift. Businesses can no longer rely on traditional
                        strategies alone; they must adapt to a digital-first
                        mindset to stay competitive. Advances in artificial
                        intelligence, automation, and data analytics are
                        transforming
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="thumb w-100 rounded-4">
                      <img
                        src="/assets/img/blog/blog-details-big2.png"
                        alt="img"
                        className="w-100 rounded-4"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="fw-medium">
                      how brands plan, execute, and measure their marketing
                      efforts. At the same time, consumers expect more
                      personalized, relevant, and authentic experiences across
                      every digital touchpoint. Social media, search engines, and
                      content platforms are constantly changing, creating both
                      challenges and new opportunities for growth.
                    </p>
                  </div>
                  <div className="col-12">
                    <div className="quote__icon-box">
                      <img
                        src="/assets/img/element/quote-top.png"
                        alt="img"
                        className="quote"
                      />
                      <p className="fw-medium">
                        This blog delivers clear, up-to-date insights on digital
                        marketing trends. The content is easy to understand,
                        well-structured, and highly actionable for businesses of
                        all sizes.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="fw-medium">
                      Understanding these changes is essential for building
                      effective marketing strategies that deliver measurable
                      results. By staying informed about emerging digital
                      marketing trends, businesses can make smarter decisions,
                      connect more deeply with their audiences, and create
                      campaigns that drive engagement, trust, and long-term
                      success in an increasingly competitive digital landscape.
                    </p>
                  </div>

                  <div className="col-12">
                    <div className="d-flex border-top border-bottom py-4 align-items-center gap-3 flex-wrap justify-content-between">
                      <ul className="share-tag d-flex align-items-center gap-3 flex-wrap">
                        <li className="fs-20px fw-bold">Tags:</li>
                        {tags.map((tag, index) => (
                          <li key={index}>
                            <InertLink>{tag}</InertLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="quote-box_wrap mt-3 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="user-thumb-area-grop flex-sm-nowrap flex-wrap gap-3 d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
                        <div className="user-img">
                          <img
                            src="/assets/img/blog/alister-user.png"
                            alt="img"
                          />
                        </div>
                        <div className="author-info justify-content-start align-items-start text-start flex-column">
                          <div className="name mb-3 d-block fs-24px fw-bold heading-font">
                            Alister Jhone
                          </div>
                          <p className="text-capitalize fw-medium body-font">
                            All the Lorem Ipsum generators on the Internet tend
                            in repetition predefined chunks as necessary, making
                            this the combined with handful of model sentence
                            structures,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 pt-lg-3">
                    <div className="fs-32px fw-bold mb-4 pb-2">2 Comments</div>
                    {comments.map((comment) => (
                      <div className={comment.className} key={comment.name}>
                        <div className="thumbs">
                          <img src={comment.img} alt="img" />
                        </div>
                        <div className="content">
                          <div className="d-flex mb-md-2 mb-1 align-items-start justify-content-between flex-wrap gap-2">
                            <div className="author-info justify-content-start align-items-start text-start flex-column">
                              <div className="name lh-1 text-dark mt-1 mb-1 fs-20px">
                                {comment.name}
                              </div>
                              <span className="designation fw-medium pra-clr">
                                {comment.date}
                              </span>
                            </div>
                            <button
                              type="button"
                              className="p-0 btn fw-semibold text-dark border-0 outline-none"
                            >
                              Reply
                            </button>
                          </div>
                          <p className="fw-medium pra-clr">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-12 pt-4">
                    <div className="fs-32px fw-bold mb-4">Leave a Reply</div>
                    <div
                      className="contact-submit-area p-0 bg-transparent leave-comments wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="cont-grp-info">
                            <input
                              id="name"
                              type="text"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="cont-grp-info">
                            <input
                              id="email"
                              type="text"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="cont-grp-info">
                            <textarea
                              id="Message"
                              rows="4"
                              placeholder="Type your message"
                            ></textarea>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              I agree that my submitted data is being collected
                              and stored. *
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 pt-2">
                          <InertLink className="common_btn common_btn-iconblack d-inline-flex text-nowrap">
                            SEND MESSAGE
                            <span className="icon_wrapper">
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                          </InertLink>
                        </div>
                      </div>
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
