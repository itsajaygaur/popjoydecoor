import type { Metadata } from "next";
import Link from "next/link";
import { LANDING_PATH, SITE } from "@/lib/site";

// Placeholder until the rest of the WordPress site is migrated. Do not point the
// production domain here before then — see README.
export const metadata: Metadata = {
  title: SITE.name,
  robots: { index: false, follow: true },
};

export default function Home() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-4xl font-semibold">{SITE.name}</h1>
        <p className="mt-3 text-ink-soft">The rest of the site is being migrated.</p>
        <Link
          href={LANDING_PATH}
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white"
        >
          Balloon Decoration in Delhi NCR →
        </Link>
      </div>
    </main>
  );
}
