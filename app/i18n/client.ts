'use client';

import { useTranslations } from 'next-intl';

export function useTranslate(namespace: string = 'common') {
  return useTranslations(namespace);
} 