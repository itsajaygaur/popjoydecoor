export const SITE = {
  name: "Pop Joy Decoor",
  url: "https://popjoydecoor.in",
  phoneDisplay: "+91 98701 56953",
  phoneHref: "tel:+919870156953",
  whatsappNumber: "919870156953",
  logo: "/images/brand/logo.png",
  areas: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"],
} as const;

export const LANDING_PATH = "/ballon-decoration-in-delhi-ncr/";
export const THANK_YOU_PATH = "/thank-you/";

// Policy URLs. The refund and privacy paths match the links in the policy document.
export const REFUND_PATH = "/payment-refund-policy/";
export const PRIVACY_PATH = "/privacy-policy/";
export const TERMS_PATH = "/terms-and-conditions/";

export const LEGAL_LINKS = [
  { label: "Refund Policy", href: REFUND_PATH },
  { label: "Privacy Policy", href: PRIVACY_PATH },
  { label: "Terms & Conditions", href: TERMS_PATH },
] as const;
