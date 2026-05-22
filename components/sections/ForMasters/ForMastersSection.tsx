"use client";

import { Megaphone, CalendarClock, TrendingUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { FloatingElement } from "@/components/ui/FloatingElement";

interface Feature {
  icon: typeof Megaphone;
  eyebrow: string;
  title: string;
  description: string;
  accent?: boolean;
}

const FEATURES: Feature[] = [
  {
    icon: Megaphone,
    eyebrow: "Соцсеть мастера",
    title: "Страница, которая продаёт",
    description:
      "В ближайших релизах Марафет станет соцсетью для мастеров: публикации, подписчики и монетизация. Всё, чтобы ваша аудитория работала на вас.",
    accent: true,
  },
  {
    icon: CalendarClock,
    eyebrow: "График",
    title: "Календарь, который бережёт вас",
    description:
      "Ставьте рабочие часы, перерывы и выходные. Нужен отдых? Включайте «Отпуск» одним нажатием.",
  },
  {
    icon: TrendingUp,
    eyebrow: "Доход",
    title: "Прозрачный доход",
    description:
      "Задайте цель по доходу — Марафет подскажет, как загрузить расписание. Смотрите динамику заработка по неделям и месяцам, анализируйте отзывы, чтобы увидеть зоны роста.",
    accent: true,
  },
  {
    icon: ShieldCheck,
    eyebrow: "Самозанятость",
    title: "Работайте спокойно",
    description:
      "Мы за честный заработок. Марафет помогает пройти этот путь проще: меньше бумажек, больше свободы. Подскажем, как всё оформить, и поможем выстроить процессы.",
  },
];

export function ForMastersSection() {
  return (
    <Section anchor="for-masters" tone="light" className="bg-surface-soft">
      <Container size="xl">
        <SectionHeading
          eyebrow="Для мастеров"
          title={
            <>
              Ваш персональный{" "}
              <span className="bg-gradient-to-br from-accent-60 via-magenta-60 to-rose-60 bg-clip-text text-transparent">
                админ в телефоне
              </span>
            </>
          }
          subtitle="Расписание, клиенты, рост и доход — в одном приложении. Без CRM, без админа, без бумажек."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:gap-7 [transform-style:preserve-3d]">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <TiltCard
                key={f.title}
                maxTilt={5}
                className={`group flex flex-col gap-4 rounded-3xl p-7 md:p-9 ${
                  f.accent
                    ? "bg-gradient-to-br from-ink-100 via-accent-100 to-ink-100 text-white ring-1 ring-inset ring-accent-60/40"
                    : "bg-white ring-1 ring-inset ring-ink-20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FloatingElement
                    amplitude={3}
                    duration={4 + (i % 4) * 0.5}
                    delay={(i % 4) * 0.15}
                  >
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                        f.accent
                          ? "bg-white/10 text-accent-30 ring-1 ring-inset ring-white/15"
                          : "bg-gradient-to-br from-accent-60 to-magenta-60 text-white shadow-[0_10px_30px_-8px_rgba(122,84,255,0.5)]"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                  </FloatingElement>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${
                      f.accent
                        ? "bg-white/10 text-accent-30 ring-1 ring-inset ring-white/15"
                        : "bg-accent-10 text-accent-70"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        f.accent ? "bg-magenta-50" : "bg-accent-60"
                      }`}
                    />
                    {f.eyebrow}
                  </span>
                </div>
                <h3
                  className={`font-display text-2xl font-bold leading-tight tracking-tight md:text-[26px] ${
                    f.accent ? "text-white" : "text-ink-100"
                  }`}
                >
                  {f.title}
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    f.accent ? "text-white/75" : "text-ink-70"
                  }`}
                >
                  {f.description}
                </p>
              </TiltCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
