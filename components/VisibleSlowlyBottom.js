"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// main.js:
//   const visibleSlowlyBottom = document.querySelectorAll(".visible-slowly-bottom");
//   function visibleSlowly() {
//     visibleSlowlyBottom.forEach((splitArea) => {
//       if (splitArea.anim) { splitArea.anim.progress(1).kill(); splitArea.split.revert(); }
//       splitArea.split = new SplitText(splitArea, { type: "lines,words,chars", linesClass: "split-line" });
//       splitArea.anim = gsap.from(splitArea.split.chars, {
//         scrollTrigger: { trigger: splitArea, toggleActions: "restart pause resume reverse", start: "top 90%" },
//         duration: 0.8, ease: "circ.out", y: 70, stagger: 0.02,
//       });
//     });
//   }
//   ScrollTrigger.addEventListener("refresh", visibleSlowly);
//   visibleSlowly();
//
// Renders nothing - it only drives the animation for whatever
// .visible-slowly-bottom elements the page has, leaving the markup untouched.
export default function VisibleSlowlyBottom() {
  useGSAP(() => {
    const areas = gsap.utils.toArray(".visible-slowly-bottom");
    // main.js parked `.split` / `.anim` on the DOM nodes themselves; a Map keeps
    // the same bookkeeping without mutating the elements.
    const splits = new Map();

    const visibleSlowly = () => {
      areas.forEach((area) => {
        const previous = splits.get(area);
        if (previous) {
          previous.anim.progress(1).kill();
          previous.split.revert();
        }

        const split = new SplitText(area, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });

        const anim = gsap.from(split.chars, {
          scrollTrigger: {
            trigger: area,
            toggleActions: "restart pause resume reverse",
            start: "top 90%",
          },
          duration: 0.8,
          ease: "circ.out",
          y: 70,
          stagger: 0.02,
        });

        splits.set(area, { split, anim });
      });
    };

    ScrollTrigger.addEventListener("refresh", visibleSlowly);
    visibleSlowly();

    // gsap.context calls a returned function on revert, so the refresh listener
    // comes off and the split DOM is restored when the page unmounts. useGSAP
    // reverts the context, which kills the tweens and their ScrollTriggers.
    return () => {
      ScrollTrigger.removeEventListener("refresh", visibleSlowly);
      splits.forEach(({ split }) => split.revert());
      splits.clear();
    };
  });

  return null;
}
