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
  
  const toggleDropdown = () => {
    setOpened(!opened);
  };
  
  if (href) {
    return (
      <Button
        component={Link}
        href={href}
        variant="subtle"
        className={classes.navLink}
        rightSection={<CaretDown size={16} />}
        compact
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
      width={220}
      position="bottom-start"
    >
      <Menu.Target>
        <Button
          ref={buttonRef}
          variant="subtle"
          className={classes.navLink}
          rightSection={<CaretDown size={16} />}
          compact
          onClick={toggleDropdown}
          aria-haspopup="menu"
          aria-expanded={opened}
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
            >
              <Text size="sm">{item.title}</Text>
            </Menu.Item>
          ))}
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavDropdown; 