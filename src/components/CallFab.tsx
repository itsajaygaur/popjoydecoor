import { SITE } from "@/lib/site";
import { PhoneIcon } from "./icons";
import { btn } from "./ui";

export function CallFab() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call ${SITE.phoneDisplay}`}
      // Sits above the mobile sticky bar; drops to the corner once the bar is hidden.
      className={`${btn.base} ${btn.whatsapp} fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-40 size-14 shadow-lg shadow-ink/25 md:right-6 md:bottom-6`}
    >
      <PhoneIcon className="size-6" />
    </a>
  );
}
