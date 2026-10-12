import Image from "next/image";
import { PACKAGES, STARTING_PRICE, formatPrice } from "@/data/packages";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { StarIcon, WhatsAppIcon } from "./icons";
import { btn } from "./ui";

const heroIds = ["birthday-ring-chrome-marquee", "anniversary-ring-orange-gold", "birthday-backdrop-gold-purple"];
const heroImages = heroIds.map((id) => PACKAGES.find((p) => p.id === id)!);

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-accent/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute top-40 -left-32 size-72 rounded-full bg-brand-light/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-14 md:grid-cols-[1.05fr_1fr] md:pt-16 md:pb-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-sm ring-1 ring-ink/5">
            <span className="flex text-accent">
              {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className="size-3.5" />)}
            </span>
            4.7+ Google rating · 10,000+ happy customers
          </p>

          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl">
            <span className="italic text-brand">Balloon Decoration</span> in Delhi NCR
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Birthday, anniversary, baby shower and welcome-baby setups — designed, delivered and decorated at your home or
            venue across {SITE.areas.slice(0, -1).join(", ")} and {SITE.areas.at(-1)}. Same-day slots available.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#packages" className={`${btn.base} ${btn.primary} ${btn.lg}`}>
              View packages
            </a>
            <a
              href={whatsappLink("Hi, I'd like to book a balloon decoration.")}
              target="_blank"
              rel="noopener"
              className={`${btn.base} ${btn.whatsapp} ${btn.lg}`}
            >
              <WhatsAppIcon />
              Book on WhatsApp
            </a>
          </div>

          <p className="mt-5 text-sm text-ink-soft">
            Starting at <strong className="text-ink">{formatPrice(STARTING_PRICE)}</strong> · Just ₹500 advance to book ·
            Pay the rest after setup
          </p>
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-[1.15fr_1fr] gap-3 md:max-w-none">
          <div className="row-span-2 overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10 ring-4 ring-white">
            <Image
              src={heroImages[0].image}
              alt={`${heroImages[0].title} — birthday balloon decoration`}
              width={heroImages[0].width}
              height={heroImages[0].height}
              priority
              sizes="(min-width: 768px) 280px, 55vw"
              className="h-full w-full object-cover"
            />
          </div>
          {heroImages.slice(1).map((img) => (
            <div key={img.id} className="overflow-hidden rounded-[1.5rem] shadow-lg shadow-ink/10 ring-4 ring-white">
              <Image
                src={img.image}
                alt={`${img.title} balloon decoration`}
                width={img.width}
                height={img.height}
                sizes="(min-width: 768px) 240px, 45vw"
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          ))}
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-ink/5">
            <p className="text-xs font-medium text-ink-soft">Packages from</p>
            <p className="font-display text-2xl font-semibold text-brand">{formatPrice(STARTING_PRICE)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
