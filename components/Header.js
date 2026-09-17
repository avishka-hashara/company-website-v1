"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, isActiveNavItem } from "./navItems";
import { useOffcanvas } from "./Offcanvas";
import { useSearch } from "./Search";
import { useMeanMenuActive } from "./MobileMenu";

// A straight transcription of the <header> in index-3.html, minus the two
// dropdowns. The template opened those on :hover in pure CSS, so flattening the
// nav needed no JS removed here - the submenu <ul>s simply have nothing left to
// render. This component's only behaviour is the sticky class and the sidebar
// toggle.
function DesktopMenu() {
  const pathname = usePathname();

  return (
    <ul>
      {navItems.map((item) => (
        <li
          key={item.key}
          className={isActiveNavItem(item, pathname) ? "active" : undefined}
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const { open } = useOffcanvas();
  const { toggle: toggleSearch } = useSearch();
  const meanActive = useMeanMenuActive();

  // main.js: $(window).scroll(function () {
  //   if ($(this).scrollTop() > 250) { $("#header-sticky").addClass("sticky"); }
  //   else { $("#header-sticky").removeClass("sticky"); }
  // });
  // Ported as-is: the class is only ever recomputed by a scroll event, never on
  // load, so a page restored mid-scroll starts unsticky exactly like the template.
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header-sticky"
      className={`header-section header-style1${sticky ? " sticky" : ""}`}
    >
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <Link href="/" className="header-logo">
              <img src="/assets/img/logo/logo.png" alt="logo-img" />
            </Link>
            <div className="mean__menu-wrapper">
              <div className="main-menu">
                {/* meanMenu inserts <div class="mean-push" /> before the nav and
                    hides the nav itself once it takes over below 1200px. Nothing
                    else in the CSS hides the desktop menu, so this is what makes
                    the breakpoint work. */}
                {meanActive ? <div className="mean-push" /> : null}
                <nav
                  id="mobile-menu"
                  style={{ display: meanActive ? "none" : "block" }}
                >
                  <DesktopMenu />
                </nav>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <a
                href="#"
                className="search-trigger d-center rounded-circle search-icon"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSearch();
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <button
                type="button"
                className="common_btn d-sm-flex d-none text-nowrap"
              >
                Work Together
                <span className="icon_wrapper">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
              <div className="header__hamburger d-xl-none d-block my-auto">
                <div className="sidebar__toggle" onClick={open}>
                  <img src="/assets/img/icon/bars.png" alt="icon" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
