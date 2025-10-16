"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function FAQ() {
  return (
    <Box id="faq" sx={{ py: { xs: 8, sm: 16 } }}>
      <Container>
        <Typography component="h2" variant="h4" color="text.primary" sx={{ mb: 4 }}>
          FAQ
        </Typography>
      </Container>
    </Box>
  );
}

