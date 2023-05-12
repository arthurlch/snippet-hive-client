import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          primaryShade: 6,
          primaryColor: 'pink',
          colors: {
            secondary: [
              '#5EF2BD',
              '#6FF1C0',
              '#80F0C3',
              '#90EFC6',
              '#A1EEC9',
              '#B2EDCC',
              '#C3ECCF',
              '#D4EBD2',
              '#E5EAD5',
              '#F6E9D8',
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
