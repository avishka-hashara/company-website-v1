"use client";

// The sidebar search in blog-standard.html / blog-details.html:
//   <form action="javascript:void(0)">
//     <input type="text" placeholder="Search Blog">
//     <button type="button"><i class="fas fa-search"></i></button>
//   </form>
//
// It is non-functional in the template - the submit is a type="button" and the
// action is a void javascript: URL - so it stays non-functional here. React 19
// rewrites literal javascript: URLs (action included) into a throwing stub, so
// the inert behaviour is expressed as action="#" plus preventDefault.
export default function BlogSearchForm() {
  return (
    <form action="#" onSubmit={(event) => event.preventDefault()}>
      <input type="text" placeholder="Search Blog" />
      <button type="button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
