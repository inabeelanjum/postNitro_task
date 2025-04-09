'use client';

import { useState } from 'react';
import { Button, Menu } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { locales, flagMap, localeNames } from '../../app/i18n/config';
import classes from './Navigation.module.css';

const LanguageSwitcher = () => {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Get the current locale from the pathname or default to 'en'
  const currentLocale = pathname?.split('/')[1] || 'en';
  
  const handleLanguageChange = (locale: string) => {
    setOpened(false);
    
    // If the current locale is in the path, replace it
    // Otherwise add the new locale to the beginning of the path
    let newPath = '';
    
    if (pathname) {
      // Check if the current path starts with a locale
      const pathParts = pathname.split('/');
      const hasLocale = locales.includes(pathParts[1] as any);
      
      if (hasLocale) {
        // Replace current locale with new one
        pathParts[1] = locale;
        newPath = pathParts.join('/');
      } else {
        // Add locale to the path
        newPath = `/${locale}${pathname}`;
      }
    } else {
      // Fallback to just the locale
      newPath = `/${locale}`;
    }
    
    // Force a hard navigation to reload the page with new locale
    window.location.href = newPath;
  };
  
  return (
    <div className={classes.languageSwitcher}>
      <Menu
        opened={opened}
        onChange={setOpened}
        shadow="md"
        width={180}
        position="bottom-end"
        trigger="hover"
        openDelay={100}
        closeDelay={50}
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
              width={36}
              height={26}
              style={{ 
                borderRadius: '4px'
              }}
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
                color: 'black',
                padding: '8px 12px'
              }}
            >
              <Image
                src={`/flags/${flagMap[locale as keyof typeof flagMap]}`}
                alt={locale}
                width={28}
                height={20}
                style={{ 
                  marginRight: '16px',
                  borderRadius: '4px'
                }}
              />
              {localeNames[locale as keyof typeof localeNames]}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher; 