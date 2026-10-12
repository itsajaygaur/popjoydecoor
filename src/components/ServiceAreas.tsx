import { SITE } from "@/lib/site";
import { MapPinIcon } from "./icons";
import { eyebrow, sectionTitle } from "./ui";

export function ServiceAreas() {
  return (
    <section aria-labelledby="areas-title" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className={eyebrow}>Across Delhi NCR</p>
          <h2 id="areas-title" className={`${sectionTitle} mt-2`}>
            Balloon decorators at your doorstep
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
            <p>
              Planning a surprise birthday, an anniversary dinner at home or a baby shower in a banquet hall? Pop Joy
              Decoor brings the full setup to you — balloon rings, sequin panels, name backdrops, marquee numbers, fairy
              lights and neon signs — and our decorators install everything at your venue.
            </p>
            <p>
              Choose a ready package or ask us to customise colours, names and themes. Book with just ₹500 advance and pay
              the rest after you see the finished decoration.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {SITE.areas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-2 rounded-2xl bg-white px-4 py-4 font-semibold text-ink shadow-sm ring-1 ring-ink/5"
            >
              <MapPinIcon className="size-5 text-coral" />
              {area}
            </li>
          ))}
          <li className="flex items-center rounded-2xl bg-teal/10 px-4 py-4 text-sm font-medium text-teal-deep">
            + nearby areas on request
          </li>
        </ul>
      </div>
    </section>
  );
}
