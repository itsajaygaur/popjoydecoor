import { Fragment } from "react";
import type { Block, LegalDoc, Rich } from "@/data/legal";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Footer } from "./Footer";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { SimpleHeader } from "./SimpleHeader";
import { btn } from "./ui";

const link = "font-medium text-brand underline underline-offset-2 hover:text-ink";

function slug(heading: string) {
  return heading
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function RichText({ value }: { value: Rich }) {
  if (typeof value === "string") return value;
  return value.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <a key={i} href={part.href} className={link}>
        {part.text}
      </a>
    ),
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <RichText value={block.text} />
        </p>
      );
    case "h3":
      return <h3 className="pt-2 font-semibold text-ink">{block.text}</h3>;
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 marker:text-brand">
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText value={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-lilac text-ink">
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col" className="px-4 py-3 font-semibold">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "" : "font-semibold text-ink"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return <p className="rounded-2xl bg-accent-soft p-4 text-ink">{block.text}</p>;
  }
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <SimpleHeader />
      <main className="bg-cream px-4 py-12 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{doc.title}</h1>
          <p className="mt-3 text-sm text-ink-soft">Last updated: {doc.updated}</p>
          <div className="mt-8 space-y-4 leading-relaxed text-ink-soft">
            {doc.intro.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
            {doc.sections.map((section, n) => (
              <section key={section.heading} id={slug(section.heading)} className="scroll-mt-6 space-y-4 pt-6">
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {n + 1}. {section.heading}
                </h2>
                {section.blocks.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-lilac p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">{SITE.name}</h2>
            <p className="mt-1 text-sm text-ink-soft">Balloon Decoration &amp; Event Styling in Delhi NCR</p>
            <p className="mt-4 text-sm text-ink-soft">
              <span className="font-semibold text-ink">Service areas:</span> {SITE.areas.join(", ")} and nearby areas
              on request.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className={`${btn.base} ${btn.ghost} ${btn.md}`}>
                <PhoneIcon className="size-4" />
                Call {SITE.phoneDisplay}
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener" className={`${btn.base} ${btn.whatsapp} ${btn.md}`}>
                <WhatsAppIcon className="size-4" />
                WhatsApp us
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
