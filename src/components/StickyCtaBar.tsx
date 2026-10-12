import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { btn } from "./ui";

export function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-[auto_1fr_1fr] gap-2">
        <a href={SITE.phoneHref} aria-label={`Call ${SITE.phoneDisplay}`} className={`${btn.base} ${btn.ghost} px-4 py-3`}>
          <PhoneIcon />
        </a>
        <a href="#book" className={`${btn.base} ${btn.primary} py-3 text-sm`}>
          Book now
        </a>
        <a
          href={whatsappLink("Hi, I'd like to book a balloon decoration.")}
          target="_blank"
          rel="noopener"
          className={`${btn.base} ${btn.whatsapp} py-3 text-sm`}
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
