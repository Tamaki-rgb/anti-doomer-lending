import { ArrowDown, ArrowUpRight } from "lucide-react";
import { telegramUrl } from "@/config/site";
import { Reveal } from "@/components/Motion";
import Section from "@/components/Section";

export default function CTA() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-[24px] border border-gold/18 bg-panel px-6 py-16 text-center shadow-premium backdrop-blur-2xl sm:px-10 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,155,60,0.22),transparent_34%),radial-gradient(circle_at_20%_100%,rgba(180,95,42,0.16),transparent_28%)]" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-5xl font-semibold leading-[1.04] text-parchment sm:text-6xl">
              Пора перестать откладывать.
            </h2>
            <a
              href={telegramUrl}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-gold/45 bg-gold px-7 py-3.5 text-base font-semibold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-parchment active:scale-[0.98]"
            >
              Начать путь
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </a>
            <div className="mt-7 flex justify-center text-gold/60">
              <ArrowDown aria-hidden="true" className="size-5" />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
