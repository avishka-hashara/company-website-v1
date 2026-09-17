"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// main.js (Swiper 8):
//   const sponsorWrapp03 = new Swiper(".sponsor-wrapp03", {
//     spaceBetween: 30,
//     speed: 1500,
//     loop: true,
//     centeredSlides: true,
//     autoplay: { delay: 1000, disableOnInteraction: false },
//     navigation: { nextEl: ".partner-prev", prevEl: ".partner-next" },
//     breakpoints: {
//       1399: { slidesPerView: 6 }, 1199: { slidesPerView: 5 },
//       991: { slidesPerView: 4 }, 767: { slidesPerView: 3 },
//       650: { slidesPerView: 2 }, 575: { slidesPerView: 2 },
//       0: { slidesPerView: 2 },
//     },
//   });
//
// Every value is carried over unchanged. Swiper 14 needs its modules declared
// explicitly (v8 auto-registered them from the bundle build), and breakpoint
// keys are listed ascending - numeric object keys iterate in numeric order
// either way, so that is presentation only. Note that .partner-prev and
// .partner-next do not exist anywhere in index-3.html, so the navigation config
// was already inert in the template; it is kept verbatim rather than dropped.
const logos = [
  "/assets/img/sponsor/s-slide01.png",
  "/assets/img/sponsor/s-slide02.png",
  "/assets/img/sponsor/s-slide03.png",
  "/assets/img/sponsor/s-slide04.png",
  "/assets/img/sponsor/s-slide05.png",
  "/assets/img/sponsor/s-slide06.png",
];

// Swiper 8 cloned slides to build its loop; Swiper 9+ recycles real ones and
// refuses to loop unless `slides.length >= slidesPerView + loopedSlides`.
// centeredSlides rounds slidesPerView up to an odd number, so the widest
// breakpoint (6 per view) is evaluated as 7 with loopedSlides 4 - 11 slides
// needed. Listing the six logos twice gives 12 and clears every breakpoint,
// which is the same duplication v8 was doing internally.
const slides = [...logos, ...logos];

export default function SponsorSlider() {
  return (
    <Swiper
      className="sponsor-wrapp03"
      modules={[Autoplay, Navigation]}
      spaceBetween={30}
      speed={1500}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      navigation={{ nextEl: ".partner-prev", prevEl: ".partner-next" }}
      breakpoints={{
        0: { slidesPerView: 2 },
        575: { slidesPerView: 2 },
        650: { slidesPerView: 2 },
        767: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1199: { slidesPerView: 5 },
        1399: { slidesPerView: 6 },
      }}
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="sponsor-item03">
            <img src={src} alt="img" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
