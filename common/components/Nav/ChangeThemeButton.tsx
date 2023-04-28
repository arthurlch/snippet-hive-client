import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';

export default function ChangeThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <MdOutlineLightMode size="1.1rem" />
      ) : (
        <MdOutlineNightlight size="1.1rem" />
      )}
    </ActionIcon>
  );
}
