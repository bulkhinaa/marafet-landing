"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { assetPath } from "@/lib/paths";

interface Screen {
  src: string;
  title: string;
  description: string;
  accent: "accent" | "magenta" | "rose";
}

const SCREENS: Screen[] = [
  {
    src: "/screens/screen-home.png",
    title: "Главная",
    description:
      "Мастера рядом с ближайшими слотами. Свайпайте работы прямо в карточке.",
    accent: "accent",
  },
  {
    src: "/screens/screen-master-card.png",
    title: "Карточка мастера",
    description:
      "Портфолио, оценки, услуги, расстояние пешком. Лайк двойным кликом.",
    accent: "magenta",
  },
  {
    src: "/screens/screen-booking.png",
    title: "Запись",
    description:
      "Выбор слота и услуги, оплата картой или бонусами. Без созвонов.",
    accent: "rose",
  },
];

// Реальные пропорции скринов из Figma — 375x812 (iPhone 13). Используем напрямую.
const PHONE_WIDTH = 280;
const PHONE_HEIGHT = Math.round((PHONE_WIDTH * 812) / 375); // 606

export function AppShowcaseSection() {
  return (
    <section
      id="app-showcase"
      className="relative isolate overflow-hidden bg-ink-100 py-24 md:py-32"
    >
      {/* Декоративные orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(122,84,255,0.55) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-1/4 -z-0 h-[400px] w-[400px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(171,92,233,0.6) 0%, transparent 70%)",
        }}
      />

      <Container size="xl" className="relative">
        <SectionHeading
          eyebrow="Так это выглядит"
          title={
            <>
              Понятный интерфейс,{" "}
              <span className="bg-gradient-to-br from-accent-40 via-magenta-50 to-rose-50 bg-clip-text text-transparent">
                красивая лента
              </span>
            </>
          }
          subtitle="Главная, карточка мастера, запись: всё спроектировано так, чтобы найти мастера и записаться за 30 секунд."
          align="center"
          className="[&_h2]:!text-white [&_p]:!text-white/75 mx-auto"
        />

        <div className="mt-16 grid items-start gap-10 md:mt-24 md:grid-cols-3 md:gap-6 lg:gap-10">
          {SCREENS.map((s, i) => (
            <div
              key={s.src}
              className={`flex flex-col items-center gap-5 ${
                i === 1 ? "md:mt-16" : ""
              }`}
            >
              <PhoneFrame src={s.src} alt={s.title} accent={s.accent} />
              <div className="max-w-sm px-4 text-center">
                <p
                  className={`mb-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
                    s.accent === "accent"
                      ? "text-accent-40"
                      : s.accent === "magenta"
                        ? "text-magenta-50"
                        : "text-rose-50"
                  }`}
                >
                  {s.title}
                </p>
                <p className="text-sm leading-relaxed text-white/65 md:text-base">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PhoneFrame({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent: "accent" | "magenta" | "rose";
}) {
  const glowMap = {
    accent: "from-accent-60/40 via-magenta-60/30 to-transparent",
    magenta: "from-magenta-60/40 via-rose-60/30 to-transparent",
    rose: "from-rose-60/40 via-magenta-60/30 to-transparent",
  };

  return (
    <div
      className="relative mx-auto"
      style={{ width: PHONE_WIDTH, maxWidth: "85vw" }}
    >
      {/* Glow за телефоном */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[60px] bg-gradient-to-br ${glowMap[accent]} blur-3xl`}
      />

      {/* Phone bezel: явные размеры, без aspect-ratio fokus-pokus */}
      <div className="relative inline-block rounded-[36px] bg-gradient-to-b from-ink-90 to-black p-1.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
        <Image
          src={assetPath(src)}
          alt={alt}
          width={PHONE_WIDTH - 12}
          height={PHONE_HEIGHT - 12}
          sizes="(max-width: 768px) 85vw, 280px"
          className="block h-auto w-full rounded-[30px] object-cover"
        />
        {/* Notch поверх скрина */}
        <div className="absolute left-1/2 top-3 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}
