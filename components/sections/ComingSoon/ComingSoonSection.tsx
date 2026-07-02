"use client";

import { ShoppingBag, GraduationCap, BookOpen, Building2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { PROSTRANSTVA_URL } from "@/lib/paths";

interface Feature {
  icon: typeof ShoppingBag;
  eyebrow: string;
  title: string;
  description: string;
  link?: { href: string; label: string };
}

const FEATURES: Feature[] = [
  {
    icon: ShoppingBag,
    eyebrow: "Маркетплейс",
    title: "Товары красоты в пару кликов",
    description:
      "Мастерам: расходники и профессиональные бренды. Клиентам: всё для домашнего ухода, от стайлинга до масла для кутикулы.",
  },
  {
    icon: GraduationCap,
    eyebrow: "Школа Марафет",
    title: "Учитесь и начинайте зарабатывать",
    description:
      "Обучение и прокачка навыков, чтобы быстрее выйти на рынок и стабильно расти в доходе.",
  },
  {
    icon: BookOpen,
    eyebrow: "Курсы мастеров",
    title: "Создавайте свои программы",
    description:
      "Собирайте авторские курсы и обучайте других мастеров. Получать оплату сможете прямо на платформе.",
  },
  {
    icon: Building2,
    eyebrow: "Коворкинги",
    title: "Сеть пространств по стране",
    description:
      "Участвуйте в развитии коворкингов Марафет. Проводите визиты в удобном и красивом пространстве, бронируйте рабочее место в несколько кликов.",
    link: { href: PROSTRANSTVA_URL, label: "Партнёрам · Марафет Пространства" },
  },
];

export function ComingSoonSection() {
  return (
    <Section anchor="coming-soon" tone="dark" className="bg-ink-100">
      {/* Декоративные glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(171,92,233,0.6) 0%, transparent 70%)",
        }}
      />

      <Container size="xl" className="relative">
        <SectionHeading
          eyebrow="Скоро в Марафете"
          title={
            <>
              Бьюти-пространство{" "}
              <span className="bg-gradient-to-br from-accent-40 via-magenta-50 to-rose-50 bg-clip-text text-transparent">
                в вашем телефоне
              </span>
            </>
          }
          subtitle="Не только запись, но и рабочее место, товары, обучение и медиа."
          align="center"
          className="[&_h2]:!text-white [&_p]:!text-white/75 mx-auto"
        />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:gap-7">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            const CardBody = (
              <>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-60 to-magenta-60 text-white shadow-[0_10px_30px_-8px_rgba(122,84,255,0.6)] transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-magenta-50 ring-1 ring-inset ring-white/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-magenta-50" />
                    {f.eyebrow}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-white md:text-[26px]">
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed text-white/65">
                  {f.description}
                </p>
                {f.link && (
                  <a
                    href={f.link.href}
                    target={f.link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      f.link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-60 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-magenta-60"
                  >
                    {f.link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </>
            );

            return (
              <SpotlightCard
                key={f.title}
                borderRadius={24}
                spotlightColor="rgba(171, 92, 233, 0.22)"
                className="group flex flex-col gap-4 bg-white/[0.04] p-7 ring-1 ring-inset ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.07] hover:ring-white/20 md:p-9"
              >
                {CardBody}
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
