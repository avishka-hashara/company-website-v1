import InertLink from "@/components/InertLink";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sarah Johnson, Marketing Partner",
  description:
    "Sarah Johnson, marketing partner at Arigo, brings 12 years of expertise across brand identity, campaign strategy and digital growth for global brands.",
  path: "/team-details",
});

// Body content of team-details.html. Its breadcrumb is the heading-only variant
// - no bread-link list at all.
const socials = [
  "fa-brands fa-facebook",
  "fa-brands fa-dribbble",
  "fa-brands fa-instagram",
  "fa-brands fa-twitter",
];

export default function TeamDetails() {
  return (
    <>
      <BreadcrumbBanner title="Sarah Johnson" showCrumbs={false} />

      {/*<< team-main details Section Start >>*/}
      <section className="team-main-section fix section-padding">
        <div className="container container1370">
          <div className="row g-4 mb-5 wow fadeInUp" data-wow-delay="0.5s">
            <div className="col-md-4 col-xxl-3 col-lg-4 text-md-start text-center">
              <div className="d-flex flex-column gap-4">
                <div className="cont">
                  <p className="fs-six fw-medium pra-clr mb-1">Role</p>
                  <div className="fs-24px text-uppercase fw-medium lh-1 mb-0">
                    Marketing Partner
                  </div>
                </div>
                <div className="cont">
                  <p className="fs-six fw-medium pra-clr mb-1">Role</p>
                  <div className="fs-24px text-uppercase fw-medium lh-1 mb-0">
                    LK Road, 12274 United States
                  </div>
                </div>
                <div className="cont">
                  <p className="fs-six fw-medium pra-clr mb-2">Social Media</p>
                  <div className="social-gray justify-content-md-start justify-content-center position-static p-0 m-0 gap-xl-3 gap-2 d-flex align-items-center">
                    {socials.map((icon) => (
                      <InertLink className="icon" key={icon}>
                        <i className={icon}></i>
                      </InertLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xxl-6 col-lg-4">
              <div className="team-details-thumb w-100 rounded-pill">
                <img
                  src="/assets/img/team/team-details-big.png"
                  alt="img"
                  className="w-100 rounded-pill"
                />
              </div>
            </div>
            <div className="col-md-4 col-xxl-3 col-lg-4">
              <div className="d-flex flex-column gap-4 text-md-start text-center">
                <div className="cont">
                  <p className="fs-six fw-medium pra-clr mb-1">Experience</p>
                  <div className="fs-24px text-uppercase fw-medium lh-1 mb-0">
                    12 Years Expertise
                  </div>
                </div>
                <div className="cont">
                  <p className="fs-six fw-medium pra-clr mb-1">Email</p>
                  <div className="fs-24px text-uppercase fw-medium lh-1 mb-0">
                    infoarigo@gmail.com
                  </div>
                </div>
                <div className="cont">
                  <p className="fs-six fw-medium pra-clr mb-2">Website</p>
                  <div className="fs-24px text-uppercase fw-medium lh-1 mb-0">
                    https://www
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="mb-3 fs-32px wow fadeInUp" data-wow-delay="0.4s">
              Work Experience
            </h2>
            <p className="mb-xxl-3 mb-2 fw-medium wow fadeInUp" data-wow-delay="0.5s">
              Our team brings years of hands-on experience working with startups,
              growing businesses, and established brands across multiple
              industries. We have successfully planned and executed marketing
              strategies, branding campaigns, and digital growth initiatives that
              deliver measurable results.
            </p>
            <p className="fw-medium wow fadeInUp" data-wow-delay="0.6s">
              From brand identity development to performance-driven digital
              marketing, our experience spans the full marketing lifecycle. We
              have collaborated closely with clients to understand their goals,
              solve complex challenges, and create tailored solutions. This
              diverse experience allows us to adapt quickly, stay ahead of
              industry trends, and deliver impactful marketing solutions that help
              brands grow, engage their audiences, and achieve long-term success.
            </p>
          </div>
        </div>
      </section>

      <VisibleSlowlyBottom />
    </>
  );
}
