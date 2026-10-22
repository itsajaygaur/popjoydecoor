import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PRIVACY_POLICY } from "@/data/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${PRIVACY_POLICY.title} | ${SITE.name}`,
  description: PRIVACY_POLICY.description,
  alternates: { canonical: PRIVACY_POLICY.path },
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={PRIVACY_POLICY} />;
}
