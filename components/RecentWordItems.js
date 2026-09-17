import Link from "next/link";

// <div class="recent-word-wrapper"> - identical in index-3.html and
// project.html except for the .thumb-small target: index-3 points at
// service-details.html (out of scope), project.html at project-details.html.
// The wrappers around it differ per page, so only the three items live here.

function Tags() {
  return (
    <div className="d-flex mb-4 pb-lg-2 flex-wrap gap-xxl-3 gap-2 align-items-center">
      <span className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
        UI/UX Design
      </span>
      <span className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
        2026
      </span>
    </div>
  );
}

function Cont({ title }) {
  return (
    <div className="cont wow fadeInUp" data-wow-delay="0.6s">
      <Link
        href="/project-details"
        className="cart-title mb-2 d-block pb-1 text-dark fw-bold text-uppercase"
      >
        {title}
      </Link>
      <Tags />
      <div>
        <Link
          href="/project-details"
          className="read-more text-dark fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2"
        >
          VIEW PROJECT
          <div className="bg-theme w-32 min-w-32 h-32 p1-bg rounded-circle d-center">
            <img src="/assets/img/icon/right-arrow.svg" alt="img" />
          </div>
        </Link>
      </div>
    </div>
  );
}

function ThumbSmall({ img, href, internal }) {
  const content = (
    <img src={img} alt="img" className="w-100 img rounded-4" />
  );
  const className = "thumb-small rounded-4 wow fadeInUp";

  if (internal) {
    return (
      <Link href={href} className={className} data-wow-delay="0.7s">
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className} data-wow-delay="0.7s">
      {content}
    </a>
  );
}

export default function RecentWordItems({
  thumbSmallHref,
  thumbSmallInternal = false,
}) {
  const thumbSmall = { href: thumbSmallHref, internal: thumbSmallInternal };

  return (
    <div className="recent-word-wrapper">
      <div className="recent-single-items">
        <div className="recent-head wow fadeInUp" data-wow-delay="0.5s">
          <Link href="/project-details" className="thumb rounded-4">
            <img
              src="/assets/img/project/word-thumb1.png"
              alt="img"
              className="w-100 img rounded-4"
            />
          </Link>
          <div className="serial text-nowrap">
            01 <small>/05</small>
          </div>
        </div>
        <div className="recent-word-content ms-lg-auto pt-3">
          <Cont title="Brand Identity & Positioning" />
          <ThumbSmall
            img="/assets/img/project/word-thumb2.png"
            {...thumbSmall}
          />
        </div>
      </div>
      <div className="recent-single-items">
        <div className="recent-head wow fadeInUp" data-wow-delay="0.5s">
          <div className="serial text-nowrap">
            01 <small>/05</small>
          </div>
          <Link href="/project-details" className="thumb rounded-4">
            <img
              src="/assets/img/project/word-thumb3.png"
              alt="img"
              className="w-100 img rounded-4"
            />
          </Link>
        </div>
        <div className="recent-word-content me-lg-auto pt-3">
          <ThumbSmall
            img="/assets/img/project/word-thumb4.png"
            {...thumbSmall}
          />
          <Cont title="Social Media Growth Campaign" />
        </div>
      </div>
      <div className="recent-single-items">
        <div className="recent-head wow fadeInUp" data-wow-delay="0.5s">
          <Link href="/project-details" className="thumb rounded-4">
            <img
              src="/assets/img/project/word-thumb5.png"
              alt="img"
              className="w-100 img rounded-4"
            />
          </Link>
          <div className="serial text-nowrap">
            02 <small>/05</small>
          </div>
        </div>
        <div className="recent-word-content ms-lg-auto pt-3">
          <Cont title="Brand Refresh & Rebranding" />
          <ThumbSmall
            img="/assets/img/project/word-thumb6.png"
            {...thumbSmall}
          />
        </div>
      </div>
    </div>
  );
}
