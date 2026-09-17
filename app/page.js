import Link from "next/link";
import CounterUp from "@/components/CounterUp";
import InertLink from "@/components/InertLink";
import DriveGrowthSection from "@/components/DriveGrowthSection";
import RecentWordItems from "@/components/RecentWordItems";
import TeamCard from "@/components/TeamCard";
import NewsSection from "@/components/NewsSection";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import HeroThumbRotate from "@/components/HeroThumbRotate";
import SponsorSlider from "@/components/SponsorSlider";
import TestimonialSlider03 from "@/components/TestimonialSlider03";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  description:
    "Arigo is a creative marketing studio delivering brand strategy, web development and performance campaigns that help ambitious brands scale up much faster.",
  path: "/",
});

// Body content of index-3.html, between </header> and <footer>. The header,
// footer, offcanvas, preloader, cursor and search overlay all come from the
// shared shell in app/layout.js.

// Structured data for the business. Everything here mirrors what the contact
// page actually displays - Google expects schema to match visible content - so
// it all needs replacing alongside the template's placeholder contact details.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Arigo",
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE.url}`,
  logo: `${SITE_URL}/assets/img/logo/logo.png`,
  description:
    "Creative marketing studio delivering brand strategy, web development and performance campaigns.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "221B Baker Street",
    addressLocality: "London",
    postalCode: "NW1 6XE",
    addressCountry: "GB",
  },
  telephone: "+44-20-7946-0123",
  email: "hello@arigoagencygmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:20",
    },
  ],
  areaServed: "GB",
};

const socials = [
  "fa-brands fa-facebook",
  "fa-brands fa-dribbble",
  "fa-brands fa-instagram",
  "fa-brands fa-twitter",
];

const teamMembers = [
  { img: "/assets/img/team/team-single1.png", role: "Brand Designer", pos: "t001", delay: "0.4s" },
  { img: "/assets/img/team/team-single2.png", role: "Ux Designer", pos: "t002", delay: "0.5s" },
  { img: "/assets/img/team/team-single3.png", role: "Brand Designer", pos: "t003", delay: "0.6s" },
  { img: "/assets/img/team/team-single4.png", role: "Brand Designer", pos: "t004", delay: "0.7s" },
  { img: "/assets/img/team/team-single5.png", role: "Brand Designer", pos: "t005", delay: "0.4s" },
];

function ApproachButton({ label }) {
  return (
    <Link
      href="/project-details"
      className="btn_approach text-nowrap wow fadeInUp"
      data-wow-delay="0.5s"
    >
      {label}
      <img src="/assets/img/icon/right-arrow.svg" alt="img" />
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={businessSchema} />

      {/* Banner Section Start */}
      <section className="banner-section03 position-relative">
        <div className="container pb-5 z-1 position-relative">
          <div className="row pb-5 g-4 justify-content-between">
            <div className="col-lg-12">
              <div className="banner-content z-1 position-relative">
                <div className="content-head" data-wow-delay="0.7s">
                  <h1>Marketing</h1>
                  <img
                    src="/assets/img/banner/video-shape.png"
                    alt="img"
                    className="cir36 video_tree"
                  />
                  <div className="d-flex flex-column gap-xxl-3 gap-3">
                    <Link
                      href="/service"
                      className="arrow_in fs--18px text-white d-flex gap-2"
                    >
                      UX/UI Design
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link
                      href="/about"
                      className="arrow_in fs--18px text-white d-flex gap-2"
                    >
                      Brand Identity
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link
                      href="/project"
                      className="arrow_in fs--18px text-white d-flex gap-2"
                    >
                      Web Development
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="studio-text">
                  <img
                    src="/assets/img/banner/text-tree.png"
                    alt="img"
                    className="tree-icon d-sm-block d-none"
                  />
                  <div className="cont">
                    <h2 className="mb-lg-4 mb-3 pb-xxl-1">studio</h2>
                    <p className="text-white opacity-75 mb-48">
                      Data-driven strategies, creative campaigns, and measurable
                      results that help your business scale faster. Data-driven
                      strategies, creative campaigns,Data-driven strategies,
                    </p>
                    <Link href="/contact" className="touch d-center">
                      <span className="text-center">
                        Get In Touch <br />
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="fs-20px text-white opacity-75 lh-base">
                We Deliver Performance-Focused Digital <br /> Marketing
                Solutions.
              </div>
              <div className="hero-social-area3">
                <img
                  src="/assets/img/banner/social-line.png"
                  alt="img"
                  className="s-line"
                />
                <div className="social-white gap-xl-3 gap-2 d-flex flex-md-column align-items-center">
                  {socials.map((icon) => (
                    <InertLink className="icon" key={icon}>
                      <i className={icon}></i>
                    </InertLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="thumb-small-pos d-md-block d-none">
          <img src="/assets/img/banner/hero-thumb-big.png" alt="img" />
        </div>
        <img
          src="/assets/img/banner/sqare-shape.png"
          alt="img"
          className="square updowns"
        />
      </section>
      {/* Banner Section Start */}

      {/* Sponsor03 Section Start */}
      <div className="sponsor-section03 border-bottom fix">
        <div className="container border-end border-start p-md-0">
          <div className="d-flex align-items-center gap-3">
            <div className="border-end py-4">
              <div className="fs-24px fw-bold text-dark text-uppercase px-md-5 px-sm-3 px-2">
                Global <br /> Partners:
              </div>
            </div>
            <SponsorSlider />
          </div>
        </div>
      </div>

      {/* about03 Section Start */}
      <section className="who-aboutus_section03 fix">
        <div className="container p-md-0 border-end border-start">
          <div className="section-padding pb-0 px-sm-2">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="who-aboutus_left position-relative z-1">
                  <img
                    src="/assets/img/element/fun-shape-ele.png"
                    alt="img"
                    className="w-100 z-n1 h-100 position-absolute bottom-0 start-0"
                  />
                  <div className="who-badge-grop w-100">
                    <div className="who-badge updowns">
                      <i className="fa-solid fa-circle"></i>
                      Awward Winning Marketing
                    </div>
                    <div className="text-end mt-4">
                      <div className="who-badge">
                        <i className="fa-solid fa-circle"></i>
                        Successful Campaigns
                      </div>
                    </div>
                  </div>
                  <div className="count-grp d-flex align-items-center gap-1 justify-content-center">
                    <CounterUp value="25" />
                    <span>+</span>
                  </div>
                  <div className="who-badge-grop">
                    <div className="who-badge zoom-in">
                      <i className="fa-solid fa-circle"></i>
                      Average ROI Growth
                    </div>
                    <div className="text-end mt-4">
                      <div className="who-badge updowns">
                        <i className="fa-solid fa-circle"></i>
                        Years of Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about-content_03 ps-lg-5">
                  <h2 className="mb-4 pb-xl-1 wow fadeInUp" data-wow-delay="0.5s">
                    <span className="this-badge me-2">Who we are_ who</span>
                    By Immersing Ourselves in Your Brand, We Challenge the
                    Ordinary and Turn Bold Ideas into Strategic Digital
                    Experiences That Drive Real, Measurable Growth
                  </h2>
                  <div className="about-thumb__grp3">
                    <div className="thumb1 wow fadeInUp" data-wow-delay="0.6s">
                      <img src="/assets/img/about/about3-v1.png" alt="img" />
                    </div>
                    <div className="cont wow fadeInUp" data-wow-delay="0.7s">
                      <p className="mb-xxl-3 mb-lg-3 mb-md-2 mb-1">
                        We begin by fully immersing ourselves in your brand,
                        understanding its purpose, audience, and ambition.
                        Through deep research, strategic thinking, and creative
                        execution, we challenge the ordinary and transform
                      </p>
                      <p className="mb-48">
                        Bold ideas into meaningful digital experiences that
                        deliver measurable growth, lasting impact, and real
                        business results.
                      </p>
                      <Link
                        href="/about"
                        className="common_btn common_btn-blacktheme mt-md-0 mt-2 text-nowrap"
                      >
                        more about us
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </div>
                    <div className="thumb2 wow fadeInUp" data-wow-delay="0.8s">
                      <img src="/assets/img/about/about3-v2.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DriveGrowthSection />

      {/* show reel Section Start */}
      <div className="showreel-section fix">
        <div className="container">
          <div className="showreel-content">
            ©2025
            <div className="starburst-mask cir36">
              <img src="/assets/img/thumbnail/mask-thumb.png" alt="img" />
            </div>
            SHOWREEL
          </div>
        </div>
      </div>

      {/* recent word Section Start */}
      <section className="recent-word-section fix">
        <img
          src="/assets/img/blog/blog-circle.png"
          alt="img"
          className="circle-ele cir36"
        />
        <div className="container border-end border-start p-md-0">
          <div className="section-padding">
            <div className="d-flex flex-md-nowrap gap-2 border-bottom pb-4 flex-wrap align-items-end justify-content-center gap-4 mb-48">
              <div className="section-header-unique d-flex justify-content-start gap-2">
                <div>
                  <div
                    className="head-one d-flex mb-2 mb-md-0 align-items-center gap-2 flex-sm-nowrap flex-wrap mb-0 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <span>OUR</span>
                    <span className="text-theme">RECENT</span>
                  </div>
                  <div
                    className="head-two d-flex align-items-center gap-xxl-3 gap-lg-2 gap-1 flex-sm-nowrap flex-wrap wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <span className="ab text-nowrap">WORD</span>
                    <p className="text-start">
                      We deliver strategic, creative, and performance-driven
                      marketing services focused on scaling brands, increasing
                      visibility,
                    </p>
                    <Link
                      href="/project"
                      className="common_btn common_btn-blacktheme mt-sm-0 mt-2 text-nowrap"
                    >
                      VIEW ALL project
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <RecentWordItems thumbSmallHref="/service-details" thumbSmallInternal />
          </div>
        </div>
      </section>

      {/* team Section Start */}
      <section className="team-section-03 section-padding fix">
        <img
          src="/assets/img/blog/blog-circle.png"
          alt="img"
          className="circle-ele cir36"
        />
        <div className="container">
          <div className="mb-xl-3">
            <div className="d-flex flex-md-nowrap gap-2 flex-wrap align-items-end justify-content-center gap-4 mb-4 pb-lg-2">
              <div className="section-header-unique d-flex justify-content-start gap-2">
                <div>
                  <div
                    className="head-two mb-sm-0 mb-2 d-flex align-items-center gap-xxl-3 gap-lg-2 gap-2 flex-sm-nowrap flex-wrap wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <p className="text-sm-end">
                      We deliver strategic, creative, and performance-driven
                      marketing services focused on scaling brands, increasing
                      visibility,
                    </p>
                    <span className="ab text-nowrap">Our Team of</span>
                  </div>
                  <div
                    className="head-one d-flex align-items-center gap-sm-4 gap-3 flex-sm-nowrap flex-wrap mb-0 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <span>Marketing</span>
                    <span className="text-theme">Experts</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm-center">
              <div
                className="client-inner bg-white shadow-sm justify-content-center mb-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="client-all">
                  <span className="icon">
                    <img
                      src="/assets/img/banner/client-p1.png"
                      alt="img"
                      className="rounded-circle"
                    />
                  </span>
                  <span className="icon">
                    <img
                      src="/assets/img/banner/client-p2.png"
                      alt="img"
                      className="rounded-circle border"
                    />
                  </span>
                  <span className="icon">
                    <img
                      src="/assets/img/banner/client-p3.png"
                      alt="img"
                      className="rounded-circle border"
                    />
                  </span>
                  <span className="icon icon_in">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <p className="fs--18px text-start heading-font">
                  More then <br />
                  25K clients reviews
                </p>
              </div>
            </div>
          </div>
          <div className="team-wrapper-003">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.pos}
                img={member.img}
                role={member.role}
                className={`team-items rounded-pill ${member.pos} overflow-hidden wow fadeInUp`}
                delay={member.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* our approach Section Start */}
      <section className="our-approach-section section-padding fix">
        <div className="container container1200">
          <div className="approach-wrapper">
            <div className="approach-content d-center">
              <div>
                <h2 className="wow fadeInUp" data-wow-delay="0.5s">
                  Our <br /> Approach
                </h2>
                <Link
                  href="/project-details"
                  className="common_btn common_btn-blurtheme text-nowrap wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  Start Your Project
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="approach-btn-grp approach-btn-grp1">
              <div className="">
                <ApproachButton label="Discover & Understand" />
              </div>
              <div className="mt-lg-5 updowns">
                <ApproachButton label="Optimize & Scale" />
              </div>
            </div>
            <div className="approach-btn-grp approach-btn-grp2">
              <div className="updowns">
                <ApproachButton label="Strategize & Plan" />
              </div>
              <div className="mt-lg-5 pt-xl-5 zoom-in">
                <ApproachButton label="Create & Execute" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/element/pattren-circle.png"
          alt="img"
          className="pattren-circle cir36"
        />
        <img
          src="/assets/img/element/pattren.png"
          alt="img"
          className="pattren zoom-in"
        />
      </section>

      {/* testimonial Section Start */}
      <section className="testimonial-section03 fix section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-5">
              <div className="about-right-content testimonial-left-content03">
                <div className="mb-48">
                  <div className="mb-3">
                    <div
                      className="d-flex align-items-center gap-3 flex-wrap wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="testimonial-badge">Testimonial_T</div>
                      <h2 className="mb-0">
                        Clients <span className="text-theme">Share</span>
                      </h2>
                    </div>
                    <h3 className="wow fadeInUp" data-wow-delay="0.5s">
                      Their Success With Us
                    </h3>
                  </div>
                  <p className="mb-48 fw-medium wow fadeInUp" data-wow-delay="0.6s">
                    Our clients’ stories reflect the impact of our work. Through
                    strategy, creativity, and collaboration, we help brands
                    achieve measurable growth, stronger engagement
                  </p>
                  {/* testimonial.html is permanently out of scope; the
                      testimonials live on /about */}
                  <Link
                    href="/about"
                    className="common_btn common_btn-blacktheme text-nowrap wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    Testimonial Here
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="about-count_inner justify-content-start">
                  <div className="about_count_item">
                    <div className="box">
                      <div className="d-flex justify-content-center mb-1 cont-area">
                        <CounterUp value="92" />
                        <span>%</span>
                      </div>
                      <p className="fs-seven fw-normal text-dark opacity-75">
                        Of our Clients return For a Second Project
                      </p>
                    </div>
                  </div>
                  <div className="about_count_item">
                    <div className="box">
                      <div className="d-flex justify-content-center mb-1 cont-area">
                        <CounterUp value="82" />
                        <span>%</span>
                      </div>
                      <p className="fs-seven fw-normal text-dark opacity-75">
                        Saw Increased Engagement On Digital
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <TestimonialSlider03 />
            </div>
          </div>
        </div>
      </section>

      <NewsSection />

      <VisibleSlowlyBottom />
      <HeroThumbRotate />
    </>
  );
}
