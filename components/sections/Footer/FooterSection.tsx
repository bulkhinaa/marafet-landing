"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { PROSTRANSTVA_URL } from "@/lib/paths";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-ink-100 text-white">
      {/* Top hairline */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <Container size="xl" className="relative py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-12">
          {/* Brand col */}
          <div className="flex flex-col gap-5">
            <Logo variant="light" size={44} />
            <p className="max-w-sm text-sm leading-relaxed text-white/65 md:text-base">
              Красота по любви. Мастер по вайбу. Откройте мастеров рядом и
              записывайтесь в пару кликов.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/15"
              >
                App Store
              </a>
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/15"
              >
                Google Play
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
              Лендинг
            </h4>
            <Link
              href="#for-clients"
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              Для клиентов
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              Как работает
            </Link>
            <Link
              href="#for-masters"
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              Для мастеров
            </Link>
            <Link
              href="#coming-soon"
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              Скоро в Марафете
            </Link>
            <Link
              href="#download"
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              Скачать приложение
            </Link>
          </div>

          {/* Partners + legal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
              Партнёрам
            </h4>
            <a
              href={PROSTRANSTVA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
            >
              Марафет Пространства
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:hello@marafet.app"
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              hello@marafet.app
            </a>
            <a
              href="https://t.me/marafet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              Telegram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Марафет. Все права защищены.</p>
          {/* Юр-ссылки скрыты: документы ещё не опубликованы (href="#" вели в никуда).
              Вернуть с реальными страницами. */}
          {false && (
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="transition-colors hover:text-white/75">
                Политика конфиденциальности
              </a>
              <a href="#" className="transition-colors hover:text-white/75">
                Пользовательское соглашение
              </a>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
