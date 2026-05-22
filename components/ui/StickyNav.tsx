"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/cn";
import { LogoMark } from "./Logo";
import { PROSTRANSTVA_URL } from "@/lib/paths";

const SECTIONS = [
  { id: "for-clients", label: "Клиентам" },
  { id: "how-it-works", label: "Как работает" },
  { id: "for-masters", label: "Мастерам" },
  { id: "coming-soon", label: "Скоро" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 40);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center gap-3 rounded-full transition-all duration-300",
          "w-[calc(100%-32px)] max-w-[1280px] px-3 md:gap-4 md:px-5",
          scrolled
            ? "bg-white/90 ring-1 ring-inset ring-ink-20 shadow-[0_10px_40px_-15px_rgba(30,22,57,0.18)] backdrop-blur-md py-2"
            : "bg-white/0 ring-1 ring-inset ring-white/15 backdrop-blur-sm py-3"
        )}
      >
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2.5"
          aria-label="Марафет · главная"
        >
          <LogoMark size={36} glow />
          <span
            className={cn(
              "hidden whitespace-nowrap font-display text-sm font-bold tracking-tight md:inline",
              scrolled ? "text-ink-100" : "text-white"
            )}
          >
            Марафет
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors xl:px-3",
                scrolled
                  ? "text-ink-70 hover:bg-accent-10 hover:text-ink-100"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Cross-link на Марафет Пространства (B2B) */}
        <a
          href={PROSTRANSTVA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1 ring-inset transition-colors md:inline-flex",
            scrolled
              ? "bg-accent-10 text-accent-70 ring-accent-30 hover:bg-accent-20"
              : "bg-white/[0.08] text-white ring-white/25 hover:bg-white/15"
          )}
          aria-label="Открыть лендинг Марафет Пространства для коворкингов"
        >
          Для коворкингов
          <ExternalLink className="h-3 w-3" />
        </a>

        {/* Main CTA — Скачать */}
        <a
          href="#download"
          className={cn(
            "inline-flex h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors md:px-5",
            scrolled
              ? "bg-ink-100 text-white hover:bg-ink-90"
              : "bg-white text-ink-100 hover:bg-white/90"
          )}
        >
          Скачать
        </a>
      </div>
    </header>
  );
}
