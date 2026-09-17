import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import TeamCard from "@/components/TeamCard";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Team",
  description:
    "The Arigo team - brand designers, UX designers and marketing strategists who plan, build and ship the campaigns behind our clients' measurable growth.",
  path: "/team",
});

// Body content of team.html, between </header> and <footer>. The cards are the
// same markup as the homepage team section, minus the t001..t005 position
// classes and the wow attributes, so they come from the shared TeamCard.
const members = [
  { img: "/assets/img/team/team-single1.png", role: "Brand Designer" },
  { img: "/assets/img/team/team-single2.png", role: "Ux Designer" },
  { img: "/assets/img/team/team-single3.png", role: "Brand Designer" },
  { img: "/assets/img/team/team-single4.png", role: "Brand Designer" },
  { img: "/assets/img/team/team-single5.png", role: "Brand Designer" },
  { img: "/assets/img/team/team-single6.png", role: "Brand Designer" },
  { img: "/assets/img/team/team-single7.png", role: "Ux Designer" },
  { img: "/assets/img/team/team-single8.png", role: "Brand Designer" },
  { img: "/assets/img/team/team-single9.png", role: "Brand Designer" },
  { img: "/assets/img/team/team-single10.png", role: "Brand Designer" },
];

export default function Team() {
  return (
    <>
      <BreadcrumbBanner title="TEAM MUMBER" />

      {/* team Section Start */}
      <section className="team-event-section section-padding fix">
        <div className="container">
          {/* "wrappper" is the template's spelling - kept as-is */}
          <div className="team-main-wrappper">
            {members.map((member) => (
              <TeamCard key={member.img} img={member.img} role={member.role} />
            ))}
          </div>
        </div>
      </section>

      <VisibleSlowlyBottom />
    </>
  );
}
