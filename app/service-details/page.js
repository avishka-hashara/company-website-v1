import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BlogThumbSlider from "@/components/BlogThumbSlider";
import BlogPrevNext from "@/components/BlogPrevNext";
import VideoPopup from "@/components/VideoPopup";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web Development",
  description:
    "Web development at Arigo: custom builds, front-end and back-end engineering, responsive design and performance work that keeps sites fast, secure and scalable.",
  path: "/service-details",
});

// Body content of service-details.html, between </header> and <footer>.
const benefits = [
  {
    title: "Faster Performance",
    text: "Optimized code and modern technologies ensure fast-loading websites and smooth user experiences.",
  },
  {
    title: "Secure & Reliable",
    text: "Built with strong security practices to protect data, users, and long-term website stability.",
  },
  {
    title: "Fully Responsive",
    text: "Websites adapt perfectly across desktops, tablets, and mobile devices for consistent usability.",
  },
  {
    title: "Better User Experience",
    text: "User-focused development improves engagement, navigation, and overall satisfaction.",
  },
];

export default function ServiceDetails() {
  return (
    <>
      <BreadcrumbBanner
        title="WEB DEVELOPMENT"
        headingClassName="text-center mb-4 heading-font visible-slowly-bottom"
        tags={[
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
          "Web App Development",
          "GRAPHIC DESIGN",
        ]}
      />

      {/* web service Section Start */}
      <section className="web-servies-section section-padding fix">
        <div className="container">
          <div className="blog-list-item">
            <div className="position-relative rounded-5 overflow-hidden">
              <BlogThumbSlider
                slides={[
                  "/assets/img/service/service-slide1.png",
                  "/assets/img/service/service-slide2.png",
                ]}
                href="/service-details"
                slideClassName="rounded-5 overflow-hidden"
                linkClassName="thumb rounded-5 overflow-hidden w-100 d-block"
              />
            </div>
          </div>
          <div
            className="max-w-1370px mx-auto mb-4 pb-xl-2 mt-3 pt-xl-2 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="fs-64px fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              From Development to Continuous Digital Improvemen
            </div>
            <p className="mb-xl-3 mb-2">
              On the other hand we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue;
            </p>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through upon weakness
              of which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice and nothing prevents our being
              able to do what we like best, every pleasure is to be welcomed and
              every pain avoided.
            </p>
          </div>
          <div
            className="max-w-1370px mx-auto mb-4 pb-xl-4 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <h2 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              Services Overview
            </h2>
            <p className="mb-xl-3 mb-2">
              We deliver complete web development solutions designed to meet
              modern business needs. Our services include custom website
              development, front-end and back-end engineering, responsive design,
              and performance optimization. We focus on building secure,
              scalable, and fast-loading websites that provide seamless user
              experiences across all devices.
            </p>
            <p>
              From concept to deployment, our development process emphasizes
              clean code, usability, and long-term maintainability. Whether it’s
              a corporate website, portfolio, or e-commerce platform, we create
              reliable digital solutions that help brands grow, engage users, and
              achieve measurable results.
            </p>
          </div>

          <div className="mb-4">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="d-flex gap-3 align-items-center">
                  <div
                    className="thumb w-100 rounded-4 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img
                      src="/assets/img/service/service-box1.png"
                      alt="img"
                      className="w-100 rounded-4"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex flex-column gap-3">
                      <div
                        className="thumb w-100 rounded-4 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <img
                          src="/assets/img/service/service-box2.png"
                          alt="img"
                          className="w-100 rounded-4"
                        />
                      </div>
                      <div
                        className="thumb w-100 rounded-4 wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <img
                          src="/assets/img/service/service-box3.png"
                          alt="img"
                          className="w-100 rounded-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="thumb d-center w-100 rounded-4 position-relative wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <img
                    src="/assets/img/service/service-box4.png"
                    alt="img"
                    className="w-100 rounded-4"
                  />
                  <VideoPopup
                    href="https://www.youtube.com/watch?v=xUZOXrb1c4E"
                    className="video_148 zoom-in text-uppercase position-absolute video-popup rounded-circle d-center fs-24px text-white bg-theme"
                  >
                    Play
                  </VideoPopup>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex gap-3 align-items-start">
                  <div
                    className="thumb mt-lg-5 pt-xxl-3 w-100 rounded-4 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img
                      src="/assets/img/service/service-box5.png"
                      alt="img"
                      className="w-100 rounded-4"
                    />
                  </div>
                  <div
                    className="thumb w-100 rounded-4 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <img
                      src="/assets/img/service/service-box6.png"
                      alt="img"
                      className="w-100 rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="max-w-1370px mx-auto mb-4 pb-xl-2 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <h2 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              Benefits You’ll Get
            </h2>
            <p className="mb-xl-3 mb-2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias in excepturi sint occaecati cupiditate
              non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem
              rerum facilis distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil imped
            </p>
          </div>
          <div className="max-w-1370px mx-auto wow fadeInUp" data-wow-delay="0.9s">
            <div className="max-w-1129">
              <div className="row g-4">
                {benefits.map((benefit) => (
                  <div className="col-sm-6" key={benefit.title}>
                    <div className="d-flex gap-2">
                      <i className="fa-solid fa-circle text-theme"></i>
                      <div>
                        <h3 className="fs--18px mb-1">{benefit.title}</h3>
                        <p>{benefit.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
