"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// main.js (Swiper 8):
//   const blogThumbWrapper = new Swiper(".blog-thumb-wrapper", {
//     spaceBetween: 10,
//     speed: 1500,
//     loop: true,
//     navigation: { nextEl: ".array-prev", prevEl: ".array-next" },
//     breakpoints: {
//       1199: { slidesPerView: 1 }, 767: { slidesPerView: 1 },
//       575: { slidesPerView: 1 }, 0: { slidesPerView: 1 },
//     },
//   });
//
// Values carried over unchanged, navigation included - and as on the homepage
// testimonial slider, nextEl/prevEl are swapped in the template, so the left
// arrow advances. Preserved deliberately.
//
// Loop guard (`slides.length < slidesPerView + loopedSlides`): slidesPerView is
// 1 and centeredSlides is off, so loopedSlides falls to slidesPerGroup = 1 and
// two slides clear it exactly (2 < 2 is false). The single-slide instance on
// blog-standard.html does NOT clear it - see the note in app/blog/page.js.
//
// Only the slider and its two buttons live here; each page supplies its own
// wrapper markup, which differs between the detail pages and the blog list.
export default function BlogThumbSlider({
  slides,
  href,
  slideClassName,
  linkClassName,
}) {
  return (
    <>
      <Swiper
        className="blog-thumb-wrapper"
        modules={[Navigation]}
        spaceBetween={10}
        speed={1500}
        loop={true}
        navigation={{ nextEl: ".array-prev", prevEl: ".array-next" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          767: { slidesPerView: 1 },
          1199: { slidesPerView: 1 },
        }}
      >
        {slides.map((src, index) => (
          <SwiperSlide className={slideClassName} key={index}>
            <Link href={href} className={linkClassName}>
              <img src={src} alt="img" className="w-100" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="array-prev" type="button">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="array-next" type="button">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </>
  );
}
