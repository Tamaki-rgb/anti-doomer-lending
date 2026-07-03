import { Reveal } from "@/components/Motion";
import Section from "@/components/Section";

const steps = [
  {
    number: "1",
    title: "Создай гильдию",
    description: "Добавь бота в Telegram-группу.",
  },
  {
    number: "2",
    title: "Создай героя",
    description: "Выбери имя и главную цель.",
  },
  {
    number: "3",
    title: "Выполняй квесты",
    description: "Получай задания и отправляй доказательства.",
  },
  {
    number: "4",
    title: "Расти",
    description: "Получай XP, репутацию,\nдостижения и новые титулы.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-normal text-parchment sm:text-5xl">
          Как это работает
        </h2>
      </Reveal>
      <div className="relative mt-14">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold/0 via-gold/55 to-gold/0 md:block" />
        <div className="grid gap-5">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <div className="relative rounded-[24px] border border-line bg-panel p-6 shadow-premium backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-gold/35 md:ml-16">
                <div className="absolute -left-[4.25rem] top-6 hidden size-12 items-center justify-center rounded-full border border-gold/30 bg-obsidian text-sm font-semibold text-gold shadow-glow md:flex">
                  {step.number}
                </div>
                <div className="flex items-start gap-5 md:hidden">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08] text-sm font-semibold text-gold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-parchment">
                      {step.title}
                    </h3>
                    <p className="mt-3 whitespace-pre-line text-base leading-7 text-parchment/60">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <h3 className="text-2xl font-semibold text-parchment">
                    {step.title}
                  </h3>
                  <p className="mt-3 whitespace-pre-line text-base leading-7 text-parchment/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
