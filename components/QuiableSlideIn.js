"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// main.js ("portfolio panel"):
//   let pr = gsap.matchMedia();
//   pr.add("(min-width: 767px)", () => {
//     let otherSections = document.querySelectorAll(".quiable-slide-in");
//     gsap.set(otherSections, { scale: 1 });
//     otherSections.forEach((section) => {
//       gsap.to(section, {
//         scale: 0.7,
//         scrollTrigger: {
//           trigger: section, pin: section, scrub: 1,
//           start: "top 10%", end: "bottom 60%",
//           endTrigger: ".project-floting-wrap",
//           pinSpacing: false, markers: false,
//         },
//       });
//     });
//   });
export default function QuiableSlideIn() {
  useGSAP(() => {
    const pr = gsap.matchMedia();

    pr.add("(min-width: 767px)", () => {
      const otherSections = document.querySelectorAll(".quiable-slide-in");

      gsap.set(otherSections, {
        scale: 1,
      });

      otherSections.forEach((section) => {
        gsap.to(section, {
          scale: 0.7,
          scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: "top 10%",
            end: "bottom 60%",
            endTrigger: ".project-floting-wrap",
            pinSpacing: false,
            markers: false,
          },
        });
      });
    });

    return () => pr.revert();
  });

  return null;
}
