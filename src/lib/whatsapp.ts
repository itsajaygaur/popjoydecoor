import { SITE } from "./site";

export function whatsappLink(message = "Hi"): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
