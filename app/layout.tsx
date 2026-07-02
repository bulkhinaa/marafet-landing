import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bulkhinaa.github.io/marafet-landing"),
  title: {
    default: "Марафет · красота по любви. Мастер по вайбу.",
    template: "%s · Марафет",
  },
  description:
    "Откройте мастеров рядом, выбирайте по работам и оценкам, записывайтесь в пару кликов. А если вы мастер, управляйте расписанием, следите за доходом и развивайте клиентскую базу в одном приложении.",
  keywords: [
    "марафет",
    "запись к мастеру",
    "бьюти приложение",
    "маникюр",
    "брови",
    "ресницы",
    "приложение для мастеров",
    "клиент",
    "мастер",
    "бьюти-индустрия",
  ],
  openGraph: {
    title: "Марафет · красота по любви. Мастер по вайбу.",
    description:
      "Мастера рядом, портфолио и оценки, запись в пару кликов. Для мастеров: расписание, клиенты и доход в одном приложении.",
    url: "https://marafet.app",
    siteName: "Марафет",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Марафет",
    description: "Красота по любви. Мастер по вайбу.",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1639" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-surface text-ink-100 antialiased">
        {children}
      </body>
    </html>
  );
}
