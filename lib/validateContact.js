// One set of rules for the contact form, imported by both the client component
// and the route handler, so client-side and server-side validation cannot drift.
//
// contact.html has name, email and message only - there is no subject field in
// the template, so none is added here.
export const LIMITS = {
  name: 100,
  email: 200,
  message: 5000,
};

// Deliberately permissive: catches typos and obvious junk without rejecting
// valid but unusual addresses.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values) {
  const name = (values.name || "").trim();
  const email = (values.email || "").trim();
  const message = (values.message || "").trim();
  const errors = {};

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name)
    errors.name = `Please keep your name under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL.test(email))
    errors.email = "Please enter a valid email address.";
  else if (email.length > LIMITS.email)
    errors.email = `Please keep your email under ${LIMITS.email} characters.`;

  if (!message) errors.message = "Please enter a message.";
  else if (message.length > LIMITS.message)
    errors.message = `Please keep your message under ${LIMITS.message} characters.`;

  return { errors, isValid: Object.keys(errors).length === 0, values: { name, email, message } };
}
