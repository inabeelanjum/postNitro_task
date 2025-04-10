'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { 
  Container, 
  Title, 
  Text, 
  Group, 
  SegmentedControl, 
  Card, 
  Stack, 
  Badge, 
  Button, 
  List, 
  ThemeIcon
} from '@mantine/core';
import { Check, Lightning } from '@phosphor-icons/react';
import styles from './plans.module.css';
import planStyles from './PlanCards.module.css';

export default function PlansPage() {
  const t = useTranslations('plans');
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const isYearly = billingPeriod === 'yearly';
  
  // Plan features
  const starterPlanFeatures = [
    'Watermark-free exports',
    'Access to basic AI models (GPT-4o, Claude Haiku)',
    '30 downloads/month',
    '8 AI Generated Slides per Carousel'
  ];
  
  const solopreneurPlanFeatures = [
    'Watermark-free exports',
    'Access to advanced AI models (GPT-4, Claude Sonnet)',
    '15 AI Generated Slides per Carousel',
    'Upto 5 Brands',
    'Unlimited downloads',
    'Access to all templates',
    'Custom color palettes',
    'Create custom templates'
  ];
  
  const teamPlanFeatures = [
    '100 AI generated images per month',
    'Up to 5 workspaces',
    'Up to 20 slides per carousel',
    '15 custom templates'
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
            <Badge variant="filled" color="#087a68" sx={{ backgroundColor: '#087a68', '--badge-bg': '#087a68' }} mt={10}>
              {t('billing.discount')}
            </Badge>
          )}
        </Stack>
        
        <Group grow align="flex-start" position="center" mt="md" mb="md">
          {/* Starter Plan */}
          <Card withBorder shadow="sm" padding="md" className={`${planStyles.cardWidth} ${planStyles.cardDefault}`}>
            <Stack gap="md" justify="center" align="flex-start" style={{ flexDirection: 'column' }}>
              <Stack gap={3} align="stretch" justify="flex-start">
                <Text className={planStyles.planTitle}>Starter Plan</Text>
                <Text className={planStyles.planCharge}>$10/month</Text>
                <Text size="sm" c="dimmed">Perfect for getting started.</Text>
              </Stack>
              
              <List
                size="sm"
                spacing="xs"
                icon={
                  <ThemeIcon color="#087A68" variant="outline" size="xs" radius="xl" sx={{ 
                    '--ti-color': '#087a68', 
                    '--ti-bd': 'calc(0.0625rem * var(--mantine-scale)) solid #087a68',
                    color: '#087a68'
                  }}>
                    <Check size={16} />
                  </ThemeIcon>
                }
              >
                {starterPlanFeatures.map((feature, index) => (
                  <List.Item key={index} style={{ lineHeight: '1.3rem', fontSize: '0.9rem', textAlign: 'left' }}>
                    {feature}
                  </List.Item>
                ))}
              </List>
              
              <Button
                component="a"
                href="/app/carousel-maker"
                variant="outline"
                size="sm"
                fullWidth
                leftSection={<Lightning size={18} color="#087a68" />}
                className={planStyles.button}
                styles={{
                  root: {
                    borderColor: '#087a68',
                    '&:hover': {
                      backgroundColor: 'rgba(8, 122, 104, 0.1)'
                    }
                  },
                  inner: {
                    color: '#087a68'
                  },
                  label: {
                    color: '#087a68'
                  },
                  section: {
                    color: '#087a68'
                  }
                }}
              >
                Get Started
              </Button>
              
              <Text className={planStyles.subText}>* All prices are subject to applicable taxes.</Text>
            </Stack>
          </Card>
          
          {/* Solopreneur Plan */}
          <Card withBorder shadow="xl" padding="md" className={`${planStyles.cardWidth} ${planStyles.cardSmall}`}>
            <Stack gap="md" justify="center" align="flex-start" style={{ flexDirection: 'column' }}>
              <Stack gap={3} align="stretch" justify="flex-start">
                <Text className={planStyles.planTitle}>Solopreneur Plan</Text>
                <Text className={planStyles.planOriginalPrice}>Previously: $20/month</Text>
                <Text className={planStyles.planCharge}>$12/month</Text>
                <Text className={planStyles.planSaving}>Saves you $96 per year.</Text>
                <Text size="sm" c="dimmed">Perfect for solo creators.</Text>
              </Stack>
              
              <List
                size="sm"
                spacing="xs"
                icon={
                  <ThemeIcon color="#087A68" variant="outline" size="xs" radius="xl" sx={{ 
                    '--ti-color': '#087a68', 
                    '--ti-bd': 'calc(0.0625rem * var(--mantine-scale)) solid #087a68',
                    color: '#087a68'
                  }}>
                    <Check size={16} />
                  </ThemeIcon>
                }
              >
                {solopreneurPlanFeatures.map((feature, index) => (
                  <List.Item key={index} style={{ lineHeight: '1.3rem', fontSize: '0.9rem', textAlign: 'left' }}>
                    {feature}
                  </List.Item>
                ))}
              </List>
              
              <Button
                component="a"
                href="/app/carousel-maker"
                variant="filled"
                size="sm"
                fullWidth
                leftSection={<Lightning size={18} color="white" />}
                className={planStyles.button}
                styles={{
                  root: {
                    backgroundColor: '#087a68',
                    borderColor: '#087a68',
                    '&:hover': {
                      backgroundColor: '#066553'
                    }
                  },
                  inner: {
                    color: 'white'
                  },
                  label: {
                    color: 'white'
                  },
                  section: {
                    color: 'white'
                  }
                }}
              >
                Get Started
              </Button>
              
              <Text className={planStyles.subText}>* All prices are subject to applicable taxes.</Text>
            </Stack>
          </Card>
          
          {/* Team Plan */}
          <Card withBorder shadow="lg" padding="md" className={`${planStyles.cardWidth} ${planStyles.cardDefault}`}>
            <Stack gap="md" justify="center" align="flex-start" style={{ flexDirection: 'column' }}>
              <Stack gap={3} align="stretch" justify="flex-start">
                <Text className={planStyles.planTitle}>Team Plan</Text>
                <Text className={planStyles.planOriginalPrice}>Previously: $50/month</Text>
                <Text className={planStyles.planCharge}>$30/month</Text>
                <Text className={planStyles.planSaving}>Saves you $240 per year.</Text>
                <Text size="sm" c="dimmed">Perfect for small teams.</Text>
              </Stack>
              
              <List
                size="sm"
                spacing="xs"
                icon={
                  <ThemeIcon color="#087A68" variant="outline" size="xs" radius="xl" sx={{ 
                    '--ti-color': '#087a68', 
                    '--ti-bd': 'calc(0.0625rem * var(--mantine-scale)) solid #087a68',
                    color: '#087a68'
                  }}>
                    <Check size={16} />
                  </ThemeIcon>
                }
              >
                {teamPlanFeatures.map((feature, index) => (
                  <List.Item key={index} style={{ lineHeight: '1.3rem', fontSize: '0.9rem', textAlign: 'left' }}>
                    {feature}
                  </List.Item>
                ))}
              </List>
              
              <Button
                component="a"
                href="/app/carousel-maker"
                variant="outline"
                size="sm"
                fullWidth
                leftSection={<Lightning size={18} color="#087a68" />}
                className={planStyles.button}
                styles={{
                  root: {
                    borderColor: '#087a68',
                    '&:hover': {
                      backgroundColor: 'rgba(8, 122, 104, 0.1)'
                    }
                  },
                  inner: {
                    color: '#087a68'
                  },
                  label: {
                    color: '#087a68'
                  },
                  section: {
                    color: '#087a68'
                  }
                }}
              >
                Get Started
              </Button>
              
              <Text className={planStyles.subText}>* All prices are subject to applicable taxes.</Text>
            </Stack>
          </Card>
        </Group>
        
        <Text size="sm" c="dimmed" ta="center" mt={40}>
          {t('disclaimers.addons')}
        </Text>
      </Container>
    </div>
  );
} 