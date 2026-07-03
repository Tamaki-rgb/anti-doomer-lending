import {
  Award,
  Bell,
  Flame,
  Gem,
  ShieldCheck,
  Sparkles,
  Trophy,
  Vote,
} from "lucide-react";
import Card from "@/components/Card";
import { Reveal } from "@/components/Motion";
import Section from "@/components/Section";

const features = [
  { title: "Квесты", description: "Создавай задачи любой сложности.", icon: ShieldCheck },
  { title: "XP", description: "Получай опыт за выполнение.", icon: Sparkles },
  { title: "Репутация", description: "Зарабатывай уважение гильдии.", icon: Gem },
  { title: "Стрики", description: "Не прерывай серию побед.", icon: Flame },
  { title: "Голосование", description: "Гильдия подтверждает выполнение.", icon: Vote },
  { title: "Достижения", description: "Открывай скрытые награды.", icon: Award },
  { title: "Leaderboard", description: "Соревнуйся с друзьями.", icon: Trophy },
  { title: "Напоминания", description: "Бот предупредит о дедлайне.", icon: Bell },
];

export default function Features() {
  return (
    <Section>
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-normal text-parchment sm:text-5xl">
          Возможности
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={(index % 4) * 0.04}>
            <Card icon={feature.icon} className="h-full min-h-[220px]">
              <h3 className="text-2xl font-semibold text-parchment">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-parchment/60">
                {feature.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
