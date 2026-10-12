// Shared between the booking form (client) and /api/booking (server).

/** Fired by a package card's "Book now" button to prefill the booking form. */
export const BOOK_EVENT = "popjoy:book";
export type BookEventDetail = { packageName: string; occasion: string };

export const OCCASION_OPTIONS = [
  "Birthday Decoration",
  "Anniversary Decoration",
  "Proposal Decoration",
  "Baby Shower",
  "Baby Welcome",
  "Kids Birthday",
  "Corporate Event",
  "Other",
] as const;

export type BookingInput = {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  eventDate: string;
  location: string;
  packageName: string;
  query: string;
};

export type BookingErrors = Partial<Record<keyof BookingInput, string>>;

const LIMITS: Record<keyof BookingInput, number> = {
  name: 100,
  email: 200,
  phone: 20,
  occasion: 60,
  eventDate: 10,
  location: 300,
  packageName: 200,
  query: 2000,
};

/** Trims, strips a leading +91/0 from the phone, and caps field lengths. */
export function normalizeBooking(raw: Record<string, unknown>): BookingInput {
  const str = (key: keyof BookingInput) =>
    (typeof raw[key] === "string" ? (raw[key] as string) : "").trim().slice(0, LIMITS[key]);
  const digits = str("phone").replace(/\D/g, "");
  const phone = digits.length > 10 ? digits.replace(/^(91|0)/, "") : digits;
  return {
    name: str("name"),
    email: str("email"),
    phone,
    occasion: str("occasion"),
    eventDate: str("eventDate"),
    location: str("location"),
    packageName: str("packageName"),
    query: str("query"),
  };
}

export function validateBooking(b: BookingInput): BookingErrors {
  const errors: BookingErrors = {};
  if (b.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) errors.email = "Please enter a valid email.";
  if (!/^[6-9]\d{9}$/.test(b.phone)) errors.phone = "Please enter a 10-digit mobile number.";
  if (!(OCCASION_OPTIONS as readonly string[]).includes(b.occasion))
    errors.occasion = "Please select an occasion.";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.eventDate)) errors.eventDate = "Please pick a date.";
  if (b.location.length < 3) errors.location = "Please enter the venue / area.";
  return errors;
}

export function bookingWhatsappMessage(b: BookingInput): string {
  return [
    "Hi Pop Joy Decoor, I'd like to book a decoration.",
    b.packageName && `Package: ${b.packageName}`,
    `Occasion: ${b.occasion}`,
    `Date: ${b.eventDate}`,
    `Location: ${b.location}`,
    `Name: ${b.name}`,
    b.query && `Note: ${b.query}`,
  ]
    .filter(Boolean)
    .join("\n");
}
