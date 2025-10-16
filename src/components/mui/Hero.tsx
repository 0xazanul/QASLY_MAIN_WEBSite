"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSmoothScroll } from '@/hooks/use-lenis';

export default function Hero() {
  const { scrollToSection } = useSmoothScroll();
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 255, 255, 0.1), transparent)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
              fontWeight: 600,
            }}
          >
            Make security simple,&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                fontWeight: 600,
              }}
            >
              fast, and affordable
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Built for modern startups. QaslyLabs streamlines security testing so you can ship with confidence.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="domain-input"
              hiddenLabel
              size="small"
              variant="outlined"
              placeholder="Enter your domain"
              inputProps={{
                autoComplete: 'off',
              }}
              sx={{ width: { xs: '100%', sm: '350px' } }}
            />
            <Button variant="contained" color="primary">
              Start Test
            </Button>
          </Stack>
        </Stack>
      </Container>
      
      {/* Dashboard Preview */}
      <Container sx={{ mt: 12, mb: 16 }}>
        <Box
          sx={{
            position: 'relative',
            maxWidth: '1100px',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              p: { xs: 2, md: 3 },
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#000',
                aspectRatio: '16/10',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <img
                src="/screenshot.png"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
                alt="QaslyLabs Security Dashboard"
              />
            </Box>
          </Box>
          
          {/* Subtle glow effect */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '110%',
              height: '110%',
              background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: -1,
              pointerEvents: 'none',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

