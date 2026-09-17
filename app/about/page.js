import Link from "next/link";
import CounterUp from "@/components/CounterUp";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import FounderSection from "@/components/FounderSection";
import TestimonialEventSection from "@/components/TestimonialEventSection";
import NewsSection from "@/components/NewsSection";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import QuiableSlideIn from "@/components/QuiableSlideIn";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet the developer behind Arigo: years spent building reliable, scalable digital products for American brands, with 92% of clients returning for more.",
  path: "/about",
});

// Body content of about.html, between </header> and <footer>. The header,
// footer, offcanvas, preloader, cursor and search overlay all come from the
// shared shell in app/layout.js.

const counters = [
  { value: "92", text: "Of our Clients return For a Second Project" },
  { value: "82", text: "Of our Clients return For a Second Project" },
  { value: "74", text: "Saw Increased Engagement On Digital" },
];

const workItems = [
  {
    img: "/assets/img/thumbnail/work1.png",
    title: ["Brand Identity for Creative Brands"],
    text: "Developed visual identities that reflect brand values and create strong.",
    number: "01",
  },
  {
    img: "/assets/img/thumbnail/work2.png",
    title: ["Website Design & Development"],
    text: "Crafted modern, responsive websites that balance aesthetics,",
    number: "02",
  },
  {
    img: "/assets/img/thumbnail/work23.png",
    title: ["Mobile App ", "Interface Design"],
    text: "Created clean, user-friendly app interfaces that enhance,",
    number: "03",
  },
];

export default function About() {
  return (
    <>
      <BreadcrumbBanner title="about us" />

      {/* who about Section Start */}
      <section className="who-about-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="thumb-wrap">
                <div className="thumb mb-lg-4 mb-3">
                  <img
                    src="/assets/img/about/about-thumb2.png"
                    alt="img"
                    className="mimg"
                  />
                  <div className="about-text-box d-center">
                    <div className="text-circle__box d-center">
                      <div className="icon">
                        <img src="/assets/img/about/text-grop.png" alt="img" />
                      </div>
                      <img
                        src="/assets/img/about/about-circle-text.png"
                        alt="img"
                        className="circle__text cir36"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-sm-2 gap-1 justify-content-between gap-xl-5 gap-4">
                  <div className="fs-20px text-uppercase fw-medium text-dark">
                    Full-service developer helping American <br /> brands since
                    2019.
                  </div>
                  <Link
                    href="/blog"
                    className="common_btn common_btn-blacktheme text-nowrap"
                  >
                    view all articles
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right-content">
                <div className="mb-4 pb-xxl-2 text-lg-end text-center">
                  <h2 className="visible-slowly-bottom">Who I Am</h2>
                  <h3 className="wow fadeInUp" data-wow-delay="0.5s">
                    A Developer Passionate About Building Meaningful Digital
                    Experiences
                  </h3>
                  <p className="mt-lg-3 mt-2 wow fadeInUp" data-wow-delay="0.6s">
                    I’m a dedicated developer focused on creating reliable,
                    scalable, and user-friendly digital solutions. With a strong
                    foundation in modern technologies and a problem-solving
                    mindset, I turn complex ideas into clean, efficient code. I
                    care deeply about performance, usability,
                  </p>
                </div>
                <div className="about-count_inner">
                  {counters.map((counter, index) => (
                    <div className="about_count_item" key={index}>
                      <div className="box">
                        <div className="d-flex justify-content-center mb-1 cont-area">
                          <CounterUp value={counter.value} />
                          <span>%</span>
                        </div>
                        <p className="fs-seven fw-normal text-dark opacity-75">
                          {counter.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* work Section Start */}
      <section className="work-section-unique bg-black fix section-padding">
        <div className="container">
          <div className="serial-section-wrap d-flex align-items-center gap-3 mb-48">
            <div className="text-white opacity-75 fw-medium fs--18px">
              {"{03}"}
            </div>
            <div className="line w-100"></div>
            <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
              <i className="fa-solid fa-circle"></i>
              Portfolio 2020 - 2026
            </div>
          </div>
          <div className="working-wrapper project-floting-wrap">
            {workItems.map((item) => (
              <div
                className="working_inner quiable-slide-in mb-3 bg-black d-flex align-items-center justify-content-between gap-4"
                key={item.number}
              >
                <div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
                  Latest
                </div>
                <div className="wroking-service-card">
                  <Link href="/project-details" className="thumb">
                    <img src={item.img} alt="img" />
                  </Link>
                  <div className="content">
                    <div className="mb-xxl-5 mb-4">
                      <div className="title fs-32px heading-font fw-bold text-white text-uppercase mb-xxl-3 mb-2">
                        {item.title.length > 1 ? (
                          <>
                            {item.title[0]}
                            <br /> {item.title[1]}
                          </>
                        ) : (
                          item.title[0]
                        )}
                      </div>
                      <p className="fs-seven text-white opacity-50">
                        {item.text}
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-2 mb-xxl-4 mb-3">
                      <div className="d-flex text-white fs-six align-items-center gap-2">
                        <span className="year opacity-50 fw-normal">
                          Years:
                        </span>
                        2026
                      </div>
                      <div className="d-flex text-white fs-six align-items-center gap-2">
                        <span className="year opacity-50 fw-normal">
                          Category:
                        </span>
                        <div className="text-uppercase text-white fw-bold">
                          drands
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link
                        href="/project-details"
                        className="common_btn common_btn-blurtheme text-nowrap ps-3 py-1 px-1"
                      >
                        VIEW ALL project
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                      <div className="fs-32px fw-bold text-white">
                        {item.number}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
                  Work
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialEventSection />

      <FounderSection />

      {/*<< My Process Section Start >>*/}
      <section className="my-process-section section-padding fix">
        <div className="container py-sm-5 my-xxl-4">
          <div className="process-wrap">
            <div className="row g-0">
              <div className="col-sm-6">
                <h3 className="process-title style1">01 - Discover &amp; Plan</h3>
              </div>
              <div className="col-sm-6">
                <h3 className="process-title style2">
                  02 - Design &amp; Architecture
                </h3>
              </div>
              <div className="col-12">
                <div className="process-wrap-title mb-lg-4 mb-3 mt-lg-3 mt-3 heading-font fw-bold">
                  My Process
                </div>
              </div>
              <div className="col-sm-6">
                <h3 className="process-title style3">03 - Develop &amp; Build</h3>
              </div>
              <div className="col-sm-6">
                <h3 className="process-title style4">03 - Develop &amp; Build</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsSection sectionClassName="news-section news-section03 bg-FFEEE9 section-padding fix" />

      <VisibleSlowlyBottom />
      <QuiableSlideIn />
    </>
  );
}
