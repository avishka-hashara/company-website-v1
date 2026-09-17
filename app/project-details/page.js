import { Fragment } from "react";
import Link from "next/link";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BlogThumbSlider from "@/components/BlogThumbSlider";
import BlogPrevNext from "@/components/BlogPrevNext";
import CounterUp from "@/components/CounterUp";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Brand Identity & Positioning",
  description:
    "How a fragmented brand became a clear market position through research, identity design and a new messaging framework, with the results shown in numbers.",
  path: "/project-details",
});

// Body content of project-details.html, between </header> and <footer>.
const facts = [
  { label: "Client:", value: "Addresss" },
  { label: "Project Team :", value: "04 Members" },
  { label: "Services:", value: "Branding, Logo, Messaging" },
  { label: "Date:", value: "January 27, 2026" },
  { label: "Category :", value: "Brand Identity & Positioning" },
];

const approachPoints = [
  "Brand research & market analysis",
  "Brand positioning strategy",
  "Logo & visual identity design",
  "Brand voice & messaging framework",
];

const results = [
  {
    value: "120",
    text: "Months Project Duration",
    className: "about_count_item border-bottom pb-3 wow fadeInLeft",
    delay: "0.5s",
  },
  {
    value: "45",
    text: "Average daily signups",
    className: "about_count_item secound border-bottom pb-3 wow fadeInLeft",
    delay: "0.7s",
  },
  {
    value: "300",
    text: "Average daily signups",
    className: "about_count_item third border-bottom pb-3 wow fadeInLeft",
    delay: "0.9s",
  },
];

export default function ProjectDetails() {
  return (
    <>
      <BreadcrumbBanner
        title="brand identity"
        headingClassName="text-center mb-4 heading-font visible-slowly-bottom"
        tags={[
          "Brand Identity & Positioning",
          "BRAND REFRESH & REBRANDING",
          "SOCIAL GROWTH CAMPANIGN",
          "Lead Generation Funnel",
        ]}
      />

      {/* web service Section Start */}
      <section className="web-servies-section section-padding fix">
        <div className="container">
          <div className="blog-list-item">
            <div className="position-relative rounded-5 overflow-hidden">
              <BlogThumbSlider
                slides={[
                  "/assets/img/service/service-slide2.png",
                  "/assets/img/service/service-slide1.png",
                ]}
                href="/service-details"
                slideClassName="rounded-5 overflow-hidden"
                linkClassName="thumb rounded-5 overflow-hidden w-100 d-block"
              />
            </div>
          </div>
          <div className="contact-info-wrap contact-info-wrap02 mb-4 rounded-pill mt-4">
            {facts.map((fact, index) => (
              <Fragment key={fact.label}>
                {index > 0 ? (
                  <div className="border border-h-96 p-0 w-auto rounded-0"></div>
                ) : null}
                <div className="contact-info_item">
                  <p className="mb-2 lh-1">{fact.label}</p>
                  <h2 className="m-0 fs--18px">{fact.value}</h2>
                </div>
              </Fragment>
            ))}
          </div>
          <div
            className="max-w-1370px mx-auto mb-4 pb-xl-2 pt-lg-2 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <h2 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              Project Overview
            </h2>
            <p className="mb-xl-3 mb-2">
              Our team partnered with Sarah Johnson to redefine their brand
              identity and establish a clear market position. The brand faced
              challenges with inconsistent visuals and messaging, which made it
              difficult to stand out in a competitive industry.
            </p>
            <p className="mb-4 pb-lg-2">
              We conducted in-depth research, analyzed the market and
              competitors, and developed a strategic positioning framework. Our
              creative team designed a cohesive visual identity, including logo,
              color palette, typography, and brand guidelines. We also crafted a
              compelling brand voice and messaging strategy. The result was a
              unified, professional brand that resonates with the target audience
              and strengthens market recognition.
            </p>
            <Link href="/" className="common_btn d-inline-flex text-nowrap">
              view website
              <span className="icon_wrapper">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
          <div className="max-w-1370px mx-auto mb-4 pb-lg-1 d-flex gap-xl-4 gap-3 align-items-center">
            <div className="thumb w-100 rounded-4 wow fadeInUp" data-wow-delay="0.4s">
              <img
                src="/assets/img/service/service-details1.png"
                alt="img"
                className="w-100 rounded-4"
              />
            </div>
            <div className="thumb w-100 rounded-4 wow fadeInUp" data-wow-delay="0.4s">
              <img
                src="/assets/img/service/service-details2.png"
                alt="img"
                className="w-100 rounded-4"
              />
            </div>
          </div>
          <div className="max-w-1370px mx-auto">
            <div
              className="row g-3 mb-lg-5 mb-4 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="col-md-4">
                <div className="fs-32px text-uppercase text-dark">Overview</div>
              </div>
              <div className="col-md-8">
                <p className="mb-xxl-3 mb-xl-2 mb-1">
                  The brand lacked clear positioning, resulting in low
                  recognition and limited differentiation from competitors.
                  Additionally, their internal teams struggled to maintain brand
                  consistency across digital and offline channels.
                </p>
                <p>
                  Our challenge was to develop a cohesive brand identity, define
                  a clear positioning strategy, and create visual and messaging
                  guidelines that would unify the brand and build trust with
                  customers across all touchpoints.
                </p>
              </div>
            </div>
            <div
              className="row g-3 mb-lg-5 pb-xxl-2 mb-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="col-md-4">
                <div className="fs-32px text-uppercase text-dark">
                  Our Approach
                </div>
              </div>
              <div className="col-md-8">
                <div className="row g-3">
                  {approachPoints.map((point) => (
                    <div className="col-sm-6" key={point}>
                      <div className="d-flex align-items-center gap-2">
                        <i className="fa-solid fa-circle text-theme"></i>
                        <div>
                          <p className="fs-six fw-medium">{point}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row g-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="col-md-4">
                <div className="fs-32px text-uppercase text-dark">Results</div>
              </div>
              <div className="col-md-8">
                <div className="d-flex service_count_grp flex-column gap-4">
                  {results.map((result) => (
                    <div
                      className={result.className}
                      data-wow-delay={result.delay}
                      key={result.value}
                    >
                      <div className="box d-flex gap-xxl-4 gap-xl-3 gap-2 flex-wrap align-items-end">
                        <div className="d-flex justify-content-center mb-0 cont-area">
                          <CounterUp value={result.value} />
                          <span>%</span>
                        </div>
                        <p className="fw-normal m-0 text-dark opacity-75">
                          {result.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <BlogPrevNext />
        </div>
      </section>

      <VisibleSlowlyBottom />
    </>
  );
}
