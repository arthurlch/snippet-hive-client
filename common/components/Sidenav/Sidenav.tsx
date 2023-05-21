import {
  createStyles,
  Navbar,
  rem,
  Autocomplete,
  useMantineTheme,
} from '@mantine/core';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import NavThemeButton from '../ToggleThemeButton/NavThemeButton';
import Link from 'next/link';
import { SidenavMainLinks } from './SidenavMainLinks';
import SidenavSnippets from './SidenavSnippets';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: `0 0 ${rem(200)}`,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: rem(18),
    height: rem(60),
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',

    height: rem(53),
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  logo_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },

  search_wrapper: {
    margin: '1rem',
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
}));

const linksMockdata = [
  'Flask Auth',
  'React Todo List',
  'SQL Query PrTbr',
  'Vue Layout',
  'Mantiner header nav',
  'Tailwind spaggethi',
  'Bootstrap Footer',
];

export default function DoubleNavbar() {
  const { classes, cx } = useStyles();
  const [activeLink, setActiveLink] = useState('Settings');
  const theme = useMantineTheme();
  const iconColor = theme.colorScheme === 'dark' ? '#FFFFFF' : '#1d1a1f';

  return (
    <Navbar height={750} width={{ sm: 440 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <Link className={classes.logo_wrapper} href="/">
              <AiFillHome size={22} color={iconColor} />
            </Link>
            <div className={classes.logo_wrapper}>
              <NavThemeButton />
            </div>
          </div>
          <SidenavMainLinks />
        </div>
        <div className={classes.main}>
          <div className={classes.search_wrapper}>
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              icon={<AiOutlineSearch size="1rem" />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Svelte']}
            />
          </div>
          <SidenavSnippets
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
