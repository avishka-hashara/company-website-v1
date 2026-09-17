import { Fragment } from "react";
import Link from "next/link";
import InertLink from "@/components/InertLink";
import BlogSearchForm from "@/components/BlogSearchForm";

// <div class="blog-right-area"> - byte-identical in blog-standard.html and
// blog-details.html.
//
// The search form is inert in the template: action="javascript:void(0)" and a
// type="button" submit, so it never submits or filters anything. Kept that way.
const categories = [
  { label: "Early Education", count: "(08)" },
  { label: "Creative Learning", count: "(02)" },
  { label: "Child Development", count: "(05)" },
  { label: "Parenting Tips", count: "(08)" },
  { label: "School Life", count: "(02)" },
  { label: "Health & Wellness", count: "(04)" },
];

const recentPosts = [
  {
    img: "/assets/img/blog/recent-blog1.png",
    title: "Social Media Campaigns That Convert and Scale",
  },
  {
    img: "/assets/img/blog/recent-blog2.png",
    title: "Content Marketing Strategies for Modern Brands",
  },
  {
    img: "/assets/img/blog/recent-blog3.png",
    title: "SEO Strategies That Deliver Long-Term Results",
  },
];

const tags = [
  "Email Marketing",
  "SEO Tips",
  "Brand Identity",
  "Email Marketing",
  "UX & Conversion",
  "Paid Ads",
];

export default function BlogSidebar() {
  return (
    <div className="blog-right-area">
      <div className="search-in wow fadeInUp" data-wow-delay="0.4s">
        <div className="fs-three mb-3 lh-1 heading-font fw-bold">Search</div>
        <BlogSearchForm />
      </div>
      <div className="search-in wow fadeInUp" data-wow-delay="0.5s">
        <div className="fs-three mb-3 lh-1 heading-font fw-bold">
          Categories
        </div>
        <ul className="blog-category">
          {categories.map((category, index) => (
            <li key={index}>
              <InertLink>
                <span className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-arrow-right fs-seven"></i>
                  {category.label}
                </span>
                <span>{category.count}</span>
              </InertLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-in wow fadeInUp" data-wow-delay="0.6s">
        <div className="fs-three mb-3 lh-1 heading-font fw-bold">
          Recent Post
        </div>
        <div className="d-flex flex-column gap-4">
          {recentPosts.map((post, index) => (
            <Fragment key={post.img}>
              {index > 0 ? <div className="border-bottom"></div> : null}
              <div className="recent-right-item">
                <Link href="/blog-details" className="thumb w-100 d-block">
                  <img src={post.img} alt="img" className="w-100" />
                </Link>
                <div className="cont">
                  <div className="d-flex mb-1 fs-seven text-theme fw-medium align-items-center gap-2">
                    <i className="fa-solid fa-circle dot"></i>
                    Feb 12, 2026
                  </div>
                  <Link href="/blog-details" className="fs--18px">
                    {post.title}
                  </Link>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="search-in wow fadeInUp" data-wow-delay="0.7s">
        <div className="fs-three mb-3 lh-1 heading-font fw-bold">Tags</div>
        <ul className="blog-tags">
          {tags.map((tag, index) => (
            <li key={index}>
              <InertLink>{tag}</InertLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
