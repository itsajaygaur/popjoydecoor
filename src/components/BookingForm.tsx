"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  BOOK_EVENT,
  OCCASION_OPTIONS,
  bookingWhatsappMessage,
  normalizeBooking,
  validateBooking,
  type BookEventDetail,
  type BookingErrors,
  type BookingInput,
} from "@/lib/booking";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { btn } from "./ui";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent"; booking: BookingInput }
  | { kind: "failed"; booking: BookingInput };

const field =
  "mt-1.5 block w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-brand-light focus:outline-none aria-[invalid=true]:border-brand";
const labelCls = "block text-sm font-semibold text-ink";

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [occasion, setOccasion] = useState("");
  const [packageName, setPackageName] = useState("");
  const [errors, setErrors] = useState<BookingErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    const onBook = (e: Event) => {
      const { packageName, occasion } = (e as CustomEvent<BookEventDetail>).detail;
      setPackageName(packageName);
      setOccasion(occasion);
      setStatus({ kind: "idle" });
      formRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus({ preventScroll: true });
    };
    window.addEventListener(BOOK_EVENT, onBook);
    return () => window.removeEventListener(BOOK_EVENT, onBook);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const booking = normalizeBooking(data);
    const found = validateBooking(booking);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name=${first}]`)?.focus();
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/booking/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...booking }),
      });
      setStatus(res.ok ? { kind: "sent", booking } : { kind: "failed", booking });
    } catch {
      setStatus({ kind: "failed", booking });
    }
  }

  if (status.kind === "sent" || status.kind === "failed") {
    const sent = status.kind === "sent";
    return (
      <div role="status" className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-ink/5 sm:p-10">
        <p className="font-display text-2xl font-semibold text-ink">
          {sent ? "Thank you! We've got your request 🎈" : "Almost there — please send it on WhatsApp"}
        </p>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          {sent
            ? "Our team will call or WhatsApp you shortly to confirm availability. For the fastest confirmation, send your details on WhatsApp now."
            : "We couldn't submit the form just now. Tap below to send the same details to us on WhatsApp — it takes one tap."}
        </p>
        <a
          href={whatsappLink(bookingWhatsappMessage(status.booking))}
          target="_blank"
          rel="noopener"
          className={`${btn.base} ${btn.whatsapp} ${btn.lg} mt-6`}
        >
          <WhatsAppIcon />
          Continue on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-4 block w-full text-sm font-medium text-ink-soft underline underline-offset-4"
        >
          Make another booking
        </button>
      </div>
    );
  }

  const err = (k: keyof BookingInput) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-sm text-brand">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: keyof BookingInput) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:p-8"
    >
      {packageName && (
        <div className="mb-5 flex items-center justify-between gap-3 rounded-xl bg-accent-soft px-4 py-3 text-sm">
          <span>
            Selected: <strong>{packageName}</strong>
          </span>
          <button type="button" onClick={() => setPackageName("")} className="font-medium text-ink-soft underline">
            Clear
          </button>
        </div>
      )}
      <input type="hidden" name="packageName" value={packageName} />
      {/* Honeypot: hidden from people, often filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Your name</label>
          <input id="name" name="name" autoComplete="name" required className={field} {...a11y("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Mobile number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="10-digit number"
            required
            className={field}
            {...a11y("phone")}
          />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={field} {...a11y("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="occasion" className={labelCls}>Occasion</label>
          <select
            id="occasion"
            name="occasion"
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className={field}
            {...a11y("occasion")}
          >
            <option value="">Select occasion</option>
            {OCCASION_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          {err("occasion")}
        </div>
        <div>
          <label htmlFor="eventDate" className={labelCls}>Event date</label>
          <input id="eventDate" name="eventDate" type="date"
            required
            onFocus={(e) => (e.currentTarget.min = todayISO())} className={field} {...a11y("eventDate")} />
          {err("eventDate")}
        </div>
        <div>
          <label htmlFor="location" className={labelCls}>Venue / area</label>
          <input
            id="location"
            name="location"
            autoComplete="address-level2"
            placeholder="e.g. Sector 50, Gurgaon"
            required
            className={field}
            {...a11y("location")}
          />
          {err("location")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="query" className={labelCls}>
            Anything else? <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <textarea
            id="query"
            name="query"
            rows={3}
            placeholder="Theme, colours, name on the board, preferred time slot…"
            className={field}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status.kind === "submitting"}
        className={`${btn.base} ${btn.primary} ${btn.lg} mt-6 w-full disabled:opacity-60`}
      >
        {status.kind === "submitting" ? "Sending…" : "Request booking"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        We&apos;ll confirm availability on call or WhatsApp. Your details are only used to process this booking.
      </p>
    </form>
  );
}
