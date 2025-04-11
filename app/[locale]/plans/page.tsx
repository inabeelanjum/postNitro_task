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
  const [billingPeriod, setBillingPeriod] = useState('yearly');
  
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
          <Title order={1} ta="center" fw={600} size="48px">
            {t('title')}
          </Title>
          <Text size="lg" ta="center" color="#475467" maw={600}>
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
              size="sm"
              styles={{
                root: {
                  width: '240px',
                  borderRadius: '10px'
                },
                label: {
                  padding: '6px 16px',
                  borderRadius: '10px'
                },
                control: {
                  borderRadius: '10px'
                },
                indicator: {
                  borderRadius: '8px'
                }
              }}
            />
          </Group>
          
          {isYearly && (
            <Badge 
              variant="filled" 
              color="#087a68" 
              size="lg"
              sx={{ 
                backgroundColor: '#087a68', 
                '--badge-bg': '#087a68',
                '--badge-color': 'var(--mantine-color-white)',
                '--badge-bd': 'calc(0.0625rem * var(--mantine-scale)) solid transparent',
                fontSize: '1rem',
                padding: '10px 16px',
                height: 'auto',
                textTransform: 'uppercase',
                fontWeight: 600
              }} 
              mt={16}
            >
              30% OFF ON YEARLY SUBSCRIPTION! - ANNUAL30OFF
            </Badge>
          )}
        </Stack>
        
        <Group align="flex-start" position="center" mt="md" mb="md" className={styles.plansContainer} style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          flexWrap: 'nowrap',
          width: '100%'
        }}>
          {/* Starter Plan */}
          <div className={styles.planCardWrapper} style={{ 
            position: 'relative', 
            width: '32%', 
            maxWidth: '430px'
          }}>
            <div style={{ 
              position: 'absolute',
              backgroundColor: '#DADADA',
              borderRadius: 'var(--mantine-radius-md)',
              inset: '7px 3px -5px 20px',
              zIndex: 0
            }}></div>
            <Card withBorder padding="md" className={`${planStyles.cardWidth} ${planStyles.cardDefault}`} style={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              position: 'relative',
              zIndex: 1
            }}>
              <Stack gap="md" justify="flex-start" align="flex-start" style={{ height: '100%' }}>
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
          </div>
          
          {/* Solopreneur Plan */}
          <div className={styles.planCardWrapper} style={{ 
            position: 'relative', 
            width: '32%', 
            maxWidth: '430px'
          }}>
            <div style={{ 
              position: 'absolute',
              backgroundColor: '#087a68',
              borderRadius: 'var(--mantine-radius-md)',
              inset: '10px 0px -10px 20px',
              zIndex: 0
            }}></div>
            <Card withBorder shadow="xl" padding="md" className={`${planStyles.cardWidth} ${planStyles.cardSmall}`} style={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              borderColor: '#087a68', 
              borderWidth: '2px', 
              borderStyle: 'solid',
              position: 'relative',
              zIndex: 1
            }}>
              <Stack gap="md" justify="flex-start" align="flex-start" style={{ height: '100%' }}>
                <Stack gap={3} align="stretch" justify="flex-start">
                  <Text className={planStyles.planTitle}>Solopreneur Plan</Text>
                  {isYearly ? (
                    <div>
                      <Text className={planStyles.planOriginalPrice}>Previously: $20/month</Text>
                      <Text className={planStyles.planCharge}>$12/month</Text>
                      <Text className={planStyles.planSaving}>Saves you $96 per year.</Text>
                    </div>
                  ) : (
                    <Text className={planStyles.planCharge}>$20/month</Text>
                  )}
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
          </div>
          
          {/* Team Plan */}
          <div className={styles.planCardWrapper} style={{ 
            position: 'relative', 
            width: '32%', 
            maxWidth: '430px'
          }}>
            <div style={{ 
              position: 'absolute',
              backgroundColor: '#DADADA',
              borderRadius: 'var(--mantine-radius-md)',
              inset: '7px 3px -5px 20px',
              zIndex: 0
            }}></div>
            <Card withBorder padding="md" className={`${planStyles.cardWidth} ${planStyles.cardDefault}`} style={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              position: 'relative',
              zIndex: 1
            }}>
              <Stack gap="md" justify="flex-start" align="flex-start" style={{ height: '100%' }}>
                <Stack gap={3} align="stretch" justify="flex-start">
                  <Text className={planStyles.planTitle}>Team Plan</Text>
                  {isYearly ? (
                    <div>
                      <Text className={planStyles.planOriginalPrice}>Previously: $50/month</Text>
                      <Text className={planStyles.planCharge}>$30/month</Text>
                      <Text className={planStyles.planSaving}>Saves you $240 per year.</Text>
                    </div>
                  ) : (
                    <Text className={planStyles.planCharge}>$50/month</Text>
                  )}
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
          </div>
        </Group>
        
        <Text 
          style={{
            color: '#475467',
            fontSize: '1rem',
            fontWeight: 500,
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: 'var(--mantine-line-height-md)',
            marginTop: '40px',
            marginBottom: '20px'
          }}
        >
          If you require additional limits, you can{' '}
          <span style={{ color: '#087a68', textDecoration: 'underline' }}>
            add them as Add-Ons
          </span>
          {' '}to your subscription.
        </Text>
        
        <div className={styles.freeCardWrapper} style={{ position: 'relative', width: '70%', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ 
            position: 'absolute',
            backgroundColor: '#DADADA',
            borderRadius: 'var(--mantine-radius-md)',
            inset: '2px -5px -5px 2px',
            zIndex: 0
          }}></div>
          <Card 
            withBorder 
            padding="md" 
            className={planStyles.cardDefault} 
            mt={20} 
            style={{ 
              backgroundColor: 'var(--mantine-color-default)',
              borderRadius: 'var(--mantine-radius-default)',
              borderColor: 'var(--mantine-color-default-border)',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Stack 
              gap="md" 
              justify="center" 
              align="center"
              className={styles.freeCardContent} 
              style={{ 
                flexDirection: 'row',
                alignItems: 'var(--stack-align, center)',
                justifyContent: 'var(--stack-justify, center)', 
                gap: 'var(--stack-gap, var(--mantine-spacing-md))'
              }}
            >
              <Stack gap={3} align="stretch" justify="flex-start" style={{ 
                textAlign: 'center',
                fontFamily: 'var(--mantine-font-family)'
              }}>
                <Text className={planStyles.planTitle} style={{ color: '#087a68' }}>Free Plan</Text>
                <Text className={planStyles.planCharge} style={{ fontWeight: 700 }}>$0/month</Text>
                <Text size="sm" c="dimmed" style={{ color: 'var(--mantine-color-dimmed)' }}>To help you get started.</Text>
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
                style={{ 
                  fontFamily: 'var(--mantine-font-family)',
                  fontSize: 'var(--mantine-font-size-sm)'
                }}
              >
                <List.Item style={{ lineHeight: 'var(--mantine-line-height-md)', fontSize: '0.9rem', textAlign: 'left' }}>
                  Access to GPT 4o-Mini
                </List.Item>
                <List.Item style={{ lineHeight: 'var(--mantine-line-height-md)', fontSize: '0.9rem', textAlign: 'left' }}>
                  5 downloads per month
                </List.Item>
                <List.Item style={{ lineHeight: 'var(--mantine-line-height-md)', fontSize: '0.9rem', textAlign: 'left' }}>
                  Access to basic templates
                </List.Item>
              </List>
              
              <Button
                component="a"
                href="/app/carousel-maker"
                variant="outline"
                size="md"
                leftSection={<Lightning size={18} color="#087a68" />}
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
                    color: '#087a68',
                    fontFamily: 'var(--mantine-font-family)'
                  },
                  section: {
                    color: '#087a68'
                  }
                }}
              >
                Get Started
              </Button>
            </Stack>
          </Card>
        </div>
      </Container>
    </div>
  );
} 