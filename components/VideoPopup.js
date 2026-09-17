"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// main.js: $(".video-popup").magnificPopup({ type: "iframe", callbacks: {} });
//
// Magnific Popup is gone, so this reproduces what its iframe module built,
// without adding a library. The DOM below matches MFP 1.1's runtime output
// node for node, so app/styles/magnific-popup.css (the template's own
// stylesheet, copied in unchanged) styles it exactly as before:
//
//   <div class="mfp-bg mfp-ready"></div>
//   <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1">
//     <div class="mfp-container mfp-s-ready mfp-iframe-holder">
//       <div class="mfp-content">
//         <div class="mfp-iframe-scaler">
//           <button title="Close (Esc)" type="button" class="mfp-close">&#215;</button>
//           <iframe class="mfp-iframe" src="..." frameborder="0" allowfullscreen></iframe>
//         </div>
//       </div>
//       <div class="mfp-preloader">Loading...</div>
//     </div>
//   </div>
//
// Behaviour carried over: click the trigger to open, close on the close button,
// on a click outside .mfp-content, or on Escape (MFP's enableEscapeKey default).
const CLOSE_TITLE = "Close (Esc)"; // MFP's tClose
const LOADING_TEXT = "Loading..."; // MFP's tLoading

// MFP's iframe.patterns.youtube: { index: "youtube.com", id: "v=",
// src: "//www.youtube.com/embed/%id%?autoplay=1" }, where the id is everything
// after the last occurrence of "v=".
function toEmbedSrc(url) {
  if (url.indexOf("youtube.com") === -1) return url;
  const id = url.substr(url.lastIndexOf("v=") + 2);
  return `//www.youtube.com/embed/${id}?autoplay=1`;
}

export default function VideoPopup({ href, className, children }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const popup = (
    <>
      <div className="mfp-bg mfp-ready"></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        // MFP closes when the click lands outside .mfp-content.
        onClick={(event) => {
          if (!event.target.closest(".mfp-content")) setOpen(false);
        }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <button
                title={CLOSE_TITLE}
                type="button"
                className="mfp-close"
                onClick={() => setOpen(false)}
              >
                &#215;
              </button>
              <iframe
                className="mfp-iframe"
                src={toEmbedSrc(href)}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mfp-preloader">{LOADING_TEXT}</div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={(event) => {
          event.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      {/* MFP appended its markup to <body>, so the modal escapes any
          transformed or overflow-hidden ancestor exactly as it used to. `open`
          only ever becomes true from a click, so document.body is always
          available by the time the portal renders - no SSR guard needed. */}
      {open ? createPortal(popup, document.body) : null}
    </>
  );
}
