import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export function getTranslations(namespace: string) {
  return async (locale: string) => {
    try {
      return (await import(`../../messages/${locale}/${namespace}.json`)).default;
    } catch (error) {
      console.error(`Failed to load translations for ${locale}/${namespace}:`, error);
      return {};
    }
  };
}

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

export const requestConfig = getRequestConfig(async ({ locale }) => {
  const messages = {};
  
  // Load all message namespaces for the locale
  const namespaces = ['common', 'nav', 'hero', 'plans'];
  
  for (const namespace of namespaces) {
    try {
      messages[namespace] = (await import(`../../messages/${locale}/${namespace}.json`)).default;
    } catch (error) {
      console.error(`Failed to load ${namespace} translations for ${locale}:`, error);
      messages[namespace] = {};
    }
  }
  
  return {
    messages,
    timeZone: 'UTC',
    now: new Date(),
  };
}); 