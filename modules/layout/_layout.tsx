import { AppShell } from '@mantine/core';
import Nav from '@/common/components/Nav/Nav';
import { Footer } from '@/common/components/Footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    {
      link: '/',
      label: 'Home',
      links: [],
    },
    {
      link: '/snippets',
      label: 'Snippets',
      links: [],
    },
    {
      link: '/profile',
      label: 'Profile',
      links: [],
    },
  ];

  return (
    <AppShell>
      <Nav links={navLinks} />
      {children}
      <Footer links={[]} />
    </AppShell>
  );
}
