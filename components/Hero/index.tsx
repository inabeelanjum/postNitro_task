'use client';

import { Badge, Text, Title, Group, Stack, Divider } from '@mantine/core';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Star } from '@phosphor-icons/react';
import classes from './Hero.module.css';

const Hero = () => {
  const t = useTranslations('hero');
  const common = useTranslations('common');
  
  // Star icons for rating
  const stars = Array(5).fill(0).map((_, i) => (
    <Star key={i} size={20} weight="fill" color="#ffac2f" />
  ));
  
  return (
    <div className={classes.heroWrapper}>
      <div className={classes.heroContent}>
        {/* Badge */}
        <div className={classes.heroBadge}>
          <span className={classes.badgeDot}></span>
          {t('badge')}
        </div>
        
        {/* Main Heading */}
        <Title order={1} className={classes.heroHeader}>
          {t('title')}
        </Title>
        
        {/* Description */}
        <Text className={classes.heroDescription}>
          {t('description')}
        </Text>
        
        {/* User Groups Section */}
        <div className={classes.userSectionWrapper}>
          {/* User Rating Group */}
          <Group className={classes.userGroup}>
            <Image 
              src="/user-collected.webp"
              alt="User of PostNitro a free AI Carousel post generator"
              width={219}
              height={44}
            />
            
            <Stack gap={0}>
              <Group gap={2} className={classes.starRating}>
                {stars}
                <Text size="sm" fw={600} className={classes.ratingText}>5.0</Text>
              </Group>
              <Text className={classes.userCount}>{t('userCount')}</Text>
            </Stack>
          </Group>
          
          {/* Divider */}
          <Divider orientation="vertical" size="lg" className={classes.divider} />
          
          {/* Embed Group */}
          <Group className={classes.embedGroup}>
            <Stack gap={0}>
              <Text size="sm" fw={600} className={classes.embedTitle}>
                {t('embedTitle')}
              </Text>
              <Text className={classes.embedCount}>{t('embedCount')}</Text>
            </Stack>
            
            <Image 
              src="/embed-collected.png"
              alt="Social media management platforms that integrate with PostNitro"
              width={191}
              height={44}
            />
          </Group>
        </div>
        
        {/* CTA Button */}
        <Link href="/app/carousel-maker" className={classes.ctaButton}>
          {t('ctaButton')}
          <ArrowRight size={20} className={classes.ctaButtonIcon} />
        </Link>
        
        {/* Footer Info */}
        <Group gap="xs" className={classes.checkGroup}>
          <Check size={15} color="#475467" />
          <Text size="sm" className={classes.checkText}>
            {t('footer')}
          </Text>
        </Group>
      </div>
    </div>
  );
};

export default Hero; 