import "@mantine/core/styles.css";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { MantineProvider, ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { loadMessages } from "../i18n/server";
import { theme } from "../../theme";
import { locales, defaultLocale } from "../i18n/config";
import Navigation from "../../components/Navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Properly handle params
  const safeParams = await Promise.resolve(params);
  const locale = safeParams?.locale || defaultLocale;
  
  // Load messages for the current locale with fallback
  const messages = await loadMessages(locale);

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>PostNitro</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MantineProvider theme={theme}>
            <Navigation />
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 