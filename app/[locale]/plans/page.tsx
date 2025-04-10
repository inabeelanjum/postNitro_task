'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { 
  Container, 
  Title, 
  Text, 
  Group, 
  SegmentedControl, 
  SimpleGrid, 
  Card, 
  Stack, 
  Badge, 
  Button, 
  List, 
  ThemeIcon,
  rem
} from '@mantine/core';
import { Check } from '@phosphor-icons/react';
import styles from './plans.module.css';

export default function PlansPage() {
  const t = useTranslations('plans');
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const isYearly = billingPeriod === 'yearly';
  
  // Plan features
  const starterPlanFeatures = [
    'Create 5 carousels per month',
    'LinkedIn Carousel maker',
    'Instagram Carousel maker',
    'TikTok Carousel maker',
    'Twitter Carousel maker',
    'Access to 10 designs',
    'Download in PNG format',
    'Basic customization'
  ];
  
  const solopreneurPlanFeatures = [
    'Create 20 carousels per month',
    'LinkedIn Carousel maker',
    'Instagram Carousel maker',
    'TikTok Carousel maker',
    'Twitter Carousel maker',
    'Access to all designs',
    'Download in PNG format',
    'Advanced customization',
    'Custom branding',
    'Full white label'
  ];
  
  const teamPlanFeatures = [
    'Create 100 carousels per month',
    'LinkedIn Carousel maker',
    'Instagram Carousel maker',
    'TikTok Carousel maker',
    'Twitter Carousel maker', 
    'Access to all designs',
    'Download in PNG format',
    'Advanced customization',
    'Custom branding',
    'Full white label',
    'Team collaboration',
    'Analytics'
  ];
  
  return (
    <div className={styles.plansWrapper}>
      <Container size="lg" py={64}>
        <Stack align="center" mb={48}>
          <Title order={1} ta="center" fw={700}>
            {t('title')}
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600}>
            {t('subtitle')}
          </Text>
          
          <Group mt={20}>
            <SegmentedControl
              value={billingPeriod}
              onChange={setBillingPeriod}
              data={[
                { label: t('billing.monthly'), value: 'monthly' },
                { label: t('billing.yearly'), value: 'yearly' }
              ]}
              size="md"
            />
          </Group>
          
          {isYearly && (
            <Badge variant="filled" color="#087a68" sx={{ backgroundColor: '#087a68' }} mt={10}>
              {t('billing.discount')}
            </Badge>
          )}
        </Stack>
        
        <SimpleGrid cols={{ base: 1, sm: 3, lg: 3 }} spacing="xl">
          {/* Starter Plan */}
          <Card withBorder radius="md" padding="md">
            <Card.Section withBorder inheritPadding py="xs">
              <Text fw={700} ta="center">{t('starter_plan.name')}</Text>
            </Card.Section>
            
            <Stack align="center" mt="md">
              <Text size="xs">{t('starter_plan.tag')}</Text>
              <Group>
                <Text size="xl" fw={700}>{t('starter_plan.price')}</Text>
                <Text size="sm">{t('starter_plan.period')}</Text>
              </Group>
              
              <Button variant="filled" fullWidth color="#087a68" sx={{ backgroundColor: '#087a68', '&:hover': { backgroundColor: '#066553' } }}>
                Get Started
              </Button>
            </Stack>
            
            <List
              spacing="sm"
              size="sm"
              mt="md"
              center
              icon={
                <ThemeIcon color="#087a68" size={20} radius="xl">
                  <Check size={rem(12)} weight="bold" />
                </ThemeIcon>
              }
            >
              {starterPlanFeatures.map((feature, index) => (
                <List.Item key={index}>{feature}</List.Item>
              ))}
            </List>
            
            <Text size="xs" c="dimmed" mt="sm">
              {t('disclaimers.taxes')}
            </Text>
          </Card>
          
          {/* Solopreneur Plan */}
          <Card withBorder radius="md" padding="md" sx={{ borderColor: '#087a68' }}>
            <Card.Section withBorder inheritPadding py="xs" sx={{ borderColor: '#087a68', backgroundColor: '#f0faf8' }}>
              <Text fw={700} ta="center">{t('solopreneur_plan.name')}</Text>
            </Card.Section>
            
            <Stack align="center" mt="md">
              <Text size="xs">{t('solopreneur_plan.tag')}</Text>
              <Group>
                <Text size="xl" fw={700}>{t('solopreneur_plan.price')}</Text>
                <Text size="sm">{t('solopreneur_plan.period')}</Text>
                <Text size="sm" td="line-through" c="dimmed">
                  {t('solopreneur_plan.original_price')}
                </Text>
              </Group>
              
              {isYearly && (
                <Badge color="#087a68" sx={{ backgroundColor: '#087a68' }}>
                  {t('solopreneur_plan.yearly_savings')}
                </Badge>
              )}
              
              <Button variant="filled" fullWidth color="#087a68" sx={{ backgroundColor: '#087a68', '&:hover': { backgroundColor: '#066553' } }}>
                Get Started
              </Button>
            </Stack>
            
            <List
              spacing="sm"
              size="sm"
              mt="md"
              center
              icon={
                <ThemeIcon color="#087a68" size={20} radius="xl">
                  <Check size={rem(12)} weight="bold" />
                </ThemeIcon>
              }
            >
              {solopreneurPlanFeatures.map((feature, index) => (
                <List.Item key={index}>{feature}</List.Item>
              ))}
            </List>
            
            <Text size="xs" c="dimmed" mt="sm">
              {t('disclaimers.taxes')}
            </Text>
          </Card>
          
          {/* Team Plan */}
          <Card withBorder radius="md" padding="md">
            <Card.Section withBorder inheritPadding py="xs">
              <Text fw={700} ta="center">{t('team_plan.name')}</Text>
            </Card.Section>
            
            <Stack align="center" mt="md">
              <Text size="xs">{t('team_plan.tag')}</Text>
              <Group>
                <Text size="xl" fw={700}>{t('team_plan.price')}</Text>
                <Text size="sm">{t('team_plan.period')}</Text>
                <Text size="sm" td="line-through" c="dimmed">
                  {t('team_plan.original_price')}
                </Text>
              </Group>
              
              {isYearly && (
                <Badge color="#087a68" sx={{ backgroundColor: '#087a68' }}>
                  {t('team_plan.yearly_savings')}
                </Badge>
              )}
              
              <Button variant="filled" fullWidth color="#087a68" sx={{ backgroundColor: '#087a68', '&:hover': { backgroundColor: '#066553' } }}>
                Get Started
              </Button>
            </Stack>
            
            <List
              spacing="sm"
              size="sm"
              mt="md"
              center
              icon={
                <ThemeIcon color="#087a68" size={20} radius="xl">
                  <Check size={rem(12)} weight="bold" />
                </ThemeIcon>
              }
            >
              {teamPlanFeatures.map((feature, index) => (
                <List.Item key={index}>{feature}</List.Item>
              ))}
            </List>
            
            <Text size="xs" c="dimmed" mt="sm">
              {t('disclaimers.taxes')}
            </Text>
          </Card>
        </SimpleGrid>
        
        <Text size="sm" c="dimmed" ta="center" mt={40}>
          {t('disclaimers.addons')}
        </Text>
      </Container>
    </div>
  );
} 