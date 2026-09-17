"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// main.js ("hero thumb"):
//   gsap.to(".thumb-small-pos", {
//     scrollTrigger: {
//       trigger: ".banner-section03",
//       start: "top top",
//       end: "bottom top",
//       scrub: true,
//     },
//     rotate: 15,
//     ease: "none",
//   });
//
// useGSAP reverts the context on unmount, which kills the tween and its
// ScrollTrigger.
export default function HeroThumbRotate() {
  useGSAP(() => {
    gsap.to(".thumb-small-pos", {
      scrollTrigger: {
        trigger: ".banner-section03",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      rotate: 15,
      ease: "none",
    });
  });

  return null;
}
