export const locales = ['en', 'es', 'fr', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function getLocaleFromPathname(pathname: string): Locale {
  const locale = pathname.split('/')[1] as Locale;
  return locales.includes(locale) ? locale : defaultLocale;
}

export const localeNames = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  zh: '中文',
};

export const flagMap = {
  en: 'GB-UKM - United Kingdom.svg',
  es: 'ES - Spain.svg',
  fr: 'FR - France.svg',
  zh: 'CN - China.svg',
}; 