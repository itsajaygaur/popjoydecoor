import Image from "next/image";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { btn } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center sm:h-20 justify-between gap-3 px-4">
        <a href="#top" aria-label={`${SITE.name} — back to top`} className="shrink-0">
          <Image src={SITE.logo} alt={SITE.name} width={709} height={230} priority className="h-11 w-auto sm:h-14" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium text-ink-soft lg:flex">
          <a href="#packages" className="hover:text-ink">Packages</a>
          <a href="#how-it-works" className="hover:text-ink">How it works</a>
          <a href="#reviews" className="hover:text-ink">Reviews</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          {/* Phones: a solid "Call" button (WhatsApp lives in the bottom bar). Larger screens: number + WhatsApp. */}
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phoneDisplay}`}
            className={`${btn.base} ${btn.sm} px-4 max-sm:bg-whatsapp max-sm:text-white max-sm:hover:bg-whatsapp-deep sm:border sm:border-ink/15 sm:bg-white sm:text-ink sm:hover:border-ink/40`}
          >
            <PhoneIcon className="size-4" />
            <span className="sm:hidden">Call</span>
            <span className="max-sm:hidden">{SITE.phoneDisplay}</span>
          </a>
          <a
            href={whatsappLink("Hi, I'd like to book a balloon decoration.")}
            target="_blank"
            rel="noopener"
            className={`${btn.base} ${btn.whatsapp} ${btn.sm} max-sm:hidden sm:px-4`}
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
