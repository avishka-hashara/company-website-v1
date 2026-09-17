"use client";

// The template's href="javascript:void(0)" links, which do nothing on click.
// React 19 rewrites a literal javascript: href into a throwing stub, so the
// inert behaviour has to be expressed as href="#" plus preventDefault.
export default function InertLink({ className, children }) {
  return (
    <a href="#" className={className} onClick={(event) => event.preventDefault()}>
      {children}
    </a>
  );
}
