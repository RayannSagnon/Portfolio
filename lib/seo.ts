const DEFAULT_SITE_URL = "https://www.rayannsagnon.com";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;

  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  try {
    return new URL(candidate).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Rayann Sagnon";

export const DEFAULT_TITLE = "Rayann Sagnon · Product · Engineering";

export const DEFAULT_DESCRIPTION =
  "Engineering student at uOttawa building toward Product Management. Standout Studio client work, SIgns entering beta, StudentOS product exploration paused on purpose.";

export const SEO_KEYWORDS = [
  "Rayann Sagnon",
  "Rayann Sagnon portfolio",
  "Rayann Sagnon product",
  "Rayann Sagnon uOttawa",
  "aspiring product manager",
  "Standout Studio",
  "StudentOS",
  "SIgns",
  "University of Ottawa",
  "Ottawa",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
