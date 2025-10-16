"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function AppAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(24px)',
            border: '1px solid',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 1px rgba(255, 255, 255, 0.1)',
            padding: '8px 12px',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <Image src="/qasly.png" alt="Qasly" width={32} height={32} />
            <span style={{ color: 'white', fontWeight: 600 }}>Qasly</span>
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button color="primary" variant="text" size="small" component="a" href="/#pricing">
              Pricing
            </Button>
            <Button color="primary" variant="contained" size="small" component="a" href="/#contact">
              Contact
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

