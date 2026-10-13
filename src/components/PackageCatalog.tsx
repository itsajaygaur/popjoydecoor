"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  DECOR_TYPES,
  OCCASIONS,
  PACKAGES,
  formatPrice,
  type DecorType,
  type Occasion,
  type Package,
} from "@/data/packages";
import { BOOK_EVENT, type BookEventDetail } from "@/lib/booking";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { btn } from "./ui";

const PAGE_SIZE = 8;
type Sort = "featured" | "price-asc" | "price-desc";

function packageLabel(p: Package) {
  return `${p.title}${p.price ? ` (${formatPrice(p.price)})` : ""}`;
}

function bookPackage(p: Package) {
  const occasion = OCCASIONS.find((o) => o.id === p.occasion)!.formLabel;
  window.dispatchEvent(
    new CustomEvent<BookEventDetail>(BOOK_EVENT, { detail: { packageName: packageLabel(p), occasion } }),
  );
  document.getElementById("book")?.scrollIntoView();
}

export function PackageCatalog() {
  const [occasion, setOccasion] = useState<Occasion>(OCCASIONS[0].id);
  const [type, setType] = useState<DecorType | "all">("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const inOccasion = useMemo(() => PACKAGES.filter((p) => p.occasion === occasion), [occasion]);
  const types = useMemo(
    () => (Object.keys(DECOR_TYPES) as DecorType[]).filter((t) => inOccasion.some((p) => p.type === t)),
    [inOccasion],
  );
  const list = useMemo(() => {
    const filtered = type === "all" ? inOccasion : inOccasion.filter((p) => p.type === type);
    if (sort === "featured") return filtered;
    // "Price on request" items always go last.
    const key = (p: Package) => p.price ?? Number.POSITIVE_INFINITY;
    return [...filtered].sort((a, b) => (sort === "price-asc" ? key(a) - key(b) : key(b) - key(a)));
  }, [inOccasion, type, sort]);

  const selectOccasion = (o: Occasion) => {
    setOccasion(o);
    setType("all");
    setVisible(PAGE_SIZE);
  };

  return (
    <div>
      <div role="tablist" aria-label="Occasion" className="no-scrollbar -mx-4 -my-2 flex gap-2 overflow-x-auto px-4 py-2">
        {OCCASIONS.map((o) => {
          const active = o.id === occasion;
          const count = PACKAGES.filter((p) => p.occasion === o.id).length;
          return (
            <button
              key={o.id}
              type="button"
              role="tab"
              id={`tab-${o.id}`}
              aria-selected={active}
              aria-controls="package-grid"
              onClick={() => selectOccasion(o.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active ? "bg-ink text-cream" : "bg-white text-ink ring-1 ring-ink/10 hover:ring-ink/30"
              }`}
            >
              {o.label} <span className={active ? "text-cream/60" : "text-ink-soft"}>({count})</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2" aria-label="Decoration style">
          {types.length > 1 &&
            (["all", ...types] as const).map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={type === t}
                onClick={() => {
                  setType(t);
                  setVisible(PAGE_SIZE);
                }}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  type === t ? "bg-brand text-white" : "bg-lilac text-ink hover:bg-brand-light/20"
                }`}
              >
                {t === "all" ? "All styles" : DECOR_TYPES[t]}
              </button>
            ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-ink-soft">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-sm text-ink"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>

      <div id="package-grid" role="tabpanel" aria-labelledby={`tab-${occasion}`}>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {list.slice(0, visible).map((p, i) => (
            <PackageCard key={p.id} pkg={p} eager={i < 4} />
          ))}
        </ul>
      </div>

      {list.length > visible && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE * 2)}
            className={`${btn.base} ${btn.ghost} ${btn.md}`}
          >
            Show more designs ({list.length - visible} more)
          </button>
        </div>
      )}
    </div>
  );
}

function PackageCard({ pkg, eager }: { pkg: Package; eager: boolean }) {
  const occasionLabel = OCCASIONS.find((o) => o.id === pkg.occasion)!.label;
  const priceText = pkg.price ? formatPrice(pkg.price) : "Price on request";
  const message = `Hi, I'd like to book this ${occasionLabel.toLowerCase()} decoration: ${pkg.title}${
    pkg.price ? ` (${formatPrice(pkg.price)})` : ""
  }.\nDate: \nLocation: `;

  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-lilac">
        <Image
          src={pkg.image}
          alt={`${pkg.title} — ${occasionLabel.toLowerCase()} balloon decoration${pkg.price ? `, ${priceText}` : ""}`}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 270px, (min-width: 768px) 30vw, 48vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-ink uppercase">
          {DECOR_TYPES[pkg.type]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-sm leading-snug font-semibold text-ink sm:text-base">{pkg.title}</h3>
        <p className={`mt-1 font-display font-semibold ${pkg.price ? "text-xl text-brand" : "text-base text-ink-soft"}`}>
          {priceText}
          {pkg.price ? <span aria-hidden="true">*</span> : null}
        </p>
        <div className="mt-auto grid gap-2 pt-3 sm:grid-cols-2">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener"
            className={`${btn.base} ${btn.whatsapp} ${btn.sm}`}
            aria-label={`Book ${pkg.title} on WhatsApp`}
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => bookPackage(pkg)}
            className={`${btn.base} ${btn.ghost} ${btn.sm}`}
            aria-label={`Book ${pkg.title} with the booking form`}
          >
            Book now
          </button>
        </div>
      </div>
    </li>
  );
}
