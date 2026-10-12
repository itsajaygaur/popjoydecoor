"use client";

import { useState } from "react";
import { FAQS } from "@/data/content";
import { ChevronIcon } from "./icons";
import { eyebrow, sectionTitle } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (!next.delete(i)) next.add(i);
      return next;
    });

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <p className={`${eyebrow} text-center`}>FAQ</p>
        <h2 id="faq-title" className={`${sectionTitle} mt-2 text-center`}>
          Questions, answered
        </h2>
        <div className="mt-8 divide-y divide-ink/10 rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
          {FAQS.map((f, i) => {
            const isOpen = open.has(i);
            return (
              <div key={f.q} className="px-5 sm:px-6">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => toggle(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-semibold text-ink"
                  >
                    {f.q}
                    <ChevronIcon
                      className={`size-5 shrink-0 text-ink-soft transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                {/* Animating grid rows 0fr → 1fr lets the panel ease to its natural height in every browser. */}
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 leading-relaxed text-ink-soft">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
