'use client';

import { useRef, useState } from 'react';
import { Button, Menu, Text, Stack } from '@mantine/core';
import Link from 'next/link';
import { CaretDown } from '@phosphor-icons/react';
import classes from './Navigation.module.css';

interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  href?: string;
}

const NavDropdown = ({ label, items, href }: NavDropdownProps) => {
  const [opened, setOpened] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Calculate appropriate width for the dropdown
  // Getting Started needs less width than other dropdowns
  const isGettingStarted = label.includes('Getting') || label.includes('Started');
  const dropdownWidth = isGettingStarted ? 150 : 220;
  
  if (href) {
    return (
      <Button
        component={Link}
        href={href}
        variant="subtle"
        className={classes.navLink}
        rightSection={<CaretDown size={16} />}
        compact
        fw={700}
      >
        {label}
      </Button>
    );
  }
  
  return (
    <Menu
      opened={opened}
      onChange={setOpened}
      shadow="md"
      width={dropdownWidth}
      position="bottom-start"
      trigger="hover"
      openDelay={100}
      closeDelay={50}
    >
      <Menu.Target>
        <Button
          ref={buttonRef}
          variant="subtle"
          className={classes.navLink}
          rightSection={<CaretDown size={16} />}
          compact
          aria-haspopup="menu"
          aria-expanded={opened}
          fw={700}
        >
          {label}
        </Button>
      </Menu.Target>
      
      <Menu.Dropdown>
        <Stack gap="md" role="list">
          {items.map((item, index) => (
            <Menu.Item
              key={index}
              component={item.external ? 'a' : Link}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              role="listitem"
              fw={700}
              c="black"
            >
              <Text size="sm" fw={700} c="black">{item.title}</Text>
            </Menu.Item>
          ))}
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavDropdown; 