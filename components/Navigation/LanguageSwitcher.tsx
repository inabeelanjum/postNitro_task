'use client';

import { useState } from 'react';
import { Button, Menu } from '@mantine/core';
import { usePathname as useNextPathname } from 'next/navigation';
import { useRouter as useNextRouter } from 'next/navigation';
import Image from 'next/image';
import { locales, flagMap } from '../../app/i18n/config';
import classes from './Navigation.module.css';

const LanguageSwitcher = () => {
  const [opened, setOpened] = useState(false);
  const pathname = useNextPathname();
  const router = useNextRouter();
  
  // Get the current locale from the pathname or default to 'en'
  const currentLocale = pathname?.split('/')[1] || 'en';
  
  const handleLanguageChange = (locale: string) => {
    setOpened(false);
    const newPath = pathname?.replace(/^\/[^\/]+/, `/${locale}`) || `/${locale}`;
    router.push(newPath);
  };
  
  return (
    <div className={classes.languageSwitcher}>
      <Menu
        opened={opened}
        onChange={setOpened}
        shadow="md"
        width={150}
        position="bottom-end"
      >
        <Menu.Target>
          <Button
            variant="subtle"
            size="sm"
            p={0}
            className={classes.langButton}
          >
            <Image
              src={`/flags/${flagMap[currentLocale as keyof typeof flagMap]}`}
              alt={currentLocale}
              width={28}
              height={20}
            />
          </Button>
        </Menu.Target>
        
        <Menu.Dropdown>
          {locales.map((locale) => (
            <Menu.Item
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              style={{ 
                fontWeight: locale === currentLocale ? 'bold' : 'normal',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Image
                src={`/flags/${flagMap[locale as keyof typeof flagMap]}`}
                alt={locale}
                width={20}
                height={15}
              />
              {locale.toUpperCase()}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher; 