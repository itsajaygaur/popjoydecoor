import { FAQS } from "@/data/content";
import { ChevronIcon } from "./icons";
import { eyebrow, sectionTitle } from "./ui";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <p className={`${eyebrow} text-center`}>FAQ</p>
        <h2 id="faq-title" className={`${sectionTitle} mt-2 text-center`}>
          Questions, answered
        </h2>
        <div className="mt-8 divide-y divide-ink/10 rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-5 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronIcon className="size-5 shrink-0 text-ink-soft transition-transform group-open:rotate-180" />
              </summary>
              <p className="-mt-1 pb-5 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
