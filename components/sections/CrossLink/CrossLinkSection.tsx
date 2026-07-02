"use client";

import { ArrowUpRight, Building2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PROSTRANSTVA_URL } from "@/lib/paths";

/**
 * Большой блок-переход на Марафет Пространства.
 * Отдельная B2B-аудитория — владельцы салонов и бьюти-коворкингов.
 */
export function CrossLinkSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section anchor="for-partners" tone="light" className="bg-surface">
      <Container size="xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-accent-100 via-accent-90 to-ink-100 p-8 text-white shadow-[0_30px_80px_-25px_rgba(30,22,57,0.45)] md:p-14 lg:p-16"
        >
          {/* Декоративные orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(122,84,255,0.7) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(171,92,233,0.7) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white ring-1 ring-inset ring-white/20 backdrop-blur">
                <Building2 className="h-3.5 w-3.5" />
                Для партнёров
              </span>

              <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[56px]">
                У вас{" "}
                <span className="bg-gradient-to-br from-accent-40 via-magenta-50 to-rose-50 bg-clip-text text-transparent">
                  бьюти-салон
                </span>{" "}
                или коворкинг?
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Подключите площадку к экосистеме Марафет. Приведём поток
                мастеров и клиентов, дадим CRM, аналитику и поддержку. Подключение
                бесплатное, платите только % с записей через приложение.
              </p>

              <ul className="flex flex-col gap-2.5 text-sm text-white/85 md:text-base">
                <li className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-magenta-50" />
                  Гео-поиск выводит вашу площадку первой пользователям рядом
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-magenta-50" />
                  23 000+ мастеров в приложении ищут стабильное рабочее место
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-magenta-50" />
                  Экономия ~1 500 000 ₽/год: CRM, реклама и админ на нас
                </li>
              </ul>

              <a
                href={PROSTRANSTVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-ink-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)]"
              >
                Открыть Марафет Пространства
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </a>
            </div>

            {/* Большой preview-блок */}
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 scale-105 rounded-[32px] bg-gradient-to-br from-accent-60/30 to-magenta-60/30 blur-2xl"
              />
              <div className="relative grid gap-3 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-inset ring-white/15 backdrop-blur-md md:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-40">
                    prostranstva.marafet.app
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <Stat value="1500+" label="локаций на рынке" />
                  <Stat value="3%" label="доля лидера" />
                  <Stat value="23k" label="мастеров в апп" />
                  <Stat value="0 ₽" label="за подключение" />
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-accent-60 to-magenta-60 p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                    Экономия в год
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold leading-none md:text-4xl">
                    ~1 500 000 ₽
                  </p>
                  <p className="mt-2 text-xs text-white/75">
                    CRM, реклама, админ, рекрутинг. На нас.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/[0.06] p-3 ring-1 ring-inset ring-white/10">
      <p className="font-display text-xl font-bold leading-none text-white">
        {value}
      </p>
      <p className="mt-1 text-[10px] text-white/55">{label}</p>
    </div>
  );
}
