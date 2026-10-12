/**
 * Pop Joy Decoor — booking form → Google Sheet.
 * https://docs.google.com/spreadsheets/d/1j13YCBZhYIhv24o5cVxQIwFUs6ewaazlkHpiRGfysyc/edit
 *
 * Setup (once):
 * 1. Open the sheet above → Extensions → Apps Script, delete the sample code and paste this file.
 * 2. Set SECRET below to a long random string (e.g. from `openssl rand -hex 24`).
 * 3. Deploy → New deployment → type "Web app"; Execute as: Me; Who has access: Anyone.
 *    Approve the permission prompt (the script only needs access to this spreadsheet).
 * 4. Copy the Web app URL (ends in /exec).
 * 5. In Vercel → Project → Settings → Environment Variables add:
 *      BOOKING_WEBHOOK_URL    = <the Web app URL>
 *      BOOKING_WEBHOOK_SECRET = <the same SECRET as below>
 *    and redeploy.
 *
 * After editing this script later: Deploy → Manage deployments → edit → Version "New version",
 * otherwise the web app keeps running the old code (and the URL stays the same).
 */
const SECRET = "CHANGE-ME";
const SPREADSHEET_ID = "1j13YCBZhYIhv24o5cVxQIwFUs6ewaazlkHpiRGfysyc";
const SHEET_GID = 0; // the tab from "#gid=0" in the sheet URL (the first tab)
const TIME_ZONE = "Asia/Kolkata";

// [field sent by /api/booking, header shown in the sheet]
const COLUMNS = [
  ["submittedAt", "Submitted at (IST)"],
  ["name", "Name"],
  ["phone", "Phone"],
  ["email", "Email"],
  ["occasion", "Occasion"],
  ["eventDate", "Event date"],
  ["location", "Venue / area"],
  ["packageName", "Package"],
  ["query", "Notes"],
  ["source", "Source"],
];

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: "invalid_json" });
  }
  if (SECRET === "CHANGE-ME" || data.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

  data.submittedAt = Utilities.formatDate(new Date(), TIME_ZONE, "yyyy-MM-dd HH:mm:ss");

  // Serialise writes so two bookings arriving together can't clobber the header row.
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.map((c) => c[1]));
      sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    // Fill columns by their header text, so columns can be reordered and extra ones
    // (e.g. "Status", "Called?") added by hand; unknown headers are left blank.
    const keyByHeader = Object.create(null);
    COLUMNS.forEach((c) => (keyByHeader[c[1]] = c[0]));
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(String);
    const row = headers.some((h) => h in keyByHeader)
      ? headers.map((h) => (h in keyByHeader ? cell(data[keyByHeader[h]]) : ""))
      : COLUMNS.map((c) => cell(data[c[0]]));
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
  return json({ ok: true });
}

function getSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheets().find((s) => s.getSheetId() === SHEET_GID) || ss.getSheets()[0];
}

// Prefix with ' so values like "=..." are stored as text, never as formulas.
function cell(v) {
  return "'" + String(v == null ? "" : v);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
