import { normalizeBooking, validateBooking } from "@/lib/booking";

// Forwards booking requests to a Google Apps Script web app that appends them to
// the bookings Google Sheet (see scripts/google-apps-script.gs and README).

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot filled → pretend success so bots don't retry.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const booking = normalizeBooking(raw);
  const errors = validateBooking(booking);
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (!webhook) {
    console.error("BOOKING_WEBHOOK_URL is not set; booking not stored.");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...booking,
        secret: process.env.BOOKING_WEBHOOK_SECRET ?? "",
        submittedAt: new Date().toISOString(),
        source: "ballon-decoration-in-delhi-ncr",
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const body = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!res.ok || body?.ok !== true) throw new Error(`webhook responded ${res.status}`);
  } catch (err) {
    console.error("Booking webhook failed", err);
    return Response.json({ ok: false, error: "upstream_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
