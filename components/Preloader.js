"use client";

import { useEffect, useState } from "react";

// main.js:
//   function loader() {
//     $(window).on("load", function () {
//       $(".preloader").addClass("loaded");
//       $(".preloader").delay(600).fadeOut();
//     });
//   }
//
// jQuery's .fadeOut() defaults to 400ms, so the sequence is: add .loaded, wait
// 600ms, fade opacity to 0 over 400ms, then display:none. The element stays in
// the DOM afterwards, exactly as fadeOut leaves it.
const DELAY_MS = 600;
const FADE_MS = 400;

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [faded, setFaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let fadeTimer;
    let hideTimer;

    const start = () => {
      setLoaded(true);
      fadeTimer = setTimeout(() => setFaded(true), DELAY_MS);
      hideTimer = setTimeout(() => setHidden(true), DELAY_MS + FADE_MS);
    };

    // main.js runs as a blocking body script, so its load handler is always
    // registered before the event fires. This effect runs after hydration, by
    // which point load has usually already fired - hence the readyState check.
    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start);
    }

    return () => {
      window.removeEventListener("load", start);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      id="preloader"
      className={`preloader${loaded ? " loaded" : ""}`}
      style={{
        // ease-in-out is the CSS equivalent of jQuery's default "swing" easing.
        transition: `opacity ${FADE_MS}ms ease-in-out`,
        opacity: faded ? 0 : undefined,
        display: hidden ? "none" : undefined,
      }}
    >
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading mb-2">
          <span className="letters-loading">A</span>
          <span className="letters-loading">R</span>
          <span className="letters-loading">I</span>
          <span className="letters-loading">G</span>
          <span className="letters-loading">O</span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
