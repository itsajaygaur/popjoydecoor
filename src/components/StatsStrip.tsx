import { STATS } from "@/data/content";

export function StatsStrip() {
  return (
    <section aria-label="Why customers choose us" className="bg-ink text-cream">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-8 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <dt className="order-2 mt-1 text-sm text-cream/75">{s.label}</dt>
            <dd className="order-1 font-display text-3xl font-semibold text-accent">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
