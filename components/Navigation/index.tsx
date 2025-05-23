'use client';

import { useState } from 'react';
import { Group, Button, Container } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { usePathname as useNextPathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import NavDropdown from './NavDropdown';
import { List, Sparkle } from '@phosphor-icons/react';
import classes from './Navigation.module.css';

const Navigation = () => {
  const t = useTranslations('nav');
  const common = useTranslations('common');
  const pathname = useNextPathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Getting Started dropdown items
  const gettingStartedItems = [
    { title: t('getting_started.docs'), href: 'https://postnitro.ai/docs', external: true },
    { title: t('getting_started.blog'), href: 'https://postnitro.ai/blog', external: true },
    { title: t('getting_started.affiliates'), href: 'https://ls.postnitro.ai/affiliates', external: true },
  ];

  // Products dropdown items
  const productsItems = [
    { title: t('products.linkedin_carousel'), href: '/carousels/linkedin' },
    { title: t('products.instagram_carousel'), href: '/carousels/instagram' },
    { title: t('products.tiktok_carousel'), href: '/carousels/tiktok' },
    { title: t('products.twitter_carousel'), href: '/carousels/x-twitter' },
    { title: t('products.embed'), href: '/products/embed' },
    { title: t('products.extension'), href: '/products/extension' },
  ];

  // Free Tools dropdown items
  const freeToolsItems = [
    { title: t('free_tools.twitter_banner'), href: '/free-ai-tools/twitter-free-banner-header-image-maker' },
    { title: t('free_tools.linkedin_banner'), href: '/free-ai-tools/linkedin-free-banner-header-image-maker' },
    { title: t('free_tools.instagram_grid'), href: '/free-ai-tools/instagram-free-image-splitter-grid-maker' },
    { title: t('free_tools.linkedin_formatter'), href: '/free-ai-tools/linkedin-free-text-formatter' },
    { title: t('free_tools.linkedin_generator'), href: '/free-ai-tools/linkedin-free-post-generator' },
  ];

  return (
    <header className={classes.header} role="banner">
      <Container size="fluid" className={classes.container}>
        <Group justify="space-between" align="center" className={classes.inner}>
          {/* Left side with Logo and Nav items */}
          <Group gap="xs">
            {/* Logo */}
            <Link href="/" className={classes.logoAnchor}>
              <Logo />
            </Link>

            {/* Desktop Navigation (right next to logo) */}
            <Group className={classes.desktopNav} role="navigation" gap="sm">
              {/* Getting Started Dropdown */}
              <NavDropdown 
                label={t('getting_started.title')} 
                items={gettingStartedItems}
              />
              
              {/* Products Dropdown */}
              <NavDropdown 
                label={t('products.title')} 
                items={productsItems}
              />
              
              {/* Free Tools Dropdown */}
              <NavDropdown 
                label={t('free_tools.title')} 
                items={freeToolsItems}
              />
              
              {/* Plans Link */}
              <Button
                component={Link}
                href="/plans"
                variant="subtle"
                size="sm"
                className={classes.navLink}
                fw={600}
              >
                {t('plans')}
              </Button>
            </Group>
          </Group>
          
          {/* Right side elements */}
          <Group className={classes.rightGroup}>
            {/* Desktop only - Language Switcher and Buttons */}
            <Group className={classes.desktopNav} gap="xs">
              {/* Language Switcher */}
              <div className={classes.languageSwitcher}>
                <LanguageSwitcher />
              </div>
              
              {/* Create Image Post Button */}
              <Button
                component={Link}
                href="/app/post-maker"
                variant="outline"
                size="sm"
                leftSection={<Sparkle size={16} />}
                className={classes.createImageBtn}
                radius="md"
              >
                {common('buttons.create_image_post')}
                <span className={classes.betaBadge}>BETA</span>
              </Button>
              
              {/* Create Carousel Button */}
              <Button
                component={Link}
                href="/app/carousel-maker"
                size="sm"
                leftSection={<Sparkle size={16} />}
                className={classes.createBtn}
                radius="md"
              >
                {common('buttons.create_carousel')}
              </Button>
            </Group>
            
            {/* Mobile only - Menu and Create buttons */}
            <Group className={classes.mobileNav} gap={8}>
              {/* Create button (mobile) */}
              <Button
                component={Link}
                href="/app/carousel-maker"
                size="sm"
                leftSection={<Sparkle size={18} />}
                className={classes.createBtn}
              >
                Create
              </Button>
              
              {/* Menu Button */}
              <Button
                variant="subtle"
                size="sm"
                color="dark"
                leftSection={<List size={22} weight="bold" />}
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                fw={700}
              >
                Menu
              </Button>
            </Group>
          </Group>
        </Group>
      </Container>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        gettingStartedItems={gettingStartedItems}
        productsItems={productsItems}
        freeToolsItems={freeToolsItems}
      />
    </header>
  );
};

export default Navigation; 