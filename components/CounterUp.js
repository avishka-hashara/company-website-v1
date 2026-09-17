"use client";

import { useEffect, useRef, useState } from "react";

// main.js: $(".count").counterUp({ delay: 15, time: 4000 });
//
// jquery.counterup builds the whole sequence up front, then walks it with a
// chained setTimeout - reproduced here step for step so the pacing and the
// rounding match. Waypoints fired it at offset "100%" (the trigger line sits at
// the bottom of the viewport, i.e. the moment any part of the element scrolls
// in) and then called this.destroy(), so it runs exactly once; that is an
// IntersectionObserver at threshold 0 followed by unobserve.
const TIME = 4000;
const DELAY = 15;
const BEGIN_AT = 0;

// counterUpper() from the plugin.
function buildSequence(text, time, delay, beginAt) {
  const divisions = time / delay;
  const isComma = /[0-9]+,[0-9]+/.test(text);
  const num = text.replace(/,/g, "");
  const decimalPlaces = (num.split(".")[1] || "").length;
  const start = beginAt > num ? num : beginAt;

  const nums = [];
  for (let i = divisions; i >= (start / num) * divisions; i--) {
    let value = parseFloat((num / divisions) * i).toFixed(decimalPlaces);

    if (isComma) {
      while (/(\d+)(\d{3})/.test(value.toString())) {
        value = value.toString().replace(/(\d+)(\d{3})/, "$1,$2");
      }
    }

    nums.unshift(value);
  }

  return nums;
}

export default function CounterUp({
  value,
  time = TIME,
  delay = DELAY,
  beginAt = BEGIN_AT,
}) {
  // Renders the target number until the counter is triggered, which is what the
  // template shows before the element scrolls into view (and what a client with
  // no JS would keep).
  const [display, setDisplay] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer;

    const run = () => {
      const nums = buildSequence(String(value), time, delay, beginAt);
      setDisplay(String(beginAt));

      const step = () => {
        const next = nums.shift();
        if (next === undefined) return;
        setDisplay(next);
        if (nums.length) timer = setTimeout(step, delay);
      };

      timer = setTimeout(step, delay);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          obs.unobserve(entry.target); // waypoint's this.destroy()
          run();
        }
      },
      { threshold: 0 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [value, time, delay, beginAt]);

  return (
    <span className="count" ref={ref}>
      {display}
    </span>
  );
}
