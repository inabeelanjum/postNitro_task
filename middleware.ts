import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './app/i18n/config';

// This middleware handles locale detection and redirection
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // Used when no locale matches
  defaultLocale: defaultLocale,
  
  // Optional: Specify a specific locale prefix type
  localePrefix: 'as-needed',
  
  // Important: Allow locale detection and redirects
  localeDetection: true
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files
  // - Favicon
  // - _next folder
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 