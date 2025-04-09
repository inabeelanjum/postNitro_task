'use client';

import { useTranslations } from 'next-intl';

export default function PlansPage() {
  const t = useTranslations('plans');
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-4">{t('subtitle')}</p>
    </div>
  );
} 