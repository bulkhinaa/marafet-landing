"use client";

import { MapPin, Award, Gift, CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface Feature {
  icon: typeof MapPin;
  eyebrow: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: MapPin,
    eyebrow: "Поиск",
    title: "Ближайшие мастера сразу в ленте",
    description:
      "Марафет показывает мастеров поблизости прямо на главной, с ближайшими доступными слотами. Умная лента подстраивается под вас: чаще предлагает тех, кто работает с вашими любимыми услугами, и сразу подставляет подходящее время.",
  },
  {
    icon: Award,
    eyebrow: "Результат на виду",
    title: "Портфолио и оценки",
    description:
      "Пары секунд достаточно, чтобы поймать «мэтч» с мастером мечты. Свайпайте работы прямо в карточке, без захода в профиль.",
  },
  {
    icon: Gift,
    eyebrow: "Бонусы",
    title: "Бонусы, которые возвращаются",
    description:
      "Пригласили друга? Получаете бонусы за каждый его визит, не только за первый. А ещё 1% с визитов тех, кого он пригласит дальше. Бонусы умеют расти.",
  },
  {
    icon: CalendarCheck,
    eyebrow: "Без звонков",
    title: "Запись без созвонов и переписок",
    description:
      "Напоминания, история визитов и избранные услуги: всё в одном месте. Перенести или отменить запись можно за пару действий, без звонков и сообщений.",
  },
];

export function ForClientsSection() {
  return (
    <Section anchor="for-clients" tone="light">
      <Container size="xl">
        <SectionHeading
          eyebrow="Для клиентов"
          title={
            <>
              Не нужно искать мастера «где попало»,{" "}
              <span className="bg-gradient-to-br from-accent-60 via-magenta-60 to-rose-60 bg-clip-text text-transparent">
                свой всегда под рукой
              </span>
            </>
          }
          subtitle="Ближайшие, лучшие, проверенные оценками. Без созвонов. Запись в пару кликов."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6 md:mt-20">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <SpotlightCard
                key={f.title}
                borderRadius={24}
                spotlightColor="rgba(122, 84, 255, 0.16)"
                className="group flex flex-col gap-4 bg-white p-7 ring-1 ring-inset ring-ink-20 transition-shadow hover:shadow-[0_25px_60px_-25px_rgba(122,84,255,0.35)] hover:ring-accent-30"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-60 to-magenta-60 text-white shadow-[0_10px_30px_-8px_rgba(122,84,255,0.6)] transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-70">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-60" />
                    {f.eyebrow}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink-100 md:text-[26px]">
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-70">
                  {f.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
