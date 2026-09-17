"use client";

import { useEffect } from "react";

// Replacement for `new WOW().init()` (wow.js 1.3.0), which main.js called with
// no options. Defaults reproduced here: boxClass "wow", animateClass "animated",
// offset 0, mobile true, live true, resetAnimation true.
//
// wow.js works by caching each box's computed animation-name, blanking it and
// hiding the box, then restoring both once the box scrolls into view - the
// .animated class is what supplies animation-duration and fill-mode, so adding
// it is what actually starts the animation. Markup is untouched: the .wow /
// fadeInUp / data-wow-delay attributes in the template stay exactly as they are.
//
// The one deliberate difference is the trigger: wow.js polls with a scroll +
// resize listener plus a 50ms setInterval, this uses IntersectionObserver.
const BOX_CLASS = "wow";
const ANIMATE_CLASS = "animated";

export default function ScrollReveal() {
  useEffect(() => {
    const known = new WeakSet();
    const animationNames = new WeakMap();
    const revealed = new Set();
    // data-wow-offset shrinks the bottom of the viewport, so one observer per
    // distinct offset. The template uses none of them, i.e. a single observer.
    const observers = new Map();

    // wow.js customStyle(): duration/delay/iteration are applied on both the
    // hidden and the visible pass.
    const applyTimings = (box) => {
      const duration = box.getAttribute("data-wow-duration");
      const delay = box.getAttribute("data-wow-delay");
      const iteration = box.getAttribute("data-wow-iteration");

      if (duration) box.style.animationDuration = duration;
      if (delay) box.style.animationDelay = delay;
      if (iteration) box.style.animationIterationCount = iteration;
    };

    // wow.js resetAnimation(): strips the animate class once the animation ends.
    const onAnimationEnd = (event) => {
      const box = event.target || event.srcElement;
      box.className = box.className.replace(ANIMATE_CLASS, "").trim();
    };

    const hide = (box) => {
      const name = window.getComputedStyle(box).animationName;
      animationNames.set(box, name === "none" ? "" : name);

      box.style.visibility = "hidden";
      applyTimings(box);
      box.style.animationName = "none";
    };

    const show = (box) => {
      window.requestAnimationFrame(() => {
        box.style.visibility = "visible";
        applyTimings(box);
        box.style.animationName = animationNames.get(box) || "";
        box.className = `${box.className} ${ANIMATE_CLASS}`;
      });

      box.addEventListener("animationend", onAnimationEnd);
      revealed.add(box);
    };

    const onIntersect = (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        // wow.js drops a box from its list once shown - reveal happens once.
        observer.unobserve(entry.target);
        show(entry.target);
      }
    };

    const observerFor = (offset) => {
      let observer = observers.get(offset);

      if (!observer) {
        observer = new IntersectionObserver(onIntersect, {
          rootMargin: `0px 0px ${-offset}px 0px`,
          threshold: 0,
        });
        observers.set(offset, observer);
      }

      return observer;
    };

    const register = (root) => {
      if (!root || root.nodeType !== Node.ELEMENT_NODE) return;

      const boxes = [];
      if (root.classList.contains(BOX_CLASS)) boxes.push(root);
      boxes.push(...root.querySelectorAll(`.${BOX_CLASS}`));

      for (const box of boxes) {
        if (known.has(box)) continue;
        known.add(box);

        hide(box);
        const offset = Number(box.getAttribute("data-wow-offset")) || 0;
        observerFor(offset).observe(box);
      }
    };

    register(document.body);

    // wow.js's `live: true` MutationObserver. This is what picks up elements
    // rendered by a client-side route change.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) register(node);
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observers.forEach((observer) => observer.disconnect());
      observers.clear();
      revealed.forEach((box) =>
        box.removeEventListener("animationend", onAnimationEnd),
      );
      revealed.clear();
    };
  }, []);

  return null;
}
