export const siteConfig = {
  name: "togethur",
  description:
    "togethur is a social accountability brand and app for short shared streaks, honest progress, connection, and small wins together.",
  url: "https://togethurapp.com",
} as const;

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}
