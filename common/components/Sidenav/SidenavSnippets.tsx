import { createStyles, useMantineTheme } from '@mantine/core';

interface SidenavSnippetsProps {
  setActiveLink: (link: string) => void;
  activeLink: string;
}

const useStyles = createStyles((theme) => ({
  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: '2.75rem',
    lineHeight: '2.75rem',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background,
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background,
      color: theme.white,
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

export function SidenavSnippets({
  setActiveLink,
  activeLink,
}: SidenavSnippetsProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const links = linksMockdata.map((link) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return <>{links}</>;
}
export default SidenavSnippets;
