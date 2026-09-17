import { Resend } from "resend";
import { validateContact } from "@/lib/validateContact";

// POST /api/contact - validates server-side (never trusting the client), applies
// a honeypot check and a per-IP rate limit, then sends the message with Resend.

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

// In-memory, so it resets on restart and is per-instance: on a single long-lived
// server this is a real limit, on serverless it only slows down a burst that
// happens to land on the same instance. Swap in Redis/Upstash if this needs to
// hold across instances.
const hits = new Map();

function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((at) => now - at < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound on a long-lived process.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((at) => now - at >= WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (isRateLimited(clientIp(request))) {
    return Response.json(
      { error: "Too many messages. Please try again in a minute." },
      { status: 429 },
    );
  }

  // Honeypot: a real visitor never sees this field, so anything in it is a bot.
  // Report success so the bot has nothing to learn from the response.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const { errors, isValid, values } = validateContact(payload);
  if (!isValid) {
    return Response.json(
      { error: "Please check the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "Contact form is not configured: RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL must all be set.",
    );
    return Response.json(
      { error: "The contact form is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `New contact form message from ${values.name}`,
      text: [
        `Name:    ${values.name}`,
        `Email:   ${values.email}`,
        "",
        values.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return Response.json(
        { error: "We could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (caught) {
    console.error("Contact form send failed:", caught);
    return Response.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
