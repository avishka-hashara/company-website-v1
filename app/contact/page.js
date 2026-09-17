import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ContactForm from "@/components/ContactForm";
import VisibleSlowlyBottom from "@/components/VisibleSlowlyBottom";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Arigo - visit 221B Baker Street in London, call +44 20 7946 0123, or send us a message and we will reply within one working business day.",
  path: "/contact",
});

// Body content of contact.html, between </header> and <footer>. The submit area
// is now ContactForm: same classes and fields, wrapped in a real <form>.
const socials = [
  "fa-brands fa-facebook",
  "fa-brands fa-dribbble",
  "fa-brands fa-instagram",
  "fa-brands fa-twitter",
  "fa-brands fa-vimeo-v",
];

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816169.558200695!2d-161.49265223136007!3d36.102185713814805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1777097225076!5m2!1sen!2sbd";

export default function Contact() {
  return (
    <>
      <BreadcrumbBanner title="Contact Us" />

      {/* contact Section Start */}
      <section className="contact-main-section section-padding fix">
        <div className="container">
          <div className="row g-xxl-5 g-4">
            <div className="col-lg-6">
              <div className="contact-map">
                <iframe
                  src={MAP_SRC}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info_section space-bottom fix">
        <div className="container">
          <div className="contact-info-wrap">
            <div className="contact-info_item wow fadeInUp" data-wow-delay="0.3s">
              <h3>Addresss</h3>
              <p>
                221B Baker Street, London, NW1 6XE, <br /> United Kingdom
              </p>
            </div>
            <div className="border p-2 border-h-96 rounded"></div>
            <div className="contact-info_item wow fadeInUp" data-wow-delay="0.4s">
              <h3>Phone / MESSAGE</h3>
              <p>
                hello@arigoagencygmail.com <br />
                +44 20 7946 0123 , +44 7400 123456
              </p>
            </div>
            <div className="border p-2 border-h-96 rounded"></div>
            <div className="contact-info_item wow fadeInUp" data-wow-delay="0.5s">
              <h3>Phone / MESSAGE</h3>
              <p>
                Monday to Friday 09:00 to 19:20 <br /> Saturday 14:30
              </p>
            </div>
            <div className="border p-2 border-h-96 rounded"></div>
            <div className="contact-info_item wow fadeInUp" data-wow-delay="0.6s">
              <h3 className="mb-3">Social Media</h3>
              <div className="social-white gap-xl-3 gap-2 d-flex align-items-center">
                {socials.map((icon) => (
                  <a href="#" className="icon" key={icon}>
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisibleSlowlyBottom />
    </>
  );
}
