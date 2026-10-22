import Image from "next/image";
import { LANDING_PATH, SITE } from "@/lib/site";

// Logo-only header for pages outside the landing page, linking back to it.
export function SimpleHeader() {
  return (
    <header className="border-b border-ink/5 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:h-20">
        <a href={LANDING_PATH} aria-label={`${SITE.name} — balloon decoration packages`}>
          <Image src={SITE.logo} alt={SITE.name} width={709} height={230} priority className="h-11 w-auto sm:h-14" />
        </a>
      </div>
    </header>
  );
}
