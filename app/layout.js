import { Instrument_Sans, Phudu, Bricolage_Grotesque } from "next/font/google";

// Stylesheet order mirrors the template's <head>:
// bootstrap -> font-awesome -> animate -> magnific-popup -> meanmenu -> swiper -> main
// nextjs-fixes.css is ours, not the template's, and always loads last.
import "./styles/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/animate.css";
// Magnific Popup is gone as a library, but its stylesheet is what gives the
// video modal in VideoPopup.js its exact template appearance.
import "./styles/magnific-popup.css";
import "./styles/meanmenu.css";
// swiper/css/bundle is the package equivalent of the template's
// assets/css/swiper-bundle.min.css, loaded at the same point in the cascade.
import "swiper/css/bundle";
import "./styles/main.css";
import "./styles/nextjs-fixes.css";

import Preloader from "@/components/Preloader";
import MouseFollower from "@/components/MouseFollower";
import Offcanvas, { OffcanvasProvider } from "@/components/Offcanvas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Search, { SearchProvider } from "@/components/Search";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

// All three are variable fonts, so no `weight` is passed - the axis ranges below
// match the ranges the template's original Google Fonts @imports requested.

// was: ...family=Instrument+Sans:ital,wght@0,400..700;1,400..700
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-sans",
});

// was: ...family=Phudu:wght@300..900
const phudu = Phudu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-phudu",
});

// was: ...family=Bricolage+Grotesque:opsz,wght@12..96,200..800
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-bricolage",
});

// Site-wide defaults. Pages override title/description/openGraph/twitter via
// pageMetadata(); metadataBase is what lets those blocks use relative URLs.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arigo - Creative Agency & Digital Marketing Studio",
    // Page titles are set as the bare page name and get the brand appended.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Arigo is a creative marketing studio delivering brand strategy, web development and performance campaigns that help ambitious brands scale up much faster.",
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    title: "Arigo - Creative Agency & Digital Marketing Studio",
    description:
      "Arigo is a creative marketing studio delivering brand strategy, web development and performance campaigns that help ambitious brands scale up much faster.",
    url: "/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arigo - Creative Agency & Digital Marketing Studio",
    description:
      "Arigo is a creative marketing studio delivering brand strategy, web development and performance campaigns that help ambitious brands scale up much faster.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${phudu.variable} ${bricolage.variable}`}
    >
      {/* Body order mirrors index-3.html: preloader, cursor, offcanvas +
          overlay, header, page content, footer. */}
      <body>
        <Preloader />
        <MouseFollower />
        <OffcanvasProvider>
          <SearchProvider>
            <Offcanvas />
            <Header />
            {children}
            <Footer />
            <Search />
          </SearchProvider>
        </OffcanvasProvider>
        <ScrollReveal />
        {/* Renders no markup - the BreadcrumbList for whichever route is
            showing, so every page carries one without having to remember. */}
        <BreadcrumbJsonLd />
      </body>
    </html>
  );
}
