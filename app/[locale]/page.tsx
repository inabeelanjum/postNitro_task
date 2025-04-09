'use client';

import { useTranslations } from 'next-intl';

export default function LocalizedHomePage() {
  const t = useTranslations('hero');
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">{t('subtitle')}</h1>
      <p className="mt-4">{t('title')}</p>
    </div>
  );
} 