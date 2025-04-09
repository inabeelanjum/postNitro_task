import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export async function loadMessages(locale: string) {
  // Fallback to default locale if provided locale is invalid
  const safeLocale = locales.includes(locale as any) ? locale : defaultLocale;
  
  try {
    const messages = {
      common: (await import(`../../messages/${safeLocale}/common.json`)).default,
      nav: (await import(`../../messages/${safeLocale}/nav.json`)).default,
      hero: (await import(`../../messages/${safeLocale}/hero.json`)).default,
      plans: (await import(`../../messages/${safeLocale}/plans.json`)).default,
    };
    return messages;
  } catch (error) {
    console.error(`Error loading messages for locale ${safeLocale}:`, error);
    
    // Fallback to English if there's an error loading messages
    if (safeLocale !== 'en') {
      return loadMessages('en');
    }
    
    // If even English fails, return empty messages
    return {
      common: {},
      nav: {},
      hero: {},
      plans: {}
    };
  }
}

export const intlConfig = getRequestConfig(async ({ locale }) => {
  const messages = await loadMessages(locale);
  
  return {
    messages,
    timeZone: 'UTC',
    now: new Date(),
  };
}); 