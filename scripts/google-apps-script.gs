/**
 * Pop Joy Decoor — booking form → Google Sheet.
 *
 * Setup (once):
 * 1. Open the Google Sheet that should collect bookings → Extensions → Apps Script.
 * 2. Paste this file, then set SECRET below to a long random string.
 * 3. Deploy → New deployment → type "Web app"; Execute as: Me; Who has access: Anyone.
 * 4. Copy the Web app URL.
 * 5. In Vercel → Project → Settings → Environment Variables add:
 *      BOOKING_WEBHOOK_URL    = <the Web app URL>
 *      BOOKING_WEBHOOK_SECRET = <the same SECRET as below>
 *    and redeploy.
 */
const SECRET = "CHANGE-ME";
const SHEET_NAME = "Bookings";
const COLUMNS = [
  "submittedAt", "name", "phone", "email", "occasion", "eventDate",
  "location", "packageName", "query", "source",
];

function doPost(e) {
  const data = JSON.parse(e.postData.contents || "{}");
  if (data.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
  // Prefix with ' so values like "=..." are stored as text, never as formulas.
  sheet.appendRow(COLUMNS.map((c) => "'" + String(data[c] == null ? "" : data[c])));
  return json({ ok: true });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
