"use client";

import Link from "next/link";

// The footer variant used by index-3.html: <footer class="footer-section
// footer-section-3 fix">. The .wow / data-wow-delay attributes are carried over
// verbatim; without WOW.js the elements simply render in their final state,
// because .fadeInUp only sets animation-name and .animated (which supplies the
// duration) is never added.
export default function Footer() {
  const inert = (event) => event.preventDefault();

  return (
    <footer className="footer-section footer-section-3 fix">
      <div className="container">
        <div className="footer-header-wrap">
          <div className="footer-together">
            <div className="title">LET’S WORK TOGETHER</div>
            <Link href="/contact" className="touch d-center wow zoom-in">
              <span className="text-center">
                <i className="fa-solid fa-arrow-right"></i> <br />
                CONTACT US <br /> TODAY
              </span>
            </Link>
          </div>
          <div className="row g-4 align-items-center">
            <div
              className="col-xxl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div>
                <Link
                  href="/"
                  className="footer-logo-big d-block mb-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <img src="/assets/img/logo/logo-big.png" alt="img" />
                </Link>
                <p className="text-white opacity-75">
                  We’re a creative agency helping brands grow through strategy,
                  design, and innovation.
                </p>
              </div>
            </div>
            <div
              className="col-xxl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="heading-font mb-lg-4 mb-3 fs-32px fw-bold text-white">
                Quick Links
              </div>
              <ul
                className="d-flex flex-wrap gap-3 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <li>
                  <Link href="/about" className="fs-seven text-white opacity-75">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="fs-seven text-white opacity-75">
                    News &amp; Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="fs-seven text-white opacity-75"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="fs-seven text-white opacity-75"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="fs-seven text-white opacity-75">
                    Recent Work
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="heading-font mb-4 fs--18px opacity-75 fw-bold text-white">
                CONTACT US
              </div>
              <a
                href="#"
                className="fs-32px text-break text-white text-uppercase heading-font"
                onClick={inert}
              >
                +1 234 567 890 <br /> info@youragency.com
              </a>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="heading-font mb-4 fs--18px opacity-75 fw-bold text-white">
                Location
              </div>
              <a
                href="#"
                className="fs-32px text-break text-white text-uppercase heading-font"
                onClick={inert}
              >
                123 Creative St, Design City, USA
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bootom03 py-4">
        <div className="container">
          <div className="footer-bottom-wrap d-flex justify-content-between align-items-center flex-wrap gap-2">
            <p className="text-white opacity-75">
              &copy; 2026{" "}
              <Link href="/" className="text-theme fw-semibold">
                Arigo.
              </Link>{" "}
              All Rights Reserved.
            </p>
            <ul className="d-flex flex-wrap socials align-items-center gap-xl-3 gap-2">
              <li>
                <a
                  href="#"
                  className="fs--18px text-white text-uppercase heading-font"
                  onClick={inert}
                >
                  Facebook
                </a>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-circle text-white"></i>
              </li>
              <li>
                <a
                  href="#"
                  className="fs--18px text-white text-uppercase heading-font"
                  onClick={inert}
                >
                  Instagram
                </a>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-circle text-white"></i>
              </li>
              <li>
                <a
                  href="#"
                  className="fs--18px text-white text-uppercase heading-font"
                  onClick={inert}
                >
                  LinkedIn
                </a>
              </li>
              <li className="pb-2">
                <i className="fa-solid fa-circle text-white"></i>
              </li>
              <li>
                <a
                  href="#"
                  className="fs--18px text-white text-uppercase heading-font"
                  onClick={inert}
                >
                  Twitter
                </a>
              </li>
            </ul>
            <ul className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2 flex-wrap">
              <li>
                <Link
                  href="/contact"
                  className="text-white opacity-75 fs-seven fw-normal"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="text-white opacity-75 fs-seven fw-normal">
                {"//"}
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white opacity-75 fs-seven fw-normal"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
