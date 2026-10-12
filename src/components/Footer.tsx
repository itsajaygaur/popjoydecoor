import Image from "next/image";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink pt-12 pb-24 text-cream/80 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        <div>
          <div className="inline-block rounded-xl bg-cream px-3 py-2">
            <Image src={SITE.logo} alt={SITE.name} width={709} height={230} className="h-12 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Balloon decoration for birthdays, anniversaries, baby showers and welcome-baby celebrations across Delhi NCR.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-cream">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={SITE.phoneHref} className="hover:text-cream">Call {SITE.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="hover:text-cream">
                WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-cream">Service areas</h2>
          <p className="mt-3 text-sm">{SITE.areas.join(" · ")}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-cream/10 px-4 pt-6 text-xs text-cream/60">
        © <CopyrightYear /> {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}

// Cached so the year is fixed at build time instead of making the page dynamic.
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}
