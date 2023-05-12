import { createStyles, Container, Group, Anchor, rem } from '@mantine/core';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterProps {
  links: { link: string; label: string }[];
}

export function Footer({ links }: FooterProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
<<<<<<< HEAD
        <AiFillCodeSandboxCircle size={28} color="#be4bdb" />
=======
        <AiFillCodeSandboxCircle size={28} color='#e64980' />
>>>>>>> d761310e93166f2e50abb5ef78679e9e156d62e2
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
