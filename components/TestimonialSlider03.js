"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// main.js (Swiper 8):
//   const testimonialSlideWrap3 = new Swiper(".testimonial-slide-wrap3", {
//     spaceBetween: 10,
//     speed: 1500,
//     loop: true,
//     effect: "fade",
//     autoplay: { delay: 1000, disableOnInteraction: false },
//     navigation: { nextEl: ".array-prev", prevEl: ".array-next" },
//     breakpoints: {
//       1199: { slidesPerView: 1 }, 767: { slidesPerView: 1 },
//       575: { slidesPerView: 1 }, 0: { slidesPerView: 1 },
//     },
//   });
//
// Values carried over unchanged, including the template's swapped navigation:
// nextEl is the LEFT button (.array-prev) and prevEl the RIGHT one
// (.array-next), so the left arrow advances the slider. That is how the
// template behaves and it is preserved deliberately.
//
// Swiper 14 needs Autoplay / Navigation / EffectFade declared explicitly; the
// selector strings themselves are unchanged, and resolve because Swiper React
// initialises in an effect, after the buttons below are in the DOM.
const slides = [
  {
    img: "/assets/img/testimonial/testimonial-thumbv31.png",
    name: "Emma Johnson",
    role: "CEO, BrightWave",
    quote:
      '"Working with this agency transformed our digital presence. Their strategy creativity drove real results and measurable growth "',
    rating: "4.9 Rating",
    ratingRole: "CEO, BrightWave",
  },
  {
    img: "/assets/img/testimonial/testimonial-thumbv31.png",
    name: "Devid Jhon",
    role: "CEO, LighttWave",
    quote:
      '"Working with this agency transformed our digital presence. Their strategy creativity drove real results and measurable growth "',
    rating: "4.9 Rating",
    ratingRole: "CEO, Stolingset",
  },
];

export default function TestimonialSlider03() {
  return (
    <div className="testimonial-wrapper03 position-relative">
      <Swiper
        className="testimonial-slide-wrap3"
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={10}
        speed={1500}
        loop={true}
        effect="fade"
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        navigation={{ nextEl: ".array-prev", prevEl: ".array-next" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          767: { slidesPerView: 1 },
          1199: { slidesPerView: 1 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide-items03">
              <div className="thumb w-100">
                <img src={slide.img} alt="img" />
              </div>
              <div className="name-box p-xxl-4 p-3">
                <div className="fs-24px text-uppercase text-dark mb-1">
                  {slide.name}
                </div>
                <p className="pra-clr">{slide.role}</p>
              </div>
              <div className="pra-box fs-24px text-dark text-uppercase lh-base">
                {slide.quote}
              </div>
              <div className="ratting-box p-xxl-4 p-3">
                <div className="fs-24px text-uppercase text-dark mb-1">
                  <i className="fas fa-star ratting pe-1"></i> {slide.rating}
                </div>
                <p className="pra-clr">{slide.ratingRole}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-arrow-grp d-flex align-items-center gap-3">
        <button className="array-prev" type="button">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="array-next active" type="button">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
