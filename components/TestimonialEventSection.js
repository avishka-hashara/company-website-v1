// <section class="testimonial-event-section"> - byte-identical in about.html
// and service.html.
const testimonials = [
  {
    img: "/assets/img/testimonial/client-say1.png",
    name: "James Carter",
    role: "Product Manager",
    quote:
      '"A skilled and reliable developer. The application was fast, scalable, and built with attention to detail."',
    rating: "05 Rating",
    itemClassName: "testimonial-items mt-xl-5 max-w-376px wow fadeInUp",
    delay: "0.4s",
  },
  {
    img: "/assets/img/testimonial/client-say2.png",
    name: "Sarah Mitchell",
    role: "Founder, Launchify",
    quote:
      '"The website performance improved significantly after Alex’s work. Highly recommended for serious."',
    rating: "05 Rating",
    itemClassName: "testimonial-items max-w-376px wow fadeInUp",
    delay: "0.5s",
  },
  {
    img: "/assets/img/testimonial/client-say3.png",
    name: "Sarah Mitchell",
    role: "Founder, Launchify",
    quote:
      '"Professional, efficient, and technically strong. The project was delivered with excellent quality."',
    rating: "4.5 Rating",
    itemClassName: "testimonial-items max-w-376px wow fadeInUp",
    delay: "0.6s",
  },
  {
    img: "/assets/img/testimonial/client-say4.png",
    name: "Emily Rodriguez",
    role: "CEO, BrightLabs",
    quote:
      '"Alex understood our requirements perfectly and turned our ideas into a stable, high-performing product."',
    rating: "0.4 Rating",
    itemClassName: "testimonial-items max-w-376px wow fadeInUp",
    delay: "0.7s",
  },
];

function Stars() {
  return (
    <div className="d-flex gap-1">
      <i className="fas fa-star ratting"></i>
      <i className="fas fa-star ratting"></i>
      <i className="fas fa-star ratting"></i>
      <i className="fas fa-star ratting"></i>
      <i className="fas fa-star ratting"></i>
    </div>
  );
}

function Testimonial({ item }) {
  return (
    <div className={item.itemClassName} data-wow-delay={item.delay}>
      <div className="head-part mb-3 w-100 d-flex align-items-center d-inline-flex gap-2 justify-content-between">
        <div className="d-inline-flex align-items-center gap-xxl-3 gap-2">
          <img src={item.img} alt="img" className="rounded-2" />
          <div className="cont">
            <div className="fs-20px heading-font lh-1 fw-bold mb-1">
              {item.name}
            </div>
            <p className="fs-seven pra-clr">{item.role}</p>
          </div>
        </div>
        <img
          src="/assets/img/testimonial/quote-bottom.png"
          alt="img"
          className="quote"
        />
      </div>
      <div className="cont-box p-xxl-4 p-3">
        <p>{item.quote}</p>
        <div className="heading-font fs-seven fw-medium d-flex align-items-center gap-1">
          <Stars />
          {item.rating}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialEventSection() {
  return (
    <section className="testimonial-event-section section-padding fix">
      <div className="container">
        <div className="section-header-unique mb-48 d-flex justify-content-center gap-2">
          <div
            className="text-rot text-theme fw-bold fs-20px text-uppercase table-rotated-header wow fadeInUp"
            data-wow-delay="0.4s"
          >
            Testimonial
          </div>
          <div>
            <div className="head-one wow fadeInUp" data-wow-delay="0.5s">
              <span className="what">WHat</span>
              <span>Clients Say</span>
            </div>
            <div
              className="head-two d-flex gap-xxl-3 gap-lg-2 gap-1 flex-lg-nowrap flex-wrap wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <span className="ab">About Me</span>
              <p>
                We deliver strategic, creative, and performance-driven marketing
                services focused on scaling brands, increasing visibility,
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-first-inner">
          {testimonials.slice(0, 2).map((item) => (
            <Testimonial item={item} key={item.delay} />
          ))}
        </div>
        <div className="testimonial-secound-inner">
          {testimonials.slice(2).map((item) => (
            <Testimonial item={item} key={item.delay} />
          ))}
        </div>
      </div>
    </section>
  );
}
