import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          primaryShade: 6,
          primaryColor: 'grape',
          colors: {
            secondary: [
              '#5EF2BD',
              '#75F7C9',
              '#8CFBD5',
              '#A2FFDF',
              '#B9FFE9',
              '#D0FFEF',
              '#E7FFF8',
              '#FDFFFF',
              '#FFFFFF',
            ],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
