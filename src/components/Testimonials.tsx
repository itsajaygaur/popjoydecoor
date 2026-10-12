import { REVIEWS } from "@/data/content";
import { StarIcon } from "./icons";
import { eyebrow, sectionTitle } from "./ui";

export function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className={eyebrow}>Google reviews</p>
        <h2 id="reviews-title" className={`${sectionTitle} mt-2`}>
          Loved by 10,000+ families across Delhi NCR
        </h2>
        <ul className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-2 md:mx-0 md:mt-8 md:py-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {REVIEWS.map((r) => (
            <li
              key={r.name}
              className="w-[82%] shrink-0 snap-start rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:w-[60%] md:w-auto"
            >
              <figure className="flex h-full flex-col">
                <div className="flex text-accent" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, s) => <StarIcon key={s} />)}
                </div>
                <blockquote className="mt-3 flex-1 leading-relaxed text-ink-soft">“{r.text}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-brand/10 font-semibold text-brand">
                    {r.name.replace("Dr. ", "")[0]}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{r.name}</span>
                    <span className="block text-xs text-ink-soft">Google review</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
