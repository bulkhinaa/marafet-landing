/**
 * Префикс basePath для статических ассетов в production.
 * GH Pages раздаёт по /marafet-landing/. В dev — пустой.
 */
const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/marafet-landing" : "";

/** Преобразует /logo.svg → /marafet-landing/logo.svg в проде */
export function assetPath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/** Экосистема: 3 лендинга */
export const PROSTRANSTVA_URL =
  "https://bulkhinaa.github.io/marafet-landing-prostranstva/";
export const PARTNERKA_URL =
  "https://bulkhinaa.github.io/marafet-landing-partnerka/";
