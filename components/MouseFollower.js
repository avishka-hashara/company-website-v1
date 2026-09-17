"use client";

import { useEffect, useRef, useState } from "react";

// main.js:
//   const follower = document.querySelector(".mouse-follower .cursor-outline");
//   const dot = document.querySelector(".mouse-follower .cursor-dot");
//   window.addEventListener("mousemove", (e) => {
//     follower.animate([{ opacity: 1, left: ..., top: ..., easing: "ease-in-out" }],
//                      { duration: 3000, fill: "forwards" });
//     dot.animate([...], { duration: 1500, fill: "forwards" });
//   });
//
//   $("a, button").on("mouseenter mouseleave", ...toggleClass("hide-cursor"));
//   $("h1, h2, h3, h4, .display-*").on(...toggleClass("highlight-cursor-head"));
//   $("p").on(...toggleClass("highlight-cursor-para"));
const HIDE_SELECTOR = "a, button";
const HEAD_SELECTOR =
  "h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six";
const PARA_SELECTOR = "p";

export default function MouseFollower() {
  const outlineRef = useRef(null);
  const dotRef = useRef(null);

  const [hideCursor, setHideCursor] = useState(false);
  const [highlightHead, setHighlightHead] = useState(false);
  const [highlightPara, setHighlightPara] = useState(false);

  useEffect(() => {
    const outline = outlineRef.current;
    const dot = dotRef.current;

    // The null check main.js is missing: it dereferences the querySelector
    // results unconditionally and throws on any page without .mouse-follower.
    if (!outline || !dot) return;

    const onMouseMove = (event) => {
      const frame = {
        opacity: 1,
        left: `${event.clientX}px`,
        top: `${event.clientY}px`,
        easing: "ease-in-out",
      };

      outline.animate([frame], { duration: 3000, fill: "forwards" });
      dot.animate([frame], { duration: 1500, fill: "forwards" });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // jQuery bound these once at DOMReady, which cannot work here - React renders
  // most of the matching elements after mount. Delegating on document covers
  // them all; guarding on relatedTarget reproduces mouseenter/mouseleave (which
  // do not bubble) from mouseover/mouseout (which do).
  useEffect(() => {
    const groups = [
      { selector: HIDE_SELECTOR, set: setHideCursor, className: null },
      {
        selector: HEAD_SELECTOR,
        set: setHighlightHead,
        className: "highlight-cursor-head",
      },
      {
        selector: PARA_SELECTOR,
        set: setHighlightPara,
        className: "highlight-cursor-para",
      },
    ];

    const handle = (event, entering) => {
      for (const group of groups) {
        const target = event.target.closest?.(group.selector);
        if (!target) continue;
        // Still inside the same element - jQuery would not have fired.
        if (event.relatedTarget && target.contains(event.relatedTarget)) continue;

        group.set(entering);
        if (group.className) {
          target.classList.toggle(group.className, entering);
        }
      }
    };

    const onOver = (event) => handle(event, true);
    const onOut = (event) => handle(event, false);

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  const className = [
    "mouse-follower",
    hideCursor ? "hide-cursor" : null,
    highlightHead ? "highlight-cursor-head" : null,
    highlightPara ? "highlight-cursor-para" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <span className="cursor-outline" ref={outlineRef}></span>
      <span className="cursor-dot" ref={dotRef}></span>
    </div>
  );
}
