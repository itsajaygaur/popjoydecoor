import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { REFUND_POLICY } from "@/data/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${REFUND_POLICY.title} | ${SITE.name}`,
  description: REFUND_POLICY.description,
  alternates: { canonical: REFUND_POLICY.path },
};

export default function RefundPolicyPage() {
  return <LegalPage doc={REFUND_POLICY} />;
}
