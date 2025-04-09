'use client';

import { Button, Text, Stack, Group } from '@mantine/core';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { X, Sparkle } from '@phosphor-icons/react';
import classes from './Navigation.module.css';
import LanguageSwitcher from './LanguageSwitcher';

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
  const common = useTranslations('common');

  if (!isOpen) return null;

  return (
    <div 
      className={`${classes.mobileMenu} ${isOpen ? classes.open : ''}`}
      id="mobile-menu"
    >
      <Button
        className={classes.closeButton}
        variant="subtle"
        size="lg"
        onClick={onClose}
        aria-label="Close menu"
        color="dark"
      >
        <X size={28} weight="bold" />
      </Button>
      
      <div className={classes.mobileMenuLinks} role="navigation">
        {/* Getting Started Section */}
        <div>
          <Text size="md" fw={700} role="heading" aria-level={2} c="black">
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
                fw={700}
                c="black"
              >
                <Text size="sm" fw={700}>{item.title}</Text>
              </Button>
            ))}
          </Stack>
        </div>
        
        {/* Products Section */}
        <div>
          <Text size="md" fw={700} role="heading" aria-level={2} c="black">
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
                fw={700}
                c="black"
              >
                <Text size="sm" fw={700}>{item.title}</Text>
              </Button>
            ))}
          </Stack>
        </div>
        
        {/* Free Tools Section */}
        <div>
          <Text size="md" fw={700} role="heading" aria-level={2} c="black">
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
                fw={700}
                c="black"
              >
                <Text size="sm" fw={700}>{item.title}</Text>
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
          fw={700}
          c="black"
        >
          {t('plans')}
        </Button>
        
        {/* Language Switcher */}
        <div className={classes.mobileLanguageSwitcher}>
          <Text size="md" fw={700} mb="sm" c="black">
            {t('language')}
          </Text>
          <LanguageSwitcher />
        </div>
        
        {/* Action Buttons */}
        <Stack gap="md" mt="xl">
          {/* Create Image Post Button */}
          <Button
            component={Link}
            href="/app/post-maker"
            variant="outline"
            size="md"
            fullWidth
            leftSection={<Sparkle size={18} />}
            className={classes.createImageBtn}
          >
            {common('buttons.create_image_post')} 
            <span className={classes.betaBadge}>
              {common('labels.beta')}
            </span>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default MobileMenu; 