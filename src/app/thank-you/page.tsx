import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { ThankYouActions } from "@/components/ThankYouActions";
import { LANDING_PATH, SITE } from "@/lib/site";

// Where the booking form lands after a successful submission — the conversion URL for GTM.
export const metadata: Metadata = {
  title: `Thank you | ${SITE.name}`,
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <header className="border-b border-ink/5 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:h-20">
          <a href={LANDING_PATH} aria-label={`${SITE.name} — balloon decoration packages`}>
            <Image src={SITE.logo} alt={SITE.name} width={709} height={230} priority className="h-11 w-auto sm:h-14" />
          </a>
        </div>
      </header>
      <main className="bg-lilac px-4 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-xl">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Thank you! We&apos;ve got your request 🎈
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Our team will call or WhatsApp you shortly to confirm availability. For the fastest confirmation, send your
            details on WhatsApp now.
          </p>
          <ThankYouActions />
        </div>
      </main>
      <Footer />
    </>
  );
}
