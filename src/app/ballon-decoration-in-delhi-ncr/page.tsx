import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { BookingSteps } from "@/components/BookingSteps";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { PackageCatalog } from "@/components/PackageCatalog";
import { ServiceAreas } from "@/components/ServiceAreas";
import { StatsStrip } from "@/components/StatsStrip";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { Testimonials } from "@/components/Testimonials";
import { btn, eyebrow, sectionTitle } from "@/components/ui";
import { FAQS } from "@/data/content";
import { PACKAGES, STARTING_PRICE, formatPrice } from "@/data/packages";
import { LANDING_PATH, SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

const title = `Balloon Decoration in Delhi NCR | Birthday & Anniversary from ${formatPrice(STARTING_PRICE)} – ${SITE.name}`;
const description = `Balloon decoration at home or venue in Delhi, Gurgaon, Noida, Ghaziabad & Faridabad. Birthday, anniversary, baby shower & welcome-baby setups from ${formatPrice(STARTING_PRICE)}. Book with ₹500 advance, same-day slots.`;
const ogImage = PACKAGES.find((p) => p.id === "birthday-ring-chrome-marquee")!;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: LANDING_PATH },
  openGraph: {
    type: "website",
    url: LANDING_PATH,
    siteName: SITE.name,
    title,
    description,
    locale: "en_IN",
    images: [{ url: ogImage.image, width: ogImage.width, height: ogImage.height, alt: ogImage.title }],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage.image] },
};

const prices = PACKAGES.flatMap((p) => (p.price === null ? [] : [p.price]));
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      image: `${SITE.url}${ogImage.image}`,
      telephone: "+919870156953",
      priceRange: `${formatPrice(Math.min(...prices))} – ${formatPrice(Math.max(...prices))}`,
      areaServed: SITE.areas.map((name) => ({ "@type": "City", name })),
    },
    {
      "@type": "Service",
      name: "Balloon Decoration in Delhi NCR",
      serviceType: "Balloon decoration",
      provider: { "@id": `${SITE.url}/#business` },
      areaServed: SITE.areas.map((name) => ({ "@type": "City", name })),
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        offerCount: prices.length,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Balloon Decoration in Delhi NCR", item: `${SITE.url}${LANDING_PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function BalloonDecorationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <StatsStrip />

        <section id="packages" aria-labelledby="packages-title" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className={eyebrow}>Packages</p>
                <h2 id="packages-title" className={`${sectionTitle} mt-2`}>
                  Pick your decoration
                </h2>
              </div>
              <p className="max-w-sm text-ink-soft">
                Every setup is installed at your venue. Colours, names and numbers can be customised.
              </p>
            </div>
            <div className="mt-8">
              <PackageCatalog />
            </div>
          </div>
        </section>

        <BookingSteps />
        <Testimonials />
        <ServiceAreas />

        <section id="book" aria-labelledby="book-title" className="bg-lilac py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className={eyebrow}>Book an appointment</p>
              <h2 id="book-title" className={`${sectionTitle} mt-2`}>
                Tell us your date — we&apos;ll handle the rest
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Share your occasion, date and venue. We&apos;ll confirm availability, and you lock the slot with just ₹500
                advance via UPI.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Hi, I'd like to book a balloon decoration.")}
                  target="_blank"
                  rel="noopener"
                  className={`${btn.base} ${btn.whatsapp} ${btn.md}`}
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp us
                </a>
                <a href={SITE.phoneHref} className={`${btn.base} ${btn.ghost} ${btn.md}`}>
                  <PhoneIcon className="size-4" />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <BookingForm />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
