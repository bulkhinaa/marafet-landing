"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ShimmerText } from "@/components/ui/ShimmerText";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-ink-100 text-white"
    >
      {/* Большие радиальные orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 -z-0 h-[700px] w-[700px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(122,84,255,0.65) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 -z-0 h-[500px] w-[500px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(171,92,233,0.55) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 -z-0 h-[400px] w-[400px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,123,156,0.5) 0%, transparent 70%)",
        }}
      />

      <Container
        size="xl"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          {/* LEFT — текст */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/85 ring-1 ring-inset ring-white/20 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-magenta-50" />
              Бьюти-приложение
            </span>

            <h1 className="font-display text-[40px] font-bold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[80px]">
              Красота{" "}
              <ShimmerText className="bg-gradient-to-br from-accent-40 via-magenta-50 to-rose-50">
                по любви
              </ShimmerText>
              .
              <br />
              Мастер по{" "}
              <ShimmerText className="bg-gradient-to-br from-rose-50 via-magenta-50 to-accent-40">
                вайбу
              </ShimmerText>
              .
            </h1>

            <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
              Откройте мастеров рядом, выбирайте по работам и оценкам, записывайтесь
              в пару кликов. А если вы мастер — управляйте расписанием, следите за
              доходом и развивайте клиентскую базу в одном приложении.
            </p>

            {/* Store buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-accent-60 via-magenta-60 to-rose-60 px-5 py-3.5 text-white shadow-[0_20px_60px_-20px_rgba(122,84,255,0.65)] transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-60 via-magenta-60 to-rose-60 opacity-100 transition-opacity group-hover:opacity-90" />
                <AppStoreGlyph />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/85">
                    Скачать в
                  </span>
                  <span className="font-display text-base font-bold">
                    App Store
                  </span>
                </div>
              </a>
              <a
                href="#download"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white/[0.08] px-5 py-3.5 text-white ring-1 ring-inset ring-white/20 backdrop-blur transition-colors hover:bg-white/[0.14] hover:ring-white/35"
              >
                <GooglePlayGlyph />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                    Доступно в
                  </span>
                  <span className="font-display text-base font-bold">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            <p className="flex items-start gap-2 text-sm text-white/55 md:text-base">
              <Heart className="mt-0.5 h-4 w-4 shrink-0 fill-rose-50 text-rose-50" />
              <span>
                Лайк мастеру — двойным кликом. Напоминания — сами. Бонусы — за
                каждого приглашённого <span className="text-white/40">(и даже за
                «друзей друзей»)</span>.
              </span>
            </p>
          </motion.div>

          {/* RIGHT — макет приложения */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function AppStoreGlyph() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.05 12.04c-.02-2.05 1.66-3.03 1.73-3.08-0.95-1.39-2.42-1.58-2.94-1.6-1.25-.13-2.45.74-3.09.74-.65 0-1.63-.72-2.68-.7-1.37.02-2.65.8-3.36 2.04-1.44 2.49-.37 6.18 1.04 8.21.69 1 1.5 2.11 2.55 2.07 1.03-.04 1.41-.66 2.66-.66 1.24 0 1.6.66 2.68.64 1.11-.02 1.81-1.01 2.49-2.01.78-1.15 1.1-2.27 1.12-2.33-.02-.01-2.14-.82-2.16-3.27zM15.06 5.39c.57-.69.95-1.65.85-2.6-.82.03-1.81.55-2.4 1.24-.53.61-.99 1.59-.87 2.53.91.07 1.85-.46 2.42-1.17z" />
    </svg>
  );
}

function GooglePlayGlyph() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#0078ff" />
        </linearGradient>
        <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff9500" />
          <stop offset="100%" stopColor="#ffd400" />
        </linearGradient>
        <linearGradient id="gp3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3a3a" />
          <stop offset="100%" stopColor="#ff7676" />
        </linearGradient>
        <linearGradient id="gp4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d563" />
          <stop offset="100%" stopColor="#00a046" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gp1)"
        d="M3.6 1.8c-.4.4-.6 1-.6 1.7v17c0 .7.2 1.3.6 1.7l9.5-9.6V11.4L3.6 1.8z"
      />
      <path
        fill="url(#gp2)"
        d="M16.4 15.2L13.1 11.9v0.2l3.3-3.3 4.1 2.4c1.2.7 1.2 1.9 0 2.5l-4.1 2.5z"
      />
      <path
        fill="url(#gp3)"
        d="M16.4 15.2l-3.3-3.3-9.5 9.6c.4.4 1.1.5 1.8 0l11-6.3z"
      />
      <path
        fill="url(#gp4)"
        d="M16.4 8.8L5.4 2.4c-.7-.4-1.4-.4-1.8 0l9.5 9.5 3.3-3.1z"
      />
    </svg>
  );
}

