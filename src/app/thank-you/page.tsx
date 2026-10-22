import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SimpleHeader } from "@/components/SimpleHeader";
import { ThankYouActions } from "@/components/ThankYouActions";
import { SITE } from "@/lib/site";

// Where the booking form lands after a successful submission — the conversion URL for GTM.
export const metadata: Metadata = {
  title: `Thank you | ${SITE.name}`,
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <SimpleHeader />
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
