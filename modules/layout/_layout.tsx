import { AppShell, useMantineTheme } from '@mantine/core';

import Nav from '@/common/components/Nav/Nav';
import { link } from 'fs';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    {
      link: '/',
      label: 'Home',
      links: [
        { link: '/about', label: 'About' },
        { link: '/contact', label: 'Contact' },
      ],
    },
    {
      link: '/blog',
      label: 'Blog',
      links: [
        { link: '/posts', label: 'Posts' },
        { link: '/categories', label: 'Categories' },
      ],
    },
  ];

  return (
    <AppShell>
      <Nav links={navLinks} />
      {children}
    </AppShell>
  );
}
