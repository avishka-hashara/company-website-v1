"use client";

import { createContext, useContext, useMemo, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

// main.js:
//   $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
//     $(".offcanvas__info").removeClass("info-open");
//     $(".offcanvas__overlay").removeClass("overlay-open");
//   });
//   $(".sidebar__toggle").on("click", function () {
//     $(".offcanvas__info").addClass("info-open");
//     $(".offcanvas__overlay").addClass("overlay-open");
//   });
//
// The panel slides via a CSS transform transition on .info-open and the overlay
// fades via .overlay-open, so driving those two class names from state gives the
// identical animation with no DOM manipulation. The trigger (.sidebar__toggle)
// lives in Header, hence the context.
const OffcanvasContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useOffcanvas() {
  return useContext(OffcanvasContext);
}

export function OffcanvasProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <OffcanvasContext.Provider value={value}>
      {children}
    </OffcanvasContext.Provider>
  );
}

export default function Offcanvas() {
  const { isOpen, close } = useOffcanvas();

  const inert = (event) => event.preventDefault();

  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info${isOpen ? " info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <Link href="/" className="offcanvas__logo">
                  <img src="/assets/img/logo/logo-black.png" alt="logo-img" />
                </Link>
                <div className="offcanvas__close">
                  <button onClick={close}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <MobileMenu />

              <div className="offcanvas__contact">
                {/* A heading with no section under it, and it outranked the
                    page's own h1 in document order - so it is a plain <div>
                    here. .offcanvas__contact-title in nextjs-fixes.css carries
                    the styling the h4 element used to bring; fw_600 still does
                    the weight, exactly as in the template. */}
                <div className="offcanvas__contact-title fw_600">
                  Contact Info
                </div>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      {/* fal -> fas: location-dot is solid-only in FA Free */}
                      <i className="fas fa-map-marker-alt fs-five"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target="_blank"
                        href="#"
                        className="fs-eight"
                        onClick={inert}
                      >
                        121 W 27th Street, Office 48 New York, NY, USA 10001
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      {/* far -> fas: phone is solid-only in FA Free */}
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+1 (234) 567 890</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      {/* fal -> far: envelope has a regular cut in FA Free */}
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com">
                        <span className="mailto:info@example.com">
                          example@example.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      {/* fal -> far: clock has a regular cut in FA Free */}
                      <i className="far fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#" onClick={inert}>
                        Mod-friday, 06am -02pm
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link
                    href="/contact"
                    className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2"
                  >
                    Get Started Today
                  </Link>
                </div>
                <div className="header-top-social mt-5 d-grid flex-column gap-2 justify-content-start align-items-center">
                  <a href="#" className="sub-font" onClick={inert}>
                    <i className="fa-brands fa-facebook"></i> Facebook
                  </a>
                  <a href="#" className="sub-font" onClick={inert}>
                    <i className="fa-brands fa-twitter"></i> Twitter
                  </a>
                  <a href="#" className="sub-font" onClick={inert}>
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay${isOpen ? " overlay-open" : ""}`}
        onClick={close}
      ></div>
    </>
  );
}
