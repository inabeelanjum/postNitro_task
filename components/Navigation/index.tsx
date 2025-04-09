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
          {/* Left side with Logo and Nav */}
          <Group className={classes.leftGroup}>
            {/* Logo */}
            <Link href="/" className={classes.logoAnchor}>
              <Logo />
            </Link>
            
            {/* Navigation (left-aligned with logo) */}
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
                href="/free-ai-tools"
              />
              
              {/* Plans Link */}
              <Button
                component={Link}
                href="/plans"
                variant="subtle"
                size="sm"
                className={classes.navLink}
              >
                {t('plans')}
              </Button>
            </Group>
          </Group>
          
          {/* Right side buttons */}
          <Group className={`${classes.desktopNav} ${classes.rightGroup}`}>
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Create Image Post Button */}
            <Button
              component={Link}
              href="/app/post-maker"
              variant="outline"
              size="sm"
              leftSection={<Sparkle size={18} />}
              className={classes.createImageBtn}
            >
              {common('buttons.create_image_post')} 
              <span className={classes.betaBadge}>
                {common('labels.beta')}
              </span>
            </Button>
            
            {/* Create Carousel Button */}
            <Button
              component={Link}
              href="/app/carousel-maker"
              size="sm"
              leftSection={<Sparkle size={18} />}
              className={classes.createBtn}
            >
              {common('buttons.create_carousel')}
            </Button>
          </Group>
          
          {/* Mobile Navigation */}
          <Group className={classes.mobileNav}>
            <Button
              variant="subtle"
              size="sm"
              leftSection={<List size={24} />}
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </Button>
            
            <Button
              component={Link}
              href="/app/carousel-maker"
              size="sm"
              leftSection={<Sparkle size={18} />}
            >
              Create
            </Button>
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