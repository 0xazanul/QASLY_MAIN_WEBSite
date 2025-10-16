"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Hero() {
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
            Built for modern startups. Qasly streamlines security testing so you can ship with confidence.
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
    </Box>
  );
}

