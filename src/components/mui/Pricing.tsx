"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { PricingSection } from '@/components/sections/pricing';

export default function Pricing() {
  return (
    <Box id="pricing">
      <Container>
        <PricingSection />
      </Container>
    </Box>
  );
}

