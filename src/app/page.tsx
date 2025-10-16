"use client";

import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppTheme from '@/shared-theme/AppTheme';
import AppAppBar from '@/components/mui/AppAppBar';
import Hero from '@/components/mui/Hero';
import Pricing from '@/components/mui/Pricing';
import Testimonials from '@/components/mui/Testimonials';
import { Footer } from '@/components/footer';
import { ContactSection } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq';

export default function Home() {
  return (
    <AppTheme>
      <AppAppBar />
      <Hero />
      <div>
        <Testimonials />
        <Divider />
        <Pricing />
        <Divider />
        <FAQSection />
        <Divider />
        <ContactSection />
        <Footer />
      </div>
    </AppTheme>
  );
}
