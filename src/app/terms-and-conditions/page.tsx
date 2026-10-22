import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { TERMS } from "@/data/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${TERMS.title} | ${SITE.name}`,
  description: TERMS.description,
  alternates: { canonical: TERMS.path },
};

export default function TermsPage() {
  return <LegalPage doc={TERMS} />;
}
