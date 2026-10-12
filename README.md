# Pop Joy Decoor — website (Next.js)

Next.js 16 (App Router) + Tailwind CSS 4. This is the first route of the WordPress → Next.js migration:
`/ballon-decoration-in-delhi-ncr/` (the misspelled slug is kept on purpose, because that's the indexed URL;
`/balloon-decoration-in-delhi-ncr/` redirects to it).

```bash
npm install
npm run dev        # http://localhost:3000/ballon-decoration-in-delhi-ncr/
npm run lint && npm run build
```

## Where things live

| What | File |
|---|---|
| Packages (title, price, photo) — edit prices here | `src/data/packages.ts` |
| Stats, 6 steps, reviews, FAQs | `src/data/content.ts` |
| Phone / WhatsApp number, service areas | `src/lib/site.ts` |
| Page, SEO title/description, JSON-LD | `src/app/ballon-decoration-in-delhi-ncr/page.tsx` |
| Booking API (form → Google Sheet) | `src/app/api/booking/route.ts` |
| Brand colours & fonts | `src/app/globals.css`, `src/app/layout.tsx` |

To add a package, drop a `.webp` into `public/images/packages/<occasion>/` and add a line to `PACKAGES`.
`price: null` shows "Price on request".

## Booking form → Google Sheets

The form posts to `/api/booking`, which forwards to a Google Apps Script web app that appends a row to
your Sheet. After submitting, the customer is offered "Continue on WhatsApp" with their details pre-filled.
If the webhook isn't configured or fails, the form falls back to WhatsApp, so no lead is lost.

Rows go to the first tab of the
[bookings sheet](https://docs.google.com/spreadsheets/d/1j13YCBZhYIhv24o5cVxQIwFUs6ewaazlkHpiRGfysyc/edit)
(`SPREADSHEET_ID` / `SHEET_GID` in the script). On an empty tab the script writes a header row first; after
that it fills columns by header name, so you can reorder them or add your own (e.g. "Status").

1. Open the bookings Google Sheet → **Extensions → Apps Script**, paste `scripts/google-apps-script.gs`.
2. Set `SECRET` in the script to a long random string.
3. **Deploy → New deployment → Web app**. Execute as *Me*, access *Anyone*. Copy the URL.
4. In Vercel → Project → Settings → Environment Variables set `BOOKING_WEBHOOK_URL` (the URL) and
   `BOOKING_WEBHOOK_SECRET` (same secret). See `.env.example`.
5. Redeploy and submit a test booking.

If you edit the script later, publish it via **Deploy → Manage deployments → Edit → New version**;
saving alone doesn't change what the web app runs.

## ⚠️ Before pointing popjoydecoor.in at Vercel

Only this page exists here. The live site has ~30 other URLs (home, about, contact, city pages, shop,
products — see `content/source-page.md`). Moving DNS now would 404 all of them. Until they're migrated
or redirected, test on the Vercel preview URL (or proxy just this path to Vercel). The home page here
is a `noindex` placeholder.
