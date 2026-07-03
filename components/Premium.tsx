import { Badge, Crown } from "lucide-react";
import Card from "@/components/Card";
import { Reveal } from "@/components/Motion";
import Section from "@/components/Section";

const plans = [
  {
    title: "Личный Premium",
    price: "99 Telegram Stars",
    items: ["Уникальный значок", "Emoji", "Девиз", "Особый титул"],
    icon: Badge,
  },
  {
    title: "Гильдейский Premium",
    price: "199 Telegram Stars",
    items: ["GIF-паки", "Значок гильдии", "Дополнительные эффекты"],
    icon: Crown,
  },
];

export default function Premium() {
  return (
    <Section>
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-normal text-parchment sm:text-5xl">
          Premium
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {plans.map((plan, index) => (
          <Reveal key={plan.title} delay={index * 0.06}>
            <Card icon={plan.icon} className="relative min-h-[360px] overflow-hidden p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
              <h3 className="text-3xl font-semibold text-parchment">{plan.title}</h3>
              <p className="mt-5 text-2xl font-semibold text-gold">{plan.price}</p>
              <ul className="mt-9 space-y-4 text-lg leading-8 text-parchment/70">
                {plan.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
