import { getRequestConfig } from 'next-intl/server';
import { loadMessages } from './server';
import { defaultLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is always defined
  const actualLocale = locale || defaultLocale;
  
  // Load messages
  const messages = await loadMessages(actualLocale);
  
  return {
    messages,
    timeZone: 'UTC',
    // Use fixed date to avoid hydration mismatch
    now: new Date('2023-01-01'),
    // Explicitly set locale again to ensure it's defined
    locale: actualLocale
  };
}); 