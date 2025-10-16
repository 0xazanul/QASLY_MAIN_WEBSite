"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { useSmoothScroll } from '@/hooks/use-lenis';
import Link from 'next/link';

export default function AppAppBar() {
  const { scrollToSection } = useSmoothScroll();
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
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(24px)',
            border: '1px solid',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 1px rgba(255, 255, 255, 0.1)',
            padding: '8px 12px',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <Image src="/qasly.png" alt="QaslyLabs" width={32} height={32} />
            <span style={{ color: 'white', fontWeight: 600 }}>QaslyLabs</span>
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button 
              color="primary" 
              variant="text" 
              size="small" 
              onClick={() => scrollToSection('pricing')}
              sx={{
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Pricing
            </Button>
            <Button 
              color="primary" 
              variant="text" 
              size="small" 
              onClick={() => scrollToSection('contact')}
              sx={{
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Contact
            </Button>
            <Button 
              color="primary" 
              variant="contained" 
              size="small" 
              component="a" 
              href="/app"
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              Continue to app
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

