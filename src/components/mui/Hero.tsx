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
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 12, sm: 16, md: 20 },
          pb: { xs: 6, sm: 8, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack spacing={{ xs: 3, sm: 4 }} useFlexGap sx={{ width: '100%', maxWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 600,
              lineHeight: { xs: 1.2, sm: 1.1 },
              letterSpacing: { xs: '-0.01em', md: '-0.02em' },
            }}
          >
            Make security simple,&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 600,
              }}
            >
              fast, and affordable
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ 
              alignSelf: 'center', 
              width: '100%',
              maxWidth: { xs: '100%', sm: '90%', md: '80%' },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.125rem' },
              lineHeight: { xs: 1.5, sm: 1.6 },
              px: { xs: 1, sm: 2 }
            }}
          >
            Built for modern startups. QaslyLabs streamlines security testing so you can ship with confidence.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={{ xs: 2, sm: 1 }}
            useFlexGap
            sx={{ 
              pt: { xs: 2, sm: 3 }, 
              width: { xs: '100%', sm: 'auto' },
              px: { xs: 1, sm: 0 },
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <TextField
              id="domain-input"
              hiddenLabel
              size="medium"
              variant="outlined"
              placeholder="Enter your domain"
              inputProps={{
                autoComplete: 'off',
              }}
              sx={{ 
                width: { xs: '100%', sm: '300px', md: '350px' },
                '& .MuiOutlinedInput-root': {
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  height: { xs: '48px', sm: '56px' },
                }
              }}
            />
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              sx={{
                height: { xs: '48px', sm: '56px' },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                minWidth: { xs: '100%', sm: '120px' },
              }}
            >
              Start Test
            </Button>
          </Stack>
        </Stack>
      </Container>
      
      {/* Dashboard Preview */}
      <Container 
        maxWidth="lg"
        sx={{ 
          mt: { xs: 8, sm: 10, md: 12 }, 
          mb: { xs: 12, sm: 14, md: 16 },
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: { xs: '100%', sm: '90%', md: '1000px', lg: '1100px' },
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              borderRadius: { xs: '12px', sm: '16px' },
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              p: { xs: 1, sm: 2, md: 3 },
              boxShadow: {
                xs: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                sm: '0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              },
              backdropFilter: 'blur(20px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: { xs: 'translateY(-2px)', sm: 'translateY(-4px)' },
                boxShadow: {
                  xs: '0 15px 35px -5px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  sm: '0 32px 64px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                },
              },
            }}
          >
            <Box
              sx={{
                borderRadius: { xs: '8px', sm: '12px' },
                overflow: 'hidden',
                backgroundColor: '#000',
                aspectRatio: { xs: '16/11', sm: '16/10' },
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
              width: { xs: '105%', sm: '110%' },
              height: { xs: '105%', sm: '110%' },
              background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: -1,
              pointerEvents: 'none',
              display: { xs: 'none', sm: 'block' }
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

