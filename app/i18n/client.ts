'use client';

import { useTranslations } from 'next-intl';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './config';

export function useTranslate(namespace: string = 'common') {
  return useTranslations(namespace);
}

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }); 