import Image from "next/image";
import { PACKAGES, STARTING_PRICE, formatPrice } from "@/data/packages";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { btn } from "./ui";

const heroIds = ["birthday-ring-chrome-marquee", "anniversary-ring-orange-gold", "birthday-backdrop-gold-purple"];
const heroImages = heroIds.map((id) => PACKAGES.find((p) => p.id === id)!);

export function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-14 md:grid-cols-[1.05fr_1fr] md:pt-16 md:pb-20">
        <div>
          <h1 className="font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl">
            <span className="italic text-brand">Balloon Decoration</span> in Delhi NCR
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Birthday, anniversary, baby shower and welcome-baby setups — designed, delivered and decorated at your home or
            venue across {SITE.areas.slice(0, -1).join(", ")} and {SITE.areas.at(-1)}. Same-day slots available.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#packages" className={`${btn.base} ${btn.primary} ${btn.lg} w-full sm:w-auto`}>
              View packages
            </a>
            <a
              href={whatsappLink("Hi, I'd like to book a balloon decoration.")}
              target="_blank"
              rel="noopener"
              className={`${btn.base} ${btn.whatsapp} ${btn.lg} w-full sm:w-auto`}
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

        <div className="mx-auto grid w-full max-w-md grid-cols-[1.15fr_1fr] gap-3 md:max-w-none">
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
        </div>
      </div>
    </section>
  );
}
