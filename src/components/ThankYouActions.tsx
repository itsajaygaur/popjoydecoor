"use client";

import { useSyncExternalStore } from "react";
import { LAST_BOOKING_KEY } from "@/lib/booking";
import { LANDING_PATH, SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { btn } from "./ui";

const FALLBACK_MESSAGE = "Hi, I just submitted a booking request on your website.";

function readLastBooking(): string | null {
  try {
    return sessionStorage.getItem(LAST_BOOKING_KEY);
  } catch {
    return null;
  }
}

const noSubscribe = () => () => {};

export function ThankYouActions() {
  // Server render (and storage-blocked browsers) get the generic message; the client swaps in the booking details.
  const message = useSyncExternalStore(noSubscribe, readLastBooking, () => null) ?? FALLBACK_MESSAGE;

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener"
          className={`${btn.base} ${btn.whatsapp} ${btn.lg}`}
        >
          <WhatsAppIcon />
          Continue on WhatsApp
        </a>
        <a href={SITE.phoneHref} className={`${btn.base} ${btn.ghost} ${btn.lg}`}>
          <PhoneIcon />
          {SITE.phoneDisplay}
        </a>
      </div>
      <a href={LANDING_PATH} className="mt-2 text-sm font-medium text-ink-soft underline underline-offset-4">
        Back to packages
      </a>
    </div>
  );
}
