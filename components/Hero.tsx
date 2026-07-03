"use client";

import { ArrowDown, ArrowUpRight, Compass, Crown, ScrollText, Shield } from "lucide-react";
import { telegramUrl } from "@/config/site";
import { MotionDiv, Reveal } from "@/components/Motion";
import Section from "@/components/Section";

export default function Hero() {
  return (
    <Section className="min-h-screen pt-36 lg:flex lg:items-center">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <Reveal>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-parchment sm:text-6xl lg:text-7xl">
              Прокрастинация — это босс.
              <br />
              Победи его вместе со своей гильдией.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-parchment/70 sm:text-xl">
              Anti-Doomer превращает Telegram-группу в RPG-гильдию, где реальные
              задачи становятся квестами.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={telegramUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/45 bg-gold px-6 py-3.5 text-base font-semibold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-parchment active:scale-[0.98]"
              >
                Вступить в гильдию
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-parchment/16 bg-parchment/[0.06] px-6 py-3.5 text-base font-medium text-parchment backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-parchment/[0.1] active:scale-[0.98]"
              >
                <ArrowDown aria-hidden="true" className="size-5" />
                Как это работает
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[36px] border border-gold/15 bg-stone/70 shadow-premium backdrop-blur-2xl" />
            <div className="absolute inset-6 rounded-[30px] bg-[radial-gradient(circle_at_50%_18%,rgba(200,155,60,0.24),transparent_32%),linear-gradient(145deg,rgba(231,210,162,0.12),rgba(23,18,12,0.78))]" />
            <div className="absolute inset-x-[16%] top-[9%] h-[36%] rounded-t-full border border-gold/20 bg-obsidian/45" />
            <div className="absolute left-1/2 top-[11%] size-28 -translate-x-1/2 rounded-full border border-gold/35 bg-gold/[0.07] shadow-glow" />
            <Crown
              aria-hidden="true"
              className="absolute left-1/2 top-[18%] size-12 -translate-x-1/2 text-gold"
              strokeWidth={1.4}
            />
            <MotionDiv
              animate={{ y: [0, -8, 0], rotate: [0, 0.8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[10%] top-[31%] w-[58%] rounded-[24px] border border-gold/25 bg-[linear-gradient(135deg,rgba(231,210,162,0.18),rgba(23,18,12,0.72))] p-5 shadow-glow backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  <ScrollText aria-hidden="true" className="size-4" />
                  /start
                </div>
                <Shield aria-hidden="true" className="size-5 text-parchment/70" />
              </div>
              <div className="space-y-3.5">
                <div className="h-3 w-28 rounded-full bg-parchment/75" />
                <div className="h-3 w-40 rounded-full bg-parchment/28" />
                <div className="h-3 w-32 rounded-full bg-parchment/18" />
              </div>
            </MotionDiv>
            <MotionDiv
              animate={{ y: [0, 10, 0], rotate: [0, -0.8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[13%] right-[11%] grid h-[38%] w-[38%] place-items-center rounded-full border border-gold/30 bg-obsidian/60 shadow-glow backdrop-blur-2xl"
            >
              <Compass aria-hidden="true" className="size-16 text-gold/80" strokeWidth={1.2} />
            </MotionDiv>
            <div className="absolute bottom-[20%] left-[18%] h-2 w-[58%] rounded-full bg-gradient-to-r from-ember via-gold to-parchment" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
