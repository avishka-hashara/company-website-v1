// <div class="founder-section"> - byte-identical in about.html and service.html.
export default function FounderSection() {
  return (
    <div className="founder-section d-center fix">
      <div className="founder-content">
        <p className="founter-text mb-2 fs-six fw-medium text-dark bg-white rounded p-1">
          Thire team brought creativity and professionalsm <br /> to ervery
          stage of our project
        </p>
        <div className="d-inline-flex align-items-center gap-xxl-3 gap-2 py-2 px-2 bg-white rounded">
          <img
            src="/assets/img/thumbnail/founder.png"
            alt="img"
            className="rounded-2"
          />
          <div className="cont">
            <div className="fs-20px heading-font lh-1 fw-bold mb-1">
              Sarah Mitchell
            </div>
            <p className="fs-seven pra-clr">Founder, Launchify</p>
          </div>
        </div>
      </div>
    </div>
  );
}
