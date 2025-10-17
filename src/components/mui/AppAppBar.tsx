"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
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
        mt: { xs: 1, sm: 2 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
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
            padding: { xs: '6px 12px', sm: '8px 16px' },
            minHeight: { xs: '48px', sm: '56px' },
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <Image 
              src="/qasly.png" 
              alt="QaslyLabs" 
              width={28} 
              height={28} 
              style={{ width: 'auto', height: 'auto' }}
            />
            <Box 
              component="span" 
              sx={{ 
                color: 'white', 
                fontWeight: 600, 
                fontSize: { xs: '0.9rem', sm: '1rem' },
                display: { xs: 'inline', sm: 'inline' }
              }}
            >
              QaslyLabs
            </Box>
          </Link>
          <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 }, alignItems: 'center' }}>
            <Button 
              color="primary" 
              variant="text" 
              size="small"
              onClick={() => scrollToSection('pricing')}
              sx={{
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                px: { xs: 1, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                minWidth: { xs: 'auto', sm: '64px' },
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
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                px: { xs: 1, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                minWidth: { xs: 'auto', sm: '64px' },
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
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                minWidth: { xs: 'auto', sm: '100px' },
                '&:hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                Continue to app
              </Box>
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                App
              </Box>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

