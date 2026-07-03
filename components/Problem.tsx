import { Clipboard, TrendingUp, Users } from "lucide-react";
import Card from "@/components/Card";
import { Reveal } from "@/components/Motion";
import Section from "@/components/Section";

const problems = [
  {
    title: "Todo-листы не мотивируют",
    description:
      "Записать задачу недостаточно.\nНикто не узнает, выполнил ты её или нет.",
    icon: Clipboard,
  },
  {
    title: "Нет ответственности",
    description:
      "Когда никто не следит за прогрессом,\nлегко сказать \"сделаю завтра\".",
    icon: Users,
  },
  {
    title: "Не видно прогресса",
    description: "Даже после десятков задач\nне возникает ощущения роста.",
    icon: TrendingUp,
  },
];

export default function Problem() {
  return (
    <Section>
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-normal text-parchment sm:text-5xl">
          Почему люди бросают цели?
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {problems.map((problem, index) => (
          <Reveal key={problem.title} delay={index * 0.05}>
            <Card icon={problem.icon} className="h-full">
              <h3 className="text-2xl font-semibold text-parchment">
                {problem.title}
              </h3>
              <p className="mt-4 whitespace-pre-line text-base leading-7 text-parchment/60">
                {problem.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
