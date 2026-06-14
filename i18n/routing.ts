import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["no", "da", "en", "nn", "sv"],
  defaultLocale: "no",
});

export type Locale = (typeof routing.locales)[number];
