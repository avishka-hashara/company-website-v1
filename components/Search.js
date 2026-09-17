"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// main.js:
//   const $searchWrap = $(".search-wrap");
//   const $navSearch = $(".nav-search");
//   const $searchClose = $("#search-close");
//
//   $(".search-trigger").on("click", function (e) {
//     e.preventDefault();
//     $searchWrap.animate({ opacity: "toggle" }, 500);
//     $navSearch.add($searchClose).addClass("open");
//   });
//   $(".search-close").on("click", function (e) {
//     e.preventDefault();
//     $searchWrap.animate({ opacity: "toggle" }, 500);
//     $navSearch.add($searchClose).removeClass("open");
//   });
//   function closeSearch() {
//     $searchWrap.fadeOut(200);
//     $navSearch.add($searchClose).removeClass("open");
//   }
//   $(document.body).on("click", closeSearch);
//   $(".search-trigger, .main-search-input").on("click", (e) => e.stopPropagation());
//
// .search-wrap is `display: none` in main.css, so the trigger's opacity toggle
// fades it in over 500ms, and a click anywhere else fades it out over 200ms.
const TOGGLE_MS = 500;
const FADE_OUT_MS = 200;

const SearchContext = createContext({
  isOpen: false,
  toggle: () => {},
});

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  // `visible` is display, `opaque` is the animated opacity, `isOpen` is the
  // vestigial "open" class - .nav-search does not exist in this template and
  // neither .open nor .nav-search has any CSS, so the class is inert here. It
  // is applied anyway to keep parity with main.js.
  const [visible, setVisible] = useState(false);
  const [opaque, setOpaque] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [duration, setDuration] = useState(TOGGLE_MS);

  const hideTimer = useRef(null);
  const frame = useRef(null);

  const clearPending = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (frame.current) cancelAnimationFrame(frame.current);
    hideTimer.current = null;
    frame.current = null;
  };

  const open = useCallback(() => {
    clearPending();
    setDuration(TOGGLE_MS);
    setIsOpen(true);
    setVisible(true);
    // display:none -> block has to land in its own frame or the opacity
    // transition never starts.
    frame.current = requestAnimationFrame(() => {
      frame.current = requestAnimationFrame(() => setOpaque(true));
    });
  }, []);

  const close = useCallback((ms) => {
    clearPending();
    setDuration(ms);
    setIsOpen(false);
    setOpaque(false);
    hideTimer.current = setTimeout(() => setVisible(false), ms);
  }, []);

  const toggle = useCallback(() => {
    if (visible) close(TOGGLE_MS);
    else open();
  }, [visible, open, close]);

  useEffect(() => clearPending, []);

  // The body handler only matters while the overlay is up; jQuery's version was
  // always bound but a no-op on a hidden element. The closest() check reproduces
  // the two stopPropagation bindings - React delegates its own events at the
  // document, above document.body, so stopPropagation in a React handler could
  // not stop a native listener here.
  //
  // .search-close is excluded so its own handler owns the close: in the template
  // both handlers run and queue on the same jQuery fx queue, and the 200ms
  // fadeOut lands on an already-hidden element, so the visible result is the
  // 500ms fade alone.
  useEffect(() => {
    if (!visible) return;

    const onBodyClick = (event) => {
      if (
        event.target.closest(
          ".search-trigger, .main-search-input, .search-close",
        )
      ) {
        return;
      }
      close(FADE_OUT_MS);
    };

    document.body.addEventListener("click", onBodyClick);
    return () => document.body.removeEventListener("click", onBodyClick);
  }, [visible, close]);

  const value = useMemo(
    () => ({ isOpen, visible, opaque, duration, toggle, close }),
    [isOpen, visible, opaque, duration, toggle, close],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export default function Search() {
  const { isOpen, visible, opaque, duration, close } = useSearch();

  return (
    <div
      className="search-wrap"
      style={{
        display: visible ? "block" : undefined,
        opacity: visible ? (opaque ? 1 : 0) : undefined,
        // ease-in-out is the CSS equivalent of jQuery's default "swing" easing.
        transition: `opacity ${duration}ms ease-in-out`,
      }}
    >
      <div className="search-inner">
        <i
          className={`fas fa-times search-close${isOpen ? " open" : ""}`}
          id="search-close"
          onClick={(event) => {
            event.preventDefault();
            close(TOGGLE_MS);
          }}
        ></i>
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input
                type="search"
                className="main-search-input"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
