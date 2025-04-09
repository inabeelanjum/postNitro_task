'use client';

import { Button, Text, Stack } from '@mantine/core';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { X } from '@phosphor-icons/react';
import classes from './Navigation.module.css';

interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  gettingStartedItems: NavItem[];
  productsItems: NavItem[];
  freeToolsItems: NavItem[];
}

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  gettingStartedItems, 
  productsItems, 
  freeToolsItems 
}: MobileMenuProps) => {
  const t = useTranslations('nav');

  if (!isOpen) return null;

  return (
    <div 
      className={`${classes.mobileMenu} ${isOpen ? classes.open : ''}`}
      id="mobile-menu"
    >
      <Button
        className={classes.closeButton}
        variant="subtle"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={24} />
      </Button>
      
      <div className={classes.mobileMenuLinks} role="navigation">
        {/* Getting Started Section */}
        <div>
          <Text size="md" fw={500} role="heading" aria-level={2}>
            {t('getting_started.title')}
          </Text>
          <Stack gap="md" role="list">
            {gettingStartedItems.map((item, index) => (
              <Button
                key={index}
                component={item.external ? 'a' : Link}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                variant="subtle"
                role="listitem"
              >
                <Text size="sm">{item.title}</Text>
              </Button>
            ))}
          </Stack>
        </div>
        
        {/* Products Section */}
        <div>
          <Text size="md" fw={500} role="heading" aria-level={2}>
            {t('products.title')}
          </Text>
          <Stack gap="md" role="list">
            {productsItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                href={item.href}
                variant="subtle"
                role="listitem"
              >
                <Text size="sm">{item.title}</Text>
              </Button>
            ))}
          </Stack>
        </div>
        
        {/* Free Tools Section */}
        <div>
          <Text size="md" fw={500} role="heading" aria-level={2}>
            {t('free_tools.title')}
          </Text>
          <Stack gap="md" role="list">
            {freeToolsItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                href={item.href}
                variant="subtle"
                role="listitem"
              >
                <Text size="sm">{item.title}</Text>
              </Button>
            ))}
          </Stack>
        </div>
        
        {/* Plans Link */}
        <Button
          component={Link}
          href="/plans"
          variant="subtle"
          size="md"
          className={classes.mobileAnchor}
        >
          {t('plans')}
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu; 