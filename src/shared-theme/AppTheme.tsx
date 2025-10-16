"use client";

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f0f0f0',
    },
    background: {
      default: '#0a0a0a',
      paper: '#171717',
    },
  },
  typography: {
    fontFamily: 'var(--font-manrope), sans-serif',
  },
});

export default function AppTheme({
  children,
  disableCustomTheme,
}: {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
}) {
  if (disableCustomTheme) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}

