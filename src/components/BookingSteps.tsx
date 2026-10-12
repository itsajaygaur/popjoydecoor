import { STEPS } from "@/data/content";
import { eyebrow, sectionTitle } from "./ui";

export function BookingSteps() {
  return (
    <section id="how-it-works" aria-labelledby="steps-title" className="bg-sun-soft py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className={eyebrow}>How it works</p>
        <h2 id="steps-title" className={`${sectionTitle} mt-2`}>
          Book in 6 simple steps
        </h2>
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center rounded-full bg-white font-display text-xl font-semibold text-coral-deep shadow-sm ring-1 ring-ink/5"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
