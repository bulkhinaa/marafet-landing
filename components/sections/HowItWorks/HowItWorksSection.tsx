"use client";

import { Search, MousePointerClick, CalendarPlus, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Step {
  num: string;
  icon: typeof Search;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    icon: Search,
    title: "Поиск",
    description:
      "Откройте главную. Марафет покажет ближайших мастеров и свободные слоты. Лента подстроится под ваши любимые услуги.",
  },
  {
    num: "02",
    icon: MousePointerClick,
    title: "Выбор",
    description:
      "Смотрите работы и оценки. Выбирайте по фактам, а не по обещаниям.",
  },
  {
    num: "03",
    icon: CalendarPlus,
    title: "Запись",
    description:
      "Выберите слот и запишитесь. Оплата как удобно: картой или бонусами.",
  },
  {
    num: "04",
    icon: Star,
    title: "Визит",
    description:
      "Наслаждайтесь результатом и поставьте оценку после визита. Так лучшие мастера становятся заметнее.",
  },
];

export function HowItWorksSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section anchor="how-it-works" tone="dark" className="bg-ink-100">
      {/* Декоративный glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 -z-0 h-[500px] w-[500px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(122,84,255,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-1/4 -z-0 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,123,156,0.5) 0%, transparent 70%)",
        }}
      />

      <Container size="xl" className="relative">
        <SectionHeading
          eyebrow="Как это работает"
          title={
            <>
              Сценарий на 30 секунд,{" "}
              <span className="bg-gradient-to-br from-accent-40 via-magenta-50 to-rose-50 bg-clip-text text-transparent">
                и вы в записи
              </span>
            </>
          }
          subtitle="Четыре шага: от первого открытия приложения до оценки после визита."
          align="center"
          className="[&_h2]:!text-white [&_p]:!text-white/75 mx-auto"
        />

        <div className="relative mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
          />

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.num}
                initial={
                  prefersReducedMotion ? false : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col gap-4 rounded-3xl bg-white/[0.04] p-7 ring-1 ring-inset ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.08] hover:ring-white/20 md:p-8"
              >
                {/* Step number — top right */}
                <span className="absolute right-6 top-6 font-display text-3xl font-bold text-white/15 transition-colors group-hover:text-white/35 md:text-4xl">
                  {s.num}
                </span>

                <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-60 to-magenta-60 text-white shadow-[0_10px_30px_-8px_rgba(122,84,255,0.6)]">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-40">
                  шаг {s.num}
                </p>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">
                  {s.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
