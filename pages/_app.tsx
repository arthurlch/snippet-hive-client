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
          primaryColor: 'orange',
          colors: {
            secondary: [
              '#F05AF9',
              '#E95DF8',
              '#DF60F8',
              '#D764F7',
              '#CD67F6',
              '#C56AF6',
              '#BD6EF5',
              '#B471F4',
              '#AC74F4',
              '#A477F3',
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
