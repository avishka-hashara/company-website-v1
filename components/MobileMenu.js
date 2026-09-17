"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, lastMenuKey, isActiveNavItem } from "./navItems";

// main.js:
//   $("#mobile-menu").meanmenu({
//     meanMenuContainer: ".mobile-menu",
//     meanScreenWidth: "1199",
//     meanExpand: ['<i class="far fa-plus"></i>'],
//   });
//
// This file reproduces the DOM meanMenu 2.0.8 builds from those options,
// without the plugin. Defaults that matter: meanRevealPosition "right",
// meanRevealPositionDistance "0", meanMenuOpen "<span /><span /><span />",
// meanMenuCloseSize "18px", meanRemoveAttrs false (so the cloned markup keeps
// every original class).
//
// meanShowChildren / meanExpandableChildren and the meanExpand option only ever
// applied to submenus. The nav is flat now (see navItems.js), so the plugin's
// expand toggles - and the jQuery slideDown/slideUp animation this file used to
// reproduce for them - have nothing to act on and are gone with the dropdowns.
const MEAN_SCREEN_WIDTH = 1199;

// meanMenu compares `window.innerWidth || document.documentElement.clientWidth`
// against meanScreenWidth on load and on every resize, building its DOM at or
// below the threshold and tearing it down above it. Header consumes this too,
// because hiding #mobile-menu is what hides the desktop nav - no CSS does it.
export function useMeanMenuActive() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const read = () =>
      setActive(
        (window.innerWidth || document.documentElement.clientWidth) <=
          MEAN_SCREEN_WIDTH,
      );

    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  return active;
}

export default function MobileMenu() {
  const active = useMeanMenuActive();
  const pathname = usePathname();
  const lastKey = lastMenuKey(navItems);

  return (
    <div className={`mobile-menu fix mb-3${active ? " mean-container" : ""}`}>
      {/* .mean-bar is mounted only inside the breakpoint, matching the
          plugin's teardown above it. */}
      {active ? (
        <div className="mean-bar">
          {/* main.css sets `.mean-container a.meanmenu-reveal { display: none
              !important }`, so this control is never visible or clickable; it is
              kept because the plugin puts it in the DOM. Its click handler
              (toggling the top-level ul) is unreachable for the same reason - and
              `.mean-nav > ul` is forced to `display: block !important` anyway, so
              the list is always expanded. */}
          <a
            href="#nav"
            className="meanmenu-reveal"
            style={{ right: "0", left: "auto" }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <nav className="mean-nav">
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.key}
                  className={
                    [
                      isActiveNavItem(item, pathname) ? "active" : null,
                      item.key === lastKey ? "mean-last" : null,
                    ]
                      .filter(Boolean)
                      .join(" ") || undefined
                  }
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
