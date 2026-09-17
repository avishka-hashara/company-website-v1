// <div class="blog-previous_next"> - byte-identical in service-details.html and
// project-details.html. The buttons are inert in the template too.
export default function BlogPrevNext() {
  return (
    <div className="blog-previous_next justify-content-xl-center justify-content-start mt-xl-5 mt-4 pt-xl-3">
      <button type="button" className="cmn_prev">
        <i className="fa-solid fa-arrow-left"></i> Prev blog
      </button>
      <button type="button" className="cmn_prev active">
        Next blog <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