/**
 * Стилизованный mockup телефона с упрощённой версткой "ленты мастеров".
 * Эта версия не зависит от внешних изображений — все элементы рисуются стилями.
 * При наличии скрина из Figma — заменяется на <Image src={...} />.
 */
function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow за телефоном */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[60px] bg-gradient-to-br from-accent-60/40 via-magenta-60/40 to-rose-60/30 blur-3xl"
      />

      {/* Phone frame */}
      <div className="relative mx-auto aspect-[9/19] w-full max-w-[340px] rounded-[44px] bg-gradient-to-b from-ink-90 to-black p-2 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
        {/* Screen */}
        <div className="relative h-full overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0d0a1a] via-[#1a1230] to-[#0d0a1a]">
          {/* Notch */}
          <div className="absolute left-1/2 top-1.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* App content — feed of masters */}
          <div className="relative h-full overflow-hidden p-3 pt-10">
            {/* Status bar */}
            <div className="mb-3 flex items-center justify-between px-2 text-[10px] font-bold text-white/90">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              </div>
            </div>

            {/* Header */}
            <div className="mb-3 px-1">
              <p className="text-[10px] uppercase tracking-wider text-white/40">
                Мастера рядом
              </p>
              <h3 className="font-display text-lg font-bold leading-tight text-white">
                Москва · 2 км
              </h3>
            </div>

            {/* Master cards */}
            <div className="flex flex-col gap-2.5">
              <MasterCard
                name="Анна К."
                service="Маникюр"
                price="2 700 ₽"
                rating={5.0}
                next="через 30 мин"
                accent="accent"
              />
              <MasterCard
                name="Виктория М."
                service="Брови"
                price="1 800 ₽"
                rating={4.9}
                next="через 1 ч"
                accent="magenta"
              />
              <MasterCard
                name="Дарья В."
                service="Стрижка"
                price="3 500 ₽"
                rating={5.0}
                next="завтра 10:00"
                accent="rose"
                isNew
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating heart "Like" badge */}
      <div className="absolute -right-4 top-12 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-60 to-magenta-60 text-white shadow-[0_15px_40px_-10px_rgba(255,123,156,0.6)] ring-2 ring-white/20">
        <Heart className="h-6 w-6 fill-white" strokeWidth={0} />
      </div>

      {/* Floating "+1%" badge */}
      <div className="absolute -left-2 bottom-20 z-20 flex flex-col items-center gap-0 rounded-2xl bg-white px-3 py-2 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)]">
        <span className="font-display text-lg font-bold text-accent-60">
          +1%
        </span>
        <span className="text-[8px] font-bold uppercase tracking-wider text-ink-60">
          бонус
        </span>
      </div>
    </div>
  );
}

function MasterCard({
  name,
  service,
  price,
  rating,
  next,
  accent,
  isNew,
}: {
  name: string;
  service: string;
  price: string;
  rating: number;
  next: string;
  accent: "accent" | "magenta" | "rose";
  isNew?: boolean;
}) {
  const accentMap = {
    accent: "from-accent-60 to-magenta-60",
    magenta: "from-magenta-60 to-rose-60",
    rose: "from-rose-60 to-accent-60",
  };
  return (
    <div className="relative flex items-center gap-2.5 rounded-2xl bg-white/[0.06] p-2.5 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accentMap[accent]} font-display text-xs font-bold text-white shadow-[0_8px_20px_-6px_rgba(122,84,255,0.5)]`}
      >
        {name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-xs font-bold text-white">{name}</p>
          {isNew && (
            <span className="rounded-full bg-rose-60/30 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-rose-50">
              new
            </span>
          )}
        </div>
        <p className="truncate text-[10px] text-white/55">
          {service} · {price}
        </p>
        <p className="mt-0.5 text-[9px] font-medium text-magenta-50">{next}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-0.5">
        <div className="flex items-center gap-0.5">
          <svg className="h-2.5 w-2.5 fill-warning" viewBox="0 0 24 24">
            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
          </svg>
          <span className="text-[10px] font-bold text-white">{rating}</span>
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-success" />
      </div>
    </div>
  );
}
