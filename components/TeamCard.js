import Link from "next/link";
import InertLink from "@/components/InertLink";

// <div class="team-items ..."> - the card body is identical in index-3.html and
// team.html. index-3 adds a t001..t005 position class plus wow attributes;
// team.html uses the bare card.
const socials = [
  "fa-brands fa-facebook",
  "fa-brands fa-dribbble",
  "fa-brands fa-instagram",
  "fa-brands fa-twitter",
];

export default function TeamCard({
  img,
  name = "Sarah Johnson",
  role,
  className = "team-items rounded-pill overflow-hidden",
  delay,
}) {
  return (
    <div className={className} data-wow-delay={delay}>
      <img src={img} alt="img" />
      <div className="content-box d-center">
        <div className="cont">
          <div className="mb-xxl-5 mb-4 pb-xxl-1">
            <h2>
              <Link href="/team-details" className="fs-24px mb-1 text-white">
                {name}
              </Link>
            </h2>
            <span>{role}</span>
          </div>
          <div className="social-black justify-content-md-start justify-content-center position-static p-0 m-0 gap-xl-3 gap-2 d-flex align-items-center">
            {socials.map((icon) => (
              <InertLink className="icon" key={icon}>
                <i className={icon}></i>
              </InertLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
