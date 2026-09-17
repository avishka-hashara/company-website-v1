"use client";

import { useState } from "react";
import { validateContact } from "@/lib/validateContact";

// contact.html's <div class="contact-submit-area ..."> turned into a real form.
// Every class name and every field is exactly as the template has them; the only
// structural changes are the ones the feature requires:
//   - the wrapper div is now a <form>
//   - the SEND MESSAGE anchor is now a <button type="submit">
//   - a hidden honeypot input
// Error and status text render only when there is something to say, so the
// resting DOM still matches the template. Both use template classes only
// (fs-seven + text-theme / pra-clr), so no new design elements are introduced.
const EMPTY = { name: "", email: "", message: "", company: "" };

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [formError, setFormError] = useState("");

  const update = (field) => (event) => {
    const value = event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    // Clear a field's error as soon as the visitor starts fixing it.
    setErrors((current) =>
      current[field] ? { ...current, [field]: undefined } : current,
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    const { errors: found, isValid } = validateContact(values);
    setErrors(found);
    setFormError("");

    if (!isValid) {
      setStatus(null);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setErrors(data.errors || {});
        setFormError(
          data.error || "Something went wrong. Please try again in a moment.",
        );
        return;
      }

      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setFormError("Could not reach the server. Please try again.");
    }
  };

  const fieldError = (field) =>
    errors[field] ? (
      <span className="fs-seven text-theme d-block mt-1">{errors[field]}</span>
    ) : null;

  return (
    <form
      className="contact-submit-area rounded-4 wow fadeInUp"
      data-wow-delay=".5s"
      onSubmit={onSubmit}
      noValidate
    >
      <h2 className="title pb-3 mb-4 fw-bold">Contact us</h2>
      <div className="row g-4 pt-2">
        <div className="col-md-6">
          <div className="cont-grp-info">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={values.name}
              onChange={update("name")}
              aria-invalid={errors.name ? "true" : undefined}
            />
            {fieldError("name")}
          </div>
        </div>
        <div className="col-md-6">
          <div className="cont-grp-info">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={values.email}
              onChange={update("email")}
              aria-invalid={errors.email ? "true" : undefined}
            />
            {fieldError("email")}
          </div>
        </div>
        <div className="col-md-12">
          <div className="cont-grp-info">
            <textarea
              rows="4"
              placeholder="Type your message"
              name="message"
              value={values.message}
              onChange={update("message")}
              aria-invalid={errors.message ? "true" : undefined}
            ></textarea>
            {fieldError("message")}
          </div>
        </div>
        <div className="col-md-12">
          {/* Honeypot: invisible to people, catnip to bots. A filled value makes
              the server drop the message silently. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
            value={values.company}
            onChange={update("company")}
          />
          <button
            type="submit"
            className="common_btn gap-2 mt-2 w-100 py-3 rounded-pill d-center px-2 text-nowrap"
            disabled={status === "sending"}
          >
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
            <img src="/assets/img/icon/right-arrow.svg" alt="img" />
          </button>
          {status === "sent" ? (
            <span className="fs-seven pra-clr fw-medium d-block mt-2">
              Thanks - your message is on its way. We will be in touch shortly.
            </span>
          ) : null}
          {formError ? (
            <span className="fs-seven text-theme d-block mt-2">{formError}</span>
          ) : null}
        </div>
      </div>
    </form>
  );
}
