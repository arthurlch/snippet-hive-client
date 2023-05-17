import { useState } from 'react';
import {
  createStyles,
  UnstyledButton,
  Tooltip,
  rem,
  Text,
} from '@mantine/core';

import { MdOutlineBorderAll } from 'react-icons/md';
const mainLinksMockdata = [{ icon: MdOutlineBorderAll, label: 'All' }];

const useStyles = createStyles((theme) => ({
  mainLink: {
    width: rem(164),
    height: rem(44),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: 'theme.primaryColor',
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },

  mainLinkLabel: {
    paddingLeft: '0.2rem',
  },
}));

export const MainLinks = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('All');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.label === active,
        })}
      >
        <link.icon size="1rem" stroke={(1.5).toString()} />
        <Text className={classes.mainLinkLabel} size="1rem">
          {link.label}
        </Text>
      </UnstyledButton>
    </Tooltip>
  ));

  return <>{mainLinks}</>;
};
